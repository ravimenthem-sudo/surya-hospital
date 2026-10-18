import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  AlertCircle,
  AlertTriangle,
  X,
  Stethoscope,
  Phone,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  useEffect(() => {
    document.title = "Specialist Doctors | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const departments = [
    "All",
    "General Surgery & Proctology",
    "Orthopedic Surgery & Internal Medicine",
    "Emergency Medicine & Critical Care",
  ];

  // Approved, verified clinical keywords mapped strictly to verified doctors and hospital data
  const CLINICAL_FOCUS_KEYWORDS = {
    "dr-d-surya-prakash": [
      "diabetes",
      "sugar",
      "blood pressure",
      "bp",
      "hypertension",
      "cholesterol",
      "fever",
      "infections",
      "seasonal illness",
      "cough",
      "cold",
      "flu",
      "internal medicine",
      "general physician",
      "thyroid",
      "fatigue",
      "weakness",
      "inpatient care",
      "managing director",
    ],
    "dr-anwar-ramadan": [
      "piles",
      "fissure",
      "fistula",
      "proctology",
      "hemorrhoids",
      "hernia",
      "appendix",
      "appendicitis",
      "gallbladder",
      "gallstones",
      "keyhole",
      "laparoscopic",
      "general surgery",
      "surgeon",
      "skin cyst",
      "lipoma",
      "abscess",
      "day care surgery",
      "minor surgery",
    ],
    "dr-mohamed-ramadan": [
      "fracture",
      "broken bone",
      "bone",
      "plaster",
      "plaster cast",
      "joint",
      "joint pain",
      "knee",
      "knee pain",
      "hip",
      "shoulder",
      "back pain",
      "neck pain",
      "spine",
      "sprain",
      "arthritis",
      "trauma",
      "accident",
      "mobility",
      "orthopedics",
      "orthopedic surgeon",
    ],
    "dr-omnia-ramadan": [
      "emergency",
      "casualty",
      "accident",
      "trauma",
      "chest pain",
      "breathing",
      "breathing difficulty",
      "fainting",
      "seizure",
      "first aid",
      "critical care",
      "triage",
      "acute illness",
      "24/7",
      "urgent care",
    ],
  };

  const EMERGENCY_SEARCH_KEYWORDS = [
    "chest pain",
    "breathing difficulty",
    "breathing",
    "seizure",
    "accident",
    "trauma",
    "fainting",
    "collapse",
    "choking",
    "heart attack",
    "heavy bleeding",
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const isEmergencyQuery =
    Boolean(normalizedQuery) &&
    EMERGENCY_SEARCH_KEYWORDS.some(
      (term) => normalizedQuery.includes(term) || term.includes(normalizedQuery)
    );

  const filteredDoctors = HOSPITAL_INFO.doctors.filter((doc) => {
    // 1. Check department filter
    const matchesDept =
      selectedDepartment === "All" ||
      doc.department.toLowerCase().includes(selectedDepartment.toLowerCase()) ||
      (selectedDepartment === "Orthopedic Surgery & Internal Medicine" &&
        (doc.department.includes("Orthopedics") || doc.department.includes("General Medicine"))) ||
      (selectedDepartment === "Emergency Medicine & Critical Care" &&
        doc.department.includes("Emergency"));

    if (!matchesDept) return false;

    // 2. If no search query, return all matching the department
    if (!normalizedQuery) return true;

    // 3. Match against name, department, qualifications, and specialties
    const matchesName = doc.name.toLowerCase().includes(normalizedQuery);
    const matchesDepartment = doc.department.toLowerCase().includes(normalizedQuery);
    const matchesQualifications = doc.qualifications.toLowerCase().includes(normalizedQuery);
    const matchesSpecialties = doc.specialties.some((s) =>
      s.toLowerCase().includes(normalizedQuery)
    );

    // 4. Match against verified clinical focus keywords
    const doctorKeywords = CLINICAL_FOCUS_KEYWORDS[doc.id] || [];
    const matchesKeywords = doctorKeywords.some(
      (kw) => kw.includes(normalizedQuery) || normalizedQuery.includes(kw)
    );

    return (
      matchesName ||
      matchesDepartment ||
      matchesQualifications ||
      matchesSpecialties ||
      matchesKeywords
    );
  });

  const handleResetSearch = () => {
    setSearchQuery("");
    setSelectedDepartment("All");
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="DOCTORS & SPECIALISTS"
        title="Meet Our Doctors"
        description="Consult with caring, experienced doctors in internal medicine, general surgery, bone and joint care, and emergency medicine right here in Anantapur."
        breadcrumbs={[{ label: "Doctors" }]}
        badge="Experienced Medical Team"
      >
        <Link to="/appointment">
          <Button variant="primary" size="sm" icon={Calendar} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Book an Appointment
          </Button>
        </Link>
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="secondary" size="sm" icon={Phone} className="bg-white border-[#E9D7C7] text-[#292D32] hover:bg-[#F8E6DC]">
            Call Reception: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <section className="py-14 md:py-20 bg-white border-b border-[#DED7D7]">
        <Container>
          {/* Hospital Leadership & Help Box */}
          <div className="mb-8 p-4 rounded-xl bg-[#FCFAF7] border border-[#DED7D7] flex items-start gap-3 text-xs sm:text-sm text-[#29252A]">
            <AlertCircle className="w-5 h-5 text-[#641D2D] shrink-0 mt-0.5" />
            <div className="space-y-1 text-left">
              <p className="font-bold text-[#29252A]">Doctor Availability & Booking Help:</p>
              <p className="text-[#6F686B]">
                Surya Hospital is guided by Managing Director & Physician <strong>Dr. D. Surya Prakash (M.D. Internal Medicine)</strong>, alongside experienced general surgeons, orthopedic specialists, and emergency doctors. Need help choosing the right doctor or checking today's visiting hours? Call our front desk at {HOSPITAL_INFO.phone}.
              </p>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-[#FCFAF7] p-5 sm:p-7 rounded-2xl border border-[#DED7D7] mb-10 space-y-4 shadow-2xs">
            <div className="flex flex-col md:flex-row gap-3.5 items-stretch md:items-center justify-between">
              {/* Search input with label & clear button */}
              <div className="relative flex-1">
                <label htmlFor="doctor-search" className="sr-only">
                  Search doctors by name, medical specialty, or clinical health problem
                </label>
                <Search className="w-4 h-4 text-[#8A8487] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="doctor-search"
                  type="text"
                  placeholder="Search by doctor name, health problem (e.g. fever, diabetes, hernia, fracture)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-3 text-xs sm:text-sm rounded-xl border border-[#DED7D7] bg-white text-[#29252A] placeholder-[#8A8487] focus:outline-none focus:ring-2 focus:ring-[#641D2D]/20 focus:border-[#641D2D] transition"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8A8487] hover:text-[#641D2D] rounded-full focus:outline-none focus:ring-2 focus:ring-[#641D2D]"
                    aria-label="Clear search input"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status and Reset Toolbar Actions */}
              <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                <div className="text-xs text-[#6F686B] font-medium">
                  Showing <strong className="text-[#29252A]">{filteredDoctors.length}</strong> {filteredDoctors.length === 1 ? "doctor" : "doctors"}
                </div>
                {(searchQuery || selectedDepartment !== "All") && (
                  <button
                    type="button"
                    onClick={handleResetSearch}
                    className="text-xs font-bold text-[#641D2D] hover:underline cursor-pointer"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </div>

            {/* Department Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs" role="region" aria-label="Department filters">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8487] shrink-0 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3.5 py-1.5 rounded-lg font-bold transition whitespace-nowrap cursor-pointer ${
                    selectedDepartment === dept
                      ? "bg-[#641D2D] text-white shadow-2xs"
                      : "bg-white text-[#6F686B] border border-[#DED7D7] hover:bg-[#E8D8D9]/40"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Priority Emergency Guidance Callout (Only appears for acute emergency search queries) */}
            {isEmergencyQuery && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-red-50 border-2 border-red-200 text-left space-y-2 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-red-950">
                        Urgent Medical Emergency Notice: Immediate Care Available 24/7
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded">
                        24/7 Casualty Desk
                      </span>
                    </div>
                    <p className="text-xs text-red-900 leading-relaxed">
                      For sudden, severe conditions such as chest pain, breathing difficulties, fainting, seizures, or serious trauma, <strong>do not wait for an OPD consultation or appointment</strong>. Surya Hospital provides continuous 24/7 emergency casualty care.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1.5">
                      <a
                        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                        <span>Call 24/7 Casualty: {HOSPITAL_INFO.phone}</span>
                      </a>
                      <Link
                        to="/emergency"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-red-300 text-red-800 hover:bg-red-50 text-xs font-bold transition"
                      >
                        <span>View Emergency Guidance</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Non-Diagnostic Directory Note */}
            <div className="pt-2 border-t border-[#E9D7C7]/80 text-[11px] text-[#808A96] flex items-start gap-1.5 leading-relaxed">
              <span className="font-semibold text-[#62666D] shrink-0">Directory Notice:</span>
              <span>
                Search matches doctors by verified department, qualifications, and known clinical areas of care. This directory is provided for informational convenience and is not a medical diagnostic or triage tool. If you are unsure which specialist to consult, please call our reception desk at {HOSPITAL_INFO.phone} for guidance.
              </span>
            </div>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className={`bg-white rounded-2xl border shadow-2xs hover:shadow-card transition overflow-hidden flex flex-col justify-between group ${
                    doc.isManagingDirector
                      ? "border-[#641D2D]/60 ring-1 ring-[#641D2D]/20"
                      : "border-[#DED7D7] hover:border-[#641D2D]"
                  }`}
                >
                  {/* Photo Header */}
                  <div className="relative aspect-[4/5] bg-[#28171D] overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = doc.fallbackImage || "/images/dr-d-surya-prakash.png";
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-103 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#28171D]/90 via-[#28171D]/20 to-transparent" />

                    <span
                      className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-2xs ${
                        doc.isManagingDirector
                          ? "bg-[#641D2D] text-white"
                          : "bg-white/95 text-[#29252A]"
                      }`}
                    >
                      {doc.status}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                      <span className="text-[11px] font-bold text-[#E8D8D9] block uppercase tracking-wider">
                        {doc.department}
                      </span>
                      <h3 className="text-xl font-black text-white mt-0.5 leading-snug">
                        {doc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-[#641D2D]">
                        {doc.qualifications}
                      </div>
                      <div className="text-sm font-semibold text-[#29252A]">
                        {doc.designation}
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#6F686B] leading-relaxed pt-0.5">
                        {doc.experience}
                      </p>
                    </div>

                    {/* Key Areas of Care - clean and concise */}
                    <div className="pt-2.5 border-t border-[#DED7D7] space-y-1.5">
                      <ul className="space-y-1.5 text-xs text-[#6F686B]">
                        {doc.specialties.slice(0, 3).map((spec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#641D2D] shrink-0 mt-1.5" />
                            <span className="leading-snug">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Consultation Schedule & Dual Actions */}
                    <div className="pt-2.5 border-t border-[#DED7D7] space-y-3">
                      <div className="flex items-start gap-2 text-xs text-[#6F686B]">
                        <Clock className="w-4 h-4 text-[#641D2D] shrink-0 mt-0.5" />
                        <span className="text-xs leading-snug">{doc.opdTimings}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                        <button
                          type="button"
                          onClick={() => setActiveDoctorModal(doc)}
                          className="w-full py-2.5 px-3 rounded-xl text-xs font-bold border border-[#DED7D7] bg-white hover:bg-[#FCFAF7] text-[#29252A] transition cursor-pointer active:scale-95 shadow-2xs"
                        >
                          View Profile
                        </button>

                        <Link
                          to={`/appointment?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(doc.department)}`}
                          className="w-full"
                        >
                          <Button
                            variant="primary"
                            size="sm"
                            fullWidth
                            className="bg-[#E56A2E] hover:bg-[#C8541D] text-white text-xs font-bold py-2.5 active:scale-95 shadow-sm"
                          >
                            Book Visit
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 px-4 bg-[#FFF9F3] rounded-2xl border border-[#E9D7C7] space-y-4 max-w-2xl mx-auto shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#F8E6DC] text-[#C65332] flex items-center justify-center mx-auto">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#292D32]">
                  {searchQuery ? (
                    <>No doctors found matching &ldquo;<span className="text-[#C65332]">{searchQuery}</span>&rdquo;</>
                  ) : (
                    "No doctors found for this department."
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-[#62666D] max-w-md mx-auto leading-relaxed">
                  Try searching by doctor name (e.g. <em>Dr. Surya Prakash</em>), department, or verified health concerns like <em>diabetes</em>, <em>fever</em>, <em>hernia</em>, or <em>fracture</em>.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="bg-[#C65332] hover:bg-[#A84328] text-white text-xs font-bold"
                  onClick={handleResetSearch}
                >
                  Show All Doctors
                </Button>
                <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={Phone}
                    className="bg-white border-[#E9D7C7] text-[#292D32] hover:bg-[#F8E6DC] text-xs font-bold"
                  >
                    Help Me Choose: {HOSPITAL_INFO.phone}
                  </Button>
                </a>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Individual Doctor Profile Modal */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-4 sm:p-8 shadow-2xl border border-[#E9D7C7] space-y-5 max-h-[88vh] overflow-y-auto transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#E9D7C7]">
              <div className="doctor-header-bio">
                <img
                  src={activeDoctorModal.image}
                  alt={activeDoctorModal.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/surya-doctor-portrait.png";
                  }}
                  className="doctor-avatar w-13 h-13 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-[#C65332]"
                />
                <div>
                  <h3 className="text-xl font-black text-[#292D32]">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs text-[#C65332] font-bold">
                    {activeDoctorModal.qualifications}
                  </p>
                  <p className="text-xs text-[#62666D]">
                    {activeDoctorModal.designation}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="p-1 rounded-lg text-[#62666D] hover:bg-[#F8E6DC] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Content */}
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32] mb-1">
                  Department & Role
                </h4>
                <p className="text-xs sm:text-sm text-[#62666D] leading-relaxed">
                  {activeDoctorModal.department} • {activeDoctorModal.experience}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32] mb-1">
                  About the Doctor & Patient Approach
                </h4>
                <p className="text-xs sm:text-sm text-[#62666D] leading-relaxed">
                  {activeDoctorModal.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D32] mb-2">
                  Conditions Treated & Treatments Offered
                </h4>
                <ul className="space-y-1.5 text-xs text-[#62666D]">
                  {activeDoctorModal.specialties.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C65332] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF9F3] border border-[#E9D7C7] text-xs space-y-1">
                <span className="font-bold text-[#292D32] block">
                  Visiting Hours & Location:
                </span>
                <p className="text-[#62666D]">
                  {activeDoctorModal.opdTimings}
                </p>
                <p className="text-[11px] text-[#808A96] pt-1">
                  Consultation Rooms, Surya Hospital, Sai Nagar, Anantapur.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/appointment?doctor=${encodeURIComponent(activeDoctorModal.name)}&dept=${encodeURIComponent(activeDoctorModal.department)}`}
                onClick={() => setActiveDoctorModal(null)}
                className="w-full sm:flex-1"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  className="bg-[#C65332] hover:bg-[#A84328] text-white font-bold"
                >
                  Book with {activeDoctorModal.name}
                </Button>
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="md"
                  icon={Phone}
                  className="w-full text-xs bg-white border-[#E9D7C7] text-[#292D32] hover:bg-[#F8E6DC]"
                >
                  Call Front Desk
                </Button>
              </a>

              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveDoctorModal(null)}
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
export default DoctorsPage;
