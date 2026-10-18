import React, { useEffect } from "react";
import { Container } from "../components/ui/Container";
import {
  PhoneCall,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  FileText,
  Navigation,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function EmergencyPage() {
  useEffect(() => {
    document.title = "24/7 Emergency Care | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full bg-[#FFF9F3]">
      {/* High-priority Emergency Hero Banner */}
      <section className="bg-[#1A1D20] text-white pt-28 sm:pt-32 pb-14 md:pb-20 border-b border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#A84328] text-white shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <span>24/7 EMERGENCY CARE OPEN NOW</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-white tracking-tight leading-tight">
              24/7 Emergency & Casualty Care
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#E2D9D0] leading-relaxed max-w-3xl mx-auto font-normal">
              Our emergency team is open day and night for accidents, sudden chest pain, breathing difficulties, high fevers, and wound care in Sai Nagar, Anantapur.
            </p>

            {/* Large Call Hospital Button */}
            <div className="pt-2">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] text-white shadow-xl transition transform hover:scale-[1.02] active:scale-98 w-full sm:w-auto text-center"
              >
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse shrink-0 text-white" />
                <span>Call Emergency Casualty: {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Address & Direct Navigation */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-[13px] text-[#E2D9D0]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C85235] shrink-0" />
                <span>{HOSPITAL_INFO.fullAddress}</span>
              </div>
              <a
                href={HOSPITAL_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition border border-white/20"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B69A65]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* National Emergency 112 Notice as Required */}
      <section className="py-8 bg-white border-b border-[#DED7D7]">
        <Container>
          <div className="max-w-4xl mx-auto flex items-start gap-4 text-xs sm:text-sm text-[#29252A]">
            <AlertCircle className="w-5 h-5 text-[#641D2D] shrink-0 mt-0.5" />
            <div className="space-y-1 text-left">
              <h4 className="font-bold text-[#29252A] text-sm sm:text-base">
                National All-India Emergency Helpline:
              </h4>
              <p className="leading-relaxed text-[#6F686B]">
                For severe life-threatening emergencies requiring government police, fire, or national disaster services across India, dial <strong>112</strong> right away.
              </p>
              <p className="text-[11px] text-[#8A8487]">
                National 112 is a public helpline operated by Government of India authorities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Emergency Guidance: Symptoms & What to Bring */}
      <section className="py-18 bg-[#FCFAF7] border-b border-[#DED7D7]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            {/* When to visit casualty */}
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#DED7D7] shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#29252A]">
                    When to Come to Emergency
                  </h3>
                  <span className="text-xs text-[#641D2D] font-bold">
                    Warning Signs & Sudden Symptoms
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#6F686B]">
                {HOSPITAL_INFO.emergencyGuidance.whenToVisit.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#641D2D] mt-2 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to bring to casualty */}
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#DED7D7] shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#E8D8D9] text-[#641D2D] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#29252A]">
                    What to Bring (If Possible)
                  </h3>
                  <span className="text-xs text-[#641D2D] font-bold">
                    Helpful Medical Papers
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#6F686B]">
                {HOSPITAL_INFO.emergencyGuidance.whatToBring.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#641D2D] mt-0.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 p-3.5 rounded-xl bg-[#FCFAF7] border border-[#DED7D7] text-xs text-[#6F686B]">
                <strong className="text-[#29252A]">Care First, Papers Later:</strong> If you do not have documents with you, please come directly to our hospital. Your immediate medical safety is our first priority.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Casualty Process Flow */}
      <section className="py-16 bg-[#FFF9F3] border-b border-[#E9D7C7]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C65332]">
                CLEAR CARE STEPS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D32] tracking-tight">
                What Happens When You Reach Emergency
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">01</span>
                <h4 className="font-bold text-[#292D32] text-sm">Immediate Check</h4>
                <p className="text-[#62666D] leading-relaxed">
                  Our duty nurse checks pulse, blood pressure, oxygen level, and pain right away.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">02</span>
                <h4 className="font-bold text-[#292D32] text-sm">Doctor's Examination</h4>
                <p className="text-[#62666D] leading-relaxed">
                  Our doctor examines you immediately to identify the cause of the problem.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">03</span>
                <h4 className="font-bold text-[#292D32] text-sm">Quick Relief & Treatment</h4>
                <p className="text-[#62666D] leading-relaxed">
                  Oxygen, IV fluids, pain medication, ECG, or wound care are given without delay.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E9D7C7] space-y-2 shadow-2xs">
                <span className="text-xl font-black text-[#C65332]">04</span>
                <h4 className="font-bold text-[#292D32] text-sm">Next Steps Explained</h4>
                <p className="text-[#62666D] leading-relaxed">
                  The doctor explains clearly whether room stay, observation, or home care is best.
                </p>
              </div>
            </div>

            {/* Direct Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E9D7C7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#292D32]">
                  Surya Hospital Emergency Entrance
                </h4>
                <p className="text-xs text-[#62666D]">
                  12-3-367, 9th Cross Road, behind Ambedkar Bhavan, Sai Nagar, Anantapur.
                </p>
              </div>
              <a
                href={HOSPITAL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#292D32] hover:bg-[#C65332] transition"
              >
                <Navigation className="w-4 h-4 text-[#C65332]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default EmergencyPage;
