import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";

// Screens
import SplashScreen from "./screens/01_SplashScreen";
import TeacherLogin from "./screens/02_TeacherLogin";
import StudentLogin from "./screens/02_StudentLogin";
import LanguageSelect from "./screens/03_LanguageSelect";
import TeacherDashboard from "./screens/04_TeacherDashboard";
import StudentDashboard from "./screens/05_StudentDashboard";
import LiveTranslate from "./screens/05_LiveTranslate";
import TextbookScanner from "./screens/06_TextbookScanner";
import WorksheetGenerator from "./screens/07_WorksheetGenerator";
import Flashcards from "./screens/08_Flashcards";
import Curriculum from "./screens/09_Curriculum";
import StudentProgress from "./screens/10_StudentProgress";
import TeachBack from "./screens/11_TeachBack";
import OfflineLearning from "./screens/12_OfflineLearning";
import Settings from "./screens/13_Settings";
import StudentLiveClassroom from "./screens/05_StudentLiveClassroom";
import ErrorBoundary from "./components/ErrorBoundary";

import { TEACHER_PROFILE } from "./data/bhashaData";

export const SCREEN_TITLES = {
  splash: "स्प्लैश स्क्रीन",
  login: "शिक्षक लॉगिन",
  "student-login": "विद्यार्थी लॉगिन",
  "student-dashboard": "विद्यार्थी पोर्टल",
  "language-select": "भाषा चयन",
  dashboard: "शिक्षक डैशबोर्ड",
  "live-translate": "लाइव अनुवाद",
  "student-live-classroom": "ᱞᱟᱭᱤᱵᱽ ᱪᱟᱱᱟᱪ / लाइव कक्षा",
  "live-classroom": "ᱞᱟᱭᱤᱵᱽ ᱪᱟᱱᱟᱪ / लाइव कक्षा",
  "textbook-scanner": "पाठ्यपुस्तक स्कैनर",
  "worksheet-generator": "कार्यपत्रक बनाएं",
  flashcards: "शब्द कार्ड",
  curriculum: "पाठ्यक्रम",
  "student-progress": "विद्यार्थी प्रगति",
  "teach-back": "सीख-सुनाओ",
  "offline-learning": "ऑफलाइन अध्यापन",
  settings: "सेटिंग्स",
};

