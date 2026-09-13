import React, { useState } from "react";
import {
  Sparkles,
  Volume2,
  Mic,
  Star,
  Award,
  BookOpen,
  Layers,
  CheckCircle,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Moon,
  Sun,
  Flame,
  Trophy,
  Play,
  ArrowRight,
  Check,
  Heart,
  Smile,
  Radio
} from "lucide-react";
import { FLASHCARD_ITEMS, playDevanagariAudio } from "../data/bhashaData";
import StudentLiveClassroom from "./05_StudentLiveClassroom";
import ErrorBoundary from "../components/ErrorBoundary";

const STORIES = [
  {
    id: 1,
    titleHindi: "चालाक खरगोश और शेर",
    titleTribal: "सियार आर कुल (संथाली)",
    coverEmoji: "🐰🦁",
    themeColor: "from-amber-400 to-orange-500",
    paragraphs: [
      {
        hindi: "एक घने जंगल में एक बड़ा और बलवान शेर रहता था। सभी जानवर उससे डरते थे।",
        tribal: "मित् गाजड़ बुरु रे मित् मारांग आर केतेच् कुल ए ताहें काना। जोतो जीव-जन्तु उनि खोन को बोतोरोक् कान ताहेंना।",
      },
      {
        hindi: "एक दिन छोटे और बुद्धिमान खरगोश की बारी आई। उसने एक चतुर योजना बनाई।",
        tribal: "मित् दिन मित् हुडिंग आर बुद्धिमान कुलहाई-आक् पालो हेच्एना। उनि मित् अडी नापाय युक्ति ए बेनाव केदा।",
      },
      {
        hindi: "खरगोश ने शेर को कुएं में उसकी अपनी परछाई दिखाकर कुएं में कुदा दिया।",
        tribal: "कुलहाई दो कुल के कुंई दाक् रे आज-आक् उमुल गे उदूक आते कुंई रेय दोनों ओचो केदेया।",
      },
      {
        hindi: "जंगल के सभी जानवरों ने खुश होकर नाच-गान किया।",
        tribal: "गाजड़ रेन जोतो जीव-जन्तु को रास्कोयना आर एनेच्-सेरेंग को एहोब केदा।",
      }
    ],
    moral: "शारीरिक बल से बुद्धि सदा श्रेष्ठ होती है। (बुद्धि गे मारंग दाड़े काना)"
  },
  {
    id: 2,
    titleHindi: "झरने का मीठा जल",
    titleTribal: "गड़ा दा: (हो भाषा)",
    coverEmoji: "🌊🌳",
    themeColor: "from-teal-400 to-emerald-600",
    paragraphs: [
      {
        hindi: "पहाड़ की चोटी से एक निर्मल झरना बहता था। उसका पानी अमृत जैसा मीठा था।",
        tribal: "बुरू चोट खोन मित् सफा झरना लिंगी कान ताहेंना। एना दाक् दो शिबील गेया।",
      },
      {
        hindi: "गांव के सभी बच्चे हर शाम झरने के पास खेलने आते थे।",
        tribal: "हातु रेन जोतो गिदरा को तारासिंग झरना आड़े रे एनांग को हेजुग-आ।",
      },
      {
        hindi: "प्रकृति हमें जीवन और खुशी देती है, हमें इसका आदर करना चाहिए।",
        tribal: "प्रकृति अबु के जीवोन आर रास्का ए एमाबो-आ, अबु उनि के मान एमाय लाकतिंग।",
      }
    ],
    moral: "प्रकृति की रक्षा ही हमारी रक्षा है।"
  }
];

const STUDENT_QUIZ_QUESTIONS = [
  {
    id: 1,
    questionHindi: "संथाली भाषा में 'नमस्ते' को क्या कहते हैं?",
    questionTribal: "संताली ते 'नमस्ते' दो चेत् को मेता-आ?",
    options: ["सगात / जोहार", "दाका", "गिदर", "दारे"],
    correctIndex: 0,
    explanation: "संथाली में आदरपूर्वक अभिवादन को 'सगात' या 'जोहार' कहा जाता है।"
  },
  {
    id: 2,
    questionHindi: "चित्र पहचानें: 💧 'जल' को संथाली में क्या कहते हैं?",
    questionTribal: "नोवा चिन्हा चेत् काना? 'जल' के संताली ते चेत् को मेता-आ?",
    options: ["उमुल", "दाक्", "सेंगेल", "हॉय"],
    correctIndex: 1,
    explanation: "'दाक्' का अर्थ जल अथवा पानी होता है।"
  },
  {
    id: 3,
    questionHindi: "विद्यालय 🏫 को संथाली में क्या कहते हैं?",
    questionTribal: "'स्कूल / विद्यालय' दो संताली ते चेत् काना?",
    options: ["ओड़ाक्", "इस्कुल / आतु ओड़ाक्", "गाजड़", "जोहार"],
    correctIndex: 1,
    explanation: "विद्यालय के लिए आतु इस्कुल शब्द का प्रयोग किया जाता है।"
  }
];

