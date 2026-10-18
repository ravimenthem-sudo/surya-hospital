import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function TestimonialCarousel() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: "t1",
      name: "Srinivas R.",
      dept: "General Medicine",
      quote: "Excellent care and very supportive doctors. The staff is kind and the facilities are modern. Highly recommended.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "t2",
      name: "Lakshmi P.",
      dept: "General Surgery",
      quote: "I had a smooth surgical experience here. The doctors and nursing staff took great care of me.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "t3",
      name: "Ramesh K.",
      dept: "Emergency Care",
      quote: "24/7 emergency service is a big relief for our family. Thank you Surya Hospital for your quick response and care.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#FFF9F3] text-[#1A1D20] overflow-hidden border-t border-[#E2D9D0]/60">
      {/* Scenic Sunset Patient Family Background Overlay (Matching Reference) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0 pointer-events-none opacity-30 lg:opacity-35">
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
          alt="Happy family outdoors at sunset"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F3] via-[#FFF9F3]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Arrow Controls and Right Callout Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 text-left max-w-xl">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A84328]">
                <span className="w-2 h-2 rounded-full bg-[#A84328]" />
                <span>PATIENT STORIES</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1A1D20] tracking-tight leading-tight">
                Real People.
                <br />
                Real Experiences. <span className="inline-block w-8 h-1 bg-[#A84328] align-middle ml-1 rounded-full" />
              </h2>
            </AnimateIn>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-[#E2D9D0] bg-white hover:bg-[#F8E6DC] text-[#1A1D20] flex items-center justify-center transition active:scale-95 shadow-xs"
                aria-label="Previous stories"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-[#E2D9D0] bg-white hover:bg-[#F8E6DC] text-[#1A1D20] flex items-center justify-center transition active:scale-95 shadow-xs"
                aria-label="Next stories"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Floating Editorial Text Callout matching Mockup */}
          <div className="lg:text-right max-w-sm">
            <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1A1D20] leading-tight">
              Your Health.
              <br />
              <span className="font-editorial-italic text-[#A84328]">Our Priority.</span>
            </div>
            <p className="text-xs sm:text-sm text-[#62666D] mt-1.5 leading-relaxed">
              Compassionate care for today, a healthier tomorrow.
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid (Matching Exact Mockup 3 Cards) */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((item, idx) => (
            <AnimateIn
              key={item.id}
              animation="fade-up"
              delay={idx * 120}
              className="bg-white rounded-2xl border border-[#E2D9D0] p-6 shadow-xs hover:shadow-xl hover:border-[#A84328] transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <Quote className="w-7 h-7 text-[#A84328]/20" />

                <p className="text-sm text-[#1A1D20] leading-relaxed font-normal">
                  "{item.quote}"
                </p>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Patient Avatar & Name */}
              <div className="pt-6 border-t border-[#E2D9D0]/70 flex items-center gap-3 mt-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E2D9D0]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#1A1D20] leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#62666D]">
                    {item.dept}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialCarousel;
