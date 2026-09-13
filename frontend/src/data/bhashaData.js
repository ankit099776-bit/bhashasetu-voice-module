// BhashaSetu AI - Centralized Educational Data & Mock Services

export const TEACHER_PROFILE = {
  name: "अनन्या शर्मा",
  title: "प्राथमिक शिक्षिका",
  school: "राजकीय प्राथमिक विद्यालय, खूंटी (झारखंड)",
  classes: "कक्षा 1 - 5",
  subject: "हिंदी",
  preferredLanguage: "संताली",
  avatar: "👩‍🏫",
  email: "ananya.sharma@school.in",
  phone: "+91 98765 43210",
  experience: "7 वर्ष",
  village: "खूंटी, झारखंड",
};

export const LANGUAGES = [
  {
    id: "hindi",
    name: "हिंदी",
    subname: "हिंदी",
    script: "देवनागरी",
    code: "hi",
    description: "मानक शिक्षण भाषा (कक्षा 1-5 पाठ्यक्रम)",
    isDefault: true,
    speakers: "झारखंड में सर्वमान्य",
    color: "emerald",
    icon: "book",
  },
  {
    id: "santhali",
    name: "संताली",
    subname: "संताली",
    script: "ओल चिकी लिपि",
    code: "sat",
    description: "झारखंड की प्रमुख संथाली भाषा (संथाल परगना व कोल्हान)",
    isDefault: false,
    speakers: "लगभग 70 लाख वक्ता",
    color: "amber",
    icon: "tree",
  },
  {
    id: "mundari",
    name: "मुण्डारी",
    subname: "मुण्डारी",
    script: "मुण्डारी बानी / देवनागरी",
    code: "unr",
    description: "मुंडा जनजाति की मातृभाषा (खूंटी, रांची व सिंहभूम)",
    isDefault: false,
    speakers: "लगभग 16 लाख वक्ता",
    color: "blue",
    icon: "feather",
  },
  {
    id: "ho",
    name: "हो",
    subname: "हो",
    script: "वारंग क्षिति",
    code: "hoc",
    description: "कोल्हान प्रमंडल की प्रमुख जनजातीय भाषा",
    isDefault: false,
    speakers: "लगभग 14 लाख वक्ता",
    color: "orange",
    icon: "sparkle",
  },
  {
    id: "kurukh",
    name: "कुड़ुख",
    subname: "कुड़ुख",
    script: "तोलोंग सिकि",
    code: "kru",
    description: "उरांव समुदाय की द्राविड़ भाषा (गुमला, लोहरदगा)",
    isDefault: false,
    speakers: "लगभग 20 लाख वक्ता",
    color: "purple",
    icon: "sun",
  },
  {
    id: "kharia",
    name: "खड़िया",
    subname: "खड़िया",
    script: "देवनागरी",
    code: "khr",
    description: "सिमडेगा व गुमला क्षेत्र की ऑस्ट्रो-एशियाई भाषा",
    isDefault: false,
    speakers: "लगभग 3 लाख वक्ता",
    color: "rose",
    icon: "leaf",
  },
  {
    id: "english",
    name: "अन्य संदर्भ भाषा",
    subname: "सहायक भाषा",
    script: "देवनागरी",
    code: "en",
    description: "सहायक शैक्षिक संदर्भ भाषा",
    isDefault: false,
    speakers: "सहायक भाषा",
    color: "slate",
    icon: "globe",
  },
];

