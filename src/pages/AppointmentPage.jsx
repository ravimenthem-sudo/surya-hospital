import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Loader2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const preselectedDept = searchParams.get("dept") || "General Medicine";
  const preselectedDoc = searchParams.get("doctor") || "";

  const [todayStr] = useState(() => new Date().toISOString().split("T")[0]);

  const [formData, setFormData] = useState(() => ({
    patientName: "",
    phone: "",
    email: "",
    department: preselectedDept,
    preferredDoctor: preselectedDoc,
    preferredDate: "",
    preferredTime: "Morning (09:30 AM – 01:00 PM)",
    reason: "",
    consent: false,
  }));

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    document.title = "Book Appointment | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  // List of departments
  const departmentOptions = [
    "General Medicine",
    "General Surgery & Proctology",
    "Laparoscopic Surgery",
    "Orthopedic Surgery & Internal Medicine",
    "Emergency & Critical Care",
    "Physiotherapy & Rehabilitation",
    "Day-Care Surgeries",
  ];

  const timeSlots = [
    "Morning (09:30 AM – 01:00 PM)",
    "Evening (05:00 PM – 08:30 PM)",
  ];

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim() || formData.patientName.trim().length < 2) {
      errs.patientName = "Patient name is required (at least 2 characters).";
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, "");
    if (!phoneClean) {
      errs.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(phoneClean) && !/^\+91[6-9]\d{9}$/.test(phoneClean)) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.department) {
      errs.department = "Please select a clinical department.";
    }

    if (!formData.preferredDate) {
      errs.preferredDate = "Please choose a consultation date.";
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = "Consultation date cannot be in the past.";
    }

    if (!formData.consent) {
      errs.consent = "You must consent to Surya Hospital staff contacting you to confirm this consultation.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking({
        refNumber: `SH-APPT-${Math.floor(100000 + Math.random() * 900000)}`,
        patientName: formData.patientName,
        phone: formData.phone,
        department: formData.department,
        doctor: formData.preferredDoctor || "Next Available Specialist",
        date: formData.preferredDate,
        timeSlot: formData.preferredTime,
      });
      setFormData({
        patientName: "",
        phone: "",
        email: "",
        department: "General Medicine",
        preferredDoctor: "",
        preferredDate: "",
        preferredTime: "Morning (09:30 AM – 01:00 PM)",
        reason: "",
        consent: false,
      });
      setErrors({});
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="DOCTOR APPOINTMENTS"
        title="Book a Doctor Consultation"
        description="Schedule a visit with our experienced doctors in internal medicine, general surgery, or joint and bone care. We will confirm your visiting slot promptly."
        breadcrumbs={[{ label: "Appointment" }]}
        badge="Sai Nagar Campus"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="primary" size="sm" icon={PhoneCall} className="bg-[#C65332] hover:bg-[#A84328] text-white">
            Call for Immediate Token: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <section className="py-14 md:py-20 bg-[#FCFAF7] border-b border-[#DED7D7]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Helpful Notice Banner */}
            <div className="mb-8 p-4 rounded-xl bg-white border border-[#DED7D7] text-xs sm:text-sm text-[#29252A] flex items-start gap-3 shadow-2xs">
              <AlertCircle className="w-5 h-5 text-[#641D2D] shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <p className="font-bold text-[#29252A]">Need Same-Day or Emergency Care?</p>
                <p className="text-[#6F686B]">
                  For urgent health issues, severe pain, accidents, or same-day doctor visits, please call our 24/7 reception desk at <strong>{HOSPITAL_INFO.phone}</strong> or visit our hospital directly in Sai Nagar, Anantapur.
                </p>
              </div>
            </div>

            {/* Success Receipt State */}
            {confirmedBooking ? (
              <div className="bg-white rounded-2xl border border-[#DED7D7] p-6 sm:p-10 shadow-sm text-left space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 pb-4 border-b border-[#DED7D7]">
                  <div className="w-12 h-12 rounded-xl bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#641D2D]">
                      APPOINTMENT REQUEST RECEIVED
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#29252A]">
                      We Have Received Your Booking Request
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-[#FCFAF7] p-5 rounded-xl border border-[#DED7D7]">
                  <div>
                    <span className="text-[#8A8487] block text-[11px] uppercase font-bold">
                      Booking Reference:
                    </span>
                    <span className="font-mono font-bold text-[#29252A] text-sm sm:text-base">
                      {confirmedBooking.refNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8A8487] block text-[11px] uppercase font-bold">
                      Patient Name:
                    </span>
                    <span className="font-bold text-[#29252A] text-sm sm:text-base">
                      {confirmedBooking.patientName}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8A8487] block text-[11px] uppercase font-bold">
                      Department:
                    </span>
                    <span className="font-bold text-[#641D2D]">
                      {confirmedBooking.department}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8A8487] block text-[11px] uppercase font-bold">
                      Doctor:
                    </span>
                    <span className="font-bold text-[#29252A]">
                      {confirmedBooking.doctor}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8A8487] block text-[11px] uppercase font-bold">
                      Requested Date:
                    </span>
                    <span className="font-bold text-[#29252A]">
                      {confirmedBooking.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8A8487] block text-[11px] uppercase font-bold">
                      Preferred Time:
                    </span>
                    <span className="font-bold text-[#29252A]">
                      {confirmedBooking.timeSlot}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#E8D8D9]/40 border border-[#DED7D7] text-xs sm:text-sm text-[#29252A] space-y-1">
                  <span className="font-bold block">Next Steps & What to Expect:</span>
                  <p className="text-[#6F686B]">
                    Our reception desk will call you shortly on your mobile number to confirm your exact token time. Please arrive 15 minutes before your time at Surya Hospital, Sai Nagar, Anantapur, and bring any past doctor prescriptions or medical reports with you.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="w-full sm:w-auto">
                    <Button variant="primary" size="md" icon={PhoneCall} className="w-full sm:w-auto bg-[#E56A2E] hover:bg-[#C8541D] text-white">
                      Call Reception: {HOSPITAL_INFO.phone}
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto border-[#DED7D7] text-[#29252A] hover:bg-[#FCFAF7]"
                    onClick={() => setConfirmedBooking(null)}
                  >
                    Book Another Visit
                  </Button>
                  <Link to="/" className="w-full sm:w-auto">
                    <Button variant="ghost" size="md" className="w-full sm:w-auto">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              /* Appointment Form */
              <div className="bg-white rounded-2xl border border-[#DED7D7] p-5 sm:p-8 md:p-10 shadow-sm text-left">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Section 1: Patient Information */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-[#29252A] border-b border-[#DED7D7] pb-2">
                      1. Patient Details
                    </h3>

                    <div className="input-row-half">
                      {/* Patient Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Patient Full Name <span className="text-[#C65332]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Kumar"
                          value={formData.patientName}
                          onChange={(e) =>
                            setFormData({ ...formData, patientName: e.target.value })
                          }
                          className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                            errors.patientName
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#E9D7C7] focus:border-[#C65332]"
                          }`}
                        />
                        {errors.patientName && (
                          <p className="text-[11px] text-red-500">{errors.patientName}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Mobile Phone Number <span className="text-[#C65332]">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                            errors.phone
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#E9D7C7] focus:border-[#C65332]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#252B33]">
                        Email Address <span className="text-[#808A96] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. patient@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#252B33] placeholder-[#808A96] focus:outline-none transition ${
                          errors.email
                            ? "border-red-400 ring-1 ring-red-300"
                            : "border-[#F0D9CB] focus:border-[#C65332]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Section 2: Clinical Department & Doctor */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-base font-bold text-[#292D32] border-b border-[#E9D7C7] pb-2">
                      2. Care Department & Doctor
                    </h3>

                    <div className="input-row-half">
                      {/* Department */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Choose Department <span className="text-[#C65332]">*</span>
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) =>
                            setFormData({ ...formData, department: e.target.value })
                          }
                          className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D7C7] bg-white text-[#292D32] focus:outline-none focus:border-[#C65332]"
                        >
                          {departmentOptions.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Doctor */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Choose Doctor <span className="text-[#808A96] font-normal">(Optional)</span>
                        </label>
                        <select
                          value={formData.preferredDoctor}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDoctor: e.target.value })
                          }
                          className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D7C7] bg-white text-[#292D32] focus:outline-none focus:border-[#C65332]"
                        >
                          <option value="">Any Available Doctor</option>
                          {HOSPITAL_INFO.doctors.map((doc) => (
                            <option key={doc.id} value={doc.name}>
                              {doc.name} — {doc.department}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Date & Slot */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-base font-bold text-[#292D32] border-b border-[#E9D7C7] pb-2">
                      3. Date & Visiting Time
                    </h3>

                    <div className="datetime-selection-grid">
                      {/* Preferred Date (Min = today) */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Preferred Date <span className="text-[#C65332]">*</span>
                        </label>
                        <input
                          type="date"
                          min={todayStr}
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredDate: e.target.value })
                          }
                          className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white text-[#252B33] focus:outline-none transition ${
                            errors.preferredDate
                              ? "border-red-400 ring-1 ring-red-300"
                              : "border-[#E9D7C7] focus:border-[#C65332]"
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-[11px] text-red-500">{errors.preferredDate}</p>
                        )}
                        <span className="text-[10px] text-[#808A96] block">
                          Please select today or an upcoming date.
                        </span>
                      </div>

                      {/* Preferred Time Slot */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#252B33]">
                          Preferred Time of Day <span className="text-[#C65332]">*</span>
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) =>
                            setFormData({ ...formData, preferredTime: e.target.value })
                          }
                          className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D7C7] bg-white text-[#292D32] focus:outline-none focus:border-[#C65332]"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Reason */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#252B33]">
                        Main Health Concern or Symptoms <span className="text-[#808A96] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Fever checkup, diabetes review, knee pain, stomach ache, piles consultation..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border border-[#E9D7C7] bg-white text-[#292D32] focus:outline-none focus:border-[#C65332] placeholder-[#808A96]"
                      />
                    </div>

                    {/* Consent */}
                    <div className="space-y-1 pt-1">
                      <label className="flex items-start gap-2 text-xs text-[#59616B] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 rounded text-[#C65332] focus:ring-[#C65332]"
                        />
                        <span>
                          I agree to let Surya Hospital front desk call or message me at this phone number to confirm this doctor visit.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-[11px] text-red-500">{errors.consent}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-4 border-t border-[#DED7D7]">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? Loader2 : Calendar}
                      fullWidth
                      className="bg-[#E56A2E] hover:bg-[#C8541D] text-white font-bold py-4 text-base shadow-sm"
                    >
                      {isSubmitting ? "Sending Your Request..." : "Request Appointment Time"}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
export default AppointmentPage;
