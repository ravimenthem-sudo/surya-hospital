import React from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import "./MobileBottomBar.css";

export function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Mobile Bottom Actions">
      <a
        href={`tel:${HOSPITAL_INFO.phoneRaw}`}
        className="mobile-bar-btn call-btn"
        aria-label="Call Hospital Desk"
      >
        <Phone className="w-4 h-4 text-[#C65332]" />
        <span>Call Desk</span>
      </a>

      <Link
        to="/appointment"
        className="mobile-bar-btn book-btn"
        aria-label="Book Appointment"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Book OPD</span>
      </Link>
    </div>
  );
}

export default MobileBottomBar;
