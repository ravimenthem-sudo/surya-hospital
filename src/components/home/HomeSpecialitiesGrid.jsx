import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeSpecialitiesGrid() {
  const scrollContainerRef = useRef(null);

  const services = [
    {
      id: "general-medicine",
      title: "General Medicine",
      desc: "Comprehensive adult care",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      tag: "Everyday Health",
    },
    {
      id: "general-surgery",
      title: "General Surgery",
      desc: "Advanced surgical solutions",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&q=80",
      tag: "Surgical Suite",
    },
    {
      id: "orthopedics",
      title: "Orthopedics",
      desc: "Bone & joint care",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      tag: "Bones & Joints",
    },
    {
      id: "emergency-care",
      title: "Emergency Care",
      desc: "24/7 trauma & critical care",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
      tag: "24/7 Critical",
    },
    {
      id: "diagnostics",
      title: "Diagnostics",
      desc: "Accurate & fast results",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
      tag: "Lab & Imaging",
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      desc: "24/7 In-house pharmacy",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      tag: "On-Site Support",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-16 pb-24 sm:pt-20 sm:pb-32 bg-[#FFF9F3] text-[#1A1D20] overflow-hidden">
      {/* Top Multi-Layer Faded Organic Ribbon Frame matching reference */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[90px] md:h-[120px]">
          <defs>
            <linearGradient id="specTopRibbon1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.25" />
              <stop offset="35%" stopColor="#F5DFD0" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#FFF9F3" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#EAD2C1" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="specTopRibbon2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#F9ECE2" stopOpacity="0.80" />
              <stop offset="100%" stopColor="#FFF9F3" stopOpacity="0.90" />
            </linearGradient>
          </defs>

          {/* Background Faded Ribbon Trail */}
          <path
            d="M0,0 L1440,0 L1440,95 C1220,60 1020,120 760,55 C480,0 240,105 0,50 Z"
            fill="url(#specTopRibbon1)"
          />

          {/* Mid Faded Translucent Ambient Wave */}
          <path
            d="M0,0 L1440,0 L1440,75 C1240,35 1060,100 800,45 C520,0 260,85 0,38 Z"
            fill="url(#specTopRibbon2)"
          />

          {/* Foreground Solid Warm Canvas Curve */}
          <path
            d="M0,0 L1440,0 L1440,55 C1260,25 1100,75 840,35 C560,-5 280,65 0,30 Z"
            fill="#FFF9F3"
          />
        </svg>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Editorial Splitting */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 text-left max-w-2xl">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A84328]">
                <span className="w-2 h-2 rounded-full bg-[#A84328]" />
                <span>OUR SERVICES</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#1A1D20] tracking-tight leading-tight">
                Comprehensive Care
                <br />
                for Every Stage of Life
              </h2>
            </AnimateIn>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-[#E2D9D0] bg-white hover:bg-[#F8E6DC] text-[#1A1D20] flex items-center justify-center transition active:scale-95 shadow-xs"
                aria-label="Previous specialties"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-[#E2D9D0] bg-white hover:bg-[#F8E6DC] text-[#1A1D20] flex items-center justify-center transition active:scale-95 shadow-xs"
                aria-label="Next specialties"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:text-right">
            <p className="text-sm sm:text-base text-[#62666D] max-w-md leading-relaxed">
              From routine consultations to advanced surgical care, we provide complete healthcare services with compassion and expertise.
            </p>
            <Link
              to="/specialities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#A84328] bg-[#F8E6DC]/60 hover:bg-[#F8E6DC] border border-[#A84328]/20 transition-all shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6 Image-Led Tiles in One Desktop Row matching Mockup */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4"
        >
          {services.map((service, idx) => (
            <AnimateIn
              key={service.id}
              animation="fade-up"
              delay={idx * 60}
              className="flex-1"
            >
              <Link
                to="/specialities"
                className="group flex flex-col justify-between h-full bg-white rounded-2xl border border-[#E2D9D0] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#A84328] transition-all duration-300"
              >
                {/* Image Top */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#1A1D20]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#1A1D20] group-hover:text-[#A84328] transition-colors">
                      {service.title}
                    </h3>
                    <span className="w-3.5 h-0.5 bg-[#A84328] group-hover:w-5 transition-all rounded-full" />
                  </div>
                  <p className="text-xs text-[#62666D] leading-snug">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

      </div>
      {/* Bottom Multi-Layer Faded Organic Ribbon Frame sweeping into next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="relative block w-full h-[65px] sm:h-[95px] md:h-[130px]">
          <defs>
            <linearGradient id="specBottomRibbon1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.30" />
              <stop offset="30%" stopColor="#F5DFD0" stopOpacity="0.50" />
              <stop offset="70%" stopColor="#FFF9F3" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#EAD2C1" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="specBottomRibbon2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF9F3" stopOpacity="0.70" />
              <stop offset="50%" stopColor="#F9ECE2" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFF9F3" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Background Faded Ribbon Trail */}
          <path
            d="M0,70 C240,135 560,35 840,110 C1100,165 1280,85 1440,115 L1440,180 L0,180 Z"
            fill="url(#specBottomRibbon1)"
          />

          {/* Mid Faded Translucent Ambient Wave */}
          <path
            d="M0,95 C260,150 580,55 860,125 C1120,175 1300,105 1440,130 L1440,180 L0,180 Z"
            fill="url(#specBottomRibbon2)"
          />

          {/* Foreground Solid Warm Canvas Wave */}
          <path
            d="M0,115 C280,165 600,75 880,135 C1140,180 1320,120 1440,140 L1440,180 L0,180 Z"
            fill="#FFF9F3"
          />
        </svg>
      </div>
    </section>
  );
}

export default HomeSpecialitiesGrid;
