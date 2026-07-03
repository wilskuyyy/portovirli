"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  Languages,
  Moon,
  Sun,
  Search,
  MapPin,
  Globe,
  Mail,
  CheckCircle,
  Briefcase,
  Database,
  MessageSquareShare,
  ArrowLeft,
  PieChart,
  TrendingUp,
  LineChart,
  Target,
  Coffee,
  Map,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";

// ============================================================================
// KAMUS BAHASA (BILINGUAL & DATA)
// ============================================================================
const dict = {
  id: {
    // Nav & General
    timezone: "Tersedia untuk EST/PST",
    english: "Bahasa Inggris C1",
    hireMe: "Rekrut Saya di Upwork",
    contactMe: "Email Saya",
    backHome: "Kembali ke Beranda Pilihan",

    // Landing Page
    welcome: "Pilih Ruang Kerja",
    welcomeSub:
      "Pilih jalur keahlian di bawah ini untuk melihat portofolio spesifik yang sesuai dengan kebutuhan bisnis Anda.",
    cardAdminTitle: "Admin & Virtual Assistant",
    cardAdminDesc:
      "Manajemen data akurat, dasbor Excel, pelacakan penjualan, dan dukungan administratif harian.",
    cardResearchTitle: "Market Research & Analysis",
    cardResearchDesc:
      "Pemetaan pasar, analisis kompetitor (SWOT), dan rekomendasi strategi bisnis berbasis data.",

    // Admin View
    adminRole: "Spesialis Entri Data & Asisten Virtual",
    adminDesc:
      "Profesional administratif yang sangat teliti dengan fokus pada manajemen data yang akurat, pelaporan Excel, dan efisiensi alur kerja. Berkomitmen pada 0% tingkat kesalahan.",
    tabAdmin1: "Manajemen Data",
    tabAdmin2: "Tools & CRM",
    dashTitle: "Dasbor Interaktif Penjualan",
    searchPlaceholder: "Cari pelanggan...",
    allStatus: "Semua Status",
    crmTitle: "Penguasaan Ekosistem Digital",
    crmDesc:
      "Mampu beradaptasi dengan cepat menggunakan berbagai perangkat lunak manajemen proyek dan CRM modern untuk mendukung operasional tim global.",

    adminData: [
      {
        id: "CUS-001",
        name: "PT Maju Bersama",
        segmen: "Corporate",
        nilai: "Rp 4.500.000",
        status: "Completed",
      },
      {
        id: "CUS-002",
        name: "Budi Santoso",
        segmen: "Individual",
        nilai: "Rp 750.000",
        status: "Pending",
      },
      {
        id: "CUS-003",
        name: "CV Prima Sejahtera",
        segmen: "SME",
        nilai: "Rp 2.800.000",
        status: "Completed",
      },
      {
        id: "CUS-004",
        name: "Ahmad Fauzi",
        segmen: "Individual",
        nilai: "Rp 750.000",
        status: "Overdue",
      },
      {
        id: "CUS-005",
        name: "Global Tech Inc.",
        segmen: "Corporate",
        nilai: "Rp 8.200.000",
        status: "Pending",
      },
      {
        id: "CUS-006",
        name: "Diana Retail",
        segmen: "SME",
        nilai: "Rp 1.500.000",
        status: "Completed",
      },
    ],

    // Research View
    researchRole: "Spesialis Riset Pasar & Analis Kompetitor",
    researchDesc:
      "Ahli dalam mengekstraksi data industri, memetakan lanskap kompetitor, dan menyusun laporan intelijen pasar untuk mendorong keputusan bisnis yang strategis.",
    tabRes1: "Overview Pasar",
    tabRes2: "Data Kompetitor",
    tabRes3: "SWOT & Strategi",
    resCaseStudy: "Studi Kasus: Lanskap Bisnis Kopi Susu Surabaya (2025)",

    resOverview: [
      {
        title: "Pertumbuhan Budget-Mid",
        desc: "Pasar kopi harga Rp 10k-25k tumbuh cepat, didorong populasi mahasiswa dan pekerja muda Surabaya.",
      },
      {
        title: "Hyper-Lokalisasi Area",
        desc: "Konsumen Surabaya Timur, Barat, & Utara berbeda. Outlet di residensial punya loyalitas lebih tinggi dari mal.",
      },
      {
        title: "Tren Clean Label",
        desc: "Brand yang transparan menggunakan gula aren asli & susu lokal Jatim mendapat ulasan jauh lebih positif.",
      },
    ],

    resCompetitors: [
      {
        brand: "Kopi Kenangan",
        segment: "Mid–High",
        price: "Rp 25k–45k",
        pro: "Brand kuat, App loyalty",
        con: "Kualitas tidak konsisten",
        rating: "⭐ 4.3",
      },
      {
        brand: "Janji Jiwa",
        segment: "Mid–High",
        price: "Rp 20k–40k",
        pro: "Pairing roti, emosional",
        con: "Ketergantungan mal",
        rating: "⭐ 4.4",
      },
      {
        brand: "Fore Coffee",
        segment: "Mid–High",
        price: "Rp 28k–55k",
        pro: "Desain premium, inovatif",
        con: "Harga kurang terjangkau",
        rating: "⭐ 4.2",
      },
      {
        brand: "Tuku",
        segment: "Mid",
        price: "Rp 18k–32k",
        pro: "Comfort food, viral",
        con: "Outlet sangat terbatas",
        rating: "⭐ 4.5",
      },
      {
        brand: "Kulo",
        segment: "Mid",
        price: "Rp 12k–22k",
        pro: "Ekspansi cepat, murah",
        con: "Kualitas standar",
        rating: "⭐ 4.1",
      },
    ],

    resSwot: {
      S: [
        "Demand pasar terbukti besar, tidak perlu edukasi",
        "Loyalitas tinggi pada brand lokal Surabaya",
        "Biaya masuk awal rendah (booth/gerobak)",
      ],
      W: [
        "Brand awareness nol di awal",
        "Sulit menjaga konsistensi rasa saat ekspansi",
        "Modal terbatas untuk lokasi premium",
      ],
      O: [
        "Celah di harga Rp 15k-25k dengan kualitas baik",
        "Area suburban belum tersentuh brand mapan",
        "Potensi viral organik via TikTok lokal",
      ],
      T: [
        "Perang harga sangat intens di bawah Rp 10k",
        "Saturasi di pusat kota Surabaya",
        "Algoritma GoFood/GrabFood tidak stabil",
      ],
    },

    resStrategy:
      "Pasar Surabaya masih terbuka lebar untuk segmen mid-quality (Rp 15k-25k). Rekomendasi utama: bangun identitas 'Kopi Arek Suroboyo', fokus penetrasi awal di area suburban residensial (bukan mal), dan optimalkan TikTok-First Strategy untuk menekan biaya akuisisi pelanggan awal.",

    // CTA
    ctaTitle: "Siap Mengoptimalkan Bisnis Anda?",
    ctaDesc:
      "Mari diskusikan bagaimana saya dapat membantu mengelola tugas administratif atau menyediakan data riset akurat untuk perusahaan Anda.",
  },
  en: {
    // Nav & General
    timezone: "Available for EST/PST",
    english: "Fluent English (C1)",
    hireMe: "Hire Me on Upwork",
    contactMe: "Email Me",
    backHome: "Back to Portfolio Selection",

    // Landing Page
    welcome: "Select Workspace",
    welcomeSub:
      "Please select an expertise track below to view specific portfolios tailored to your business needs.",
    cardAdminTitle: "Admin & Virtual Assistant",
    cardAdminDesc:
      "Accurate data management, Excel dashboards, sales tracking, and daily administrative support.",
    cardResearchTitle: "Market Research & Analysis",
    cardResearchDesc:
      "Market mapping, competitor analysis (SWOT), and data-driven business strategy recommendations.",

    // Admin View
    adminRole: "Data Entry Specialist & Virtual Assistant",
    adminDesc:
      "Detail-oriented administrative professional specializing in accurate data management, Excel reporting, and workflow efficiency. Committed to a 0% error rate.",
    tabAdmin1: "Data Management",
    tabAdmin2: "Tools & CRM",
    dashTitle: "Interactive Sales Dashboard",
    searchPlaceholder: "Search customer...",
    allStatus: "All Status",
    crmTitle: "Digital Workspace Mastery",
    crmDesc:
      "Highly adaptable and proficient in utilizing modern project management and CRM software to seamlessly support global remote teams.",

    adminData: [
      {
        id: "CUS-001",
        name: "PT Maju Bersama",
        segmen: "Corporate",
        nilai: "Rp 4.500.000",
        status: "Completed",
      },
      {
        id: "CUS-002",
        name: "Budi Santoso",
        segmen: "Individual",
        nilai: "Rp 750.000",
        status: "Pending",
      },
      {
        id: "CUS-003",
        name: "CV Prima Sejahtera",
        segmen: "SME",
        nilai: "Rp 2.800.000",
        status: "Completed",
      },
      {
        id: "CUS-004",
        name: "Ahmad Fauzi",
        segmen: "Individual",
        nilai: "Rp 750.000",
        status: "Overdue",
      },
      {
        id: "CUS-005",
        name: "Global Tech Inc.",
        segmen: "Corporate",
        nilai: "Rp 8.200.000",
        status: "Pending",
      },
      {
        id: "CUS-006",
        name: "Diana Retail",
        segmen: "SME",
        nilai: "Rp 1.500.000",
        status: "Completed",
      },
    ],

    // Research View
    researchRole: "Market Research & Competitor Analyst",
    researchDesc:
      "Expert at extracting industry data, mapping competitive landscapes, and compiling market intelligence reports to drive strategic business decisions.",
    tabRes1: "Market Overview",
    tabRes2: "Competitor Data",
    tabRes3: "SWOT & Strategy",
    resCaseStudy:
      "Case Study: Coffee Shop Competitive Landscape in Surabaya (2025)",

    resOverview: [
      {
        title: "Budget-Mid Tier Growth",
        desc: "The Rp 10k-25k coffee market is growing rapidly, driven by Surabaya's large student and young professional population.",
      },
      {
        title: "Area Hyper-Localization",
        desc: "Consumers in East, West, & North Surabaya behave differently. Suburban outlets show higher loyalty rates than mall branches.",
      },
      {
        title: "Clean Label Trend",
        desc: "Brands transparent about using authentic palm sugar & local East Java milk receive significantly better online reviews.",
      },
    ],

    resCompetitors: [
      {
        brand: "Kopi Kenangan",
        segment: "Mid–High",
        price: "Rp 25k–45k",
        pro: "Strong brand, App loyalty",
        con: "Inconsistent quality",
        rating: "⭐ 4.3",
      },
      {
        brand: "Janji Jiwa",
        segment: "Mid–High",
        price: "Rp 20k–40k",
        pro: "Toast pairing, emotional tie",
        con: "Mall dependency",
        rating: "⭐ 4.4",
      },
      {
        brand: "Fore Coffee",
        segment: "Mid–High",
        price: "Rp 28k–55k",
        pro: "Premium design, innovative",
        con: "Less affordable pricing",
        rating: "⭐ 4.2",
      },
      {
        brand: "Tuku",
        segment: "Mid",
        price: "Rp 18k–32k",
        pro: "Comfort food, highly viral",
        con: "Very limited outlets",
        rating: "⭐ 4.5",
      },
      {
        brand: "Kulo",
        segment: "Mid",
        price: "Rp 12k–22k",
        pro: "Rapid expansion, cheap",
        con: "Standard taste quality",
        rating: "⭐ 4.1",
      },
    ],

    resSwot: {
      S: [
        "Proven massive market demand, no education needed",
        "High loyalty to authentic local Surabaya brands",
        "Low initial barrier to entry (booth/cart model)",
      ],
      W: [
        "Zero brand awareness at launch",
        "Difficulty maintaining taste consistency during expansion",
        "Limited capital for premium locations",
      ],
      O: [
        "Market gap in the Rp 15k-25k mid-quality segment",
        "Suburban areas remain untapped by major brands",
        "High potential for organic virality via local TikTok",
      ],
      T: [
        "Intense price war in the below Rp 10k segment",
        "Market saturation in central Surabaya areas",
        "Unpredictable food delivery app algorithms",
      ],
    },

    resStrategy:
      "The Surabaya market remains wide open for the mid-quality segment (Rp 15k-25k). Key recommendations: build a strong local 'Kopi Arek' identity, focus initial penetration on suburban residential areas rather than malls, and optimize a TikTok-First Strategy to lower early customer acquisition costs.",

    // CTA
    ctaTitle: "Ready to Streamline Your Business?",
    ctaDesc:
      "Let's discuss how I can help manage your administrative tasks or provide accurate research data for your company.",
  },
};

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"id" | "en">("en");
  const [view, setView] = useState<"landing" | "admin" | "research">("landing");

  // Tabs State
  const [activeAdminTab, setActiveAdminTab] = useState<"data" | "crm">("data");
  const [activeResearchTab, setActiveResearchTab] = useState<
    "overview" | "competitor" | "strategy"
  >("overview");

  // Search State
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const t = dict[lang];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Framer Motion Variants untuk Animasi
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const filteredAdminData = t.adminData.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchFilter = filterStatus === "All" || item.status === filterStatus;
    return matchSearch && matchFilter;
  });

  // ================= KOMPONEN HEADER & CTA GLOBAL =================
  const renderFloatingControls = () => (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setLang(lang === "id" ? "en" : "id")}
        className="flex items-center gap-2 px-3 py-2 md:px-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-md border border-salmon-200 dark:border-slate-700 text-salmon-700 dark:text-salmon-300 text-[10px] md:text-xs font-bold hover:scale-105 transition-transform"
      >
        <Languages size={14} />{" "}
        <span className="hidden sm:inline">
          {lang === "id" ? "INDONESIA" : "ENGLISH"}
        </span>
        <span className="sm:hidden">{lang.toUpperCase()}</span>
      </button>
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-md border border-salmon-200 dark:border-slate-700 text-salmon-700 dark:text-salmon-300 hover:scale-105 transition-transform"
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );

  const renderCTA = () => (
    <section className="py-16 md:py-20 bg-salmon-600 dark:bg-salmon-800 text-white text-center px-6 border-t-4 border-salmon-400 dark:border-salmon-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-3xl mx-auto"
      >
        <MessageSquareShare
          size={40}
          className="mx-auto mb-6 text-salmon-200 opacity-80"
        />
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          {t.ctaTitle}
        </h2>
        <p className="text-salmon-50 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
          {t.ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-white text-salmon-700 px-8 py-3.5 md:py-4 rounded-xl font-black text-base md:text-lg hover:bg-slate-100 transition-colors shadow-xl">
            {t.hireMe}
          </button>
          <span className="hidden sm:block text-salmon-200">or</span>
          <button className="w-full sm:w-auto bg-transparent border-2 border-salmon-300 text-white px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-salmon-700 dark:hover:bg-salmon-700 transition-colors">
            {t.contactMe}
          </button>
        </div>
      </motion.div>
    </section>
  );

  const renderProfileHeader = (role: string, desc: string) => (
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 px-4 md:px-12 lg:px-20 bg-white dark:bg-slate-900 border-b border-salmon-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-linear-to-br from-salmon-300 to-salmon-500 p-1 shadow-xl"
        >
          <div className="w-full h-full rounded-full bg-salmon-50 dark:bg-slate-800 border-4 border-white dark:border-slate-900 flex items-center justify-center overflow-hidden">
            <span className="text-3xl md:text-4xl font-serif font-bold text-salmon-400">
              VK
            </span>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center md:text-left flex-1"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
            VIRLI GALUH KINANTI
          </h1>
          <h2 className="text-base md:text-xl text-salmon-600 font-semibold mb-3 md:mb-4">
            {role}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl text-sm md:text-base leading-relaxed">
            {desc}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
            <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold">
              <Globe size={14} className="text-blue-500" /> {t.timezone}
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold">
              <CheckCircle size={14} className="text-green-500" /> {t.english}
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold">
              <MapPin size={14} className="text-salmon-500" /> Remote ID
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // ================= TAMPILAN 1: LANDING PAGE =================
  if (view === "landing") {
    return (
      <main className="min-h-screen bg-salmon-50/30 dark:bg-slate-950 flex flex-col justify-center items-center px-4 md:px-6 py-20 transition-colors duration-300">
        {renderFloatingControls()}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto w-full"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-salmon-500 font-bold tracking-widest uppercase mb-3 text-xs md:text-sm"
          >
            VIRLI GALUH KINANTI
          </motion.h2>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-3xl md:text-6xl text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight"
          >
            {t.welcome}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-slate-600 dark:text-slate-400 text-sm md:text-lg mb-10 md:mb-12 max-w-xl mx-auto px-2"
          >
            {t.welcomeSub}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full px-2">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              onClick={() => setView("admin")}
              className="cursor-pointer bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-salmon-400 rounded-3xl p-6 md:p-8 text-left shadow-lg shadow-salmon-100/50 dark:shadow-none transition-all group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-salmon-100 dark:bg-salmon-900/30 text-salmon-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={28} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-slate-900 dark:text-white mb-2 md:mb-3">
                {t.cardAdminTitle}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                {t.cardAdminDesc}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              onClick={() => setView("research")}
              className="cursor-pointer bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 hover:border-salmon-400 rounded-3xl p-6 md:p-8 text-left shadow-lg shadow-salmon-100/50 dark:shadow-none transition-all group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-salmon-100 dark:bg-salmon-900/30 text-salmon-600 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                <PieChart size={28} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-slate-900 dark:text-white mb-2 md:mb-3">
                {t.cardResearchTitle}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                {t.cardResearchDesc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    );
  }

  // ================= TAMPILAN 2: ADMIN & VA =================
  if (view === "admin") {
    return (
      <main className="min-h-screen bg-salmon-50/30 dark:bg-slate-950 transition-colors duration-300">
        {renderFloatingControls()}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-16 md:pt-6 pb-2 px-4 md:px-12 lg:px-20">
          <button
            onClick={() => setView("landing")}
            className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-500 hover:text-salmon-600 transition-colors"
          >
            <ArrowLeft size={16} /> {t.backHome}
          </button>
        </div>
        {renderProfileHeader(t.adminRole, t.adminDesc)}

        <section className="max-w-5xl mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-16">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 md:mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
            {[
              { id: "data", label: t.tabAdmin1, icon: Database },
              { id: "crm", label: t.tabAdmin2, icon: CheckCircle2 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveAdminTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${activeAdminTab === tab.id ? "bg-salmon-100 dark:bg-salmon-900/40 text-salmon-700 dark:text-salmon-300" : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeAdminTab === "data" && (
              <motion.div
                key="data"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10 }}
                variants={fadeInUp}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="font-serif text-xl md:text-2xl dark:text-white">
                    {t.dashTitle}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="relative flex-1 w-full">
                    <Search
                      className="absolute left-3 top-2.5 text-slate-400"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full sm:w-48 px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg text-sm dark:text-white"
                  >
                    <option value="All">{t.allStatus}</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm w-full overflow-x-auto">
                  <table className="w-full min-w-[500px] text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase font-bold text-[10px] md:text-xs">
                      <tr>
                        <th className="px-4 md:px-6 py-4">ID</th>
                        <th className="px-4 md:px-6 py-4">Name</th>
                        <th className="px-4 md:px-6 py-4">Value</th>
                        <th className="px-4 md:px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                      {filteredAdminData.map((row) => (
                        <tr
                          key={row.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        >
                          <td className="px-4 md:px-6 py-3 font-semibold dark:text-white whitespace-nowrap">
                            {row.id}
                          </td>
                          <td className="px-4 md:px-6 py-3 whitespace-nowrap">
                            {row.name}
                          </td>
                          <td className="px-4 md:px-6 py-3 whitespace-nowrap">
                            {row.nilai}
                          </td>
                          <td className="px-4 md:px-6 py-3 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold ${row.status === "Completed" ? "bg-green-100 text-green-700" : row.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}
                            >
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* TAB TOOLS & CRM YANG DITAMBAHKAN KEMBALI */}
            {activeAdminTab === "crm" && (
              <motion.div
                key="crm"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10 }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl md:text-2xl dark:text-white">
                    {t.crmTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {t.crmDesc}
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-6">
                  {[
                    "Google Workspace",
                    "Microsoft Excel 365",
                    "Notion",
                    "Trello",
                    "Asana",
                    "Slack",
                    "Canva",
                    "Google Meet / Zoom",
                    "Mailchimp",
                  ].map((tool) => (
                    <motion.div
                      variants={fadeInUp}
                      key={tool}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:border-salmon-400 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-salmon-500 shrink-0"></div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs md:text-sm">
                        {tool}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        {renderCTA()}
      </main>
    );
  }

  // ================= TAMPILAN 3: MARKET RESEARCH =================
  if (view === "research") {
    return (
      <main className="min-h-screen bg-salmon-50/30 dark:bg-slate-950 transition-colors duration-300">
        {renderFloatingControls()}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-16 md:pt-6 pb-2 px-4 md:px-12 lg:px-20">
          <button
            onClick={() => setView("landing")}
            className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-500 hover:text-salmon-600 transition-colors"
          >
            <ArrowLeft size={16} /> {t.backHome}
          </button>
        </div>
        {renderProfileHeader(t.researchRole, t.researchDesc)}

        <section className="max-w-5xl mx-auto px-4 md:px-12 lg:px-20 py-10 md:py-16">
          <div className="mb-8 md:mb-10 p-5 md:p-6 bg-salmon-100/50 dark:bg-slate-800 rounded-2xl border border-salmon-200 dark:border-slate-700">
            <h3 className="font-serif text-lg md:text-2xl text-slate-900 dark:text-white mb-2 flex items-center gap-2 md:gap-3">
              <Coffee className="text-salmon-500 shrink-0" /> {t.resCaseStudy}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed">
              Methodology: Online Desk Research. Location Target: Surabaya City
              & Suburbs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 md:mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
            {[
              { id: "overview", label: t.tabRes1, icon: Map },
              { id: "competitor", label: t.tabRes2, icon: BarChart3 },
              { id: "strategy", label: t.tabRes3, icon: Target },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveResearchTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${activeResearchTab === tab.id ? "bg-salmon-100 dark:bg-salmon-900/40 text-salmon-700 dark:text-salmon-300" : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* --- RES TAB 1: OVERVIEW --- */}
            {activeResearchTab === "overview" && (
              <motion.div
                key="overview"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10 }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  {t.resOverview.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className={`p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm border-t-4 ${i === 0 ? "border-t-salmon-500" : i === 1 ? "border-t-blue-500" : "border-t-green-500"}`}
                    >
                      {i === 0 ? (
                        <TrendingUp className="text-salmon-500 mb-3" />
                      ) : i === 1 ? (
                        <MapPin className="text-blue-500 mb-3" />
                      ) : (
                        <ShieldAlert className="text-green-500 mb-3" />
                      )}
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* --- RES TAB 2: COMPETITOR DATA --- */}
            {activeResearchTab === "competitor" && (
              <motion.div
                key="comp"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10 }}
                variants={fadeInUp}
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm w-full overflow-x-auto">
                  <table className="w-full min-w-[700px] text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase font-bold text-[10px] md:text-xs">
                      <tr>
                        <th className="px-4 md:px-6 py-4">Brand</th>
                        <th className="px-4 md:px-6 py-4">Segment</th>
                        <th className="px-4 md:px-6 py-4">Price Range</th>
                        <th className="px-4 md:px-6 py-4">Key Strength</th>
                        <th className="px-4 md:px-6 py-4">Weakness</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                      {t.resCompetitors.map((comp, i) => (
                        <tr
                          key={i}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        >
                          <td className="px-4 md:px-6 py-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                            {comp.brand}{" "}
                            <span className="block text-[10px] font-normal text-slate-400 mt-1">
                              {comp.rating} (Google)
                            </span>
                          </td>
                          <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                            <span className="bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-md text-[10px] md:text-xs font-semibold">
                              {comp.segment}
                            </span>
                          </td>
                          <td className="px-4 md:px-6 py-4 font-medium whitespace-nowrap">
                            {comp.price}
                          </td>
                          <td className="px-4 md:px-6 py-4 text-xs text-green-600 dark:text-green-400 min-w-[150px]">
                            {comp.pro}
                          </td>
                          <td className="px-4 md:px-6 py-4 text-xs text-red-600 dark:text-red-400 min-w-[150px]">
                            {comp.con}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* --- RES TAB 3: SWOT & STRATEGY --- */}
            {activeResearchTab === "strategy" && (
              <motion.div
                key="strat"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -10 }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {/* S & W */}
                  <motion.div
                    variants={fadeInUp}
                    className="bg-green-50/50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 p-5 md:p-6 rounded-2xl"
                  >
                    <h4 className="font-serif text-xl md:text-2xl text-green-700 dark:text-green-500 mb-4">
                      Strengths
                    </h4>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                      {t.resSwot.S.map((s, i) => (
                        <li key={i} className="flex gap-2.5">
                          <CheckCircle
                            size={16}
                            className="text-green-500 shrink-0 mt-0.5"
                          />{" "}
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className="bg-red-50/50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 p-5 md:p-6 rounded-2xl"
                  >
                    <h4 className="font-serif text-xl md:text-2xl text-red-700 dark:text-red-500 mb-4">
                      Weaknesses
                    </h4>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                      {t.resSwot.W.map((w, i) => (
                        <li key={i} className="flex gap-2.5">
                          <Lightbulb
                            size={16}
                            className="text-red-500 shrink-0 mt-0.5"
                          />{" "}
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* O & T */}
                  <motion.div
                    variants={fadeInUp}
                    className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 p-5 md:p-6 rounded-2xl"
                  >
                    <h4 className="font-serif text-xl md:text-2xl text-blue-700 dark:text-blue-500 mb-4">
                      Opportunities
                    </h4>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                      {t.resSwot.O.map((o, i) => (
                        <li key={i} className="flex gap-2.5">
                          <Target
                            size={16}
                            className="text-blue-500 shrink-0 mt-0.5"
                          />{" "}
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className="bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-5 md:p-6 rounded-2xl"
                  >
                    <h4 className="font-serif text-xl md:text-2xl text-amber-700 dark:text-amber-500 mb-4">
                      Threats
                    </h4>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                      {t.resSwot.T.map((t, i) => (
                        <li key={i} className="flex gap-2.5">
                          <ShieldAlert
                            size={16}
                            className="text-amber-500 shrink-0 mt-0.5"
                          />{" "}
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-6 md:mt-8 p-5 md:p-6 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl shadow-xl"
                >
                  <h4 className="font-serif text-lg md:text-xl text-salmon-400 mb-2 md:mb-3">
                    Strategic Conclusion
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {t.resStrategy}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        {renderCTA()}
      </main>
    );
  }

  return null;
}
