import io
import logging
from typing import Optional
import gtts
import soundfile as sf
from app.modules.tts.base import BaseTTSProvider, TTSResult
from app.modules.translation.ol_chiki_transliteration import transliterate_ol_chiki

logger = logging.getLogger(__name__)

class GTTSProvider(BaseTTSProvider):
    """
    Google Text-to-Speech (gTTS) provider.
    Provides natural vocalized speech synthesis for Santali (transliterated) and Hindi.
    """
    def __init__(self, default_lang: str = "hi"):
        self.default_lang = default_lang

    async def synthesize(
        self,
        text: str,
        target_language: str = "sat",
        voice_pack: Optional[str] = None,
        **kwargs
    ) -> TTSResult:
        if not text or not text.strip():
            raise ValueError("Text provided for speech synthesis is empty.")

        tts_input = text.strip()
        lang = self.default_lang

        if target_language.lower() in ("sat", "sat-in", "santali"):
            latin_t, dev_t = transliterate_ol_chiki(tts_input)
            if dev_t and dev_t.strip():
                tts_input = dev_t.strip()
                lang = "hi"
            elif latin_t and latin_t.strip():
                tts_input = latin_t.strip()
                lang = "en"
        elif target_language.lower() in ("hi", "hi-in", "hindi"):
            lang = "hi"

        try:
            tts_obj = gtts.gTTS(text=tts_input, lang=lang)
            mp3_io = io.BytesIO()
            tts_obj.write_to_fp(mp3_io)
            mp3_bytes = mp3_io.getvalue()

            if not mp3_bytes or len(mp3_bytes) == 0:
                raise ValueError("gTTS returned empty audio bytes.")

            # Convert MP3 audio payload to standard PCM 16-bit WAV for platform compatibility
            data, samplerate = sf.read(io.BytesIO(mp3_bytes))
            wav_io = io.BytesIO()
            sf.write(wav_io, data, samplerate, format="WAV", subtype="PCM_16")
            wav_bytes = wav_io.getvalue()

            return TTSResult(
                audio_bytes=wav_bytes,
                audio_format="wav",
                provider="gtts"
            )
        except Exception as exc:
            logger.warning(f"[GTTS ERROR] Synthesis failed: {exc}")
            raise RuntimeError(f"gTTS synthesis error: {exc}")
