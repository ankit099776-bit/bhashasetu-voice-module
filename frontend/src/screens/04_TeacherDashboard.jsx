import React from "react";
import {
  Languages,
  ScanLine,
  FileSpreadsheet,
  Layers,
  Users,
  AlertTriangle,
  RotateCcw,
  TrendingUp,
  Clock,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { TEACHER_PROFILE } from "../data/bhashaData";

export default function TeacherDashboard({
  onNavigate,
  selectedLanguage = "santhali",
  onSelectLanguage,
}) {
  const getLangName = () => {
    if (selectedLanguage === "santhali") return "संताली";
    if (selectedLanguage === "ho") return "हो";
    if (selectedLanguage === "mundari") return "मुण्डारी";
    if (selectedLanguage === "kurukh") return "कुड़ुख";
    return "संताली";
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto font-hindi select-none">
      {/* Welcome Greeting Banner (Matching Mockup Screen 4) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-1">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight">
            नमस्ते, {TEACHER_PROFILE.name} 👋
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
            आज फिर एक नई सीख की शुरुआत करें।
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded-xl bg-pastel-green border border-pastel-greenBorder text-forest-900 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>सक्रिय मातृभाषा: {getLangName()}</span>
          </div>
          <span className="text-xs text-stone-400 hidden sm:inline">•</span>
          <span className="text-xs font-semibold text-stone-500 hidden sm:inline">
            गुरुवार, 4 सितम्बर 2026
          </span>
        </div>
      </div>

      {/* Quick Action Cards (त्वरित कार्य - 4 Soft Pastel Cards from Mockup Screen 4) */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-stone-700 tracking-wide">
            त्वरित कार्य
          </h2>
          <span className="text-[11px] text-stone-500 font-medium">एक क्लिक में शुरू करें</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Action 1: Live Translate */}
          <div
            onClick={() => onNavigate("live-translate")}
            className="p-4 sm:p-5 rounded-3xl bg-pastel-green dark:bg-[#173B2A] border border-pastel-greenBorder dark:border-[#2A5E43] hover:border-forest-600 dark:hover:border-emerald-400 shadow-card hover:shadow-float transition-all cursor-pointer group flex flex-col justify-between min-h-[130px]"
          >
            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#1F4C36] text-forest-800 dark:text-emerald-300 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <Languages className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-forest-900 dark:text-white group-hover:text-forest-700 dark:group-hover:text-emerald-300 transition-colors">
                लाइव अनुवाद शुरू करें
              </h3>
              <p className="text-[11px] text-forest-700 dark:text-emerald-400/80 font-medium mt-0.5">
                हिंदी ⇄ {getLangName()} संवाद
              </p>
            </div>
          </div>

          {/* Action 2: Scan Textbook */}
          <div
            onClick={() => onNavigate("textbook-scanner")}
            className="p-4 sm:p-5 rounded-3xl bg-pastel-blue dark:bg-[#132E3A] border border-pastel-blueBorder dark:border-[#214F63] hover:border-blue-500 dark:hover:border-cyan-400 shadow-card hover:shadow-float transition-all cursor-pointer group flex flex-col justify-between min-h-[130px]"
          >
            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#1B3F50] text-blue-700 dark:text-cyan-300 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <ScanLine className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-forest-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors">
                पाठ्यपुस्तक स्कैन करें
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium mt-0.5">
                पृष्ठ से सरल व्याख्या निकालें
              </p>
            </div>
          </div>

          {/* Action 3: Create Worksheet */}
          <div
            onClick={() => onNavigate("worksheet-generator")}
            className="p-4 sm:p-5 rounded-3xl bg-pastel-peach dark:bg-[#331C16] border border-pastel-peachBorder dark:border-[#572F24] hover:border-rose-400 dark:hover:border-rose-300 shadow-card hover:shadow-float transition-all cursor-pointer group flex flex-col justify-between min-h-[130px]"
          >
            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#47261E] text-rose-700 dark:text-rose-300 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-forest-900 dark:text-white group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors">
                कार्यपत्रक बनाएं
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium mt-0.5">
                मात्रा व व्याकरण अभ्यास पत्र
              </p>
            </div>
          </div>

          {/* Action 4: Flashcards */}
          <div
            onClick={() => onNavigate("flashcards")}
            className="p-4 sm:p-5 rounded-3xl bg-pastel-purple dark:bg-[#281A36] border border-pastel-purpleBorder dark:border-[#4B3066] hover:border-purple-400 dark:hover:border-purple-300 shadow-card hover:shadow-float transition-all cursor-pointer group flex flex-col justify-between min-h-[130px]"
          >
            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#3B2550] text-purple-700 dark:text-purple-300 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-forest-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                शब्द कार्ड देखें
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-medium mt-0.5">
                दैनिक शब्दावली 3D कार्ड
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Overview Metrics (आज का अवलोकन - 4 Stats from Mockup Screen 4) */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-stone-700 dark:text-stone-300 tracking-wide">
            आज का अवलोकन
          </h2>
          <span className="text-[11px] text-stone-500 dark:text-stone-400">कक्षा 1 से 5 का समग्र विश्लेषण</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* 42 कुल विद्यार्थी */}
          <div className="bg-white dark:bg-[#12241A] p-4 rounded-3xl border border-stone-200/90 dark:border-[#224734] shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-stone-900 dark:text-white font-numeric leading-none">
                42
              </div>
              <div className="text-xs font-bold text-stone-500 dark:text-stone-400 mt-1">
                कुल विद्यार्थी
              </div>
            </div>
          </div>

          {/* 12 भाषा सहायता की आवश्यकता */}
          <div
            onClick={() => onNavigate("student-progress")}
            className="bg-white dark:bg-[#12241A] p-4 rounded-3xl border border-amber-200 dark:border-amber-900/60 shadow-2xs flex items-center gap-3.5 cursor-pointer hover:border-amber-400 transition-colors group"
          >
            <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-amber-700 dark:text-amber-400 font-numeric leading-none group-hover:scale-105 transition-transform">
                12
              </div>
              <div className="text-xs font-bold text-stone-600 dark:text-stone-300 mt-1">
                भाषा सहायता की आवश्यकता
              </div>
            </div>
          </div>

          {/* 8 अवधारणा पुनरावृत्ति की आवश्यकता */}
          <div
            onClick={() => onNavigate("student-progress")}
            className="bg-white dark:bg-[#12241A] p-4 rounded-3xl border border-rose-200 dark:border-rose-900/60 shadow-2xs flex items-center gap-3.5 cursor-pointer hover:border-rose-400 transition-colors group"
          >
            <div className="w-11 h-11 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-rose-700 dark:text-rose-400 font-numeric leading-none group-hover:scale-105 transition-transform">
                8
              </div>
              <div className="text-xs font-bold text-stone-600 dark:text-stone-300 mt-1">
                अवधारणा पुनरावृत्ति
              </div>
            </div>
          </div>

          {/* 76% औसत प्रगति */}
          <div className="bg-white dark:bg-[#12241A] p-4 rounded-3xl border border-emerald-200 dark:border-emerald-900/60 shadow-2xs flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400 font-numeric leading-none">
                76%
              </div>
              <div className="text-xs font-bold text-stone-500 dark:text-stone-400 mt-1">
                औसत प्रगति
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom 2 Columns matching Mockup Screen 4: Recent Activities & Upcoming Classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        {/* Left: हाल की गतिविधियां (Recent activities) */}
        <div className="bg-white dark:bg-[#12241A] rounded-3xl border border-stone-200/90 dark:border-[#224734] p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-extrabold text-sm text-forest-900 dark:text-white">
              हाल की गतिविधियां
            </h3>
            <span className="text-[11px] font-semibold text-stone-600 dark:text-stone-400">आज का इतिहास</span>
          </div>

          <div className="space-y-3">
            {/* Item 1 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 dark:bg-[#183325] hover:bg-cream-50 dark:hover:bg-[#1E3E2E] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pastel-green dark:bg-[#1F4C36] text-forest-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                  का
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                    कक्षा 2 — मात्राएं
                  </h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400">
                    कार्यपत्रक बनाया गया
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-stone-600 dark:text-stone-400 shrink-0">
                2 घंटे पहले
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 dark:bg-[#183325] hover:bg-cream-50 dark:hover:bg-[#1E3E2E] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pastel-blue dark:bg-[#1A3F50] text-blue-700 dark:text-cyan-300 flex items-center justify-center font-bold text-xs shrink-0">
                  सं
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                    कक्षा 3 — संज्ञा
                  </h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400">
                    क्विज पूरा किया
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-stone-600 dark:text-stone-400 shrink-0">
                4 घंटे पहले
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 dark:bg-[#183325] hover:bg-cream-50 dark:hover:bg-[#1E3E2E] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pastel-peach dark:bg-[#47261E] text-rose-700 dark:text-rose-300 flex items-center justify-center font-bold text-xs shrink-0">
                  स्व
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                    कक्षा 1 — स्वर और व्यंजन
                  </h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400">
                    शब्द कार्ड देखा गया
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-stone-600 dark:text-stone-400 shrink-0">
                1 दिन पहले
              </span>
            </div>
          </div>
        </div>

        {/* Right: आगामी कक्षाएं (Upcoming classes) */}
        <div className="bg-white dark:bg-[#12241A] rounded-3xl border border-stone-200/90 dark:border-[#224734] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-sm text-forest-900 dark:text-white">
                आगामी कक्षाएं
              </h3>
              <span className="text-[11px] font-semibold text-stone-600 dark:text-stone-400">समय सारणी</span>
            </div>

            <div className="space-y-3">
              {/* Class 1 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 dark:bg-[#183325] hover:bg-cream-50 dark:hover:bg-[#1E3E2E] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-[#1F4C36] text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                      कक्षा 1 — स्वर और व्यंजन
                    </h4>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400">
                      वर्ण पहचान व खेल गतिविधि
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-forest-700 dark:text-emerald-300 bg-pastel-green dark:bg-[#1F4C36] px-2 py-0.5 rounded-md shrink-0">
                  10:00 पूर्वाह्न
                </span>
              </div>

              {/* Class 2 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 dark:bg-[#183325] hover:bg-cream-50 dark:hover:bg-[#1E3E2E] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-[#1F4C36] text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                      कक्षा 2 — मात्राएं
                    </h4>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400">
                      द्विभाषी सचित्र कार्यपत्रक अभ्यास
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-forest-700 dark:text-emerald-300 bg-pastel-green dark:bg-[#1F4C36] px-2 py-0.5 rounded-md shrink-0">
                  11:30 पूर्वाह्न
                </span>
              </div>

              {/* Class 3 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 dark:bg-[#183325] hover:bg-cream-50 dark:hover:bg-[#1E3E2E] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-[#1F4C36] text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                      कक्षा 3 — वाक्य निर्माण
                    </h4>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400">
                      मातृभाषा से हिंदी अनुवाद अभ्यास
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-forest-700 dark:text-emerald-300 bg-pastel-green dark:bg-[#1F4C36] px-2 py-0.5 rounded-md shrink-0">
                  01:00 अपराह्न
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-right">
            <button
              onClick={() => onNavigate("curriculum")}
              className="text-xs font-bold text-forest-700 dark:text-emerald-400 hover:text-forest-900 dark:hover:text-emerald-300 inline-flex items-center gap-1 hover:underline"
            >
              <span>सभी देखें</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
