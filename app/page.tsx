"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  ClipboardList,
  Clock,
  Cpu,
  Database,
  FileSpreadsheet,
  FileText,
  Headset,
  Laptop,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  Search,
  ShieldCheck,
  Sun,
  Terminal,
  UserCheck,
  Zap,
} from "lucide-react";

// ==========================================
// DATABASE 50 DUMMY TESTIMONIALS
// ==========================================
const testimonialsData = [
  {
    id: 1,
    name: "Sarah W.",
    text: "Virli's data entry is flawless. She organized our messy CRM in just two days. Highly recommended!",
    color: "bg-salmon-200",
  },
  {
    id: 2,
    name: "Michael T.",
    text: "Very fast response time and excellent reporting skills on Excel. Will definitely hire again.",
    color: "bg-blue-200",
  },
  {
    id: 3,
    name: "Jessica R.",
    text: "Amazing virtual assistant! Managed my calendar and emails so I could focus on growing my business.",
    color: "bg-green-200",
  },
  {
    id: 4,
    name: "David L.",
    text: "Her attention to detail is unmatched. Found errors in our database that we had missed for months.",
    color: "bg-amber-200",
  },
  {
    id: 5,
    name: "Amanda C.",
    text: "Super reliable and always delivers before the deadline. Great communication skills.",
    color: "bg-purple-200",
  },
  {
    id: 6,
    name: "Robert K.",
    text: "Transformed our chaotic spreadsheets into a beautiful, easy-to-read Excel dashboard.",
    color: "bg-salmon-200",
  },
  {
    id: 7,
    name: "Emily J.",
    text: "Handles our customer support tickets with professionalism and care. Our clients love her.",
    color: "bg-blue-200",
  },
  {
    id: 8,
    name: "Daniel M.",
    text: "Very efficient in internet research. Gathered all the competitor data I needed in half the time expected.",
    color: "bg-green-200",
  },
  {
    id: 9,
    name: "Lisa P.",
    text: "I can't imagine running my daily operations without her support now. 10/10.",
    color: "bg-amber-200",
  },
  {
    id: 10,
    name: "Mark H.",
    text: "Excellent SOP documentation. She made our onboarding process so much easier for new hires.",
    color: "bg-purple-200",
  },
  {
    id: 11,
    name: "Sophie B.",
    text: "Highly organized. She brought structure to our administrative workflow.",
    color: "bg-salmon-200",
  },
  {
    id: 12,
    name: "Kevin D.",
    text: "She is a lifesaver! Handled a massive data cleaning project smoothly with zero errors.",
    color: "bg-blue-200",
  },
  {
    id: 13,
    name: "Rachel G.",
    text: "Consistently produces high-quality work. Very adaptable to our changing business needs.",
    color: "bg-green-200",
  },
  {
    id: 14,
    name: "Thomas W.",
    text: "Her proficiency in G-Suite and Microsoft Office is top-notch.",
    color: "bg-amber-200",
  },
  {
    id: 15,
    name: "Olivia F.",
    text: "Professional, fast, and polite. Everything you want in an executive assistant.",
    color: "bg-purple-200",
  },
  {
    id: 16,
    name: "James C.",
    text: "Cleans up formatting issues in Word and Excel like magic.",
    color: "bg-salmon-200",
  },
  {
    id: 17,
    name: "Emma S.",
    text: "Managed our team's schedule across three different time zones perfectly.",
    color: "bg-blue-200",
  },
  {
    id: 18,
    name: "William N.",
    text: "Great problem solver. She figures out solutions quickly without needing constant direction.",
    color: "bg-green-200",
  },
  {
    id: 19,
    name: "Chloe M.",
    text: "She took over our inbox management and our response time improved by 200%.",
    color: "bg-amber-200",
  },
  {
    id: 20,
    name: "Andrew P.",
    text: "I threw a very complicated data scraping task at her and she delivered perfectly formatted results.",
    color: "bg-purple-200",
  },
  {
    id: 21,
    name: "Mia L.",
    text: "Very trustworthy with sensitive company information and financial records.",
    color: "bg-salmon-200",
  },
  {
    id: 22,
    name: "Benjamin R.",
    text: "Her pivot tables and VLOOKUP skills in Excel saved us hours of manual calculation.",
    color: "bg-blue-200",
  },
  {
    id: 23,
    name: "Charlotte T.",
    text: "Always online when we need her. Very responsive on Slack and email.",
    color: "bg-green-200",
  },
  {
    id: 24,
    name: "Lucas H.",
    text: "Drafted professional emails and reports that made our company look great.",
    color: "bg-amber-200",
  },
  {
    id: 25,
    name: "Grace K.",
    text: "Organized our messy Google Drive into a logical, easy-to-navigate system.",
    color: "bg-purple-200",
  },
  {
    id: 26,
    name: "Henry V.",
    text: "She's proactive. Always asking what else she can do to help the team.",
    color: "bg-salmon-200",
  },
  {
    id: 27,
    name: "Lily D.",
    text: "Handled our travel arrangements and itinerary planning flawlessly.",
    color: "bg-blue-200",
  },
  {
    id: 28,
    name: "Alexander J.",
    text: "A true Excel wizard. She automated reports that used to take me all weekend.",
    color: "bg-green-200",
  },
  {
    id: 29,
    name: "Hannah W.",
    text: "Navigates Salesforce and CRM tools easily. Very low training time needed.",
    color: "bg-amber-200",
  },
  {
    id: 30,
    name: "Ryan S.",
    text: "One of the most detail-oriented freelancers I've ever worked with on Upwork.",
    color: "bg-purple-200",
  },
  {
    id: 31,
    name: "Ava C.",
    text: "She treats our business like her own. Very dedicated and hardworking.",
    color: "bg-salmon-200",
  },
  {
    id: 32,
    name: "Matthew B.",
    text: "Great at spotting discrepancies in invoice data and fixing them promptly.",
    color: "bg-blue-200",
  },
  {
    id: 33,
    name: "Ella F.",
    text: "I highly recommend her for any administrative or back-office support tasks.",
    color: "bg-green-200",
  },
  {
    id: 34,
    name: "Jackson P.",
    text: "She managed our lead generation database and kept everything up to date daily.",
    color: "bg-amber-200",
  },
  {
    id: 35,
    name: "Victoria G.",
    text: "Excellent English communication skills, both written and verbal.",
    color: "bg-purple-200",
  },
  {
    id: 36,
    name: "Sebastian E.",
    text: "She uses AI tools like ChatGPT and Notion efficiently to speed up her workflow.",
    color: "bg-salmon-200",
  },
  {
    id: 37,
    name: "Natalie H.",
    text: "Cleared a backlog of 500+ customer emails in record time with great satisfaction ratings.",
    color: "bg-blue-200",
  },
  {
    id: 38,
    name: "Joseph M.",
    text: "Very polite when dealing with difficult clients via email support.",
    color: "bg-green-200",
  },
  {
    id: 39,
    name: "Aria T.",
    text: "Consolidated data from five different platforms into one seamless tracking sheet.",
    color: "bg-amber-200",
  },
  {
    id: 40,
    name: "Owen L.",
    text: "She is very tech-savvy and adapts quickly to new software we introduce.",
    color: "bg-purple-200",
  },
  {
    id: 41,
    name: "Zoe R.",
    text: "Her daily reports are always accurate, comprehensive, and submitted on time.",
    color: "bg-salmon-200",
  },
  {
    id: 42,
    name: "Gabriel C.",
    text: "Helped us streamline our data entry process, cutting down errors by 90%.",
    color: "bg-blue-200",
  },
  {
    id: 43,
    name: "Penelope S.",
    text: "Fantastic work on the market research assignment. The data was exactly what we needed.",
    color: "bg-green-200",
  },
  {
    id: 44,
    name: "Carter W.",
    text: "Maintains a positive attitude even when tasks are repetitive and tedious.",
    color: "bg-amber-200",
  },
  {
    id: 45,
    name: "Riley D.",
    text: "She handles confidential HR documents with absolute discretion and care.",
    color: "bg-purple-200",
  },
  {
    id: 46,
    name: "Julian B.",
    text: "Always asks the right questions to ensure she understands the task perfectly before starting.",
    color: "bg-salmon-200",
  },
  {
    id: 47,
    name: "Nora K.",
    text: "The cleanest data formatting I have seen. She truly takes pride in her work.",
    color: "bg-blue-200",
  },
  {
    id: 48,
    name: "Anthony V.",
    text: "A vital extension of our team. We rely on her for all our daily admin operations.",
    color: "bg-green-200",
  },
  {
    id: 49,
    name: "Hazel P.",
    text: "She goes above and beyond. Noticed a typo in a template we've used for years and fixed it.",
    color: "bg-amber-200",
  },
  {
    id: 50,
    name: "Christian M.",
    text: "Unbelievable value for the quality of work provided. She is an absolute star.",
    color: "bg-purple-200",
  },
];

