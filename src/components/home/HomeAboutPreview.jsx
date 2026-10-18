import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeAboutPreview() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 bg-[#FFF9F3] text-[#1A1D20] overflow-hidden">
      {/* Faded Editorial Curved Ribbons in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full opacity-40" preserveAspectRatio="none">
          <path d="M-100,50 C280,220 540,-30 920,120 C1240,240 1420,80 1600,160" stroke="#E5B278" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          <path d="M-50,140 C320,320 620,40 1020,200 C1320,310 1480,180 1600,240" stroke="#F5DFD0" strokeWidth="48" strokeOpacity="0.35" fill="none" />
          <path d="M0,280 C400,450 720,180 1100,320 C1380,420 1500,310 1600,360" stroke="#E5B278" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
          <path d="M-80,380 C360,540 760,320 1140,460 C1380,540 1520,420 1600,480" stroke="#F8E6DC" strokeWidth="64" strokeOpacity="0.4" fill="none" />
        </svg>
      </div>
      {/* Editorial Decorative Background Blur */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#F8E6DC] rounded-full blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Content (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A84328]">
                <span className="w-2 h-2 rounded-full bg-[#A84328]" />
                <span>ABOUT SURYA HOSPITAL</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-[#1A1D20] tracking-tight leading-[1.1]">
                People. Care.
                <br />
                Always. <span className="inline-block w-8 h-1 bg-[#A84328] align-middle ml-1 rounded-full" />
              </h2>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={200}>
              <p className="text-base sm:text-lg text-[#62666D] leading-relaxed font-normal max-w-xl">
                Surya Hospital in Sai Nagar, Anantapur is dedicated to providing high-quality, affordable and compassionate healthcare for every patient. With experienced doctors, modern infrastructure and 24/7 emergency support, we are always here for you and your family.
              </p>
            </AnimateIn>

            {/* Metric Counters (Reference: 15+ Medical Services, 1000+ Happy Patients, 24/7 Emergency Care) */}
            <AnimateIn animation="fade-up" delay={300}>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E2D9D0]">
                <div>
                  <div className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1A1D20]">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-[#62666D] mt-1 font-medium">
                    Medical Services
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1A1D20]">
                    1000+
                  </div>
                  <div className="text-xs sm:text-sm text-[#62666D] mt-1 font-medium">
                    Happy Patients
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1A1D20]">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-[#62666D] mt-1 font-medium">
                    Emergency Care
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Action Pill Button */}
            <AnimateIn animation="pop" delay={400} className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateIn>
          </div>

          {/* Right Column: Layered Asymmetric Editorial Imagery (6 Cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Top Right Calligraphic Accent Text */}
            <div className="absolute -top-10 right-4 sm:right-8 font-editorial-italic text-3xl sm:text-4xl text-[#A84328] opacity-90 select-none">
              Care Beyond Treatment
            </div>

            <div className="relative w-full max-w-lg">
              {/* Primary Circular / Organic Masked Image (Surgical / Doctor Scene) */}
              <div className="relative aspect-square w-full rounded-[46%_54%_56%_44%/48%_44%_56%_52%] overflow-hidden shadow-2xl border-4 border-white/80 bg-[#0D4855]/10 p-1">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=85"
                  alt="Surya Hospital healthcare team providing compassionate patient care"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlapping Secondary Rounded Card (Doctor consulting smiling child/family) */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 w-3/5 sm:w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=85"
                  alt="Surya Hospital doctor consulting with family"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Floating Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E2D9D0] flex items-center gap-2 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#F8E6DC] text-[#A84328] flex items-center justify-center shrink-0">
                    <Heart className="w-3.5 h-3.5 fill-[#A84328] text-[#A84328]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#1A1D20] truncate">
                    Compassionate Care for Every Family
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeAboutPreview;