export const TRANSLATIONS_DICT = {
  "नमस्ते, आप कैसे हैं?": {
    santhali: {
      native: "सगात, आय उसनेन्जो ही?",
      phonetic: "सगात, आय उसनेन्जो ही?",
      meaning: "नमस्ते, आप कैसे हैं?",
    },
    ho: {
      native: "जोहार, अम चिलका मेनामा?",
      phonetic: "जोहार, अम चिलका मेनामा?",
      meaning: "नमस्ते, आप कैसे हैं?",
    },
    mundari: {
      native: "जोहार, अम चिकना मेनामा?",
      phonetic: "जोहार, अम चिकना मेनामा?",
      meaning: "नमस्ते, आप कैसे हैं?",
    },
  },
  "यह एक किताब है।": {
    santhali: {
      native: "मिदता इसाए इम। (पुथी)",
      phonetic: "मिदता इसाए इम।",
      meaning: "यह एक पुस्तक है।",
    },
    ho: {
      native: "नेया मियाद पुथी तनाः।",
      phonetic: "नेया मियाद पुथी तनाः।",
      meaning: "यह एक पुस्तक है।",
    },
    mundari: {
      native: "नेया मियाद पुथी मेनाः।",
      phonetic: "नेया मियाद पुथी मेनाः।",
      meaning: "यह एक पुस्तक है।",
    },
  },
  "हम स्कूल जा रहे हैं।": {
    santhali: {
      native: "इम दुरूब राय ओलोऐते।",
      phonetic: "इम दुरूब राय ओलोऐते।",
      meaning: "हम सब विद्यालय जा रहे हैं।",
    },
    ho: {
      native: "अले स्कूल ते सेनोटेन।",
      phonetic: "अले स्कूल ते सेनोटेन।",
      meaning: "हम सब विद्यालय जा रहे हैं।",
    },
    mundari: {
      native: "अबू इतून आसड़ा ते सेनोटेन।",
      phonetic: "अबू इतून आसड़ा ते सेनोटेन।",
      meaning: "हम सब विद्यालय जा रहे हैं।",
    },
  },
  "सूरज पूर्व दिशा से निकलता है।": {
    santhali: {
      native: "सिंगी सामंग साहा सेण ओड़ोकः आ।",
      phonetic: "सिंगी सामंग साहा सेण ओड़ोकः आ।",
      meaning: "सूर्य पूर्व दिशा से उगता है।",
    },
    ho: {
      native: "सिंगी सामंग दिसुम ते ओड़ोकेना।",
      phonetic: "सिंगी सामंग दिसुम ते ओड़ोकेना।",
      meaning: "सूर्य पूर्व दिशा से उगता है।",
    },
    mundari: {
      native: "सिंगी सामंग साहा एते ओड़ोकेना।",
      phonetic: "सिंगी सामंग साहा एते ओड़ोकेना।",
      meaning: "सूर्य पूर्व दिशा से उगता है।",
    },
  },
  "बच्चे मैदान में खेल रहे हैं।": {
    santhali: {
      native: "गिदरा को तान्डी रेको एनाच काना।",
      phonetic: "गिदरा को तान्डी रेको एनाच काना।",
      meaning: "बच्चे मैदान में खेल रहे हैं।",
    },
    ho: {
      native: "हुपुडिंग को टोंगरी रेको एनाच काना।",
      phonetic: "हुपुडिंग को टोंगरी रेको एनाच काना।",
      meaning: "बच्चे मैदान में खेल रहे हैं।",
    },
    mundari: {
      native: "होन को पिरी रेको एनाच काना।",
      phonetic: "होन को पिरी रेको एनाच काना।",
      meaning: "बच्चे मैदान में खेल रहे हैं।",
    },
  },
  "जल ही जीवन है।": {
    santhali: {
      native: "दाः गे जिवोन काना।",
      phonetic: "दाः गे जिवोन काना।",
      meaning: "जल ही जीवन है।",
    },
    ho: {
      native: "दाः गे जिवोन तनाः।",
      phonetic: "दाः गे जिवोन तनाः।",
      meaning: "जल ही जीवन है।",
    },
    mundari: {
      native: "दाः गे जिवोन मेनाः।",
      phonetic: "दाः गे जिवोन मेनाः।",
      meaning: "जल ही जीवन है।",
    },
  },
};

export const RECENT_TRANSLATIONS = [
  {
    id: "t1",
    input: "नमस्ते, आप कैसे हैं?",
    output: "सगात, आय उसनेन्जो ही?",
    fromLang: "हिंदी",
    toLang: "संताली",
    time: "2 मिनट पहले",
  },
  {
    id: "t2",
    input: "यह एक किताब है।",
    output: "मिदता इसाए इम। (पुथी)",
    fromLang: "हिंदी",
    toLang: "संताली",
    time: "10 मिनट पहले",
  },
  {
    id: "t3",
    input: "हम स्कूल जा रहे हैं।",
    output: "इम दुरूब राय ओलोऐते।",
    fromLang: "हिंदी",
    toLang: "संताली",
    time: "1 घंटा पहले",
  },
];