const BADGES = [
  { id: 1, title: "पहला कदम", icon: "🌟", desc: "पहला दिन पूरा किया", unlocked: true },
  { id: 2, title: "शब्द मित्र", icon: "📚", desc: "10 नए शब्द सीखे", unlocked: true },
  { id: 3, title: "कहानी प्रेमी", icon: "📖", desc: "1 पूरी कहानी पढ़ी", unlocked: true },
  { id: 4, title: "नियमित छात्र", icon: "🔥", desc: "3 दिन लगातार अभ्यास", unlocked: true },
  { id: 5, title: "संथाली ज्ञानी", icon: "🏹", desc: "क्विज़ में 100% अंक", unlocked: false },
  { id: 6, title: "सुरीला वक्ता", icon: "🗣️", desc: "5 शब्दों का सही उच्चारण", unlocked: false },
];

export default function StudentDashboard({
  student = {
    id: "ravi",
    name: "रवि मुर्मू",
    grade: "कक्षा 2",
    roll: "04",
    lang: "संथाली",
    avatar: "👦",
    stars: 18,
  },
  currentLanguage = "santhali",
  onLogout,
  isDarkMode = false,
  onToggleDarkMode,
}) {
  const [activeTab, setActiveTab] = useState("home"); // home, flashcards, stories, quiz, practice, badges
  const [stars, setStars] = useState(student.stars || 18);
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [showStoryBilingual, setShowStoryBilingual] = useState(true);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Voice practice state
  const [voiceRecording, setVoiceRecording] = useState(false);
  const [voiceFeedback, setVoiceFeedback] = useState(null);

  const currentCard = FLASHCARD_ITEMS[cardIndex] || FLASHCARD_ITEMS[0];

  const handleNextCard = () => {
    setIsCardFlipped(false);
    setCardIndex((prev) => (prev + 1) % FLASHCARD_ITEMS.length);
  };

  const handlePrevCard = () => {
    setIsCardFlipped(false);
    setCardIndex((prev) => (prev - 1 + FLASHCARD_ITEMS.length) % FLASHCARD_ITEMS.length);
  };

  const handleSpeak = (text) => {
    playDevanagariAudio(text);
  };

  const handleSelectQuizAnswer = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === STUDENT_QUIZ_QUESTIONS[quizIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
      setStars((prev) => prev + 2);
      playDevanagariAudio("शाबाश! सही उत्तर!");
    } else {
      playDevanagariAudio("फिर से प्रयास करें!");
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizIndex + 1 < STUDENT_QUIZ_QUESTIONS.length) {
      setQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
      setStars((prev) => prev + 5);
      playDevanagariAudio("बहुत बढ़िया! आपने क्विज़ पूरा कर लिया है।");
    }
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const handleVoicePractice = (word) => {
    setVoiceRecording(true);
    setVoiceFeedback(null);
    setTimeout(() => {
      setVoiceRecording(false);
      setVoiceFeedback({
        score: "98%",
        status: "success",
        msg: "वाह! बहुत शुद्ध और स्पष्ट उच्चारण!",
      });
      setStars((prev) => prev + 1);
      playDevanagariAudio("बहुत अच्छा!");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] dark:bg-[#0A1610] text-stone-800 dark:text-[#E8F3ED] font-hindi select-none flex flex-col transition-colors duration-300">
      
      {/* 1. Student Top Header (Child-friendly, with Stars, Streak & Logout) */}
      <header className="bg-white dark:bg-[#12241A] border-b border-stone-200/90 dark:border-[#224734] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs sticky top-0 z-30">
        {/* Left: Student Avatar & Details */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-[#1B3626] border-2 border-amber-400 dark:border-amber-600 flex items-center justify-center text-2xl shadow-xs">
            {student.avatar || "👦"}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-forest-900 dark:text-white leading-tight">
                {student.name}
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-forest-100 dark:bg-[#1B3E2A] text-forest-800 dark:text-emerald-300 text-xs font-bold">
                {student.grade}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-semibold">
              <span>मातृभाषा: <strong className="text-forest-700 dark:text-emerald-400">{student.lang}</strong></span>
              <span>•</span>
              <span>रोल संख्या: {student.roll}</span>
            </div>
          </div>
        </div>

        {/* Right: Gamification Badges, Dark Mode & Logout */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Stars Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-black shadow-2xs">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span>{stars} सितारे</span>
          </div>

          {/* Streak Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-300 text-xs sm:text-sm font-black shadow-2xs">
            <Flame className="w-4 h-4 fill-orange-400 text-orange-500" />
            <span>3 दिन</span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-stone-200 dark:border-[#224734] hover:bg-stone-100 dark:hover:bg-[#193526] text-stone-600 dark:text-emerald-300 transition-colors cursor-pointer"
            title={isDarkMode ? "लाइट मोड" : "डार्क मोड"}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Student Logout Button */}
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 font-bold text-xs sm:text-sm hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors cursor-pointer"
            title="विद्यार्थी पोर्टल से बाहर आएं"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">लॉगआउट</span>
          </button>
        </div>
      </header>

      {/* 2. Navigation Tabs (मेरा बस्ता, शब्द कार्ड, कहानियां, क्विज़, बोलकर सीखो, बैज) */}
      <nav className="bg-[#FAF4E8] dark:bg-[#0E1F17] border-b border-stone-200/80 dark:border-[#1E3B2C] px-3 sm:px-6 py-2.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max mx-auto">
          {[
            { id: "home", label: "🎒 मेरा बस्ता", icon: Sparkles },
            { id: "classroom", label: "📻 ᱞᱟᱭᱤᱵᱽ ᱪᱟᱱᱟᱪ / लाइव कक्षा", icon: Radio },
            { id: "flashcards", label: "🎴 शब्द कार्ड", icon: Layers },
            { id: "stories", label: "📖 सचित्र कहानियां", icon: BookOpen },
            { id: "quiz", label: "✏️ आज का क्विज़", icon: CheckCircle },
            { id: "practice", label: "🗣️ बोलकर सीखो", icon: Mic },
            { id: "badges", label: "🏆 मेरे सितारे व बैज", icon: Trophy },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  playDevanagariAudio(tab.label.split(" ")[1] || "");
                }}
                className={`px-3.5 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#1E4D36] text-white shadow-xs scale-102"
                    : "bg-white dark:bg-[#14281E] text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#1A3828] border border-stone-200/80 dark:border-[#224734]"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. Main Dynamic Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 space-y-6">
        
        {/* ================= TAB 0: Live Classroom ================= */}
        {activeTab === "classroom" && (
          <ErrorBoundary>
            <StudentLiveClassroom student={student} isDarkMode={isDarkMode} />
          </ErrorBoundary>
        )}

        {/* ================= TAB 1: मेरा बस्ता (Home) ================= */}
        {activeTab === "home" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Greeting Hero Card */}
            <div className="bg-linear-to-r from-emerald-800 to-forest-900 text-white rounded-3xl p-6 sm:p-8 shadow-card relative overflow-hidden">
              <div className="relative z-10 max-w-xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs sm:text-sm font-bold">
                  <span>🌞 आज का दिन: नया ज्ञान, नई शुरुआत</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black leading-tight">
                  जोहार, {student.name}! 👋
                </h2>
                <p className="text-sm sm:text-base text-emerald-100 font-medium">
                  अपनी मातृभाषा <strong>{student.lang}</strong> और <strong>हिंदी</strong> में कहानियां पढ़ें, शब्द कार्ड देखें और सितारे जीतें!
                </p>

                {/* Progress bar */}
                <div className="pt-2 space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-bold">
                    <span>आज का दैनिक लक्ष्य</span>
                    <span>3 / 5 गतिविधियां पूर्ण (60%)</span>
                  </div>
                  <div className="w-full h-3.5 bg-black/30 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>

              {/* Decorative Mascot */}
              <div className="absolute right-4 bottom-2 text-7xl sm:text-8xl opacity-30 sm:opacity-50 pointer-events-none select-none">
                🎒✨
              </div>
            </div>

            {/* Quick Activity Cards */}
            <div>
              <h3 className="text-base sm:text-lg font-black text-forest-900 dark:text-white mb-3">
                आज क्या पढ़ना चाहते हैं?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setActiveTab("flashcards")}
                  className="bg-white dark:bg-[#12241A] rounded-2xl p-5 border border-stone-200/90 dark:border-[#224734] shadow-xs hover:shadow-md transition-all text-left cursor-pointer group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                    🎴
                  </div>
                  <h4 className="font-black text-base text-forest-900 dark:text-white">
                    शब्द कार्ड (Flashcards)
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    नए शब्द और उच्चारण सीखें।
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-forest-700 dark:text-emerald-400 mt-3">
                    शुरू करें <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("stories")}
                  className="bg-white dark:bg-[#12241A] rounded-2xl p-5 border border-stone-200/90 dark:border-[#224734] shadow-xs hover:shadow-md transition-all text-left cursor-pointer group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                    📖
                  </div>
                  <h4 className="font-black text-base text-forest-900 dark:text-white">
                    सचित्र कहानियां (Stories)
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    संथाली और हिंदी में लोककथाएं।
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-forest-700 dark:text-emerald-400 mt-3">
                    कहानी पढ़ें <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("quiz")}
                  className="bg-white dark:bg-[#12241A] rounded-2xl p-5 border border-stone-200/90 dark:border-[#224734] shadow-xs hover:shadow-md transition-all text-left cursor-pointer group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/60 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                    ✏️
                  </div>
                  <h4 className="font-black text-base text-forest-900 dark:text-white">
                    चित्र क्विज़ (Picture Quiz)
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    प्रश्नों के उत्तर दें और +10 सितारे जीतें!
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-forest-700 dark:text-emerald-400 mt-3">
                    क्विज़ खेलें <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Tribal Proverb Card */}
            <div className="bg-[#FAF4E8] dark:bg-[#14281E] border border-[#EDE2CC] dark:border-[#224734] rounded-3xl p-5 flex items-start gap-4">
              <span className="text-3xl">🌿</span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-black text-forest-900 dark:text-emerald-300 uppercase tracking-wider">
                  आज की संथाली सीख (Daily Tribal Wisdom)
                </h4>
                <p className="text-base sm:text-lg font-black text-stone-900 dark:text-white">
                  "दारे दारे रोहोय मे, ओड़ाक् ओड़ाक् साजाव मे।"
                </p>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                  अर्थ: खूब पेड़ लगाओ और अपने घर तथा गांव को हरा-भरा और सुंदर बनाओ।
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: शब्द कार्ड (Cards) ================= */}
        {activeTab === "flashcards" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-forest-900 dark:text-white">
                  शब्द कार्ड ({cardIndex + 1} / {FLASHCARD_ITEMS.length})
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  कार्ड को पलटने के लिए टैप करें और उच्चारण सुनने के लिए स्पीकर दबाएं।
                </p>
              </div>
              <button
                onClick={() => handleSpeak(currentCard.hindiWord)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-[#1E4D36] hover:bg-[#163827] text-white text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-emerald-300" />
                <span>सुनें</span>
              </button>
            </div>

            {/* Flashcard Stage */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrevCard}
                className="w-12 h-12 rounded-full bg-white dark:bg-[#14281E] border border-stone-300 dark:border-[#264D3B] text-forest-900 dark:text-white flex items-center justify-center shadow-xs hover:bg-stone-50 dark:hover:bg-[#1B3A29] cursor-pointer"
                title="पिछला कार्ड"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Flippable Card */}
              <div
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className="w-full max-w-md h-72 sm:h-80 bg-white dark:bg-[#12241A] rounded-3xl sm:rounded-[36px] p-6 border-2 border-forest-600/40 dark:border-emerald-500/40 shadow-card flex flex-col items-center justify-between text-center cursor-pointer relative overflow-hidden transition-all hover:scale-[1.01]"
              >
                <div className="text-xs font-extrabold text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                  {isCardFlipped ? "मातृभाषा अनुवाद (संथाली)" : "हिंदी शब्द (टैप करके अर्थ देखें)"}
                </div>

                <div className="my-auto space-y-2">
                  <div className="text-6xl sm:text-7xl">
                    {currentCard.icon || "📖"}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-forest-900 dark:text-white">
                    {isCardFlipped
                      ? currentCard.translations?.santhali || currentCard.hindiWord
                      : currentCard.hindiWord}
                  </h3>
                  <p className="text-sm font-bold text-forest-700 dark:text-emerald-400">
                    उच्चारण: {currentCard.pronunciation}
                  </p>

                  {/* Audio Playback Button inside Card */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(isCardFlipped ? (currentCard.translations?.santhali || currentCard.hindiWord) : currentCard.hindiWord, "sat");
                    }}
                    className="mt-2 px-4 py-2 rounded-full bg-[#1E4D36] hover:bg-[#163827] text-white font-extrabold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer z-10 transition-transform active:scale-95"
                  >
                    <Volume2 className="w-4 h-4 text-amber-300" />
                    <span>🔊 ᱚᱰᱤᱭᱳ ᱟᱸᱡᱚᱢ | ऑडियो सुनें</span>
                  </button>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 dark:text-stone-400 mt-2">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{isCardFlipped ? "हिंदी देखने के लिए टैप करें" : "अर्थ देखने के लिए टैप करें"}</span>
                </div>
              </div>

              <button
                onClick={handleNextCard}
                className="w-12 h-12 rounded-full bg-white dark:bg-[#14281E] border border-stone-300 dark:border-[#264D3B] text-forest-900 dark:text-white flex items-center justify-center shadow-xs hover:bg-stone-50 dark:hover:bg-[#1B3A29] cursor-pointer"
                title="अगला कार्ड"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Deck */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar">
              {FLASHCARD_ITEMS.slice(0, 5).map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCardIndex(idx);
                    setIsCardFlipped(false);
                  }}
                  className={`px-4 py-2.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    cardIndex === idx
                      ? "bg-pastel-green dark:bg-[#1A3A2A] border-forest-600 dark:border-emerald-400 text-forest-900 dark:text-white shadow-xs"
                      : "bg-white dark:bg-[#12241A] border-stone-200 dark:border-[#224734] text-stone-700 dark:text-stone-300"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.hindiWord}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: सचित्र कहानियां (Stories) ================= */}
        {activeTab === "stories" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-forest-900 dark:text-white">
                  सचित्र बाल कहानियां 📖
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  संथाली और हिंदी में सचित्र लोककथाएं पढ़ें व सुनें।
                </p>
              </div>

              <button
                onClick={() => setShowStoryBilingual(!showStoryBilingual)}
                className="px-3.5 py-2 rounded-xl bg-pastel-green dark:bg-[#1A3A2A] border border-forest-600 dark:border-emerald-400 text-forest-900 dark:text-emerald-300 text-xs sm:text-sm font-extrabold cursor-pointer"
              >
                {showStoryBilingual ? "द्विभाषी दृश्य (चालू) ✓" : "केवल हिंदी दृश्य"}
              </button>
            </div>

            {/* Story Selection Pills */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {STORIES.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => setActiveStoryIndex(i)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    activeStoryIndex === i
                      ? "bg-[#1E4D36] text-white shadow-xs"
                      : "bg-white dark:bg-[#12241A] border border-stone-200 dark:border-[#224734] text-stone-700 dark:text-stone-300"
                  }`}
                >
                  <span>{st.coverEmoji}</span>
                  <span>{st.titleHindi}</span>
                </button>
              ))}
            </div>

            {/* Active Story Reader */}
            {STORIES[activeStoryIndex] && (
              <div className="bg-white dark:bg-[#12241A] rounded-3xl p-6 sm:p-8 border border-stone-200/90 dark:border-[#224734] shadow-card space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-[#224734]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-forest-900 dark:text-white">
                      {STORIES[activeStoryIndex].titleHindi}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-forest-700 dark:text-emerald-400 mt-0.5">
                      {STORIES[activeStoryIndex].titleTribal}
                    </p>
                  </div>
                  <button
                    onClick={() => handleSpeak(STORIES[activeStoryIndex].titleHindi)}
                    className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 hover:bg-amber-200 cursor-pointer shadow-xs"
                    title="कहानी का शीर्षक सुनें"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4">
                  {STORIES[activeStoryIndex].paragraphs.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-cream-50 dark:bg-[#162A1E] border border-stone-200/80 dark:border-[#244A36] space-y-2"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-base sm:text-lg font-bold text-stone-900 dark:text-white leading-relaxed">
                          {p.hindi}
                        </p>
                        <button
                          onClick={() => handleSpeak(p.hindi)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-forest-800 dark:hover:text-emerald-300 cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {showStoryBilingual && (
                        <div className="pt-2 border-t border-stone-200/60 dark:border-[#224734] text-xs sm:text-sm font-semibold text-forest-800 dark:text-emerald-300">
                          <strong>संथाली:</strong> {p.tribal}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Moral */}
                <div className="p-4 rounded-2xl bg-pastel-green dark:bg-[#1A3A2A] border border-forest-600/30 dark:border-emerald-500/30 text-xs sm:text-sm font-bold text-forest-900 dark:text-emerald-200">
                  💡 <strong>कहानी से सीख:</strong> {STORIES[activeStoryIndex].moral}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: आज का क्विज़ (Quiz) ================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-forest-900 dark:text-white">
                  चित्र क्विज़ ✏️
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                  सही उत्तर चुनें और हर सही जवाब पर सितारे कमाएं!
                </p>
              </div>
              <div className="text-xs sm:text-sm font-black text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800">
                अंक: {quizScore} / {STUDENT_QUIZ_QUESTIONS.length}
              </div>
            </div>

            {!quizFinished ? (
              <div className="bg-white dark:bg-[#12241A] rounded-3xl p-6 sm:p-8 border border-stone-200/90 dark:border-[#224734] shadow-card space-y-6">
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs font-bold text-stone-500 dark:text-stone-400">
                  <span>प्रश्न {quizIndex + 1} / {STUDENT_QUIZ_QUESTIONS.length}</span>
                  <span>+{2} सितारे</span>
                </div>

                {/* Question */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-black text-stone-900 dark:text-white">
                    {STUDENT_QUIZ_QUESTIONS[quizIndex].questionHindi}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-forest-700 dark:text-emerald-400">
                    {STUDENT_QUIZ_QUESTIONS[quizIndex].questionTribal}
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STUDENT_QUIZ_QUESTIONS[quizIndex].options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === STUDENT_QUIZ_QUESTIONS[quizIndex].correctIndex;

                    let btnClass = "bg-stone-50 dark:bg-[#172E22] border-stone-200 dark:border-[#264D3B] text-stone-800 dark:text-stone-200 hover:border-forest-600";
                    if (selectedAnswer !== null) {
                      if (isCorrect) {
                        btnClass = "bg-emerald-100 dark:bg-emerald-950/70 border-emerald-600 text-emerald-900 dark:text-emerald-200 font-black";
                      } else if (isSelected) {
                        btnClass = "bg-rose-100 dark:bg-rose-950/70 border-rose-600 text-rose-900 dark:text-rose-200";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={selectedAnswer !== null}
                        onClick={() => handleSelectQuizAnswer(idx)}
                        className={`p-4 rounded-2xl border-2 font-extrabold text-sm sm:text-base text-left transition-all cursor-pointer flex items-center justify-between ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {selectedAnswer !== null && isCorrect && <Check className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation and Next Button */}
                {selectedAnswer !== null && (
                  <div className="space-y-4 animate-in fade-in">
                    <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm text-amber-900 dark:text-amber-200 font-bold">
                      💡 {STUDENT_QUIZ_QUESTIONS[quizIndex].explanation}
                    </div>

                    <button
                      onClick={handleNextQuizQuestion}
                      className="w-full py-3.5 rounded-2xl bg-[#1E4D36] hover:bg-[#163827] text-white font-extrabold text-base shadow-xs cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{quizIndex + 1 === STUDENT_QUIZ_QUESTIONS.length ? "परिणाम देखें" : "अगला प्रश्न"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Completion Screen */
              <div className="bg-white dark:bg-[#12241A] rounded-3xl p-8 border border-stone-200/90 dark:border-[#224734] shadow-card text-center space-y-4">
                <div className="text-6xl">🎉🌟</div>
                <h3 className="text-2xl sm:text-3xl font-black text-forest-900 dark:text-white">
                  शाबाश, {student.name}!
                </h3>
                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300">
                  आपने {STUDENT_QUIZ_QUESTIONS.length} में से <strong>{quizScore}</strong> सही उत्तर दिए!
                </p>
                <div className="inline-block bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 font-black text-sm px-4 py-2 rounded-full border border-amber-300 dark:border-amber-700">
                  ⭐ +5 बोनस सितारे प्राप्त हुए!
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 rounded-2xl bg-[#1E4D36] hover:bg-[#163827] text-white font-bold text-sm cursor-pointer"
                  >
                    दोबारा खेलें
                  </button>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="px-6 py-3 rounded-2xl border border-stone-300 dark:border-[#29543E] font-bold text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-100 cursor-pointer"
                  >
                    बस्ता पर लौटें
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 5: बोलकर सीखो (Voice Practice) ================= */}
        {activeTab === "practice" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 dark:text-white">
                बोलकर सीखो (Voice Practice) 🗣️
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                शब्द का सही उच्चारण सुनें, फिर माइक दबाकर बोलें। AI आपकी मदद करेगा!
              </p>
            </div>

            <div className="bg-white dark:bg-[#12241A] rounded-3xl p-6 sm:p-8 border border-stone-200/90 dark:border-[#224734] shadow-card text-center space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-forest-700 dark:text-emerald-400 uppercase tracking-wider">
                  अभ्यास शब्द
                </span>
                <h3 className="text-4xl sm:text-5xl font-black text-forest-900 dark:text-white">
                  नमस्ते (जोहार)
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  उच्चारण: Na-mas-te / Jo-har
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => playDevanagariAudio("नमस्ते, जोहार")}
                  className="px-5 py-3 rounded-2xl bg-amber-100 dark:bg-amber-950/60 hover:bg-amber-200 text-amber-900 dark:text-amber-300 font-extrabold text-sm flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-5 h-5" />
                  <span>सही उच्चारण सुनें</span>
                </button>

                <button
                  disabled={voiceRecording}
                  onClick={() => handleVoicePractice("नमस्ते")}
                  className={`px-6 py-3.5 rounded-2xl font-extrabold text-base flex items-center gap-2 shadow-md cursor-pointer transition-all ${
                    voiceRecording
                      ? "bg-rose-600 text-white animate-pulse"
                      : "bg-[#1E4D36] hover:bg-[#163827] text-white"
                  }`}
                >
                  <Mic className="w-5 h-5" />
                  <span>{voiceRecording ? "सुन रहा हूँ... बोलिए!" : "माइक दबाकर बोलें"}</span>
                </button>
              </div>

              {/* Feedback */}
              {voiceFeedback && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 max-w-md mx-auto space-y-1 animate-in zoom-in-95">
                  <div className="font-black text-base flex items-center justify-center gap-2">
                    <span>🌟 शुद्धता: {voiceFeedback.score}</span>
                    <span>• {voiceFeedback.msg}</span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    आपको +1 सितारा मिला!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 6: मेरे बैज (Badges) ================= */}
        {activeTab === "badges" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-forest-900 dark:text-white">
                मेरे सितारे और पदक 🏆
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                हर नई सीख के साथ नए पदक अनलॉक करें!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {BADGES.map((b) => (
                <div
                  key={b.id}
                  className={`p-5 rounded-3xl border-2 text-center space-y-2 transition-all ${
                    b.unlocked
                      ? "bg-white dark:bg-[#12241A] border-amber-400/80 dark:border-amber-600 shadow-xs"
                      : "bg-stone-50 dark:bg-[#101F16] border-stone-200 dark:border-[#1E3B2C] opacity-60"
                  }`}
                >
                  <div className="text-4xl mb-1">{b.icon}</div>
                  <h4 className="font-black text-base text-stone-900 dark:text-white">
                    {b.title}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {b.desc}
                  </p>
                  <span
                    className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      b.unlocked
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
                        : "bg-stone-200 text-stone-600 dark:bg-stone-800 dark:text-stone-400"
                    }`}
                  >
                    {b.unlocked ? "प्राप्त हुआ ✓" : "अनलॉक करें"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-stone-500 dark:text-stone-500 border-t border-stone-200/80 dark:border-[#1E3B2C] mt-8">
        BhashaSetu AI • बाल शिक्षा व मातृभाषा सशक्तिकरण पोर्टल
      </footer>
    </div>
  );
}
