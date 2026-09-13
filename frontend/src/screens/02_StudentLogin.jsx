import React, { useState } from "react";
import BhashaSetuLogo from "../components/BhashaSetuLogo";
import { TribalLeavesCorner } from "../components/Illustrations";
import { ArrowLeft, ArrowRight, Volume2, Sparkles, Check, GraduationCap, ShieldCheck, Sun, Moon } from "lucide-react";
import { playDevanagariAudio } from "../data/bhashaData";

const SAMPLE_STUDENTS = [
  { id: "ravi", name: "रवि मुर्मू", nameOlChiki: "ᱨᱚᱵᱤ ᱢᱩᱨᱢᱩ", grade: "कक्षा 2", roll: "04", lang: "संताली ( Ol Chiki )", langKey: "santhali", avatar: "👦", stars: 18 },
  { id: "priya", name: "प्रिया सोरेन", nameOlChiki: "ᱯᱨᱤᱭᱟ ᱥᱚᱨᱮᱱ", grade: "कक्षा 2", roll: "09", lang: "संताली ( Ol Chiki )", langKey: "santhali", avatar: "👧", stars: 24 },
  { id: "birsa", name: "बिरसा हो", nameOlChiki: "ᱵᱤᱨᱥᱟ ᱦᱳ", grade: "कक्षा 2", roll: "11", lang: "हो ( Warang Chiti )", langKey: "ho", avatar: "👦", stars: 15 },
  { id: "amisha", name: "अमीषा मुंडा", nameOlChiki: "ᱟᱢᱤᱥᱟ ᱢᱩᱱᱰᱟ", grade: "कक्षा 2", roll: "02", lang: "मुंडारी", langKey: "mundari", avatar: "👧", stars: 21 },
  { id: "soma", name: "सोमा उरांव", nameOlChiki: "ᱥᱳᱢᱟ ᱩᱨᱟᱸᱣ", grade: "कक्षा 2", roll: "14", lang: "कुरुख", langKey: "kurukh", avatar: "👦", stars: 19 },
  { id: "sunita", name: "सुनीता बेसरा", nameOlChiki: "ᱥᱩᱱᱤᱛᱟ ᱵᱮᱥᱨᱟ", grade: "कक्षा 2", roll: "06", lang: "संताली ( Ol Chiki )", langKey: "santhali", avatar: "👧", stars: 22 },
];

