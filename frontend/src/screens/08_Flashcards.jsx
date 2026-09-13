import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Volume2,
  Copy,
  Check,
  RotateCw,
} from "lucide-react";
import { FLASHCARD_ITEMS, playDevanagariAudio } from "../data/bhashaData";

// Cropped high-resolution assets from reference image
import namasteGirlImg from "../assets/flashcard_namaste_girl.png";
import iconNamaste from "../assets/clean_namaste.png";
import iconJal from "../assets/clean_jal.png";
import iconVidyalaya from "../assets/clean_vidyalaya.png";
import iconPustak from "../assets/clean_pustak.png";
import iconMitra from "../assets/clean_mitra.png";

export default function Flashcards({ selectedLanguage = "santhali" }) {
  const [deck, setDeck] = useState(FLASHCARD_ITEMS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("दैनिक शब्द");
  const [selectedClass, setSelectedClass] = useState("कक्षा 1");
  const [savedToast, setSavedToast] = useState(false);

  const currentCard = deck[currentIndex] || deck[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const handleSpeak = (text) => {
    playDevanagariAudio(text);
  };

  const handleSaveCard = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2200);
  };

  const getTargetTranslation = (card) => {
    if (selectedLanguage === "santhali") return card.translations.santhali;
    if (selectedLanguage === "ho") return card.translations.ho;
    if (selectedLanguage === "mundari") return card.translations.mundari;
    return card.translations.santhali;
  };

  // 5 Deck Thumbnails matching reference mockup
  const THUMBNAILS = [
    { idx: 0, label: "नमस्ते", iconImg: iconNamaste },
    { idx: 1, label: "जल", iconImg: iconJal },
    { idx: 2, label: "विद्यालय", iconImg: iconVidyalaya },
    { idx: 3, label: "पुस्तक", iconImg: iconPustak },
    { idx: 4, label: "मित्र", iconImg: iconMitra },
  ];

  // Helper to render center image matching the active card
  const renderCardIllustration = (card, idx) => {
    if (card.hindiWord === "नमस्ते" || idx === 0) {
      return (
        <img
          src={namasteGirlImg}
          alt="नमस्ते"
          className="w-44 h-44 sm:w-52 sm:h-52 object-contain my-auto drop-shadow-sm select-none pointer-events-none"
        />
      );
    }
    if (card.hindiWord === "जल" || idx === 1) {
      return (
        <img
          src={iconJal}
          alt="जल"
          className="w-36 h-36 sm:w-44 sm:h-44 object-contain my-auto drop-shadow-sm select-none pointer-events-none"
        />
      );
    }
    if (card.hindiWord === "विद्यालय" || idx === 2) {
      return (
        <img
          src={iconVidyalaya}
          alt="विद्यालय"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain my-auto drop-shadow-sm select-none pointer-events-none"
        />
      );
    }
    if (card.hindiWord === "पुस्तक" || idx === 3) {
      return (
        <img
          src={iconPustak}
          alt="पुस्तक"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain my-auto drop-shadow-sm select-none pointer-events-none"
        />
      );
    }
    if (card.hindiWord === "मित्र" || idx === 4) {
      return (
        <img
          src={iconMitra}
          alt="मित्र"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain my-auto drop-shadow-sm select-none pointer-events-none"
        />
      );
    }
    return (
      <div className="w-36 h-36 rounded-full bg-white/70 dark:bg-[#163526] border border-stone-200 dark:border-[#264D3B] flex items-center justify-center text-7xl shadow-xs my-auto">
        {card.icon}
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 max-w-4xl mx-auto font-hindi select-none">
      {/* Toast feedback when saving card */}
      {savedToast && (
        <div className="fixed top-20 right-8 z-50 bg-[#1B4D36] text-white px-4 py-2.5 rounded-2xl shadow-card flex items-center gap-2 text-sm font-bold animate-in fade-in slide-in-from-top-3">
          <Check className="w-4 h-4 text-emerald-300" />
          <span>कार्ड संग्रह में सहेज लिया गया!</span>
        </div>
      )}

      {/* Filter Row matching Reference Mockup: विषय, कक्षा, क्रम बदलें */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          {/* विषय Dropdown */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 mb-1">
              विषय
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white dark:bg-[#14281E] border border-stone-200 dark:border-[#264D3B] rounded-2xl px-4 py-2 text-sm sm:text-base font-bold text-[#143D2B] dark:text-emerald-200 outline-none focus:border-[#1B4D36] shadow-2xs cursor-pointer min-w-[150px]"
            >
              <option>दैनिक शब्द</option>
              <option>प्रकृति</option>
              <option>विद्यालय</option>
              <option>संबंध</option>
            </select>
          </div>

          {/* कक्षा Dropdown */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400 mb-1">
              कक्षा
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-white dark:bg-[#14281E] border border-stone-200 dark:border-[#264D3B] rounded-2xl px-4 py-2 text-sm sm:text-base font-bold text-[#143D2B] dark:text-emerald-200 outline-none focus:border-[#1B4D36] shadow-2xs cursor-pointer min-w-[130px]"
            >
              <option>कक्षा 1</option>
              <option>कक्षा 2</option>
              <option>कक्षा 3</option>
            </select>
          </div>
        </div>

        {/* Dark Green Button on Right: क्रम बदलें matching Mockup */}
        <div className="pt-4 sm:pt-5">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1B4D36] hover:bg-[#143D2B] text-white text-xs sm:text-sm font-black shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>क्रम बदलें</span>
          </button>
        </div>
      </div>

      {/* Main Center Stage with Circular Left/Right Buttons and Large Flashcard */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 py-2">
        {/* Left Circular Dark Green Button matching Mockup */}
        <button
          onClick={handlePrev}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1B4D36] hover:bg-[#143D2B] text-white flex items-center justify-center shadow-2xs transition-all active:scale-90 shrink-0 cursor-pointer"
          title="पिछला कार्ड"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
        </button>

        {/* Large Rounded Main Flashcard matching Reference Mockup */}
        <div className="w-full max-w-sm sm:max-w-md h-[320px] sm:h-[370px] perspective-1000">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full h-full relative cursor-pointer duration-500 transform-style-preserve-3d transition-transform rounded-3xl sm:rounded-[32px] shadow-card ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            title="अर्थ देखने के लिए पलटें"
          >
            {/* FRONT SIDE: Warm Cream Background, Bold Hindi Word, Center Illustration */}
            <div className="absolute inset-0 backface-hidden bg-[#FAF2E2] dark:bg-[#152E21] rounded-3xl sm:rounded-[32px] p-6 flex flex-col items-center justify-between text-center overflow-hidden border border-[#EADFC9] dark:border-[#224734] transition-colors">
              {/* Top Big Word */}
              <div className="pt-2">
                <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#143D2B] dark:text-[#E8F3ED] tracking-tight leading-none font-hindi">
                  {currentCard.hindiWord}
                </h2>
              </div>

              {/* Center Illustration */}
              {renderCardIllustration(currentCard, currentIndex)}

              {/* Subtext */}
              <div className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400">
                उच्चारण: {currentCard.pronunciation} • अर्थ जानने के लिए टैप करें
              </div>
            </div>

            {/* BACK SIDE: Tribal Translation & Meaning */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#EAF5EE] dark:bg-[#11281D] rounded-3xl sm:rounded-[32px] p-6 flex flex-col items-center justify-between text-center border-2 border-[#1B4D36] dark:border-emerald-400 overflow-hidden">
              <span className="text-xs sm:text-sm font-bold text-[#143D2B] dark:text-emerald-200 bg-white/90 dark:bg-[#183827] px-4 py-1 rounded-full shadow-2xs">
                मातृभाषा अनुवाद ({selectedLanguage === "ho" ? "हो" : selectedLanguage === "mundari" ? "मुंडारी" : "संताली"})
              </span>

              <div className="space-y-2.5 my-auto">
                <div className="text-xs sm:text-sm font-bold text-stone-500 dark:text-stone-400">
                  हिंदी: {currentCard.hindiWord}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#143D2B] dark:text-emerald-300">
                  {getTargetTranslation(currentCard)}
                </h3>
                <p className="text-sm sm:text-base font-bold text-stone-700 dark:text-stone-200">
                  सरल भावार्थ: {currentCard.meaningHindi || "दैनिक उपयोग शब्द"}
                </p>
                <div className="p-3.5 bg-white/90 dark:bg-[#183827] rounded-2xl border border-[#CEE6D5] dark:border-[#224734] text-xs sm:text-sm text-stone-800 dark:text-stone-200 max-w-xs mx-auto mt-2 font-medium">
                  <strong>कक्षा उदाहरण:</strong> "{currentCard.exampleSentence}"
                </div>
              </div>

              <div className="text-xs font-bold text-[#143D2B] dark:text-emerald-400 flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5" />
                <span>वापस पलटने के लिए टैप करें</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Circular Dark Green Button matching Mockup */}
        <button
          onClick={handleNext}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1B4D36] hover:bg-[#143D2B] text-white flex items-center justify-center shadow-2xs transition-all active:scale-90 shrink-0 cursor-pointer"
          title="अगला कार्ड"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
        </button>
      </div>

      {/* Counter Indicator matching Mockup: 1 / 10 */}
      <div className="text-center font-hindi font-black">
        <span className="text-[#1B4D36] dark:text-emerald-400 text-sm sm:text-base">
          • {currentIndex + 1}
        </span>
        <span className="text-stone-400 dark:text-stone-500 text-sm sm:text-base">
          {" "}/ {deck.length}
        </span>
      </div>

      {/* Two Action Buttons matching Mockup: [कार्ड सहेजें] [सुनें] */}
      <div className="flex items-center justify-center gap-3.5 sm:gap-4">
        {/* Dark Green Button: कार्ड सहेजें */}
        <button
          onClick={handleSaveCard}
          className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-2xl bg-[#1B4D36] hover:bg-[#143D2B] text-white font-black text-sm sm:text-base shadow-2xs transition-all active:scale-95 cursor-pointer"
        >
          <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>कार्ड सहेजें</span>
        </button>

        {/* Soft Pastel Green Button: सुनें */}
        <button
          onClick={() => handleSpeak(currentCard.hindiWord)}
          className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-2xl bg-[#E2EBE5] dark:bg-[#1C3E2E] hover:bg-[#D4E2D8] dark:hover:bg-[#234E3A] text-[#143D2B] dark:text-emerald-200 font-black text-sm sm:text-base transition-all active:scale-95 cursor-pointer"
        >
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#143D2B] dark:text-emerald-300" />
          <span>सुनें</span>
        </button>
      </div>

      {/* Bottom Deck with 5 Thumbnail Cards matching Mockup */}
      <div className="pt-2">
        <div className="flex items-center justify-center gap-3 sm:gap-4 overflow-x-auto py-2 no-scrollbar">
          {THUMBNAILS.map((item) => {
            const isSelected = currentIndex === item.idx;
            return (
              <div key={item.idx} className="flex flex-col items-center">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setCurrentIndex(item.idx);
                  }}
                  className={`w-20 sm:w-24 h-24 sm:h-28 rounded-2xl border-2 flex flex-col items-center justify-between p-2.5 transition-all bg-white dark:bg-[#14281E] shrink-0 cursor-pointer ${
                    isSelected
                      ? "border-[#1B4D36] dark:border-emerald-400 bg-[#E8F2EC]/60 dark:bg-[#1C3E2E] shadow-sm scale-105 ring-1 ring-[#1B4D36]/20"
                      : "border-stone-200/90 dark:border-[#224734] hover:border-stone-400"
                  }`}
                >
                  <div className="w-full flex-1 flex items-center justify-center">
                    <img
                      src={item.iconImg}
                      alt={item.label}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain select-none pointer-events-none drop-shadow-2xs"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-black text-[#143D2B] dark:text-white leading-tight font-hindi">
                    {item.label}
                  </span>
                </button>

                {/* Subtle active indicator dot below card */}
                <div
                  className={`w-1.5 h-1.5 rounded-full mt-1.5 transition-all ${
                    isSelected
                      ? "bg-[#1B4D36] dark:bg-emerald-400 scale-125"
                      : "bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
