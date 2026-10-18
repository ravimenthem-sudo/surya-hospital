import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  FlaskConical,
  Scan,
  Layers,
  Activity,
  CheckCircle,
  Phone,
  AlertCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

const iconMap = {
  FlaskConical,
  Scan,
  Layers,
  Activity,
  CheckCircle,
};

export function DiagnosticsPage() {
  const [activeCategory, setActiveCategory] = useState(HOSPITAL_INFO.diagnostics[0]);

  useEffect(() => {
    document.title = "Diagnostics & Laboratory | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="LABORATORY & SCANS"
        title="Lab Tests & Diagnostic Scans"
        description="Fast blood tests, ultrasound scans, digital X-rays, and heart ECGs done right inside our hospital so your doctor can find the right treatment quickly."
        breadcrumbs={[{ label: "Diagnostics" }]}
        badge="On-Campus Lab & Imaging"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="primary" size="sm" icon={Phone} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Call Lab Desk: {HOSPITAL_INFO.phone}
          </Button>
        </a>
        <Link to="/appointment">
          <Button variant="secondary" size="sm" icon={Calendar} className="bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]">
            Book a Visit or Test
          </Button>
        </Link>
      </PageHero>

      {/* Diagnostics Overview */}
      <section className="py-12 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                ACCURATE RESULTS YOU CAN TRUST
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
                Clear Test Results to Guide Your Healing
              </h2>
              <p className="text-sm text-[#59616B] leading-relaxed">
                When you or a family member feel unwell, timely test results make all the difference. Our on-site testing lab and imaging equipment deliver quick, dependable reports directly to your treating doctor.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-white border border-[#F0D9CB] space-y-2 text-left">
              <span className="text-[11px] uppercase font-bold text-[#252B33] block">
                Sample Collection & Lab Timings:
              </span>
              <div className="text-xs text-[#59616B] space-y-1">
                <p>
                  <strong>Regular Lab Tests:</strong> {HOSPITAL_INFO.timing.diagnostics}
                </p>
                <p>
                  <strong>Emergency Lab Testing:</strong> Open 24 Hours / 7 Days
                </p>
                <p className="text-[11px] text-[#808A96] pt-1">
                  Reports are shared with your consulting doctor as soon as they are ready.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Confirmed Test Categories & Tab Detail */}
      <section className="py-16 bg-white border-b border-[#F0D9CB]">
        <Container>
          <div className="text-left max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
              AVAILABLE LAB TESTS & SCANS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
              Clinical Lab & Imaging Units
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Category Navigation (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              {HOSPITAL_INFO.diagnostics.map((cat) => {
                const Icon = iconMap[cat.iconName] || FlaskConical;
                const isSelected = activeCategory.id === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full p-4 rounded-xl text-left transition flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? "bg-[#252B33] text-white border-[#252B33] shadow-md ring-1 ring-[#252B33]"
                        : "bg-white text-[#252B33] border-[#F0D9CB] hover:bg-[#FCECE2] hover:border-[#D98A62]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#C65332] text-white"
                            : "bg-[#FCECE2] text-[#C65332]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-bold leading-snug transition-colors ${
                            isSelected ? "text-white" : "text-[#252B33]"
                          }`}
                        >
                          {cat.name}
                        </h4>
                        <span
                          className={`text-[11px] font-medium transition-colors ${
                            isSelected ? "text-[#F6D8C5]" : "text-[#59616B]"
                          }`}
                        >
                          {cat.testsIncluded.length} Key Tests
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Category Detail Card (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-[#F0D9CB] shadow-sm space-y-6 text-left">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-[#FCECE2]">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252B33]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-bold text-[#F6D8C5] uppercase tracking-wider block">
                    Diagnostic Category
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {activeCategory.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33]">
                  What This Test Is For
                </h4>
                <p className="text-xs sm:text-sm text-[#59616B] leading-relaxed">
                  {activeCategory.shortDesc}
                </p>
              </div>

              {/* Verified Tests in this category */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#252B33]">
                  Common Tests in this Unit
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeCategory.testsIncluded.map((test, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#FFF8F2] border border-[#F0D9CB] flex items-center gap-2 text-[#252B33] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C65332] shrink-0" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation Guidelines */}
              <div className="p-4 rounded-xl bg-[#FCECE2] border border-[#F0D9CB] space-y-1.5 text-xs text-[#252B33]">
                <div className="flex items-center gap-2 font-bold text-[#252B33]">
                  <AlertCircle className="w-4 h-4 text-[#C65332] shrink-0" />
                  <span>How to Prepare for Your Test:</span>
                </div>
                <p className="leading-relaxed pl-6 text-[#59616B]">
                  {activeCategory.preparationNotice}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="primary"
                    size="md"
                    icon={Phone}
                    className="w-full bg-[#C65332] hover:bg-[#A84328] text-white"
                  >
                    Check Test Availability: {HOSPITAL_INFO.phone}
                  </Button>
                </a>

                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="secondary" size="md" className="w-full text-xs bg-white border-[#F0D9CB] text-[#252B33] hover:bg-[#FCECE2]">
                    Ask Reception Desk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Test Enquiry Instructions */}
      <section className="py-16 bg-[#FFF8F2] border-b border-[#F0D9CB]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B96645]">
                SIMPLE 3-STEP GUIDE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B33] tracking-tight">
                How to Get Your Lab Tests Done
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
              <div className="p-5 rounded-xl border border-[#F0D9CB] bg-white space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#C65332] text-white flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <h4 className="font-bold text-[#252B33] text-sm">Bring Doctor's Advice</h4>
                <p className="text-[#59616B] leading-relaxed">
                  Bring your doctor's prescription or slip showing which tests or scans are needed.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#F0D9CB] bg-white space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#C65332] text-white flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <h4 className="font-bold text-[#252B33] text-sm">Follow Preparation Tips</h4>
                <p className="text-[#59616B] leading-relaxed">
                  Check if fasting (overnight without food) or drinking water (for scans) is needed before you come.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#F0D9CB] bg-white space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#C65332] text-white flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <h4 className="font-bold text-[#252B33] text-sm">Give Sample & Get Reports</h4>
                <p className="text-[#59616B] leading-relaxed">
                  Submit blood or urine at reception. Your doctor will review the results with you promptly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default DiagnosticsPage;
