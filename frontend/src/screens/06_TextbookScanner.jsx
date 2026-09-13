import React, { useState } from "react";
import {
  Upload,
  Camera,
  FileText,
  Volume2,
  FileSpreadsheet,
  HelpCircle,
  Sparkles,
  CheckCircle,
  RefreshCw,
  Eye,
  BookOpen,
} from "lucide-react";
import { TextbookScanIllustration } from "../components/Illustrations";
import { TEXTBOOK_SAMPLES, playDevanagariAudio } from "../data/bhashaData";

export default function TextbookScanner({
  selectedLanguage = "santhali",
  onNavigate,
}) {
  const [activeTab, setActiveTab] = useState("upload"); // "upload" | "camera"
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  const sample = TEXTBOOK_SAMPLES[selectedSampleIndex] || TEXTBOOK_SAMPLES[0];

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  const handleSpeak = (text) => {
    playDevanagariAudio(text);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl mx-auto font-hindi select-none">
      {/* Top Header & Mode Tabs matching Mockup Screen 6 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-4 rounded-3xl border border-stone-200/90 shadow-2xs">
        <div>
          <h2 className="text-xl font-extrabold text-forest-900">
            पाठ्यपुस्तक स्कैनर व व्याख्या
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            पाठ्यपुस्तक के पृष्ठ को स्कैन करें, एआई द्वारा सरल मातृभाषा व्याख्या पाएं।
          </p>
        </div>

        {/* Tabs: Upload vs Camera */}
        <div className="flex items-center bg-stone-100 p-1 rounded-2xl shrink-0">
          <button
            onClick={() => {
              setActiveTab("upload");
              setCameraActive(false);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "upload"
                ? "bg-white text-forest-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>तस्वीर अपलोड करें</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("camera");
              setCameraActive(true);
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "camera"
                ? "bg-white text-forest-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>कैमरा से स्कैन करें</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Layout matching Mockup Screen 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (5 Cols): Upload / Image Preview & Action Buttons */}
        <div className="lg:col-span-5 space-y-4">
          {/* Upload Dropzone / Camera Box */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-2xs space-y-4">
            {activeTab === "upload" ? (
              <div
                onClick={handleSimulateScan}
                className="border-2 border-dashed border-forest-300 hover:border-forest-600 bg-pastel-green/20 rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-forest-800 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-forest-900">
                    यहाँ तस्वीर खींचें या अपलोड करें
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    (PDF, JPG, PNG समर्थित)
                  </p>
                </div>
                <button
                  type="button"
                  className="px-4 py-1.5 rounded-xl bg-forest-700 text-white font-bold text-xs shadow-xs hover:bg-forest-800 transition-colors"
                >
                  तस्वीर चुनें
                </button>
              </div>
            ) : (
              <div className="bg-stone-900 rounded-2xl p-6 text-center text-white space-y-3 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-emerald-400">
                  <Camera className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-xs font-bold">कैमरा सक्रिय है (सिमुलेशन)</p>
                <div className="w-32 h-1 bg-emerald-500 mx-auto rounded-full animate-bounce" />
                <button
                  onClick={handleSimulateScan}
                  className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  फोटो खींचें
                </button>
              </div>
            )}

            {/* Quick Sample Selector */}
            <div>
              <span className="text-[11px] font-bold text-stone-500 block mb-1.5">
                नमूना पाठ्यपुस्तक पृष्ठ चुनें:
              </span>
              <div className="grid grid-cols-3 gap-2 text-center">
                {TEXTBOOK_SAMPLES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSampleIndex(idx);
                      handleSimulateScan();
                    }}
                    className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedSampleIndex === idx
                        ? "bg-pastel-green text-forest-900 border-forest-600 shadow-2xs"
                        : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-white"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Scanned Book Thumbnail Preview matching Mockup */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-stone-500">
                पृष्ठ पूर्वावलोकन ({sample.classNum} • {sample.pageNumber}):
              </span>
              <TextbookScanIllustration className="w-full h-36" />
            </div>

            {/* 3 Action Buttons matching Mockup Screen 6 */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                onClick={() => alert(`उदाहरण: ${sample.simpleExplanation}`)}
                className="py-2 px-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-colors text-center"
              >
                उदाहरण देखें
              </button>
              <button
                onClick={() => alert(`अभ्यास प्रश्न:\n1. ${sample.practiceQuestions[0]}\n2. ${sample.practiceQuestions[1]}`)}
                className="py-2 px-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-colors text-center"
              >
                प्रश्न बनाएं
              </button>
              <button
                onClick={() => onNavigate("worksheet-generator")}
                className="py-2 px-2 bg-forest-700 hover:bg-forest-800 text-white rounded-xl text-xs font-bold transition-colors text-center shadow-xs"
              >
                कार्यपत्रक बनाएं
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Extracted Text, Translation, Simple Explanation matching Mockup Screen 6 */}
        <div className="lg:col-span-7 space-y-4">
          {/* Card 1: स्कैन किया गया पाठ */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/90 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-forest-700" />
                <h3 className="font-extrabold text-sm text-forest-900">
                  स्कैन किया गया पाठ (मूल हिंदी)
                </h3>
              </div>
              <button
                onClick={() => handleSpeak(sample.extractedHindi)}
                className="p-1.5 rounded-lg text-forest-700 hover:bg-forest-50"
                title="सुनें"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed bg-cream-50/70 p-3 rounded-2xl border border-stone-200/60">
              "{sample.extractedHindi}"
            </p>
          </div>

          {/* Card 2: अनुवाद (संताली) */}
          <div className="bg-white rounded-3xl p-5 border border-pastel-greenBorder shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-forest-700" />
                <h3 className="font-extrabold text-sm text-forest-900">
                  अनुवाद (संताली / चुनी गई मातृभाषा)
                </h3>
              </div>
              <button
                onClick={() => handleSpeak(sample.translationSanthali)}
                className="p-1.5 rounded-lg text-forest-700 hover:bg-forest-50"
                title="सुनें"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm sm:text-base font-bold text-forest-900 leading-relaxed bg-pastel-green/40 p-3 rounded-2xl border border-pastel-greenBorder">
              {sample.translationSanthali}
            </p>
          </div>

          {/* Card 3: सरल व्याख्या (Simple mother-tongue explanation) */}
          <div className="bg-white rounded-3xl p-5 border border-pastel-amberBorder shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <h3 className="font-extrabold text-sm text-amber-900">
                सरल व्याख्या (शिक्षक सहायता)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-pastel-amber/30 p-3.5 rounded-2xl border border-pastel-amberBorder">
              {sample.simpleExplanation}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-stone-500 block mb-1">
                सुझाए गए कक्षा अभ्यास प्रश्न:
              </span>
              <ul className="space-y-1 text-xs text-stone-700">
                {sample.practiceQuestions.map((q, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