export const TEXTBOOK_SAMPLES = [
  {
    id: "sun-energy",
    title: "सूरज और ऊष्मा",
    classNum: "कक्षा 2",
    subject: "पर्यावरण और भाषा",
    pageNumber: "पृष्ठ 24",
    extractedHindi: "सूरज पूर्व दिशा से निकलता है। वह हमें प्रकाश और ऊष्मा देता है। सूरज के कारण पृथ्वी पर जीवन संभव है।",
    translationSanthali: "लभरेश सोवा सही होरी, में शेलए, ग्रीकारा और जीवने तादी गारी करी, खो सायव वीकलय शेरोयी वो कर गोरे बनिंग रहे हैं। सिंगी सामंग साहा सेण ओड़ोकः आ। उन्नी अबोवाः मार्शल आर लोल ए एमाबोन काना।",
    simpleExplanation: "यहाँ 2 वाक्यों जैसे दी-दीओ खोज के देने हेतु जो रही खो दी थी तीरे ये-ही विधी कूँजी से शेर शेर के जैसे गरी लड़ी वो गोरे पौधे वॉकल खोज रहे हैं। जंगल में जीव-जंतुओं को जीने के साथ पोषण मिले। सूर्य की किरणों से ही पौधे भोजन बनाते हैं और बच्चों को खेलने की शक्ति मिलती है।",
    keyConcepts: ["दिशा पहचान (पूर्व)", "प्रकाश और गर्मी", "प्रकृति चक्र"],
    practiceQuestions: [
      "सूरज किस दिशा से निकलता है?",
      "सूरज से हमें क्या-क्या मिलता है?",
      "यदि सूरज न हो तो क्या होगा?"
    ],
  },
  {
    id: "matra-lesson",
    title: "मात्राएँ और शब्द",
    classNum: "कक्षा 2",
    subject: "हिंदी भाषा",
    pageNumber: "पृष्ठ 12",
    extractedHindi: "कमल हमारा राष्ट्रीय फूल है। यह कीचड़ में भी सुंदर खिलता है। पानी में रहने वाले जीव इसके पत्तों पर बैठते हैं।",
    translationSanthali: "कमल अबोवाः दिसोम बाहा काना। नोवा दाह रे साओन-साओन फूटोल काना। नोवा साकाम रे चेणे आर जिब-जियंतू को दुड़ुब आ।",
    simpleExplanation: "कमल (क + म + ल) बिना मात्रा का सरल शब्द है। लेकिन जब हम 'पानी' (प + ा + न + ी) लिखते हैं तो 'आ' और 'ई' की मात्रा जुड़ती है। संताली में इसे 'दाः' कहते हैं। बच्चों को बताएं कि कैसे मात्रा स्वर की ध्वनि बदलती है।",
    keyConcepts: ["'अ' अमात्रिक शब्द", "'आ' की मात्रा", "फूलों के नाम"],
    practiceQuestions: [
      "कमल शब्द में कौन-कौन से वर्ण हैं?",
      "'पानी' में कौन सी मात्रा लगी है?",
      "कमल कहाँ खिलता है?"
    ],
  },
  {
    id: "water-cycle",
    title: "जल ही जीवन है",
    classNum: "कक्षा 3",
    subject: "विज्ञान व भाषा",
    pageNumber: "पृष्ठ 38",
    extractedHindi: "बादल से वर्षा होती है। नदियाँ और तालाब जल से भर जाते हैं। सभी जीवों को जीवित रहने के लिए शुद्ध जल चाहिए।",
    translationSanthali: "रीमिल खोन दाह जोरोह आ। गाडा आर पुखरी दाह ते पेरेच आ। जोतो जिवोन बांचाओ ताहेंन लागीत साफा दाह दारकार।",
    simpleExplanation: "आसमान में काले मेघ (बादल) जब ठंडे होते हैं, तो रिमझिम बारिश होती है। गांव के डांड़ी (कुआं), जोरिया (नाला) और बांध पानी से लबालब हो जाते हैं। संताली में वर्षा को 'दाह' या 'दाग' कहते हैं।",
    keyConcepts: ["बादल और वर्षा", "जल संरक्षण", "शुद्ध पेयजल"],
    practiceQuestions: [
      "बादल कैसे बनते हैं?",
      "बरसात का पानी कहाँ जमा होता है?",
      "जल को शुद्ध कैसे रखा जाए?"
    ],
  }
];

export const WORKSHEET_TOPICS = [
  { id: "matra", name: "मात्राएँ (आ, इ, ई, उ, ऊ)" },
  { id: "swar-vyanjan", name: "स्वर और व्यंजन" },
  { id: "sangya", name: "संज्ञा और नाम वाले शब्द" },
  { id: "sarvanam", name: "सर्वनाम का प्रयोग" },
  { id: "vilom", name: "विलोम शब्द" },
  { id: "paryayvachi", name: "पर्यायवाची शब्द" },
  { id: "ginti", name: "गिनती १ से २०" },
];

