import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  ArrowRight,
  Shield,
  Activity,
  HeartPulse,
  Sparkles,
  MapPin,
  Clock,
  UserCheck,
  Pill,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HomeHero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const trustHighlights = [
    {
      label: "24/7",
      sub: "Emergency Care",
      iconSvg: (
        <svg className="w-8 h-8 text-[#E5B278] drop-shadow-[0_2px_10px_rgba(229,178,120,0.45)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 6.5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12v-6L12 2z" stroke="#E5B278" />
          <path d="M12 7v10" stroke="#D99B5A" />
          <path d="M7 12h10" stroke="#D99B5A" />
        </svg>
      ),
    },
    {
      label: "15+",
      sub: "Medical Services",
      iconSvg: (
        <svg className="w-8 h-8 text-[#E5B278] drop-shadow-[0_2px_10px_rgba(229,178,120,0.45)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="#E5B278" />
          <circle cx="12" cy="12" r="3.5" stroke="#D99B5A" />
          <path d="M12 5v2m0 10v2m-7-7h2m10 0h2" stroke="#E5B278" />
        </svg>
      ),
    },
    {
      label: "4",
      sub: "Expert Doctors",
      iconSvg: (
        <svg className="w-8 h-8 text-[#E5B278] drop-shadow-[0_2px_10px_rgba(229,178,120,0.45)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" stroke="#E5B278" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" stroke="#D99B5A" />
          <path d="M12 11v3m-1.5-1.5h3" stroke="#E5B278" />
        </svg>
      ),
    },
    {
      label: "1000+",
      sub: "Happy Patients",
      iconSvg: (
        <svg className="w-8 h-8 text-[#E5B278] drop-shadow-[0_2px_10px_rgba(229,178,120,0.45)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#D99B5A" />
          <circle cx="9" cy="7" r="4" stroke="#E5B278" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#E5B278" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#D99B5A" />
        </svg>
      ),
    },
  ];

  const floatingBadges = [
    {
      id: "emergency",
      title: "24/7 Emergency Care",
      desc: "Instant casualty support, ICU-on-wheels ambulances, and rapid trauma response team available around the clock.",
      icon: HeartPulse,
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
      gradient: "from-[#DC2626] to-[#C85235]",
      link: "/emergency",
      action: "Emergency Care",
    },
    {
      id: "diagnostics",
      title: "Advanced Diagnostics",
      desc: "Computerized pathology, digital X-Ray, high-resolution ultrasound sonography, and automated lab analyzers.",
      icon: Activity,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-[#8338EC] to-[#A84328]",
      link: "/specialities",
      action: "View Diagnostics",
    },
    {
      id: "specialties",
      title: "Expert Specialties",
      desc: "Senior consultants in General Medicine, Laparoscopic Surgery, Orthopedics, Proctology, and Pediatrics.",
      icon: Stethoscope,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-[#2563EB] to-[#0D4855]",
      link: "/specialities",
      action: "Explore Specialties",
    },
    {
      id: "pharmacy",
      title: "In-house Pharmacy",
      desc: "24/7 fully-stocked dispensary with genuine prescription medications, surgical supplies, and critical drugs.",
      icon: Pill,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      gradient: "from-[#EA580C] to-[#C85235]",
      link: "/contact",
      action: "Contact Pharmacy",
    },
    {
      id: "hygiene",
      title: "Safe & Hygienic",
      desc: "Strict infection-control protocols, sterile laminar flow modular OTs, and sanitised patient rooms.",
      icon: ShieldCheck,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      gradient: "from-[#059669] to-[#0D4855]",
      link: "/about",
      action: "Hospital Standards",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1A1D20] text-white">
      {/* 1. Full-Bleed Hospital Exterior Video / Photo Backdrop with Cinematic Scrim */}
      <div className="relative w-full min-h-[760px] lg:min-h-[860px] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-28 sm:pb-32">
        {/* Background Media - High-Resolution Hospital Building Exterior with Sunset Lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          <video src="/images/surya-hospital-building.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover object-[55%_30%] filter brightness-[0.96] contrast-[1.08] saturate-[1.20] scale-[1.05] origin-center transition-transform" />
          {/* Reference Warm Sunset Editorial Scrim: Warm golden light on left, crystal clear building on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F3]/95 via-[#FFF9F3]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        </div>

        {/* 2. Overlaid Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Editorial Headline & Actions (7 Cols) */}
            <div className="lg:col-span-7 xl:col-span-8 text-left space-y-5 sm:space-y-6">
              
              {/* Subtle Location Tag */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A84328]"
              >
                <span className="w-2 h-2 rounded-full bg-[#A84328]" />
                <span>SURYA HOSPITAL • ANANTAPUR</span>
              </motion.div>

              {/* Main Headline with Editorial Italic Second Line matching Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif-heading font-bold text-[#1A1D20] tracking-tight leading-[1.08]">
                  Comprehensive
                  <br />
                  Healthcare.
                </h1>
                <p className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-editorial-italic text-[#A84328] tracking-tight leading-[1.08]">
                  Compassionate Care.
                </p>
              </motion.div>

              {/* Supporting Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-[#1A1D20]/90 max-w-xl font-normal leading-relaxed drop-shadow-xs"
              >
                Advanced medical treatment, experienced doctors, modern facilities and 24/7 emergency services — all under one roof.
              </motion.p>

              {/* Action Buttons: Book an Appointment + Explore Our Services + Video Play */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/specialities"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-[#1A1D20] bg-white/90 hover:bg-white backdrop-blur-md border border-[#E2D9D0] shadow-md transition-all active:scale-95"
                >
                  <span>Explore Our Services</span>
                </Link>

                {/* Video Play Circle Button (Reference Mockup) */}
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="w-12 h-12 rounded-full bg-white text-[#A84328] shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-[#E2D9D0] group"
                  aria-label="Watch hospital tour video"
                  title="Watch Hospital Video"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Side Docked Drawer Tabs: Only icons visible at the right border by default; expand on click/touch with blinking border */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none">
              {floatingBadges.map((badge, idx) => {
                const Icon = badge.icon;
                const isExpanded = activeTab === badge.id;

                return (
                  <motion.div
                    key={badge.id}
                    layout
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
                    className="flex justify-end"
                  >
                    <div
                      onClick={() => setActiveTab(isExpanded ? null : badge.id)}
                      className={`cursor-pointer rounded-l-full border border-r-0 backdrop-blur-xl transition-all duration-300 ease-out flex items-center shadow-2xl ${
                        isExpanded
                          ? `bg-gradient-to-r ${badge.gradient} text-white border-white/80 animate-border-blink pl-4 pr-6 py-3 max-w-[340px] sm:max-w-[420px]`
                          : "bg-white/95 hover:bg-white text-[#1A1D20] border-white/80 hover:border-[#C85235]/40 pl-3 pr-2 py-2.5 shadow-[0_8px_25px_-4px_rgba(0,0,0,0.18)]"
                      }`}
                    >
                      {/* Left Circular Badge with Realistic Icon */}
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 shadow-md ${
                          isExpanded
                            ? "bg-white/20 text-white scale-105"
                            : `${badge.iconBg} ${badge.iconColor} hover:scale-105`
                        }`}
                        title={badge.title}
                      >
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      {/* Expanded Content: Matter, Title, Description, and Link */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden flex flex-col text-left pl-3.5 pr-2"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug whitespace-nowrap">
                                {badge.title}
                              </span>
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white shrink-0">
                                Info
                              </span>
                            </div>

                            <p className="text-[11px] sm:text-xs text-white/90 font-normal leading-relaxed mt-1 line-clamp-2 max-w-[280px]">
                              {badge.desc}
                            </p>

                            <div className="mt-2.5 flex items-center gap-2">
                              <Link
                                to={badge.link}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold text-[#1A1D20] bg-white hover:bg-[#FFF9F3] shadow-md transition-all active:scale-95"
                              >
                                <span>{badge.action}</span>
                                <ArrowRight className="w-3 h-3 text-[#A84328]" />
                              </Link>
                              <span className="text-[10px] text-white/70 italic">
                                Tap to close
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* 3. Bottom Translucent Stats Bar (Exact Reference Mockup Layout) */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-auto mb-6 sm:mb-8">
          <div className="w-full rounded-2xl bg-gradient-to-r from-[#2A1E17]/80 via-[#36261E]/70 to-[#2A1E17]/85 backdrop-blur-xl border border-[#E5B278]/25 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6),0_0_30px_0_rgba(217,155,90,0.12)_inset] px-5 sm:px-8 py-3.5 sm:py-4 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            
            {/* Left 4 Stats with Vertical Glass Dividers matching 2nd screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 flex-1 w-full items-center">
              {trustHighlights.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-3.5 px-2 sm:px-4 border-r-0 sm:border-r border-white/10 last:border-r-0">
                  {stat.iconSvg}
                  <div className="text-left select-none">
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight drop-shadow-sm">
                      {stat.label}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#E5D7CE]/80 font-medium leading-tight whitespace-nowrap mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Location Pill Card with Glowing Dark Pill and White Location Pin matching 2nd screenshot */}
            <div className="w-full lg:w-auto shrink-0 flex items-center justify-start lg:justify-end border-t lg:border-t-0 border-white/10 pt-3 lg:pt-0">
              <div className="flex items-center gap-3.5 rounded-xl bg-black/40 border border-white/15 px-4 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-inner">
                {/* Outlined White Pin in Soft Circle */}
                <div className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-sm">
                  <MapPin className="w-4 h-4 text-white fill-white/20" />
                </div>
                <div className="text-left select-none">
                  <div className="text-xs sm:text-[13px] font-bold text-white leading-tight">
                    Sai Nagar, Anantapur
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#E5D7CE]/85 leading-tight mt-0.5 whitespace-nowrap">
                    Behind Ambedkar Bhavan 9th Cross Road
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Organic Flowing Bottom Wave Divider sweeping into About Section (Exact Reference Contour) */}
        <div className="curve-hero-bottom">
          <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="heroRibbon1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.25" />
                <stop offset="30%" stopColor="#F5DFD0" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#FFF9F3" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#EAD2C1" stopOpacity="0.50" />
              </linearGradient>
              <linearGradient id="heroRibbon2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.65" />
                <stop offset="45%" stopColor="#F9ECE2" stopOpacity="0.80" />
                <stop offset="100%" stopColor="#FFF9F3" stopOpacity="0.90" />
              </linearGradient>
            </defs>

            {/* Background Faded Ribbon Wave */}
            <path
              d="M0,100 C340,150 680,80 1020,110 C1220,128 1360,75 1440,55 L1440,180 L0,180 Z"
              fill="url(#heroRibbon1)"
            />

            {/* Mid Faded Translucent Ambient Wave */}
            <path
              d="M0,125 C300,85 620,150 960,115 C1180,92 1340,135 1440,105 L1440,180 L0,180 Z"
              fill="url(#heroRibbon2)"
            />

            {/* Foreground Solid Warm Canvas Wave */}
            <path
              d="M0,140 C320,165 620,125 940,145 C1160,158 1320,120 1440,110 L1440,180 L0,180 Z"
              fill="#FFF9F3"
            />
          </svg>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="p-4 bg-[#1A1D20] flex items-center justify-between text-white border-b border-white/10">
                <span className="font-bold text-sm">Surya Hospital Building & Campus Tour</span>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
              <div className="aspect-video w-full bg-black">
                <video
                  src="/images/surya-hospital-building.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default HomeHero;