export default function App() {
  // Role-based state: 'guest' (landing/logins), 'teacher' (teacher tools), 'student' (student learning portal)
  const [userRole, setUserRole] = useState("guest");
  const [activeScreen, setActiveScreen] = useState("splash");
  const [selectedLanguage, setSelectedLanguage] = useState("santhali");
  const [isOffline, setIsOffline] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(TEACHER_PROFILE);
  const [currentStudent, setCurrentStudent] = useState({
    id: "ravi",
    name: "रवि मुर्मू",
    grade: "कक्षा 2",
    roll: "04",
    lang: "संथाली",
    langKey: "santhali",
    avatar: "👦",
    stars: 18,
  });

  // Dark Mode state with persistence in localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bhashasetu-theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Sync Dark Mode with DOM classes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDarkMode) {
      root.classList.add("dark");
      body.classList.add("dark");
      localStorage.setItem("bhashasetu-theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      localStorage.setItem("bhashasetu-theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = (val) => {
    setIsDarkMode((prev) => {
      const nextVal = typeof val === "boolean" ? val : !prev;
      if (typeof window !== "undefined") {
        if (nextVal) {
          document.documentElement.classList.add("dark");
          document.body.classList.add("dark");
          localStorage.setItem("bhashasetu-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.body.classList.remove("dark");
          localStorage.setItem("bhashasetu-theme", "light");
        }
      }
      return nextVal;
    });
  };

  const handleTeacherNavigate = (screenId) => {
    // Only allow teacher-permitted screens
    const allowedTeacherScreens = [
      "dashboard",
      "live-translate",
      "student-live-classroom",
      "live-classroom",
      "textbook-scanner",
      "worksheet-generator",
      "flashcards",
      "curriculum",
      "student-progress",
      "teach-back",
      "offline-learning",
      "settings",
      "language-select",
    ];
    if (allowedTeacherScreens.includes(screenId)) {
      setActiveScreen(screenId);
    } else {
      setActiveScreen("dashboard");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTeacherLoginSuccess = (profile) => {
    setCurrentUser(profile || TEACHER_PROFILE);
    setUserRole("teacher");
    setActiveScreen("dashboard");
  };

  const handleStudentLoginSuccess = (studentObj) => {
    setCurrentStudent(studentObj);
    setUserRole("student");
    setActiveScreen("student-dashboard");
  };

  const handleLogout = () => {
    setUserRole("guest");
    setActiveScreen("splash");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ==========================================
  // VIEW 1: STUDENT PORTAL (Strictly Isolated)
  // ==========================================
  if (userRole === "student" || activeScreen === "student-dashboard") {
    return (
      <StudentDashboard
        student={currentStudent}
        currentLanguage={selectedLanguage}
        onLogout={handleLogout}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
    );
  }

  // ==========================================
  // VIEW 2: GUEST SCREENS (Splash & Logins)
  // ==========================================
  if (userRole === "guest") {
    if (activeScreen === "splash") {
      return (
        <SplashScreen
          onTeacherLogin={() => setActiveScreen("login")}
          onStudentLogin={() => setActiveScreen("student-login")}
          onStart={() => {
            // Default quick start enters teacher demo
            setCurrentUser(TEACHER_PROFILE);
            setUserRole("teacher");
            setActiveScreen("dashboard");
          }}
          onLogin={() => setActiveScreen("login")}
          selectedLanguage={selectedLanguage}
          onSelectLanguage={setSelectedLanguage}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      );
    }

    if (activeScreen === "login") {
      return (
        <TeacherLogin
          onLogin={handleTeacherLoginSuccess}
          onBack={() => setActiveScreen("splash")}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      );
    }

    if (activeScreen === "student-login") {
      return (
        <StudentLogin
          onLogin={handleStudentLoginSuccess}
          onBack={() => setActiveScreen("splash")}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      );
    }
  }

  // ==========================================
  // VIEW 3: TEACHER WORKSPACE (Strictly Isolated)
  // ==========================================
  return (
    <div className="min-h-screen bg-[#FAF7F0] dark:bg-[#0E1F17] text-stone-800 dark:text-[#E8F3ED] font-sans flex flex-col selection:bg-forest-700 selection:text-white transition-colors duration-300">
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar for Teacher */}
        <Sidebar
          activeScreen={activeScreen}
          onNavigate={handleTeacherNavigate}
          onLogout={handleLogout}
          isOpenMobile={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        {/* Right Main Content Panel */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Top Bar with Screen Title, Theme Toggle, Language & Profile Avatar */}
          <TopNavbar
            activeScreenTitle={SCREEN_TITLES[activeScreen] || "भाषासेतु एआई"}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={setSelectedLanguage}
            onOpenMobileMenu={() => setMobileMenuOpen(true)}
            onNavigate={handleTeacherNavigate}
            onLogout={handleLogout}
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
          />

          {/* Active Teacher Screen View */}
          <main className="flex-1 bg-[#FAF7F0] dark:bg-[#0E1F17] transition-colors duration-300">
            {activeScreen === "dashboard" && (
              <TeacherDashboard
                onNavigate={handleTeacherNavigate}
                selectedLanguage={selectedLanguage}
                onSelectLanguage={setSelectedLanguage}
              />
            )}

            {activeScreen === "live-translate" && (
              <LiveTranslate
                selectedLanguage={selectedLanguage}
                onSelectLanguage={setSelectedLanguage}
                onNavigate={handleTeacherNavigate}
              />
            )}

            {(activeScreen === "student-live-classroom" || activeScreen === "live-classroom") && (
              <ErrorBoundary>
                <StudentLiveClassroom
                  student={currentStudent}
                  isDarkMode={isDarkMode}
                  onBack={() => setActiveScreen("dashboard")}
                />
              </ErrorBoundary>
            )}

            {activeScreen === "textbook-scanner" && (
              <TextbookScanner
                selectedLanguage={selectedLanguage}
                onNavigate={handleTeacherNavigate}
              />
            )}

            {activeScreen === "worksheet-generator" && (
              <WorksheetGenerator />
            )}

            {/* Page 8 / शब्द कार्ड matching Image 2 */}
            {activeScreen === "flashcards" && (
              <Flashcards selectedLanguage={selectedLanguage} />
            )}

            {activeScreen === "curriculum" && (
              <Curriculum onNavigate={handleTeacherNavigate} />
            )}

            {activeScreen === "student-progress" && (
              <StudentProgress onNavigate={handleTeacherNavigate} />
            )}

            {activeScreen === "teach-back" && (
              <TeachBack />
            )}

            {activeScreen === "offline-learning" && (
              <OfflineLearning
                isOffline={isOffline}
                onToggleOffline={() => setIsOffline(!isOffline)}
              />
            )}

            {activeScreen === "settings" && (
              <Settings
                selectedLanguage={selectedLanguage}
                onSelectLanguage={setSelectedLanguage}
                onLogout={handleLogout}
                isDarkMode={isDarkMode}
                onToggleDarkMode={toggleDarkMode}
              />
            )}

            {activeScreen === "language-select" && (
              <LanguageSelect
                selectedLanguage={selectedLanguage}
                onSelectLanguage={setSelectedLanguage}
                onContinue={() => setActiveScreen("dashboard")}
                onBack={() => setActiveScreen("dashboard")}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