export const SAMPLE_WORKSHEETS = {
  matra: {
    title: "हिंदी — मात्राएं",
    classLevel: "कक्षा 2",
    instructions: "प्रश्न 1: कोष्ठक में दिए गए सही वर्ण/मात्रा को चुनकर रिक्त स्थान भरिए:",
    questions: [
      { id: 1, prompt: "१. क __ ल", options: ["म", "ली"], answer: "म (कमल)" },
      { id: 2, prompt: "२. ग __ य", options: ["उ", "ा"], answer: "ा (गाय)" },
      { id: 3, prompt: "३. गु __ लाब", options: ["ल", "बु"], answer: "ल (गुलाब)" },
      { id: 4, prompt: "४. कि __ ब", options: ["ता", "दा"], answer: "ता (किताब)" },
      { id: 5, prompt: "५. पा __", options: ["नी", "लू"], answer: "नी (पानी)" },
      { id: 6, prompt: "६. सू __ ज", options: ["र", "त"], answer: "र (सूरज)" },
      { id: 7, prompt: "७. से __", options: ["ब", "प"], answer: "ब (सेब)" },
      { id: 8, prompt: "८. ति __ ली", options: ["त", "म"], answer: "त (तितली)" },
      { id: 9, prompt: "९. पे __", options: ["ड़", "ट"], answer: "ड़ (पेड़)" },
      { id: 10, prompt: "१०. वि __ लय", options: ["द्या", "प्या"], answer: "द्या (विद्यालय)" },
    ],
    answerKey: ["१. म (कमल)", "२. ा (गाय)", "३. ल (गुलाब)", "४. ता (किताब)", "५. नी (पानी)", "६. र (सूरज)", "७. ब (सेब)", "८. त (तितली)", "९. डड़ (पेड़)", "१०. द्या (विद्यालय)"]
  },
  "swar-vyanjan": {
    title: "हिंदी — स्वर और व्यंजन पहचान",
    classLevel: "कक्षा 1",
    instructions: "प्रश्न: दिए गए वर्णों में से स्वर (अ, आ, इ, ई...) पर गोला लगाइए और व्यंजन छांटिए:",
    questions: [
      { id: 1, prompt: "१. [ क, अ, ख, आ ] में से स्वर पहचानें", options: ["अ, आ", "क, ख"], answer: "अ, आ" },
      { id: 2, prompt: "२. 'इ' से शुरू होने वाला शब्द चुनें:", options: ["इमली", "कमल"], answer: "इमली" },
      { id: 3, prompt: "३. 'क' वर्ग का तीसरा वर्ण कौन सा है?", options: ["ग", "घ"], answer: "ग" },
      { id: 4, prompt: "४. खाली स्थान भरें: च, छ, __, झ", options: ["ज", "ञ"], answer: "ज" },
      { id: 5, prompt: "५. 'उ' की ध्वनि वाला शब्द:", options: ["उल्लू", "अनार"], answer: "उल्लू" },
    ],
    answerKey: ["१. अ, आ (स्वर)", "२. इमली", "३. ग", "४. ज", "५. उल्लू"]
  },
  sangya: {
    title: "हिंदी — संज्ञा (नाम वाले शब्द)",
    classLevel: "कक्षा 3",
    instructions: "प्रश्न: नीचे दिए गए वाक्यों में से नाम वाले शब्द (संज्ञा) चुनिए:",
    questions: [
      { id: 1, prompt: "१. 'अनन्या स्कूल जा रही है।' में व्यक्तिवाचक संज्ञा:", options: ["अनन्या", "जा रही"], answer: "अनन्या" },
      { id: 2, prompt: "२. वस्तु का नाम पहचानें: [ दौड़ना, पुस्तक, सुंदर ]", options: ["पुस्तक", "सुंदर"], answer: "पुस्तक" },
      { id: 3, prompt: "३. स्थान का नाम चुनें: [ रांची, खेलना, बड़ा ]", options: ["रांची", "खेलना"], answer: "रांची" },
      { id: 4, prompt: "४. पशु का नाम चुनें: [ गाय, मीठा, गाना ]", options: ["गाय", "गाना"], answer: "गाय" },
      { id: 5, prompt: "५. 'पेड़ पर चिड़िया बैठी है।' में संज्ञा शब्द:", options: ["पेड़, चिड़िया", "पर, बैठी"], answer: "पेड़, चिड़िया" },
    ],
    answerKey: ["१. अनन्या", "२. पुस्तक", "३. रांची", "४. गाय", "५. पेड़, चिड़िया"]
  }
};

