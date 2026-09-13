import io
import logging
from typing import Optional
import edge_tts
import soundfile as sf
from app.modules.tts.base import BaseTTSProvider, TTSResult
from app.modules.translation.ol_chiki_transliteration import transliterate_ol_chiki

logger = logging.getLogger(__name__)

# Map voice pack identifiers to Microsoft Edge Neural TTS voices
EDGE_VOICE_MAP = {
    "female_calm": "hi-IN-SwaraNeural",
    "female": "hi-IN-SwaraNeural",
    "male_expressive": "hi-IN-MadhurNeural",
    "male": "hi-IN-MadhurNeural",
    "teacher_hindi": "hi-IN-SwaraNeural",
    "teacher_male_hindi": "hi-IN-MadhurNeural",
    "bengali": "bn-IN-TanishaaNeural",
    "odia": "or-IN-SubhasiniNeural",
}

class EdgeTTSProvider(BaseTTSProvider):
    """
    Microsoft Edge Neural Text-to-Speech (TTS) provider.
    Provides natural human speech synthesis for Santali (Ol Chiki transliterated) and Hindi.
    """
    def __init__(self, voice: str = "hi-IN-SwaraNeural"):
        self.default_voice = voice

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
        
        # Transliterate Ol Chiki script to Devanagari phonetics for natural vocalization
        if target_language.lower() in ("sat", "sat-in", "santali"):
            latin_t, dev_t = transliterate_ol_chiki(tts_input)
            if dev_t and dev_t.strip():
                tts_input = dev_t.strip()
            elif latin_t and latin_t.strip():
                tts_input = latin_t.strip()

        # Select Edge Neural Voice based on voice pack or target language
        selected_voice = self.default_voice
        if voice_pack and voice_pack in EDGE_VOICE_MAP:
            selected_voice = EDGE_VOICE_MAP[voice_pack]

        try:
            communicate = edge_tts.Communicate(tts_input, selected_voice)
            mp3_bytes = b""
            async for chunk in communicate.stream():
                if chunk["type"] == "audio":
                    mp3_bytes += chunk["data"]

            if not mp3_bytes or len(mp3_bytes) == 0:
                raise ValueError("Edge-TTS returned empty audio bytes.")

            # Convert MP3 audio payload to standard PCM 16-bit WAV for platform compatibility
            data, samplerate = sf.read(io.BytesIO(mp3_bytes))
            wav_io = io.BytesIO()
            sf.write(wav_io, data, samplerate, format="WAV", subtype="PCM_16")
            wav_bytes = wav_io.getvalue()

            return TTSResult(
                audio_bytes=wav_bytes,
                audio_format="wav",
                provider="edge_tts"
            )
        except Exception as exc:
            logger.warning(f"[EDGE TTS ERROR] Synthesis failed: {exc}. Falling back to gTTS / Mock TTS...")
            raise RuntimeError(f"Edge-TTS synthesis error: {exc}")
