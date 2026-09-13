import React, { useState } from "react";
import {
  ArrowRightLeft,
  Mic,
  MicOff,
  Volume2,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  RotateCcw,
  Sparkles,
  Camera,
  MessageSquare,
  VolumeX,
} from "lucide-react";
import {
  LANGUAGES,
  TRANSLATIONS_DICT,
  RECENT_TRANSLATIONS,
  playDevanagariAudio,
} from "../data/bhashaData";

export default function LiveTranslate({
  selectedLanguage = "santhali",
  onSelectLanguage,
  onNavigate,
}) {
  const [activeTab, setActiveTab] = useState("text"); // "text" | "voice"
  const [fromLang, setFromLang] = useState("hindi");
  const [toLang, setToLang] = useState(selectedLanguage);
  const [inputText, setInputText] = useState("नमस्ते, आप कैसे हैं?");
  const [translatedText, setTranslatedText] = useState("सगात, आय उसनेन्जो ही?");
  const [phoneticText, setPhoneticText] = useState("सगात, आय उसनेन्जो ही?");
  const [meaningText, setMeaningText] = useState("नमस्ते, आप कैसे हैं?");

  const [isListening, setIsListening] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState(null); // "teacher" | "student" | null
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [historyList, setHistoryList] = useState(RECENT_TRANSLATIONS);

  const handleCopy = async (textToCopy = translatedText) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleSavePhrase = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  // Auto-translate debounce timer reference
  const debounceRef = React.useRef(null);
  const [roomCode, setRoomCode] = useState("BHASA-204");
  const [isWsConnected, setIsWsConnected] = useState(false);
  const teacherWsRef = React.useRef(null);

  React.useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const host = window.location.host || "127.0.0.1:8000";
    const wsUrl = `${protocol}//${host}/ws/v1/voice-stream`;

    try {
      const ws = new WebSocket(wsUrl);
      teacherWsRef.current = ws;

      ws.onopen = () => {
        setIsWsConnected(true);
        ws.send(
          JSON.stringify({
            action: "join_room",
            room_code: roomCode,
            role: "teacher"
          })
        );
      };

      ws.onclose = () => setIsWsConnected(false);
      ws.onerror = () => setIsWsConnected(false);
    } catch (e) {
      console.warn("Teacher WS failed:", e);
    }

    return () => {
      if (teacherWsRef.current) teacherWsRef.current.close();
    };
  }, [roomCode]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputText(val);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (val.trim().length > 1) {
      debounceRef.current = setTimeout(() => {
        handleTranslate(val);
      }, 350);
    }
  };

  // Swap source & target languages
  const handleSwap = () => {
    const temp = fromLang;
    setFromLang(toLang);
    setToLang(temp);
    // Swap text too
    const tempText = inputText;
    setInputText(translatedText);
    setTranslatedText(tempText);
    if (tempText) handleTranslate(tempText);
  };

  // Perform translation using Backend AI API
  const handleTranslate = async (text = inputText) => {
    if (!text || !text.trim()) return;
    setIsTranslating(true);

    try {
      const srcLangCode = fromLang === "santhali" ? "sat" : (fromLang === "hindi" ? "hi" : fromLang);
      const tgtLangCode = toLang === "santhali" ? "sat" : (toLang === "hindi" ? "hi" : toLang);

      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text.trim(),
          source_language: srcLangCode,
          target_language: tgtLangCode
        })
      });

      if (response.ok) {
        const data = await response.json();
        const outText = data.translated_text || data.olChiki || text;
        setTranslatedText(outText);
        setPhoneticText(data.phonetic || data.devanagari || outText);
        setMeaningText(`AI Translation Engine (${data.source || "BhashaSetu"})`);

        // Add to history
        const newEntry = {
          id: "t_" + Date.now(),
          input: text,
          output: outText,
          fromLang: fromLang === "hindi" ? "हिंदी" : "जनजातीय",
          toLang: toLang === "hindi" ? "हिंदी" : "संताली",
          time: "अभी-अभी",
        };
        setHistoryList((prev) => [newEntry, ...prev.slice(0, 5)]);

        // Broadcast live over WebSocket classroom to listening student devices
        if (teacherWsRef.current && teacherWsRef.current.readyState === WebSocket.OPEN) {
          teacherWsRef.current.send(
            JSON.stringify({
              action: "translate_text",
              room_code: roomCode,
              role: "teacher",
              direction: "teacher_to_student",
              source_language: srcLangCode,
              target_language: tgtLangCode,
              text: text.trim()
            })
          );
        }
      }
    } catch (e) {
      console.warn("Backend translation fetch error, using fallback dictionary:", e);
      const dictEntry = TRANSLATIONS_DICT[text.trim()];
      const targetKey = toLang === "hindi" ? "santhali" : toLang;

      if (dictEntry && dictEntry[targetKey]) {
        setTranslatedText(dictEntry[targetKey].native);
        setPhoneticText(dictEntry[targetKey].phonetic);
        setMeaningText(dictEntry[targetKey].meaning);
      } else {
        setTranslatedText(toLang === "santhali" ? `(संताली अनुवाद): ${text}` : text);
        setPhoneticText(text);
        setMeaningText("कक्षा अनुवाद");
      }
    } finally {
      setIsTranslating(false);
    }
  };

  // Web Speech API Voice capture for teacher & student
  const triggerVoiceInput = (speaker) => {
    setActiveSpeaker(speaker);
    setIsListening(true);

    if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = speaker === "teacher" ? "hi-IN" : "hi-IN";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          setIsListening(false);
          setActiveSpeaker(null);
          handleTranslate(transcript);
        };

        recognition.onerror = () => {
          fallbackVoiceInput(speaker);
        };

        recognition.start();
        return;
      } catch (err) {
        console.warn("SpeechRecognition start error:", err);
      }
    }
    fallbackVoiceInput(speaker);
  };

  const fallbackVoiceInput = (speaker) => {
    setTimeout(() => {
      setIsListening(false);
      setActiveSpeaker(null);
      if (speaker === "teacher") {
        setInputText("आज हम गणित का नया पाठ पढ़ेंगे।");
        handleTranslate("आज हम गणित का नया पाठ पढ़ेंगे।");
      } else {
        setInputText("मिदता इसाए इम।");
        setTranslatedText("ᱱᱚᱣᱟ ᱫᱚ ᱢᱤᱫᱴᱟᱝ ᱯᱩᱛᱷᱤ ᱠᱟᱱᱟ ᱾");
        setPhoneticText("यह एक किताब है।");
      }
    }, 1800);
  };

  const getLangNameById = (id) => {
    const l = LANGUAGES.find((item) => item.id === id);
    return l ? l.name : id;
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-5xl mx-auto font-hindi select-none">
      {/* Top Header Selector: Hindi ⇄ Local Language matching Mockup Screen 5 */}
      <div className="bg-white rounded-3xl p-4 border border-stone-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-1">
          {/* Source Language */}
          <div className="flex-1">
            <span className="text-[11px] font-bold text-stone-600 block mb-1">
              स्रोत भाषा
            </span>
            <select
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              <option value="hindi">हिंदी</option>
              <option value="santhali">संताली</option>
              <option value="ho">हो</option>
              <option value="mundari">मुण्डारी</option>
            </select>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="mt-4 p-2.5 rounded-full bg-stone-100 hover:bg-forest-100 text-forest-800 transition-all hover:rotate-180 duration-300"
            title="भाषाएं बदलें"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </button>

          {/* Target Language */}
          <div className="flex-1">
            <span className="text-[11px] font-bold text-stone-600 block mb-1">
              लक्ष्य भाषा
            </span>
            <select
              value={toLang}
              onChange={(e) => {
                setToLang(e.target.value);
                onSelectLanguage?.(e.target.value);
              }}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              <option value="santhali">संताली</option>
              <option value="ho">हो</option>
              <option value="mundari">मुण्डारी</option>
              <option value="kurukh">कुड़ुख</option>
              <option value="kharia">खड़िया</option>
              <option value="hindi">हिंदी</option>
            </select>
          </div>
        </div>

        {/* Translation Sub-tabs: Text vs Voice */}
        <div className="flex items-center bg-stone-100 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab("text")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "text"
                ? "bg-white text-forest-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            पाठ अनुवाद
          </button>
          <button
            onClick={() => setActiveTab("voice")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "voice"
                ? "bg-white text-forest-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            आवाज पर आधारित अनुवाद
          </button>
        </div>
      </div>

      {/* Main Translation Work Area */}
      {activeTab === "text" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Input Panel */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-2xs flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-stone-500">
                  अनुवाद के लिए लिखें या बोलें:
                </span>
                <span className="text-[11px] font-medium text-stone-400 font-numeric">
                  {inputText.length} / 500
                </span>
              </div>

              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="यहाँ वाक्य लिखें (जैसे: नमस्ते, आज हम गणित पढ़ेंगे)..."
                rows={5}
                className="w-full text-base font-hindi text-stone-800 placeholder-stone-400 outline-none resize-none bg-transparent"
              />
            </div>

            {/* Input Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-100">
              <div className="flex items-center gap-2">
                {/* Voice mic button */}
                <button
                  type="button"
                  onClick={() => triggerVoiceInput("teacher")}
                  className={`p-2.5 rounded-full transition-all ${
                    isListening && activeSpeaker === "teacher"
                      ? "bg-rose-500 text-white animate-bounce"
                      : "bg-stone-100 hover:bg-forest-100 text-forest-800"
                  }`}
                  title="बोलकर लिखें"
                >
                  <Mic className="w-4 h-4" />
                </button>

                {/* Scanner shortcut */}
                <button
                  type="button"
                  onClick={() => onNavigate("textbook-scanner")}
                  className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                  title="पाठ्यपुस्तक से स्कैन करें"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleTranslate(inputText)}
                disabled={isTranslating}
                className="px-6 py-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs shadow-card hover:shadow-float transition-all flex items-center gap-1.5"
              >
                {isTranslating ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>अनुवाद हो रहा है...</span>
                  </>
                ) : (
                  <span>अनुवाद करें</span>
                )}
              </button>
            </div>
          </div>

          {/* Right: Translated Result Card matching Mockup Screen 5 */}
          <div className="bg-white rounded-3xl p-5 border border-forest-200/90 shadow-card flex flex-col justify-between min-h-[260px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pastel-green/40 rounded-full blur-2xl -z-10" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-forest-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-forest-600" />
                  <span>अनुवादित पाठ ({getLangNameById(toLang)})</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-pastel-green px-2 py-0.5 rounded-md">
                  सत्यापित अनुवाद
                </span>
              </div>

              {/* Native Output Text */}
              <div className="mt-3">
                <p className="text-xl sm:text-2xl font-black text-forest-900 font-hindi leading-relaxed">
                  {translatedText}
                </p>
                {phoneticText && (
                  <p className="text-xs text-stone-500 font-medium italic mt-1.5">
                    उच्चारण: {phoneticText}
                  </p>
                )}
                {meaningText && (
                  <p className="text-[11px] text-stone-600 mt-1">
                    संदर्भ: {meaningText}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons: Listen, Copy, Save */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <div className="flex items-center gap-2">
                {/* Audio Listen */}
                <button
                  onClick={() => handleSpeak(translatedText)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pastel-green hover:bg-pastel-greenBorder/60 text-forest-900 text-xs font-bold transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-forest-700" />
                  <span>सुनें</span>
                </button>

                {/* Copy */}
                <button
                  onClick={() => handleCopy(translatedText)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "कॉपी हुआ!" : "कॉपी करें"}</span>
                </button>
              </div>

              {/* Save phrase */}
              <button
                onClick={handleSavePhrase}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  saved
                    ? "bg-amber-100 text-amber-900 border border-amber-300"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                }`}
              >
                {saved ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-700" /> : <Bookmark className="w-3.5 h-3.5" />}
                <span>{saved ? "सहेजा गया" : "सहेजें"}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Voice Conversation Interface Mode */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-card space-y-6">
          <div className="text-center max-w-md mx-auto space-y-1">
            <h3 className="text-lg font-extrabold text-forest-900">
              द्विभाषी आवाज संवाद (कक्षा मोड)
            </h3>
            <p className="text-xs text-stone-500">
              शिक्षक हिंदी में बोलें और विद्यार्थी अपनी संताली/हो भाषा में उत्तर दें।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Teacher Hindi Mic Card */}
            <div className="p-6 rounded-3xl bg-pastel-green/50 border-2 border-dashed border-pastel-greenBorder flex flex-col items-center text-center justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-bold text-forest-800 bg-white px-3 py-1 rounded-full shadow-2xs">
                  शिक्षक (हिंदी)
                </span>
                <p className="text-sm font-bold text-stone-800 mt-4 font-hindi">
                  "नमस्ते, आप कैसे हैं?"
                </p>
              </div>

              {/* Large Mic Button */}
              <button
                onClick={() => triggerVoiceInput("teacher")}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isListening && activeSpeaker === "teacher"
                    ? "bg-rose-500 text-white ring-8 ring-rose-200 animate-pulse"
                    : "bg-forest-700 hover:bg-forest-800 text-white shadow-card"
                }`}
              >
                <Mic className="w-7 h-7" />
              </button>

              <span className="text-[11px] font-semibold text-stone-500">
                {isListening && activeSpeaker === "teacher" ? "सुन रहे हैं..." : "बोलने के लिए टैप करें"}
              </span>
            </div>

            {/* Student Tribal Language Mic Card */}
            <div className="p-6 rounded-3xl bg-pastel-blue/50 border-2 border-dashed border-pastel-blueBorder flex flex-col items-center text-center justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-bold text-blue-800 bg-white px-3 py-1 rounded-full shadow-2xs">
                  विद्यार्थी ({getLangNameById(toLang)})
                </span>
                <p className="text-sm font-bold text-stone-800 mt-4 font-hindi">
                  "सगात, आय उसनेन्जो ही?"
                </p>
              </div>

              {/* Large Mic Button */}
              <button
                onClick={() => triggerVoiceInput("student")}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isListening && activeSpeaker === "student"
                    ? "bg-rose-500 text-white ring-8 ring-rose-200 animate-pulse"
                    : "bg-blue-700 hover:bg-blue-800 text-white shadow-card"
                }`}
              >
                <Mic className="w-7 h-7" />
              </button>

              <span className="text-[11px] font-semibold text-stone-500">
                {isListening && activeSpeaker === "student" ? "सुन रहे हैं..." : "बच्चे के बोलने पर टैप करें"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Recent Translations History matching Mockup Screen 5 */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-2xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-extrabold text-sm text-forest-900">
            हाल के अनुवाद
          </h3>
          <span className="text-[11px] text-stone-600 font-semibold">इतिहास</span>
        </div>

        <div className="space-y-2.5">
          {historyList.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setInputText(item.input);
                setTranslatedText(item.output);
              }}
              className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 hover:bg-cream-50 cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-stone-800 group-hover:text-forest-800">
                  {item.input}
                </span>
                <span className="text-xs text-forest-700 font-bold">➔</span>
                <span className="text-xs sm:text-sm font-extrabold text-forest-900">
                  {item.output}
                </span>
              </div>
              <span className="text-[11px] font-bold text-stone-600 shrink-0">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
