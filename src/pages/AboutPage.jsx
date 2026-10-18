import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { AnimateIn } from "../components/ui/AnimateIn";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="ABOUT SURYA HOSPITAL"
        title="Comprehensive Healthcare with Compassionate Care"
        description="Serving the families of Sai Nagar, Anantapur, and neighboring regions with dedicated outpatient consultations, sterile surgical procedures, and 24/7 emergency response."
        breadcrumbs={[{ label: "About Us" }]}
        badge="Sai Nagar, Anantapur"
      >
        <Link to="/doctors">
          <Button variant="primary" size="sm" icon={Stethoscope} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Meet Doctors
          </Button>
        </Link>
        <Link to="/specialities">
          <Button variant="secondary" size="sm" className="bg-white border-[#E9D7C7] text-[#292D32] hover:bg-[#F8E6DC]">
            Clinical Specialities
          </Button>
        </Link>
      </PageHero>

      {/* Hospital Overview */}
      <section className="py-18 md:py-24 bg-[#FFF9F3] border-b border-[#E2D9D0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E2D9D0] shadow-xl bg-white p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1A1D20]">
                  <img
                    src="/images/surya-reception.jpg"
                    alt="Surya Hospital Lobby and Reception in Sai Nagar Anantapur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D20]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-wide">
                    Surya Hospital Campus • Sai Nagar, Anantapur
                  </div>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#1A1D20] text-white p-4 rounded-xl shadow-xl items-center gap-3 text-xs font-bold border border-white/20">
                <ShieldCheck className="w-5 h-5 text-[#C85235]" />
                <span className="tracking-wide">Ethical Medical Practice</span>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#F8E6DC] text-[#A84328] border border-[#A84328]/20">
                ABOUT SURYA HOSPITAL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#1A1D20] tracking-tight">
                Caring Healthcare for You and Your Family
              </h2>
              <p className="text-base sm:text-lg text-[#62666D] leading-relaxed font-normal">
                {HOSPITAL_INFO.about.overview}
              </p>
              <p className="text-sm sm:text-base text-[#62666D] leading-relaxed">
                Located behind Ambedkar Bhavan on 9th Cross Road in Sai Nagar, our hospital is easy to reach. We provide comfortable inpatient rooms, fully equipped operating suites, and 24/7 emergency care so you receive complete care in one visit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 text-xs sm:text-sm text-[#29252A] font-semibold">
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#DED7D7] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0" />
                  <span>24/7 Emergency & Casualty</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#DED7D7] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0" />
                  <span>Clean Operating Rooms for Safe Surgeries</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#DED7D7] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0" />
                  <span>Monitored Inpatient & Recovery Rooms</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#DED7D7] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#641D2D] shrink-0" />
                  <span>24/7 Open Medical Pharmacy</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Medical Leadership & Founder Section - High Impact Editorial Feature Panel */}
      <section className="py-18 sm:py-24 bg-white border-b border-[#DED7D7]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#28171D] rounded-3xl border border-[#3A222A] p-7 sm:p-12 shadow-xl text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
                {/* Doctor Portrait with subtle brass framing */}
                <div className="relative w-44 h-56 sm:w-56 sm:h-72 rounded-2xl overflow-hidden bg-[#1E0F14] shrink-0 border-2 border-[#B69A65]/40 shadow-lg">
                  <img
                    src="/images/dr-d-surya-prakash.png"
                    alt="Dr. D. Surya Prakash, M.D. Internal Medicine - Managing Director & Consultant Physician"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#28171D]/80 via-transparent to-transparent md:hidden" />
                  <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-white bg-[#641D2D] py-1 rounded md:hidden">
                    Managing Director
                  </span>
                </div>

                {/* Leadership Bio & Clinical Responsibilities */}
                <div className="space-y-4 text-left flex-1">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#B69A65] text-white">
                      <span>Founder & Managing Director</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      Dr. D. Surya Prakash
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-[#E8D8D9]">
                      M.D. Internal Medicine • Consultant Physician
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#DED7D7] leading-relaxed font-normal">
                    As the founder and Managing Director of Surya Hospital, Dr. D. Surya Prakash oversees clinical standards, patient safety, and inpatient medical care. With deep experience in internal medicine, he guides patients through adult illness diagnosis, diabetes and blood pressure management, and post-surgical recovery.
                  </p>

                  {/* Verified Clinical Focus Pills */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#B69A65] block">
                      Clinical Focus:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium">
                        Diabetes, BP & Cholesterol
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium">
                        Fever & Seasonal Illnesses
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium">
                        Heart & Breathing Health Checks
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium">
                        Inpatient Medical Care
                      </span>
                    </div>
                  </div>

                  {/* OPD Schedule & Navigation Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/15">
                    <div className="text-xs text-[#E8D8D9]">
                      <strong className="text-white">Consultation Timings:</strong> Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM
                    </div>
                    <Link to="/doctors" className="shrink-0">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-xs font-bold border-white/20 bg-white text-[#29252A] hover:bg-[#E8D8D9] w-full sm:w-auto"
                      >
                        All Doctors & OPD Hours
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values & Commitments */}
      <section className="py-18 sm:py-24 bg-[#FCFAF7] border-b border-[#DED7D7]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
                OUR CORE VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight">
                Clear Words, Kind Attention & Honest Advice
              </h2>
              <p className="text-base text-[#6F686B] leading-relaxed font-normal">
                {HOSPITAL_INFO.about.philosophy}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOSPITAL_INFO.values.map((val) => (
                <div
                  key={val.title}
                  className="bg-white p-7 rounded-2xl border border-[#DED7D7] shadow-2xs text-left space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="w-11 h-11 rounded-xl bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#29252A]">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6F686B] leading-relaxed font-normal">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Facilities & Services */}
      <section className="py-18 bg-white border-b border-[#DED7D7]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#E8D8D9] text-[#641D2D] border border-[#DED7D7]">
              HOSPITAL FACILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#29252A] tracking-tight">
              Modern Facilities for Your Comfort & Safety
            </h2>
            <p className="text-base text-[#6F686B] leading-relaxed font-normal">
              From sterile surgical suites to 24/7 casualty and pharmacy, everything is set up to help you heal quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOSPITAL_INFO.services.map((svc) => (
              <div
                key={svc.id}
                className="p-6 rounded-2xl border border-[#DED7D7] bg-[#FCFAF7] text-left space-y-2.5 shadow-2xs hover:border-[#641D2D] transition"
              >
                <div className="text-[11px] font-bold text-[#641D2D] uppercase tracking-wider">
                  Verified Service
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#29252A]">{svc.name}</h3>
                <p className="text-xs sm:text-sm text-[#6F686B] leading-relaxed font-normal">{svc.details}</p>
              </div>
            ))}
          </div>

          {/* Cross-page Navigation CTA */}
          <AnimateIn animation="pop" delay={150} className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#28171D] border border-[#3A222A] text-white flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Have questions about our doctors or departments?
              </h3>
              <p className="text-xs sm:text-sm text-[#DED7D7] font-normal">
                Explore our full specialist roster or contact our reception desk directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto">
              <Link to="/doctors" className="w-full sm:w-auto">
                <Button variant="secondary" size="md" className="w-full sm:w-auto font-bold text-xs bg-white text-[#29252A] hover:bg-[#E8D8D9]">
                  View Doctor Directory
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="md" className="w-full sm:w-auto font-bold text-xs text-white border-white/20 hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </div>
  );
}
export default AboutPage;
