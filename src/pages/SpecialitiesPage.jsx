import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Stethoscope,
  Scissors,
  Eye,
  Activity,
  AlertTriangle,
  Shield,
  Clock,
  HeartPulse,
  ChevronRight,
  X,
  Calendar,
  Phone,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

const iconMap = {
  Stethoscope,
  Scissors,
  Eye,
  Activity,
  AlertTriangle,
  Shield,
  Clock,
  HeartPulse,
};

export function SpecialitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSpecialty, setActiveSpecialty] = useState(null);

  useEffect(() => {
    document.title = "Clinical Specialities | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  // Verified categories derived directly from HOSPITAL_INFO.specialities
  const categories = [
    { id: "All", label: "All Specialities" },
    { id: "Everyday Health", label: "Everyday Health" },
    { id: "Surgical Care", label: "Surgical Care" },
    { id: "Keyhole Surgery", label: "Keyhole Surgery" },
    { id: "Bones & Joints", label: "Bones & Joints" },
    { id: "Immediate Care", label: "Immediate Care" },
    { id: "Specialized Clinic", label: "Specialized Clinic" },
    { id: "Same-Day Care", label: "Same-Day Care" },
    { id: "Recovery & Mobility", label: "Recovery & Mobility" },
  ];

  const filteredSpecialities = HOSPITAL_INFO.specialities.filter((spec) => {
    if (selectedCategory === "All") return true;
    return spec.category === selectedCategory;
  });

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="MEDICAL SERVICES"
        title="Our Medical & Surgical Services"
        description="Find experienced doctors for everyday fevers, blood pressure, bone fractures, keyhole surgeries, and emergency casualty care."
        breadcrumbs={[{ label: "Specialities" }]}
        badge="Hospital Services"
      >
        <Link to="/appointment">
          <Button variant="primary" size="sm" icon={Calendar} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Book an Appointment
          </Button>
        </Link>
        <Link to="/doctors">
          <Button variant="secondary" size="sm" className="bg-white border-[#E9D7C7] text-[#292D32] hover:bg-[#F8E6DC]">
            Meet Our Doctors
          </Button>
        </Link>
      </PageHero>

      <section className="py-12 md:py-16 bg-white border-b border-[#E9D7C7]">
        <Container>
          {/* Category Filter Pills */}
          <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="text-[11px] font-bold uppercase text-[#808A96] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Department:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#C65332] text-white shadow-2xs"
                    : "bg-[#FFF9F3] text-[#62666D] border border-[#E9D7C7] hover:bg-[#F8E6DC]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Empty state fallback if ever empty */}
          {filteredSpecialities.length === 0 && (
            <div className="p-8 text-center bg-[#FFF9F3] border border-[#E9D7C7] rounded-2xl max-w-md mx-auto my-6 space-y-3">
              <p className="text-sm text-[#292D32] font-semibold">No services found in this department.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className="text-xs font-bold text-[#C65332] hover:underline"
              >
                View All Specialities
              </button>
            </div>
          )}

          {/* Specialities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecialities.map((spec) => {
              const Icon = iconMap[spec.iconName] || Stethoscope;
              return (
                <div
                  key={spec.id}
                  className="rounded-2xl border border-[#DED7D7] bg-[#FCFAF7] shadow-2xs hover:shadow-card hover:border-[#641D2D] transition flex flex-col justify-between overflow-hidden group"
                >
                  {/* Image banner */}
                  <div className="relative aspect-[16/10] bg-[#28171D] overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="w-full h-full object-cover group-hover:scale-104 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#28171D]/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-[#29252A] shadow-2xs">
                      {spec.category}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#641D2D] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {spec.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <p className="text-sm text-[#6F686B] leading-relaxed font-normal">
                      {spec.shortDesc}
                    </p>

                    {/* Associated Doctor */}
                    {spec.relatedDoctor && (
                      <div className="py-2.5 px-3.5 rounded-xl bg-white border border-[#DED7D7] text-xs flex items-center justify-between shadow-2xs">
                        <span className="text-xs text-[#6F686B] font-medium">
                          Consultant:
                        </span>
                        <span className="font-bold text-[#29252A]">
                          {spec.relatedDoctor}
                        </span>
                      </div>
                    )}

                    {/* Offerings sample */}
                    <div className="space-y-1.5 pt-1">
                      <ul className="space-y-1.5 text-xs text-[#6F686B]">
                        {spec.keyTreatments.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#641D2D] shrink-0 mt-1.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="pt-3.5 border-t border-[#DED7D7] flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveSpecialty(spec)}
                        className="text-xs font-bold text-[#641D2D] hover:text-[#4E1421] transition flex items-center gap-1 cursor-pointer py-1.5"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        to={`/appointment?dept=${encodeURIComponent(spec.name)}`}
                      >
                        <Button
                          variant="primary"
                          size="sm"
                          className="bg-[#E56A2E] hover:bg-[#C8541D] text-white text-xs font-bold px-4 py-2 shadow-2xs"
                        >
                          Book Visit
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Speciality Deep-Dive Detail Modal */}
      {activeSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-4 sm:p-8 shadow-2xl border border-[#E9D7C7] space-y-5 max-h-[88vh] overflow-y-auto transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E9D7C7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F8E6DC] text-[#C65332] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-[#292D32]">
                    {activeSpecialty.name}
                  </h3>
                  <span className="text-xs text-[#C65332] font-bold uppercase tracking-wider">
                    {activeSpecialty.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveSpecialty(null)}
                className="p-1 rounded-lg text-[#62666D] hover:bg-[#F8E6DC] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32] mb-1">
                  About This Department
                </h4>
                <p className="text-xs sm:text-sm text-[#62666D] leading-relaxed">
                  {activeSpecialty.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32] mb-2">
                  Common Conditions & Treatments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeSpecialty.keyTreatments.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#FFF9F3] border border-[#E9D7C7] flex items-start gap-2 text-[#292D32] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C65332] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeSpecialty.relatedDoctor && (
                <div className="p-3.5 rounded-xl bg-[#FFF9F3] border border-[#E9D7C7] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#808A96] block">
                      Consultant in Charge
                    </span>
                    <span className="font-bold text-[#292D32] text-sm">
                      {activeSpecialty.relatedDoctor}
                    </span>
                  </div>
                  <Link
                    to="/doctors"
                    onClick={() => setActiveSpecialty(null)}
                    className="text-xs font-bold text-[#C65332] hover:underline"
                  >
                    View Doctor Details →
                  </Link>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/appointment?dept=${encodeURIComponent(activeSpecialty.name)}`}
                onClick={() => setActiveSpecialty(null)}
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold"
                >
                  Book an Appointment
                </Button>
              </Link>
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="md" icon={Phone} className="w-full text-xs bg-white border-[#E9D7C7] text-[#292D32] hover:bg-[#F8E6DC]">
                  Call Hospital Desk
                </Button>
              </a>
              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveSpecialty(null)}
                className="w-full sm:w-auto text-xs border-[#E9D7C7]"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SpecialitiesPage;