export const FLASHCARD_ITEMS = [
  {
    id: 1,
    hindiWord: "नमस्ते",
    pronunciation: "नमस्ते",
    meaningHindi: "अभिवादन / नमस्कार",
    meaningEnglish: "अभिवादन / नमस्कार",
    translations: {
      santhali: "सगात / जोहार",
      ho: "जोहार",
      mundari: "जोहार",
    },
    category: "दैनिक शब्द",
    classLevel: "कक्षा 1",
    exampleSentence: "हम बड़ों को हाथ जोड़कर नमस्ते कहते हैं।",
    illustrationType: "namaste",
    icon: "🙏",
  },
  {
    id: 2,
    hindiWord: "जल",
    pronunciation: "जल (पानी)",
    meaningHindi: "पीने का स्वच्छ जल",
    meaningEnglish: "पीने का स्वच्छ जल",
    translations: {
      santhali: "दाः",
      ho: "दाः",
      mundari: "दाः",
    },
    category: "प्रकृति",
    classLevel: "कक्षा 1",
    exampleSentence: "हमें प्रतिदिन स्वच्छ जल पीना चाहिए।",
    illustrationType: "water",
    icon: "💧",
  },
  {
    id: 3,
    hindiWord: "विद्यालय",
    pronunciation: "विद्यालय",
    meaningHindi: "पाठशाला / ज्ञान का स्थान",
    meaningEnglish: "पाठशाला / ज्ञान का स्थान",
    translations: {
      santhali: "इतून आसड़ा",
      ho: "ओड़ाः / विद्यालय",
      mundari: "इतून आसड़ा",
    },
    category: "विद्यालय",
    classLevel: "कक्षा 1",
    exampleSentence: "बच्चे प्रतिदिन हंसते-गाते विद्यालय आते हैं।",
    illustrationType: "school",
    icon: "🏫",
  },
  {
    id: 4,
    hindiWord: "पुस्तक",
    pronunciation: "पुस्तक (किताब)",
    meaningHindi: "ज्ञान-पुस्तिका / ग्रंथ",
    meaningEnglish: "ज्ञान-पुस्तिका / ग्रंथ",
    translations: {
      santhali: "पुथी",
      ho: "पुथी",
      mundari: "पुथी",
    },
    category: "विद्यालय",
    classLevel: "कक्षा 1",
    exampleSentence: "पुस्तक पढ़ने से हमारा ज्ञान बढ़ता है।",
    illustrationType: "book",
    icon: "📖",
  },
  {
    id: 5,
    hindiWord: "मित्र",
    pronunciation: "मित्र (दोस्त)",
    meaningHindi: "सखा / पक्का साथी",
    meaningEnglish: "सखा / पक्का साथी",
    translations: {
      santhali: "गाते",
      ho: "गाते",
      mundari: "गाते",
    },
    category: "संबंध",
    classLevel: "कक्षा 1",
    exampleSentence: "रवि और अमन पक्के मित्र हैं।",
    illustrationType: "friend",
    icon: "🤝",
  },
  {
    id: 6,
    hindiWord: "सूर्य",
    pronunciation: "सूर्य (सूरज)",
    meaningHindi: "दिन का प्रकाश व तेज",
    meaningEnglish: "दिन का प्रकाश व तेज",
    translations: {
      santhali: "सिंगी",
      ho: "सिंगी",
      mundari: "सिंगी",
    },
    category: "प्रकृति",
    classLevel: "कक्षा 1",
    exampleSentence: "सुबह सूर्य निकलते ही चारों ओर उजाला हो जाता है।",
    illustrationType: "sun",
    icon: "☀️",
  },
  {
    id: 7,
    hindiWord: "वृक्ष",
    pronunciation: "वृक्ष (पेड़)",
    meaningHindi: "पेड़-पौधे / हरियाली",
    meaningEnglish: "पेड़-पौधे / हरियाली",
    translations: {
      santhali: "दारे",
      ho: "दारे",
      mundari: "दारे",
    },
    category: "प्रकृति",
    classLevel: "कक्षा 1",
    exampleSentence: "वृक्ष हमें छाया, फल और शुद्ध वायु देते हैं।",
    illustrationType: "tree",
    icon: "🌳",
  },
  {
    id: 8,
    hindiWord: "पक्षी",
    pronunciation: "पक्षी (चिड़िया)",
    meaningHindi: "गगन में उड़ने वाली चिड़िया",
    meaningEnglish: "गगन में उड़ने वाली चिड़िया",
    translations: {
      santhali: "चँड़े",
      ho: "चेणे",
      mundari: "चेणे",
    },
    category: "प्रकृति",
    classLevel: "कक्षा 1",
    exampleSentence: "सुबह-सुबह पक्षी मीठे स्वर में चहचहाते हैं।",
    illustrationType: "bird",
    icon: "🐦",
  },
  {
    id: 9,
    hindiWord: "घर",
    pronunciation: "घर",
    meaningHindi: "परिवार का आवास स्थान",
    meaningEnglish: "परिवार का आवास स्थान",
    translations: {
      santhali: "ओड़ाः",
      ho: "ओड़ाः",
      mundari: "ओड़ाः",
    },
    category: "दैनिक शब्द",
    classLevel: "कक्षा 1",
    exampleSentence: "हम सब मिलकर अपने घर को सुंदर रखते हैं।",
    illustrationType: "home",
    icon: "🏠",
  },
  {
    id: 10,
    hindiWord: "फल",
    pronunciation: "फल",
    meaningHindi: "स्वादिष्ट प्राकृतिक आहार",
    meaningEnglish: "स्वादिष्ट प्राकृतिक आहार",
    translations: {
      santhali: "जो",
      ho: "जो",
      mundari: "जो",
    },
    category: "दैनिक शब्द",
    classLevel: "कक्षा 1",
    exampleSentence: "ताजे फल खाने से शरीर स्वस्थ रहता है।",
    illustrationType: "fruit",
    icon: "🍎",
  },
];

