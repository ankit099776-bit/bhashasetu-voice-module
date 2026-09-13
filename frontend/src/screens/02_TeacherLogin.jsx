import React, { useState } from "react";
import BhashaSetuLogo from "../components/BhashaSetuLogo";
import { TribalLeavesCorner } from "../components/Illustrations";
import { Eye, EyeOff, Lock, Mail, ArrowRight, ArrowLeft, UserCheck, ShieldCheck, GraduationCap, Sun, Moon } from "lucide-react";
import { TEACHER_PROFILE } from "../data/bhashaData";

export default function TeacherLogin({ onLogin, onRegister, onBack, isDarkMode = false, onToggleDarkMode }) {
  const [email, setEmail] = useState("ananya.sharma@school.in");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(TEACHER_PROFILE);
  };

  const handleQuickDemoLogin = () => {
    setEmail("ananya.sharma@school.in");
    setPassword("123456");
    onLogin(TEACHER_PROFILE);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F0] dark:bg-[#0A1610] p-4 sm:p-6 relative select-none transition-colors duration-300">
      {/* Decorative leaf art in corners */}
      <div className="absolute top-4 left-4 pointer-events-none opacity-40 dark:opacity-20">
        <TribalLeavesCorner className="w-28 h-28" />
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none opacity-40 dark:opacity-20 rotate-180">
        <TribalLeavesCorner className="w-28 h-28" />
      </div>

      {/* Login Card matching Mockup Screen 2 */}
      <div className="w-full max-w-md bg-white dark:bg-[#12241A] rounded-3xl p-6 sm:p-8 shadow-card border border-stone-200/90 dark:border-[#224734] relative z-10 font-hindi">
        {/* Top Header Row with Back navigation & Theme Toggle */}
        <div className="flex items-center justify-between mb-3">
          {onBack ? (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-stone-600 dark:text-stone-400 hover:text-forest-800 dark:hover:text-emerald-300 text-sm font-bold transition-colors cursor-pointer py-1 px-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-[#183526]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>मुख्य पृष्ठ</span>
            </button>
          ) : <div />}

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-stone-200 dark:border-[#264D3B] hover:bg-stone-100 dark:hover:bg-[#183526] text-stone-600 dark:text-emerald-300 transition-colors cursor-pointer"
            title={isDarkMode ? "लाइट मोड" : "डार्क मोड"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-forest-700" />}
          </button>
        </div>

        {/* Top Logo */}
        <div className="flex flex-col items-center text-center mb-6">
          <BhashaSetuLogo size="md" variant="vertical" showSubtitle={true} />
          
          <h2 className="text-2xl sm:text-3xl font-black text-forest-900 dark:text-white mt-4">
            ᱢᱟᱪᱮᱛ ᱵᱚᱞᱚᱱ (Teacher Login)
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 mt-1">
            ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ! ᱟᱢᱟᱜ ᱪᱟᱱᱟᱪ ᱮᱦᱚᱵᱽ ᱢᱮ ᱾ (फिर से स्वागत है! अपनी कक्षा शुरू करें।)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email/Phone */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-stone-700 dark:text-stone-300 mb-1.5 font-hindi">
              ᱤᱢᱮᱞ ᱟᱨᱵᱟᱝ ᱯᱷᱳᱱ (Email / Mobile Number)
            </label>
            <div className="relative">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="मोबाइल नंबर या शिक्षक आईडी"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-[#2F5E45] bg-white dark:bg-[#172E22] text-stone-800 dark:text-white focus:border-forest-600 dark:focus:border-emerald-400 focus:ring-2 focus:ring-forest-200 dark:focus:ring-emerald-900/40 outline-none text-sm font-hindi transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-stone-700 dark:text-stone-300 mb-1.5 font-hindi">
              ᱯᱟᱥᱠᱳᱰ / ᱯᱤᱱ (Password / PIN)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="पासवर्ड दर्ज करें"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-[#2F5E45] bg-white dark:bg-[#172E22] text-stone-800 dark:text-white focus:border-forest-600 dark:focus:border-emerald-400 focus:ring-2 focus:ring-forest-200 dark:focus:ring-emerald-900/40 outline-none text-sm font-hindi transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember me and Forgot Password */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-hindi pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-stone-700 dark:text-stone-300 font-semibold">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-forest-700 focus:ring-forest-500 accent-forest-700 cursor-pointer"
              />
              <span>मुझे याद रखें</span>
            </label>
            <button
              type="button"
              onClick={() => alert("पासवर्ड रीसेट लिंक आपके पंजीकृत मोबाइल पर भेजा गया है।")}
              className="text-forest-700 dark:text-emerald-400 hover:underline font-bold cursor-pointer"
            >
              पासवर्ड भूल गए?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#1E4D36] hover:bg-[#163827] text-white font-bold text-base shadow-card hover:shadow-float transition-all font-hindi mt-2 cursor-pointer"
          >
            ᱵᱚᱞᱚᱱ ᱢᱮ (कक्षा डैशबोर्ड में लॉगिन करें)
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-stone-200 dark:border-[#224734]" />
          <span className="flex-shrink mx-3 text-xs font-bold text-stone-400 dark:text-stone-500 font-hindi">
            या
          </span>
          <div className="flex-grow border-t border-stone-200 dark:border-[#224734]" />
        </div>

        {/* Create Account Secondary Button */}
        <button
          type="button"
          onClick={() => setShowCreateModal(true)}
          className="w-full py-3 rounded-2xl bg-stone-50 dark:bg-[#172E22] hover:bg-stone-100 dark:hover:bg-[#1E3E2E] text-forest-900 dark:text-emerald-200 border border-stone-300 dark:border-[#2F5E45] font-bold text-sm transition-all font-hindi cursor-pointer"
        >
          नया खाता बनाएं
        </button>

        {/* Quick Demo One-Click Login Badge for judges / reviewers */}
        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-[#224734] text-center space-y-3">
          <button
            type="button"
            onClick={handleQuickDemoLogin}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-pastel-green dark:bg-[#1A3A2A] border border-pastel-greenBorder dark:border-[#2F5E45] text-forest-900 dark:text-emerald-200 text-xs sm:text-sm font-bold hover:bg-forest-200 dark:hover:bg-[#234B36] transition-colors font-hindi cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-forest-700 dark:text-emerald-400" />
            <span>अनन्या शर्मा (डेमो शिक्षिका) के रूप में त्वरित प्रवेश</span>
          </button>
        </div>
      </div>

      {/* Registration Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-float border border-stone-200 space-y-4 font-hindi">
            <h3 className="text-lg font-bold text-forest-900">नया शिक्षक खाता बनाएं</h3>
            <p className="text-xs text-stone-600">
              झारखंड प्राथमिक शिक्षा परिषद के अंतर्गत कार्यरत शिक्षक अपना विवरण भरें:
            </p>
            <div className="space-y-2 text-xs">
              <input
                type="text"
                placeholder="शिक्षक का पूरा नाम"
                className="w-full p-2.5 border rounded-xl"
                defaultValue="सुमन मुर्मू"
              />
              <input
                type="text"
                placeholder="विद्यालय का नाम"
                className="w-full p-2.5 border rounded-xl"
                defaultValue="राजकीय प्राथमिक विद्यालय, तोरपा"
              />
              <select className="w-full p-2.5 border rounded-xl bg-white">
                <option>कक्षा 1 - 5</option>
                <option>कक्षा 1 - 3</option>
                <option>कक्षा 4 - 5</option>
              </select>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  onLogin({ ...TEACHER_PROFILE, name: "सुमन मुर्मू" });
                }}
                className="flex-1 py-2 bg-forest-700 text-white rounded-xl font-bold"
              >
                खाता बनाएं व लॉगिन करें
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border rounded-xl text-stone-600"
              >
                रद्द करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