export default function StudentLogin({ onLogin, onBack, isDarkMode = false, onToggleDarkMode }) {
  const [selectedStudent, setSelectedStudent] = useState(SAMPLE_STUDENTS[0]);
  const [selectedGrade, setSelectedGrade] = useState("कक्षा 2");
  const [rollNumber, setRollNumber] = useState("04");
  const [pin, setPin] = useState("1234");
  const [loginMode, setLoginMode] = useState("avatar");

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setRollNumber(student.roll);
    playDevanagariAudio(`ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ, ${student.nameOlChiki || student.name}!`, "sat");
  };

  const handleEnterStudentPortal = () => {
    playDevanagariAudio(`ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ, ${selectedStudent.nameOlChiki || selectedStudent.name}!`, "sat");
    onLogin({
      ...selectedStudent,
      role: "student",
    });
  };

  const playWelcomeAudio = () => {
    playDevanagariAudio("ᱡᱚᱦᱟᱨ! ᱵᱷᱟᱥᱟ ᱥᱮᱛᱩ ᱨᱮ ᱟᱢᱟᱜ ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ ᱾ ᱟᱢᱟᱜ ᱧᱩᱛᱩᱢ ᱪᱷᱟᱹ touch ᱢᱮ ᱟᱨ ᱯᱟᱲᱦᱟᱣ ᱮᱦᱚᱵᱽ ᱢᱮ ᱾", "sat");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F0] dark:bg-[#0A1610] p-3 sm:p-6 relative select-none transition-colors duration-300">
      {/* Decorative leaf art in corners */}
      <div className="absolute top-3 left-3 pointer-events-none opacity-40 dark:opacity-20">
        <TribalLeavesCorner className="w-24 h-24" />
      </div>
      <div className="absolute bottom-3 right-3 pointer-events-none opacity-40 dark:opacity-20 rotate-180">
        <TribalLeavesCorner className="w-24 h-24" />
      </div>

      {/* Main Student Login Card */}
      <div className="w-full max-w-2xl bg-white dark:bg-[#12241A] rounded-3xl sm:rounded-[36px] p-5 sm:p-8 shadow-card border border-stone-200/90 dark:border-[#224734] relative z-10 font-hindi">
        
        {/* Navigation Bar inside Card */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-forest-800 dark:hover:text-emerald-300 text-sm sm:text-base font-bold transition-colors cursor-pointer py-1 px-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-[#183526]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ᱢᱩᱲᱩᱛ ᱥᱟᱠᱟᱢ | मुख्य पृष्ठ</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={playWelcomeAudio}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest-800 dark:text-emerald-300 bg-pastel-green dark:bg-[#1A3A2A] hover:bg-forest-100 dark:hover:bg-[#234B36] px-3 py-1.5 rounded-full border border-pastel-greenBorder dark:border-[#2F5E45] transition-all cursor-pointer"
              title="ऑडियो निर्देश सुनें"
            >
              <Volume2 className="w-4 h-4 text-forest-700 dark:text-emerald-400" />
              <span>ᱚᱰᱤᱭᱳ ᱟᱸᱡᱚᱢ | ऑडियो</span>
            </button>

            <button
              type="button"
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-xl border border-stone-200 dark:border-[#264D3B] hover:bg-stone-100 dark:hover:bg-[#183526] text-stone-600 dark:text-emerald-300 transition-colors cursor-pointer"
              title={isDarkMode ? "लाइट मोड" : "डार्क मोड"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-forest-700" />}
            </button>
          </div>
        </div>

        {/* Top Branding */}
        <div className="flex flex-col items-center text-center mb-6">
          <BhashaSetuLogo size="md" variant="vertical" showSubtitle={false} />
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-amber-100/90 dark:bg-amber-950/50 border border-amber-300/80 dark:border-amber-700 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>ᱪᱮᱛᱮᱫᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱯᱳᱨᱴᱟᱞ | विद्यार्थी अध्ययन पोर्टल</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-forest-900 dark:text-white mt-3">
            ᱪᱮᱛᱮᱫᱤᱭᱟᱹ ᱵᱚᱞᱚᱱ (Student Login)
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 mt-1 max-w-md">
            ᱟᱢᱟᱜ ᱪᱟᱱᱟᱪ ᱟᱨ ᱧᱩᱛᱩᱢ ᱪᱷᱟᱹ touch ᱢᱮ ᱾ (अपनी कक्षा और नाम चुनें, फिर पढ़ाई शुरू करें!)
          </p>
        </div>

        {/* Class Selection Tabs */}
        <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
          {["कक्षा 1 / ᱪᱟᱱᱟᱪ ᱑", "कक्षा 2 / ᱪᱟᱱᱟᱪ ᱒", "कक्षा 3 / ᱪᱟᱱᱟᱪ ᱓", "कक्षा 4 / ᱪᱟᱱᱟᱪ ᱔", "कक्षा 5 / ᱪᱟᱱᱟᱪ ᱕"].map((gr, idx) => (
            <button
              key={gr}
              onClick={() => setSelectedGrade(`कक्षा ${idx + 1}`)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                selectedGrade === `कक्षा ${idx + 1}`
                  ? "bg-[#1E4D36] text-white shadow-xs"
                  : "bg-stone-100 dark:bg-[#172E22] hover:bg-stone-200 dark:hover:bg-[#1E3E2E] text-stone-700 dark:text-stone-300"
              }`}
            >
              {gr}
            </button>
          ))}
        </div>

        {/* Student Avatar Cards Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-xs sm:text-sm font-bold text-stone-700 dark:text-stone-300">
              ᱟᱢᱟᱜ ᱧᱩᱛᱩᱢ ᱪᱷᱟᱹ touch ᱢᱮ ({selectedGrade}):
            </span>
            <span className="text-xs text-forest-800 dark:text-emerald-300 font-semibold">
              ᱪᱷᱟᱹ touch ᱟᱠᱟᱱ: <span className="font-extrabold text-forest-900 dark:text-white">{selectedStudent.nameOlChiki} ({selectedStudent.name})</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {SAMPLE_STUDENTS.map((st) => {
              const isSelected = selectedStudent.id === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => handleSelectStudent(st)}
                  className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer relative flex flex-col items-center text-center ${
                    isSelected
                      ? "bg-pastel-green/70 dark:bg-[#1C3E2C] border-forest-600 dark:border-emerald-400 ring-2 ring-forest-500/20 shadow-sm"
                      : "bg-cream-50 dark:bg-[#15281E] hover:bg-stone-50 dark:hover:bg-[#193225] border-stone-200/80 dark:border-[#224734]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-forest-700 dark:bg-emerald-500 text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[#102018] border-2 border-stone-200 dark:border-[#29543E] flex items-center justify-center text-2xl shadow-2xs mb-1.5">
                    {st.avatar}
                  </div>
                  <span className="font-black text-base text-forest-900 dark:text-emerald-300 leading-tight">
                    {st.nameOlChiki}
                  </span>
                  <span className="font-extrabold text-xs text-stone-700 dark:text-stone-300 leading-tight">
                    ({st.name})
                  </span>
                  <span className="text-[11px] text-forest-800 dark:text-emerald-300 font-bold mt-0.5">
                    {st.lang} • रोल #{st.roll}
                  </span>
                  <span className="text-[11px] text-amber-700 dark:text-amber-300 font-bold mt-1 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                    ⭐ {st.stars} ᱤᱯᱤᱞ (Stars)
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={handleEnterStudentPortal}
          className="w-full py-4 rounded-2xl bg-[#1E4D36] hover:bg-[#163827] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span>{selectedStudent.nameOlChiki} ({selectedStudent.name}) - ᱯᱟᱲᱦᱟᱣ ᱮᱦᱚᱵᱽ ᱢᱮ</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Note */}
        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-[#224734] text-center text-xs text-stone-500 dark:text-stone-400">
          ᱥᱩᱨᱟᱹᱠᱷᱤᱛ ᱵᱟᱞ ᱥᱮᱪᱮᱫ ᱯᱳᱨᱴᱟᱞ • Jharkhand Primary Education Council
        </div>

      </div>
    </div>
  );
}