export const CURRICULUM_LESSONS = [
  {
    id: "lesson-1",
    title: "स्वर और व्यंजन",
    subtitle: "हिंदी वर्णमाला की पहचान",
    classNum: "कक्षा 2",
    subject: "हिंदी",
    duration: "8 पाठ • 20 मिनट",
    progress: 60,
    status: "in_progress",
    statusLabel: "जारी रखें",
    overview: "हिंदी वर्णमाला के 11 स्वर और 33 व्यंजनों का संताली व हो ध्वनियों के साथ तुलनात्मक अध्ययन।",
    units: [
      { num: "१", name: "अ से अः तक स्वर पहचान", completed: true },
      { num: "२", name: "क से ङ वर्ग उच्चारण", completed: true },
      { num: "३", name: "च और ट वर्ग अभ्यास", completed: true },
      { num: "४", name: "त और प वर्ग ध्वनियाँ", completed: false },
    ],
    bilingualNote: "संताली में अल्पप्राण व महाप्राण ध्वनियों का अंतर समझाने के लिए स्थानीय उदाहरण दें (जैसे: 'दाह' और 'घट')।",
  },
  {
    id: "lesson-2",
    title: "मात्राएं",
    subtitle: "मात्राओं की पहचान और प्रयोग",
    classNum: "कक्षा 2",
    subject: "हिंदी",
    duration: "10 पाठ • 25 मिनट",
    progress: 30,
    status: "in_progress",
    statusLabel: "जारी रखें",
    overview: "स्वर जब व्यंजन के साथ मिलते हैं तो उनका रूप मात्रा कहलाता है। आ, इ, ई, उ, ऊ का अभ्यास।",
    units: [
      { num: "१", name: "आ (ा) की मात्रा वाले शब्द", completed: true },
      { num: "२", name: "इ (ि) और ई (ी) में अंतर", completed: false },
      { num: "३", name: "उ (ु) और ऊ (ू) ध्वनि अभ्यास", completed: false },
      { num: "४", name: "ए (े) और ऐ (ै) वाक्य निर्माण", completed: false },
    ],
    bilingualNote: "मात्रा पहचान में सबसे अधिक त्रुटियाँ 'ि' और 'ी' में देखी गई हैं। फ़्लैशकार्ड का प्रयोग करें।",
  },
  {
    id: "lesson-3",
    title: "संज्ञा",
    subtitle: "संज्ञा की पहचान",
    classNum: "कक्षा 2",
    subject: "हिंदी",
    duration: "6 पाठ • 15 मिनट",
    progress: 40,
    status: "in_progress",
    statusLabel: "शुरू करें",
    overview: "किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं। विद्यालय व कक्षा के परिवेश से उदाहरण।",
    units: [
      { num: "१", name: "कक्षा की वस्तुओं के नाम", completed: true },
      { num: "२", name: "परिवार व मित्रों के नाम", completed: true },
      { num: "३", name: "गांव व स्थानों के नाम", completed: false },
    ],
    bilingualNote: "संताली में नाम वाले शब्दों को 'नुतुम' कहते हैं। बच्चों से उनके घर की वस्तुओं के नुतुम पूछें।",
  },
  {
    id: "lesson-4",
    title: "सर्वनाम",
    subtitle: "सर्वनाम का प्रयोग",
    classNum: "कक्षा 2",
    subject: "हिंदी",
    duration: "5 पाठ • 15 मिनट",
    progress: 10,
    status: "in_progress",
    statusLabel: "जारी रखें",
    overview: "संज्ञा के स्थान पर प्रयोग होने वाले शब्द: मैं, हम, तुम, वह, वे।",
    units: [
      { num: "१", name: "मैं और हम का प्रयोग", completed: true },
      { num: "२", name: "तुम और आप में सम्मान", completed: false },
      { num: "३", name: "वह और वे बहुवचन", completed: false },
    ],
    bilingualNote: "संताली में 'इंज' (मैं), 'अबो' (हम), 'अम' (तुम) का प्रत्यक्ष अनुवाद समझाएं।",
  },
  {
    id: "lesson-5",
    title: "विलोम शब्द",
    subtitle: "विलोम शब्दों की पहचान",
    classNum: "कक्षा 2",
    subject: "हिंदी",
    duration: "8 पाठ • 20 मिनट",
    progress: 0,
    status: "not_started",
    statusLabel: "शुरू करें",
    overview: "एक-दूसरे का विपरीत या उल्टा अर्थ बताने वाले शब्द (जैसे: दिन-रात, बड़ा-छोटा)।",
    units: [
      { num: "१", name: "आकार: बड़ा - छोटा", completed: false },
      { num: "२", name: "समय: दिन - रात", completed: false },
      { num: "३", name: "दिशा: ऊपर - नीचे", completed: false },
    ],
    bilingualNote: "विपरीत शब्दों को चित्र और अभिनय के माध्यम से खेल-खेल में सिखाएं।",
  },
  {
    id: "lesson-6",
    title: "वाक्य निर्माण",
    subtitle: "सरल वाक्य बनाना",
    classNum: "कक्षा 2",
    subject: "हिंदी",
    duration: "6 पाठ • 15 मिनट",
    progress: 0,
    status: "not_started",
    statusLabel: "शुरू करें",
    overview: "शब्दों के सही मेल से सार्थक वाक्य बनाने का अभ्यास। कर्ता + कर्म + क्रिया।",
    units: [
      { num: "१", name: "दो शब्दों के वाक्य", completed: false },
      { num: "२", name: "तीन शब्दों के वाक्य", completed: false },
      { num: "३", name: "प्रश्नवाचक वाक्य बनाना", completed: false },
    ],
    bilingualNote: "हिंदी और संताली की वाक्य रचना में क्रिया के स्थान का ध्यान रखें।",
  },
];

