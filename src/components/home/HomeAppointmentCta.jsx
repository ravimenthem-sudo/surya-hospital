import React, { useState } from "react";
import { Calendar, Clock, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimateIn } from "../ui/AnimateIn";

export function HomeAppointmentCta() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#1A1D20] text-white overflow-hidden">
      {/* Background Photographic Media with dark overlay matching Mockup */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/surya-hospital-building-hero.jpg"
          alt="Surya Hospital"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D20] via-[#1A1D20]/90 to-[#1A1D20]/80" />
      </div>

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A84328]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D4855]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Organic Wave Transition from Testimonials */}
      <div className="organic-divider-top">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,0 L1440,0 L1440,32 C1280,24 1060,52 820,78 C580,105 320,100 0,70 Z"
            fill="#FFF9F3"
          />
        </svg>
      </div>

      {/* Bottom Organic Wave Transition into Footer */}
      <div className="organic-divider-bottom">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,70 C320,100 580,105 820,78 C1060,52 1280,24 1440,32 L1440,120 L0,120 Z"
            fill="#FFF9F3"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle & Value Pills (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <AnimateIn animation="slide-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8D8D9]">
                <span className="w-2 h-2 rounded-full bg-[#A84328]" />
                <span>BOOK APPOINTMENT</span>
              </div>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={100}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight leading-[1.1]">
                Take the First Step
                <br />
                Towards a Healthier Tomorrow.
              </h2>
            </AnimateIn>

            <AnimateIn animation="slide-left" delay={200}>
              <p className="text-base sm:text-lg text-[#E2D9D0]/90 max-w-xl leading-relaxed font-normal">
                Get expert medical consultation at your convenient time. Fill in the form or call our hospital desk directly.
              </p>
            </AnimateIn>

            {/* Quick Feature Badges below Heading (Reference: Quick & Easy Booking, Flexible Time Slots, Consult with Expert Doctors) */}
            <AnimateIn animation="fade-up" delay={300}>
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
                  <Calendar className="w-3.5 h-3.5 text-[#C85235]" />
                  <span>Quick & Easy Booking</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
                  <Clock className="w-3.5 h-3.5 text-[#C85235]" />
                  <span>Flexible Time Slots</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
                  <UserCheck className="w-3.5 h-3.5 text-[#C85235]" />
                  <span>Consult with Expert Doctors</span>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right Column: Appointment Form Container (5 Cols - Exact Reference Mockup) */}
          <div className="lg:col-span-5">
            <AnimateIn animation="slide-right" delay={200}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 text-[#1A1D20]">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1D20]">
                      Appointment Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#62666D] max-w-xs mx-auto">
                      Our hospital desk will call you back shortly at <strong>{formData.phone}</strong> to confirm your doctor visiting slot.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 rounded-full text-xs font-bold text-[#A84328] bg-[#F8E6DC]"
                    >
                      Book Another Slot
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Your Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1D20] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4EFEA]/60 border border-[#E2D9D0] text-sm text-[#1A1D20] placeholder-[#62666D]/50 focus:outline-none focus:border-[#A84328] focus:bg-white transition"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1D20] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4EFEA]/60 border border-[#E2D9D0] text-sm text-[#1A1D20] placeholder-[#62666D]/50 focus:outline-none focus:border-[#A84328] focus:bg-white transition"
                        />
                      </div>

                      {/* Select Department */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1D20] mb-1.5">
                          Select Department
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4EFEA]/60 border border-[#E2D9D0] text-sm text-[#1A1D20] focus:outline-none focus:border-[#A84328] focus:bg-white transition"
                        >
                          <option value="">Choose department</option>
                          <option value="general-medicine">General Medicine (Physician)</option>
                          <option value="general-surgery">General & Laparoscopic Surgery</option>
                          <option value="orthopedics">Orthopedics & Joint Care</option>
                          <option value="emergency">24/7 Emergency & Casualty</option>
                        </select>
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1D20] mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4EFEA]/60 border border-[#E2D9D0] text-sm text-[#1A1D20] focus:outline-none focus:border-[#A84328] focus:bg-white transition"
                        />
                      </div>
                    </div>

                    {/* Submit Button (Matching Reference: Book Appointment ->) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Book Appointment</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeAppointmentCta;
