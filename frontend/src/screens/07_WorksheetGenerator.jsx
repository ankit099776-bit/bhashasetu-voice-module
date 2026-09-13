import React, { useState } from "react";
import {
  FileSpreadsheet,
  Download,
  Printer,
  Edit3,
  Bookmark,
  Sparkles,
  CheckCircle,
  RefreshCw,
  Eye,
} from "lucide-react";
import { SAMPLE_WORKSHEETS, WORKSHEET_TOPICS } from "../data/bhashaData";

export default function WorksheetGenerator() {
  const [selectedClass, setSelectedClass] = useState("कक्षा 2");
  const [selectedTopic, setSelectedTopic] = useState("matra");
  const [questionType, setQuestionType] = useState("रिक्त स्थान भरें");
  const [difficulty, setDifficulty] = useState("मध्यम");
  const [questionCount, setQuestionCount] = useState(10);
  const [languageOption, setLanguageOption] = useState("हिंदी");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Active worksheet content
  const activeWorksheet = SAMPLE_WORKSHEETS[selectedTopic] || SAMPLE_WORKSHEETS.matra;
  const [editableQuestions, setEditableQuestions] = useState(activeWorksheet.questions);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      const ws = SAMPLE_WORKSHEETS[selectedTopic] || SAMPLE_WORKSHEETS.matra;
      setEditableQuestions(ws.questions.slice(0, questionCount));
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert("कार्यपत्रक सफलतापूर्वक तैयार हो गया है और डाउनलोड में सहेजा गया है।");
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl mx-auto font-hindi select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-1 no-print">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-forest-900">
            कार्यपत्रक बनाएं
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            कक्षा और विषय के अनुसार स्वचालित सचित्र अभ्यास पत्र बनाएं व प्रिंट करें।
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-forest-800 bg-pastel-green px-3 py-1 rounded-xl border border-pastel-greenBorder">
            AI सहायता प्राप्त निर्माण
          </span>
        </div>
      </div>

      {/* Form Configuration Box matching Mockup Screen 7 */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs space-y-4 no-print">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* कक्षा चुनें */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              कक्षा चुनें
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              <option>कक्षा 1</option>
              <option>कक्षा 2</option>
              <option>कक्षा 3</option>
              <option>कक्षा 4</option>
              <option>कक्षा 5</option>
            </select>
          </div>

          {/* विषय चुनें */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              विषय चुनें
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                const ws = SAMPLE_WORKSHEETS[e.target.value] || SAMPLE_WORKSHEETS.matra;
                setEditableQuestions(ws.questions);
              }}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              {WORKSHEET_TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* प्रश्न का प्रकार */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              प्रश्न का प्रकार
            </label>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              <option>रिक्त स्थान भरें</option>
              <option>सही मिलान करें</option>
              <option>बहुविकल्पीय प्रश्न</option>
              <option>वर्णमाला व मात्रा अभ्यास</option>
            </select>
          </div>

          {/* कठिनाई स्तर */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              कठिनाई स्तर
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              <option>सरल (आधारभूत)</option>
              <option>मध्यम (कक्षा स्तर)</option>
              <option>कठिन (उन्नत)</option>
            </select>
          </div>

          {/* प्रश्नों की संख्या */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              प्रश्नों की संख्या
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              <option value={5}>5 प्रश्न</option>
              <option value={10}>10 प्रश्न</option>
              <option value={15}>15 प्रश्न</option>
            </select>
          </div>

          {/* भाषा */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5">
              भाषा
            </label>
            <select
              value={languageOption}
              onChange={(e) => setLanguageOption(e.target.value)}
              className="w-full bg-cream-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-forest-900 outline-none focus:border-forest-600"
            >
              <option>हिंदी</option>
              <option>द्विभाषी (हिंदी + संताली)</option>
              <option>द्विभाषी (हिंदी + हो)</option>
            </select>
          </div>
        </div>

        {/* Generate Button matching Mockup Screen 7 */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-3 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm shadow-card hover:shadow-float transition-all flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>कार्यपत्रक तैयार हो रहा है...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>कार्यपत्रक बनाएं</span>
            </>
          )}
        </button>
      </div>

      {/* Generated Worksheet Preview matching Mockup Screen 7 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-card space-y-6">
        {/* Printable Header */}
        <div className="border-b-2 border-forest-800 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-forest-900">
              {activeWorksheet.title}
            </h3>
            <p className="text-xs text-stone-600 font-bold mt-0.5">
              राजकीय प्राथमिक विद्यालय • {selectedClass} • {difficulty} स्तर
            </p>
          </div>

          <div className="text-right text-xs font-semibold text-stone-600 space-y-1">
            <div>विद्यार्थी का नाम: ________________________</div>
            <div>दिनांक: _________________ • पूर्णांक: {editableQuestions.length * 2}</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-cream-50 p-3 rounded-2xl border border-stone-200 text-xs font-bold text-stone-800">
          {activeWorksheet.instructions}
        </div>

        {/* Two Columns: Questions Left, Answer Key Right matching Mockup Screen 7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Questions Column (8 cols) */}
          <div className="md:col-span-8 space-y-3">
            {editableQuestions.map((q, idx) => (
              <div
                key={q.id || idx}
                className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={q.prompt}
                      className="w-full p-1 border rounded-lg bg-white text-sm"
                    />
                  ) : (
                    <span className="text-sm font-bold text-stone-900">
                      {q.prompt}
                    </span>
                  )}
                </div>

                <div className="text-xs font-bold text-forest-700 bg-pastel-green px-3 py-1 rounded-xl shrink-0">
                  ( {q.options.join(" / ")} )
                </div>
              </div>
            ))}
          </div>

          {/* Answer Key Column (4 cols) matching Mockup Screen 7 */}
          <div className="md:col-span-4 bg-pastel-green/40 p-4 rounded-3xl border border-pastel-greenBorder flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-pastel-greenBorder">
                <CheckCircle className="w-4 h-4 text-forest-700" />
                <h4 className="font-extrabold text-sm text-forest-900">
                  उत्तरमाला (Answer Key)
                </h4>
              </div>

              <div className="space-y-1.5 text-xs text-forest-900 font-bold">
                {activeWorksheet.answerKey.map((ans, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-600 shrink-0" />
                    <span>{ans}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-pastel-greenBorder text-[11px] text-stone-600">
              * शिक्षक संदर्भ हेतु उत्तर कुंजी। प्रिंट करते समय उत्तरमाला अलग पृष्ठ पर छपेगी।
            </div>
          </div>
        </div>

        {/* 4 Action Buttons at Bottom matching Mockup Screen 7 */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-stone-100 no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors"
            >
              <Edit3 className="w-4 h-4 text-stone-600" />
              <span>{isEditing ? "संपादित समाप्त करें" : "संपादित करें"}</span>
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pastel-green hover:bg-pastel-greenBorder text-forest-900 text-xs font-bold transition-colors"
            >
              <Bookmark className="w-4 h-4 text-forest-700" />
              <span>{savedSuccess ? "सहेजा गया!" : "सहेजें"}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-stone-300 hover:border-forest-600 text-forest-900 text-xs font-bold transition-colors shadow-2xs"
            >
              <Download className="w-4 h-4 text-forest-700" />
              <span>डाउनलोड करें</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-forest-700 hover:bg-forest-800 text-white text-xs font-bold transition-all shadow-card hover:shadow-float"
            >
              <Printer className="w-4 h-4" />
              <span>प्रिंट करें</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
