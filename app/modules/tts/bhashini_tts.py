import base64
import httpx
import logging
from typing import Optional
from app.modules.tts.base import BaseTTSProvider, TTSResult

logger = logging.getLogger(__name__)

# Map shorthand language codes to Bhashini language tags
BHASHINI_TTS_LANGUAGE_MAP = {
    "sat": "sat",
    "sat-in": "sat",
    "hi": "hi",
    "hi-in": "hi",
    "en": "en",
    "en-in": "en",
}

async def _fallback_synthesis(text: str, target_language: str, voice_pack: Optional[str]) -> TTSResult:
    # 1. Primary Neural Voice Fallback: EdgeTTS (Natural Human Neural Voice)
    try:
        from app.modules.tts.edge_tts_provider import EdgeTTSProvider
        return await EdgeTTSProvider().synthesize(text, target_language=target_language, voice_pack=voice_pack)
    except Exception as edge_err:
        logger.warning(f"[TTS FALLBACK] EdgeTTS failed: {edge_err}. Trying gTTS...")

    # 2. Secondary Voice Fallback: gTTS
    try:
        from app.modules.tts.gtts_provider import GTTSProvider
        return await GTTSProvider().synthesize(text, target_language=target_language, voice_pack=voice_pack)
    except Exception as gtts_err:
        logger.warning(f"[TTS FALLBACK] gTTS failed: {gtts_err}. Trying Sarvam TTS...")

    # 3. Tertiary Fallback: Sarvam TTS
    try:
        from app.config import settings
        from app.modules.tts.sarvam_tts import SarvamTTSProvider
        sarvam_key = settings.TRANSLATION_API_KEY or settings.ASR_API_KEY
        if sarvam_key and sarvam_key.strip() not in ("", "mock", "mock_tts_key"):
            return await SarvamTTSProvider(api_key=sarvam_key).synthesize(text, target_language=target_language, voice_pack=voice_pack)
    except Exception as sarvam_err:
        logger.warning(f"[TTS FALLBACK] Sarvam TTS failed: {sarvam_err}")

    # 4. Final Fallback: Mock TTS
    from app.modules.tts.mock_tts import MockTTSProvider
    return await MockTTSProvider().synthesize(text, target_language=target_language)

class BhashiniTTSProvider(BaseTTSProvider):
    """
    Bhashini Dhruva Text-to-Speech (TTS) provider implementation.
    Documentation: https://bhashini.gov.in/
    """
    def __init__(
        self,
        api_key: Optional[str] = None,
        user_id: Optional[str] = None,
        service_id: str = "bhashini/v1/tts/sat",
        voice_id: str = "female",
        api_url: str = "https://dhruva-api.bhashini.gov.in/services/inference/tts",
        timeout_seconds: float = 10.0
    ):
        self.api_key = api_key
        self.user_id = user_id
        self.service_id = service_id or "bhashini/v1/tts/sat"
        self.voice_id = voice_id or "female"
        self.api_url = api_url
        self.timeout_seconds = timeout_seconds

    async def synthesize(
        self,
        text: str,
        target_language: str = "sat",
        voice_pack: Optional[str] = None,
        allow_fallback: bool = True,
        **kwargs
    ) -> TTSResult:
        if not text or not text.strip():
            raise ValueError("Text provided for speech synthesis is empty.")

        if not self.api_key or self.api_key.strip() in ("", "mock", "mock_tts_key"):
            logger.warning("[BHASHINI TTS WARNING] Bhashini API key is mock or missing. Falling back to Neural Spoken TTS...")
            if allow_fallback:
                return await _fallback_synthesis(text, target_language, voice_pack)
            from app.modules.tts.mock_tts import MockTTSProvider
            return await MockTTSProvider().synthesize(text, target_language=target_language)

        lang_code = BHASHINI_TTS_LANGUAGE_MAP.get(target_language.lower())
        if not lang_code:
            raise ValueError(f"Unsupported target language code for Bhashini TTS: '{target_language}'. Supported: ['sat', 'hi', 'en']")

        headers = {
            "ulcaApiKey": self.api_key,
            "Authorization": self.api_key,
            "Content-Type": "application/json"
        }
        if self.user_id and self.user_id.strip() not in ("mock_bhashini_user_id", ""):
            headers["userID"] = self.user_id

        payload = {
            "pipelineTasks": [
                {
                    "taskType": "tts",
                    "config": {
                        "language": {
                            "sourceLanguage": lang_code
                        },
                        "serviceId": self.service_id,
                        "gender": self.voice_id
                    }
                }
            ],
            "inputData": {
                "input": [
                    {
                        "source": text.strip()
                    }
                ]
            }
        }

        try:
            async with httpx.AsyncClient(timeout=self.timeout_seconds) as client:
                response = await client.post(self.api_url, json=payload, headers=headers)

                if response.status_code != 200:
                    err_msg = f"Bhashini TTS API error (Status {response.status_code}): {response.text}"
                    if not allow_fallback:
                        raise RuntimeError(err_msg)
                    logger.warning(f"[BHASHINI TTS ERROR] {err_msg}. Triggering automatic fallback to Neural Spoken TTS...")
                    print(f"[BHASHINI TTS ERROR] {err_msg}. Triggering automatic fallback to Neural Spoken TTS...", flush=True)
                    return await _fallback_synthesis(text, target_language, voice_pack)

                resp_json = response.json()
                
                try:
                    pipeline_resp = resp_json.get("pipelineResponse", [])
                    audio_list = pipeline_resp[0].get("audio", [])
                    audio_b64 = audio_list[0].get("audioContent")
                except (IndexError, AttributeError, KeyError):
                    audio_b64 = None

                if not audio_b64 or not isinstance(audio_b64, str):
                    err_msg = f"Malformed Bhashini TTS API response: missing 'audioContent' field. Payload: {resp_json}"
                    if not allow_fallback:
                        raise ValueError(err_msg)
                    logger.warning(f"[BHASHINI TTS WARNING] {err_msg}. Falling back to Neural Spoken TTS...")
                    return await _fallback_synthesis(text, target_language, voice_pack)

                try:
                    audio_bytes = base64.b64decode(audio_b64)
                except Exception as exc:
                    err_msg = f"Failed to decode base64 audio from Bhashini TTS: {exc}"
                    if not allow_fallback:
                        raise ValueError(err_msg)
                    logger.warning(f"[BHASHINI TTS WARNING] {err_msg}. Falling back to Neural Spoken TTS...")
                    return await _fallback_synthesis(text, target_language, voice_pack)

                return TTSResult(
                    audio_bytes=audio_bytes,
                    audio_format="wav",
                    provider="bhashini_tts"
                )

        except (ValueError, RuntimeError):
            raise
        except (httpx.TimeoutException, httpx.RequestError, Exception) as exc:
            if isinstance(exc, httpx.TimeoutException):
                err_msg = f"Bhashini TTS API request to '{self.api_url}' timed out after {self.timeout_seconds}s."
            else:
                err_msg = f"Bhashini TTS API connection failed: {str(exc)}"
            if not allow_fallback:
                raise RuntimeError(err_msg)
            logger.warning(f"[BHASHINI TTS EXCEPTION] {err_msg}. Triggering fallback to Neural Spoken TTS...")
            print(f"[BHASHINI TTS EXCEPTION] {err_msg}. Triggering fallback to Neural Spoken TTS...", flush=True)
            return await _fallback_synthesis(text, target_language, voice_pack)
