import React from "react";
import { PhoneCall, MapPin, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

export function TopEmergencyBar() {
  return (
    <aside aria-label="Emergency Care Bar" className="bg-[#FFF8F2] text-[#252B33] text-xs border-b border-[#F0D9CB] select-none">
      <Container>
        <div className="flex items-center justify-between py-1.5 sm:py-2 gap-2 text-[11px] sm:text-xs">
          {/* Left: 24/7 Emergency indicator & Location */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C65332] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C65332]"></span>
            </span>
            <span className="font-bold text-[#C65332] text-[11px] sm:text-xs tracking-tight">
              24/7 Emergency
            </span>
            <span className="text-[#D98A62] hidden sm:inline">•</span>
            <span className="text-[#59616B] hidden sm:inline-flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-[#B96645] inline" />
              <span>{HOSPITAL_INFO.locationShort}</span>
            </span>
          </div>

          {/* Right: Phone Call Action & OPD */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#59616B] shrink-0">
            <div className="hidden lg:flex items-center gap-1.5 text-[#59616B]">
              <Clock className="w-3 h-3 text-[#B96645]" />
              <span>OPD: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM</span>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="flex items-center gap-1 sm:gap-1.5 text-[#252B33] hover:text-[#C65332] font-semibold transition text-[11px] sm:text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C65332]" />
              <span className="hidden xs:inline sm:inline">Reception:</span>
              <span className="tracking-wide text-[#C65332] font-bold underline underline-offset-2 decoration-[#F6D8C5]">
                {HOSPITAL_INFO.phone}
              </span>
            </a>
          </div>
        </div>
      </Container>
    </aside>
  );
}
export default TopEmergencyBar;