export const STUDENTS_PROGRESS = [
  {
    id: "s1",
    name: "रवि",
    avatar: "👦",
    classNum: "कक्षा 2",
    motherTongue: "संताली",
    conceptMastery: 82,
    languageMastery: 45,
    quizPerformance: 78,
    status: "भाषा सहायता आवश्यक",
    statusType: "alert",
    badgeColor: "amber",
    commonMistake: "मात्रा पहचान (ि और ी)",
    insight: "रवि अवधारणा को 82% समझता है, लेकिन मानक हिंदी शब्दावली में 45% की भाषा-अड़चन है। संताली उदाहरणों से अभ्यास कराएं।",
    recommendedWorksheet: "मात्राएँ - सचित्र द्विभाषी कार्यपत्रक",
    attendance: "94%",
    lastQuizScore: "16 / 20",
  },
  {
    id: "s2",
    name: "सीमा",
    avatar: "👧",
    classNum: "कक्षा 2",
    motherTongue: "हो",
    conceptMastery: 70,
    languageMastery: 68,
    quizPerformance: 65,
    status: "अवधारणा पुनरावृत्ति",
    statusType: "warning",
    badgeColor: "orange",
    commonMistake: "संज्ञा भेद (जातिवाचक व व्यक्तिवाचक)",
    insight: "सीमा की भाषा व अवधारणा दोनों में मध्यम पकड़ है। बुनियादी अवधारणा की एक बार पुनरावृत्ति आवश्यक है।",
    recommendedWorksheet: "संज्ञा पहचान - खेल आधारित अभ्यास",
    attendance: "88%",
    lastQuizScore: "13 / 20",
  },
  {
    id: "s3",
    name: "अमन",
    avatar: "👦",
    classNum: "कक्षा 2",
    motherTongue: "मुण्डारी",
    conceptMastery: 56,
    languageMastery: 40,
    quizPerformance: 50,
    status: "अतिरिक्त सहायता",
    statusType: "danger",
    badgeColor: "rose",
    commonMistake: "स्वर-व्यंजन मिश्रण",
    insight: "अमन को दोनों स्तरों पर अतिरिक्त शिक्षक सहायता चाहिए। मुण्डारी भाषा में छोटे समूहों में पुनराभ्यास कराएं।",
    recommendedWorksheet: "स्वर और व्यंजन आधारभूत कार्ड",
    attendance: "76%",
    lastQuizScore: "10 / 20",
  },
  {
    id: "s4",
    name: "प्रीति",
    avatar: "👧",
    classNum: "कक्षा 2",
    motherTongue: "संताली",
    conceptMastery: 90,
    languageMastery: 85,
    quizPerformance: 88,
    status: "अच्छी प्रगति",
    statusType: "success",
    badgeColor: "emerald",
    commonMistake: "कोई गंभीर त्रुटि नहीं",
    insight: "प्रीति दोनों भाषाओं में उत्कृष्ट सामंजस्य दिखा रही है। कक्षा में साथी-शिक्षक बना सकते हैं।",
    recommendedWorksheet: "उन्नत वाक्य निर्माण व पठन",
    attendance: "98%",
    lastQuizScore: "19 / 20",
  },
  {
    id: "s5",
    name: "सोहन",
    avatar: "👦",
    classNum: "कक्षा 2",
    motherTongue: "कुड़ुख",
    conceptMastery: 60,
    languageMastery: 55,
    quizPerformance: 58,
    status: "नियमित अभ्यास",
    statusType: "info",
    badgeColor: "blue",
    commonMistake: "ई/ई मात्रा वर्तनी",
    insight: "सोहन नियमित अभ्यास से निरंतर सुधार कर रहा है। दैनिक 10 मिनट फ़्लैशकार्ड वाचन से लाभ होगा।",
    recommendedWorksheet: "वर्तनी सुधार अभ्यास पत्र",
    attendance: "85%",
    lastQuizScore: "12 / 20",
  },
  {
    id: "s6",
    name: "कविता",
    avatar: "👧",
    classNum: "कक्षा 2",
    motherTongue: "संताली",
    conceptMastery: 75,
    languageMastery: 72,
    quizPerformance: 70,
    status: "सुधार की संभावना",
    statusType: "info",
    badgeColor: "purple",
    commonMistake: "स्त्रीलिंग/पुल्लिंग क्रिया रूप",
    insight: "कविता का उत्साह बहुत अच्छा है। क्रिया रूपों के सही प्रयोग पर ध्यान केंद्रित करने की आवश्यकता है।",
    recommendedWorksheet: "लिंग व क्रिया मिलान पत्रक",
    attendance: "92%",
    lastQuizScore: "15 / 20",
  },
];