export default function VirliPortfolio() {
  const [isDark, setIsDark] = useState(false);

  // State untuk mengontrol expand/collapse Testimonials
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const Card = ({
    children,
    className = "",
    id,
  }: {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }) => (
    <motion.div
      id={id}
      variants={fadeInUp}
      className={`bg-white dark:bg-[#150f10] border border-salmon-100 dark:border-salmon-900/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
      {title}
    </h3>
  );

  const LocalLogo = ({ icon: Icon, name }: { icon: any; name: string }) => (
    <div className="flex flex-col items-center justify-center p-3 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-salmon-300 transition-colors bg-slate-50/50 dark:bg-slate-900/50 aspect-square text-center">
      <Icon
        size={24}
        className="text-slate-700 dark:text-slate-300 mb-2 stroke-[1.5]"
      />
      <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 leading-tight">
        {name}
      </span>
    </div>
  );

  const SkillIcon = ({ icon: Icon, name }: { icon: any; name: string }) => (
    <div className="flex flex-col items-center justify-center p-3 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-salmon-300 transition-colors bg-white dark:bg-slate-900 aspect-square text-center">
      <Icon
        size={24}
        className="text-slate-700 dark:text-slate-300 mb-2 stroke-[1.5]"
      />
      <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 leading-tight">
        {name}
      </span>
    </div>
  );

  const scrollToPortfolio = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const elem = document.getElementById("portfolio");
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0f0a0b] transition-colors duration-300 p-4 md:p-6 lg:p-8 font-sans">
      {/* Floating Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-sm border border-salmon-200 dark:border-salmon-800 text-salmon-600 dark:text-salmon-400 hover:scale-105 transition-transform"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
      >
        {/* ======================= LEFT PANEL (50%) ======================= */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* HERO SECTION */}
          <Card className="bg-salmon-50/50 dark:bg-salmon-950/20 border-none shadow-sm relative overflow-hidden">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start gap-6">
              <div className="flex-1 pt-2 sm:pt-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                  Hi, I'm Virli Galuh
                </h1>
                <h2 className="text-sm sm:text-base font-bold text-salmon-600 dark:text-salmon-400 mb-3 border-l-2 border-salmon-500 pl-3">
                  Administrative Assistant | Virtual Assistant |<br />
                  Customer Support | Data & Operations Specialist
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-md">
                  Helping businesses stay organized through accurate
                  administration, efficient workflows, customer support,
                  internet research, and data management. Committed to 0% error
                  rate.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#portfolio"
                    onClick={scrollToPortfolio}
                    className="inline-flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold py-2.5 px-5 rounded-lg hover:bg-salmon-600 dark:hover:bg-salmon-500 transition-colors shadow-sm cursor-pointer"
                  >
                    View Portfolio
                  </a>
                  <a
                    href="/CV-Virli-Galuh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 px-5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-salmon-400 transition-colors cursor-pointer"
                  >
                    View CV
                  </a>
                  <a
                    href="mailto:email@example.com"
                    className="inline-flex items-center justify-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 px-5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-salmon-400 transition-colors cursor-pointer"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* FOTO HERO */}
              <div className="w-48 h-56 sm:w-56 sm:h-64 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-[#150f10] bg-salmon-100 dark:bg-salmon-900/30">
                <img
                  src="/profile-virli.jpg"
                  alt="Virli Galuh"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Card>

          {/* STATS CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Documents Managed", value: "1000+", icon: FileText },
              { label: "Rows Processed", value: "5000+", icon: Database },
              { label: "Tasks Completed", value: "100+", icon: ClipboardList },
              { label: "Data Accuracy", value: "99%", icon: ShieldCheck },
              { label: "Fast Response", value: "1 hr", icon: Clock },
              { label: "Remote Ready", value: "Yes", icon: Laptop },
            ].map((stat, i) => (
              <Card
                key={i}
                className="p-3! text-center flex flex-col items-center justify-center"
              >
                <stat.icon size={18} className="text-salmon-500 mb-2" />
                <div className="text-lg font-black text-slate-900 dark:text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold leading-tight">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* FEATURED PORTFOLIO */}
          <Card
            id="portfolio"
            className="bg-transparent border-none shadow-none p-0!"
          >
            <SectionTitle title="Featured Portfolio" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-4 border border-slate-100 dark:border-salmon-900/30 shadow-sm group">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <img
                    src="/portfolio-1.jpg"
                    alt="Excel Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Excel Dashboard
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Mockup of an interactive KPI dashboard with charts and
                  conditional formatting.
                </p>
              </div>

              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-4 border border-slate-100 dark:border-salmon-900/30 shadow-sm group">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <img
                    src="/portfolio-2.jpg"
                    alt="Data Cleaning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Data Cleaning Project
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Before/after showcase of large datasets cleaned and
                  standardized effectively.
                </p>
              </div>

              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-4 border border-slate-100 dark:border-salmon-900/30 shadow-sm group">
                <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <img
                    src="/portfolio-3.jpg"
                    alt="Admin Docs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Administrative Docs
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Examples of organized filing systems, professional quotations,
                  and reports.
                </p>
              </div>

              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-4 border border-slate-100 dark:border-salmon-900/30 shadow-sm group">
                <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                  <img
                    src="/portfolio-4.jpg"
                    alt="CRM"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Customer Support CRM
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Handling tickets, email interactions, and maintaining customer
                  satisfaction.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* ======================= CENTER PANEL (25%) ======================= */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* TRUST INDICATORS */}
          <Card>
            <SectionTitle title="Trust Indicators" />
            <div className="grid grid-cols-3 gap-2">
              <SkillIcon icon={UserCheck} name="Admin Support" />
              <SkillIcon icon={Briefcase} name="Executive Asst." />
              <SkillIcon icon={Headset} name="Virtual Asst." />
              <SkillIcon icon={Calendar} name="Calendar Mgt." />
              <SkillIcon icon={Mail} name="Email Mgt." />
              <SkillIcon icon={Search} name="Market Research" />
            </div>
          </Card>

          {/* CORE SKILLS */}
          <Card>
            <SectionTitle title="Core Skills" />
            <div className="grid grid-cols-3 gap-2">
              <SkillIcon icon={MessageSquare} name="Customer Svc" />
              <SkillIcon icon={Database} name="Data Entry" />
              <SkillIcon icon={FileSpreadsheet} name="Excel Mastery" />
              <SkillIcon icon={LayoutDashboard} name="Data Viz" />
              <SkillIcon icon={FileText} name="Documentation" />
              <SkillIcon icon={ClipboardList} name="Report Prep" />
              <SkillIcon icon={ShieldCheck} name="QA / Audit" />
              <SkillIcon icon={Clock} name="Scheduling" />
              <SkillIcon icon={CheckCircle} name="SOP Creation" />
            </div>
          </Card>

          {/* TESTIMONIALS (WITH 50 DUMMY DATA) */}
          <Card className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Testimonials
              </h3>
              <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-2.5 py-1.5 rounded-md text-[10px] font-extrabold border border-amber-100 dark:border-amber-900/30">
                ⭐ 4.8 (50)
              </div>
            </div>

            {/* Scrollable Container jika di-expand */}
            <div
              className={`space-y-3 pr-1 transition-all duration-300 ${
                showAllReviews
                  ? "max-h-[400px] overflow-y-auto"
                  : "max-h-fit overflow-hidden"
              }`}
              style={{ scrollbarWidth: "thin" }}
            >
              {(showAllReviews
                ? testimonialsData
                : testimonialsData.slice(0, 2)
              ).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-salmon-200 transition-colors"
                >
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 italic mb-2 leading-relaxed">
                    "{rev.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full ${rev.color}`}></div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {rev.name}
                    </span>
                    <span className="text-[9px] font-semibold text-green-600 dark:text-green-500 ml-auto flex items-center gap-0.5">
                      <CheckCircle size={10} /> Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="w-full mt-3 py-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 hover:text-salmon-600 dark:hover:text-salmon-400 hover:bg-slate-50 dark:bg-slate-900/50 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-transparent hover:border-salmon-100 dark:hover:border-salmon-900/50"
            >
              {showAllReviews ? "Show Less ↑" : "Read 48 other reviews →"}
            </button>
          </Card>
        </div>

        {/* ======================= RIGHT PANEL (25%) ======================= */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* AI PRODUCTIVITY */}
          <Card>
            <SectionTitle title="AI Productivity" />
            <div className="grid grid-cols-3 gap-2">
              <LocalLogo icon={Terminal} name="ChatGPT" />
              <LocalLogo icon={MessageSquare} name="Claude" />
              <LocalLogo icon={Zap} name="Gemini" />
              <LocalLogo icon={Cpu} name="Copilot" />
              <LocalLogo icon={Search} name="Perplexity" />
              <LocalLogo icon={FileText} name="Notion AI" />
            </div>
          </Card>

          {/* SOFTWARE */}
          <Card>
            <SectionTitle title="Software" />
            <div className="grid grid-cols-4 gap-2">
              <LocalLogo icon={FileSpreadsheet} name="Excel" />
              <LocalLogo icon={FileText} name="Word" />
              <LocalLogo icon={LayoutDashboard} name="PPT" />
              <LocalLogo icon={Mail} name="Outlook" />
              <LocalLogo icon={Briefcase} name="G-Suite" />
              <LocalLogo icon={ClipboardList} name="Trello" />
              <LocalLogo icon={CheckCircle} name="Asana" />
              <LocalLogo icon={MessageSquare} name="Slack" />
              <LocalLogo icon={Headset} name="Zoom" />
              <LocalLogo icon={Laptop} name="Canva" />
              <LocalLogo icon={Database} name="CRM" />
              <LocalLogo icon={Mail} name="Mailchimp" />
            </div>
          </Card>

          {/* WHY HIRE ME */}
          <Card>
            <SectionTitle title="Why Hire Me" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-salmon-50 dark:bg-salmon-900/20 text-salmon-700 dark:text-salmon-400 rounded-lg text-xs font-bold">
                <CheckCircle size={14} /> Detail-Oriented
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-salmon-50 dark:bg-salmon-900/20 text-salmon-700 dark:text-salmon-400 rounded-lg text-xs font-bold">
                <CheckCircle size={14} /> Fast Learner
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-salmon-50 dark:bg-salmon-900/20 text-salmon-700 dark:text-salmon-400 rounded-lg text-xs font-bold">
                <CheckCircle size={14} /> Highly Organized
              </div>
            </div>
          </Card>

          {/* CONTACT FORM */}
          <Card className="flex-1">
            <SectionTitle title="Contact" />
            <form
              action="mailto:email@example.com"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-3"
            >
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-salmon-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-salmon-400"
                />
              </div>
              <input
                type="text"
                placeholder="Company"
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-salmon-400"
              />
              <textarea
                placeholder="Message"
                rows={3}
                required
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-salmon-400 resize-none"
              ></textarea>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold py-2.5 rounded-lg hover:bg-salmon-600 transition-colors"
                >
                  Hire Me
                </button>
                <a
                  href="/CV-Virli-Galuh.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-salmon-400 transition-colors text-center cursor-pointer"
                >
                  View CV
                </a>
              </div>
            </form>
          </Card>
        </div>
      </motion.div>
    </main>
  );
}
