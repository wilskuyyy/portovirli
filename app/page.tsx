"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  ClipboardList,
  Clock,
  Cpu,
  Database,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Globe,
  Headset,
  Laptop,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  Terminal,
  Zap,
} from "lucide-react";

export default function VirliPortfolio() {
  const [isDark, setIsDark] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("halovirli@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Tulisan "Copied!" hilang setelah 2 detik
  };

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

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0f0a0b] transition-colors duration-300 p-4 md:p-6 lg:p-8 font-sans">
      {/* Floating Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-sm border border-salmon-200 dark:border-salmon-800 text-salmon-600 dark:text-salmon-400 hover:scale-105 transition-transform"
          aria-label="Toggle Dark Mode"
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

                {/* NICHE HEADLINE */}
                <h2 className="text-sm sm:text-base font-bold text-salmon-600 dark:text-salmon-400 mb-3 border-l-2 border-salmon-500 pl-3">
                  E-Commerce Operations Specialist & Virtual Assistant
                </h2>

                {/* PERSONAL STORY / BIO */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 max-w-md">
                  I help Shopify and e-commerce business owners scale by
                  streamlining backend operations, managing inventory data, and
                  delivering exceptional customer support. I handle the
                  operational chaos so you can focus on growth.
                </p>

                {/* AVAILABILITY & DETAILS */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    <MapPin size={14} className="text-salmon-500" /> Remote (ID)
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    <Clock size={14} className="text-salmon-500" /> Available
                    for EST/PST/WIB
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    <Globe size={14} className="text-salmon-500" /> English (C1)
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    <Zap size={14} className="text-salmon-500" /> Responds in
                    &lt; 2 hours
                  </div>
                </div>

                {/* CTA - SINGLE PRIMARY FOCUS */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://upwork.com/freelancers/your-profile-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold py-3 px-6 rounded-lg hover:bg-salmon-600 dark:hover:bg-salmon-500 transition-colors shadow-md"
                  >
                    Hire Me on Upwork <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="/CV-Virli-Galuh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-salmon-600 dark:hover:text-salmon-400 underline underline-offset-4 transition-colors"
                  >
                    View Resume (PDF)
                  </a>
                </div>
              </div>

              {/* PHOTO HERO */}
              <div className="w-48 h-56 sm:w-56 sm:h-64 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-[#150f10] bg-salmon-100 dark:bg-salmon-900/30">
                <img
                  src="/profile-virli.jpg"
                  alt="Portrait of Virli Galuh, E-Commerce Virtual Assistant"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Card>

          {/* FEATURED CASE STUDIES (Replaced generic portfolio) */}
          <Card
            id="portfolio"
            className="bg-transparent border-none shadow-none p-0!"
          >
            <SectionTitle title="Recent Case Studies" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* CASE STUDY 1 */}
              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-5 border border-slate-100 dark:border-salmon-900/30 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-salmon-50 dark:bg-salmon-900/20 text-salmon-700 dark:text-salmon-400 text-[10px] font-bold rounded">
                    Data Management
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                  Inventory Data Standardization
                </h4>
                <div className="space-y-2 mt-auto">
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Problem:
                    </strong>{" "}
                    Client had messy SKU data across multiple suppliers, causing
                    fulfillment errors.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Action:
                    </strong>{" "}
                    Utilized Excel PowerQuery to clean, standardize, and format
                    10,000+ rows for Shopify import.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-salmon-600 dark:text-salmon-400">
                      Result:
                    </strong>{" "}
                    Reduced weekly inventory processing time from 8 hours to 2
                    hours.
                  </p>
                </div>
              </div>

              {/* CASE STUDY 2 */}
              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-5 border border-slate-100 dark:border-salmon-900/30 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-[10px] font-bold rounded">
                    Customer Support
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                  Helpdesk Workflow Optimization
                </h4>
                <div className="space-y-2 mt-auto">
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Problem:
                    </strong>{" "}
                    High volume of lost customer inquiries and delayed
                    responses.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Action:
                    </strong>{" "}
                    Organized Zendesk ticketing system, created macros, and
                    drafted customer service SOPs.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-salmon-600 dark:text-salmon-400">
                      Result:
                    </strong>{" "}
                    Improved average response time to under 2 hours and achieved
                    a 95% CSAT score.
                  </p>
                </div>
              </div>

              {/* CASE STUDY 3 */}
              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-5 border border-slate-100 dark:border-salmon-900/30 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[10px] font-bold rounded">
                    Market Research
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                  Competitor Pricing Analysis
                </h4>
                <div className="space-y-2 mt-auto">
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Problem:
                    </strong>{" "}
                    E-commerce client was losing market share due to pricing
                    gaps.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Action:
                    </strong>{" "}
                    Conducted comprehensive research on 5 key competitors and
                    built a tracking dashboard.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-salmon-600 dark:text-salmon-400">
                      Result:
                    </strong>{" "}
                    Client adjusted pricing strategy, resulting in a 15% margin
                    increase.
                  </p>
                </div>
              </div>

              {/* CASE STUDY 4 */}
              <div className="bg-white dark:bg-[#150f10] rounded-2xl p-5 border border-slate-100 dark:border-salmon-900/30 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-[10px] font-bold rounded">
                    Operations
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                  Order Fulfillment Tracking
                </h4>
                <div className="space-y-2 mt-auto">
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Problem:
                    </strong>{" "}
                    Delayed shipment updates causing "where is my order"
                    inquiries.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Action:
                    </strong>{" "}
                    Managed daily fulfillment logs and automated tracking
                    updates via Shopify.
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    <strong className="text-salmon-600 dark:text-salmon-400">
                      Result:
                    </strong>{" "}
                    Decreased customer tracking inquiries by 40%.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ======================= CENTER PANEL (25%) ======================= */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* VALUE-DRIVEN OUTCOMES */}
          <Card>
            <SectionTitle title="How I Add Value" />
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  Time Optimization
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automate and streamline repetitive tasks, typically saving
                  clients 10+ hours a week on backend operations.
                </p>
              </div>
              <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  Customer Retention
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Provide empathetic, timely, and accurate responses to maintain
                  high customer satisfaction (CSAT) scores.
                </p>
              </div>
              <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                  Process Documentation
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Create clear Standard Operating Procedures (SOPs) to ensure
                  consistent quality and easy onboarding for your team.
                </p>
              </div>
            </div>
          </Card>

          {/* VERIFIED TESTIMONIALS */}
          <Card className="flex flex-col">
            <SectionTitle title="Client Feedback" />

            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-[11px] text-slate-700 dark:text-slate-300 italic mb-3 leading-relaxed">
                  "Virli is incredibly thorough. She took over our Shopify data
                  entry and Zendesk tickets. She spotted formatting errors we
                  missed and created an SOP that our whole team now uses. A true
                  asset."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      E-Commerce Store Owner
                    </div>
                    <div className="text-[9px] text-slate-500">
                      United States
                    </div>
                  </div>
                  <a
                    href="https://upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[9px] font-bold text-green-600 dark:text-green-500 hover:underline"
                  >
                    <CheckCircle size={12} /> Verified Upwork Job
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-[11px] text-slate-700 dark:text-slate-300 italic mb-3 leading-relaxed">
                  "Very fast response time and excellent reporting skills on
                  Excel. She delivered the competitor research data exactly in
                  the format we needed."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      SaaS Startup Founder
                    </div>
                    <div className="text-[9px] text-slate-500">Australia</div>
                  </div>
                  <a
                    href="https://upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[9px] font-bold text-green-600 dark:text-green-500 hover:underline"
                  >
                    <CheckCircle size={12} /> Verified Upwork Job
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ======================= RIGHT PANEL (25%) ======================= */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* E-COMMERCE & OPS TOOLS */}
          <Card>
            <SectionTitle title="Tools & Tech Stack" />
            <div className="grid grid-cols-3 gap-2">
              <LocalLogo icon={ShoppingCart} name="Shopify" />
              <LocalLogo icon={Headset} name="Zendesk" />
              <LocalLogo icon={MessageSquare} name="Intercom" />
              <LocalLogo icon={FileSpreadsheet} name="Excel" />
              <LocalLogo icon={FileText} name="Notion" />
              <LocalLogo icon={Briefcase} name="G-Workspace" />
              <LocalLogo icon={LayoutDashboard} name="ClickUp" />
              <LocalLogo icon={ClipboardList} name="Trello" />
              <LocalLogo icon={Database} name="HubSpot" />
            </div>
          </Card>

          {/* AI PRODUCTIVITY */}
          <Card>
            <SectionTitle title="AI Workflow" />
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              I use AI tools to speed up research and drafting, always paired
              with strict human review for accuracy.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <LocalLogo icon={Terminal} name="ChatGPT" />
              <LocalLogo icon={MessageSquare} name="Claude" />
              <LocalLogo icon={Search} name="Perplexity" />
            </div>
          </Card>

          {/* CONTACT & LINKS */}
          <Card className="flex-1 bg-gradient-to-b from-white to-slate-50 dark:from-[#150f10] dark:to-slate-900/50">
            <SectionTitle title="Let's Talk" />
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Looking for a reliable partner to handle your operations? Reach
              out via Upwork or Email.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://upwork.com/freelancers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#14a800] text-white text-xs font-bold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
              >
                <Briefcase size={16} /> View Upwork Profile
              </a>

              <a
                href="https://linkedin.com/in/virligaluh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0a66c2] text-white text-xs font-bold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
              >
                <Globe size={16} /> Connect on LinkedIn
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold py-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-salmon-400 transition-colors cursor-pointer"
              >
                {copied ? (
                  <CheckCircle size={16} className="text-green-500" />
                ) : (
                  <Mail size={16} />
                )}
                {copied ? "Email Copied!" : "halovirli@gmail.com"}
              </button>
            </div>
          </Card>
        </div>
      </motion.div>
    </main>
  );
}