export const TEACH_BACK_MODULES = [
  {
    id: "tb-1",
    lesson: "स्वर और व्यंजन",
    concept: "स्वर और व्यंजन में क्या अंतर है?",
    questionPrompt: "बच्चे से कहें: 'स्वर और व्यंजन में क्या फर्क है, इसे अपने शब्दों या अपनी भाषा में समझाएं?'",
    sampleAudioAnswer: "स्वर वे ध्वनियाँ हैं जिन्हें बोलने में किसी दूसरे वर्ण की सहायता नहीं चाहिए, जैसे अ, आ। और व्यंजन में स्वर की मदद लेनी पड़ती है जैसे क में अ मिला होता है।",
    motherTongueAnswer: "अबो अ, आ दो बिना एटाः साड़े तेगेबोन रोड़ा, मेनखान 'क' रोड़ लागीत अ साड़े दारकार आ।",
    aiEvaluation: {
      conceptUnderstanding: 92,
      conceptGrade: "उत्कृष्ट (92%)",
      languageClarity: 78,
      languageClarityLabel: "संतोषजनक (78%)",
      keyPointsCovered: [
        "✓ स्वतंत्र उच्चारण की अवधारणा स्पष्ट",
        "✓ स्वर की सहायता से व्यंजन बनने का उदाहरण दिया",
        "✓ मातृभाषा व हिंदी का स्वाभाविक समन्वय",
      ],
      feedbackHindi: "बच्चे ने अवधारणा को पूरी तरह सही समझा है। अब इसे संताली में भी 2 और उदाहरण देकर मौखिक रूप से पुष्ट करें।",
      suggestedActivity: "वर्ण-कूद खेल: फर्श पर स्वर व व्यंजन के गोल चक्र बनाकर कूदने का अभ्यास कराएं।",
    }
  },
  {
    id: "tb-2",
    lesson: "मात्राएं",
    concept: "मात्रा क्या होती है और क्यों लगाते हैं?",
    questionPrompt: "बच्चे से कहें: 'मात्रा क्या होती है, जब हम क में आ जोड़ते हैं तो क्या बनता है?'",
    sampleAudioAnswer: "मात्रा स्वर का छोटा निशान है। जब क में आ की मात्रा लगाते हैं तो 'का' बन जाता है जैसे कान या काम।",
    motherTongueAnswer: "मात्रा दो साड़े रेयाः चिनहा काना। क रे आ लागाओ लेनखान 'का' हुयुः आ।",
    aiEvaluation: {
      conceptUnderstanding: 88,
      conceptGrade: "बहुत अच्छा (88%)",
      languageClarity: 82,
      languageClarityLabel: "बहुत अच्छा (82%)",
      keyPointsCovered: [
        "✓ मात्रा को स्वर का चिन्ह बताया",
        "✓ क + आ = का का सही उच्चारण व उदाहरण",
      ],
      feedbackHindi: "बहुत सुंदर उत्तर! बच्चे का आत्मविश्वास बढ़ाने के लिए कक्षा में ताली बजवाएं।",
      suggestedActivity: "मात्रा कार्ड मिलान प्रतियोगिता।",
    }
  }
];

export const OFFLINE_STORAGE_DATA = {
  isOffline: true,
  lastSynced: "3 सितम्बर 2026, शाम 4:30 बजे",
  usedStorageMB: 320,
  totalStorageMB: 2048,
  percentage: 16,
  resources: [
    { type: "पाठ (अध्याय)", count: 12, size: "145 एमबी", status: "सहेजा गया" },
    { type: "सहेजे गए कार्यपत्रक", count: 8, size: "48 एमबी", status: "सहेजा गया" },
    { type: "शब्द कार्ड संग्रह", count: 5, size: "62 एमबी", status: "सहेजा गया" },
    { type: "ऑफलाइन अनुवाद शब्दकोश", count: 3, size: "65 एमबी", status: "सहेजा गया (संताली, हो, मुण्डारी)" },
  ],
  packages: [
    { id: "p1", name: "कक्षा 1-2 हिंदी आधारभूत पैकेज (ऑफलाइन)", size: "120 एमबी", version: "संस्करण 2.4", isDownloaded: true },
    { id: "p2", name: "संताली-हिंदी द्विभाषी शब्दकोश व आवाज पैक", size: "85 एमबी", version: "संस्करण 1.8", isDownloaded: true },
    { id: "p3", name: "हो-हिंदी प्राथमिक शिक्षण सामग्री", size: "65 एमबी", version: "संस्करण 1.2", isDownloaded: true },
    { id: "p4", name: "कक्षा 3-5 उन्नत पठन व व्याकरण पैकेज", size: "140 एमबी", version: "संस्करण 2.1", isDownloaded: false },
  ]
};

// Real AI Backend TTS & Fallback Speech synthesis helper
let currentAudioElement = null;

export function playDevanagariAudio(text, langCode = "sat") {
  if (!text || !text.trim()) return false;

  // Attempt backend Santali / Hindi TTS endpoint first
  try {
    if (currentAudioElement) {
      currentAudioElement.pause();
      currentAudioElement = null;
    }
    const ttsUrl = `/api/v1/tts?text=${encodeURIComponent(text)}&target_language=${encodeURIComponent(langCode)}`;
    const audio = new Audio(ttsUrl);
    currentAudioElement = audio;
    audio.play().catch(err => {
      console.warn("Backend TTS playback failed, falling back to Web Speech API:", err);
      fallbackWebSpeech(text, langCode);
    });
    return true;
  } catch (e) {
    return fallbackWebSpeech(text, langCode);
  }
}

function fallbackWebSpeech(text, langCode) {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode.includes("sat") ? "hi-IN" : langCode;
      utterance.rate = 0.85;
      utterance.pitch = 1.05;
      window.speechSynthesis.speak(utterance);
      return true;
    } catch (e) {
      console.warn("SpeechSynthesis error:", e);
      return false;
    }
  }
  return false;
}
