import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  
  // Reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [introFinished, setIntroFinished] = useState(() => {
    if (typeof window === "undefined") return true;
    return !!sessionStorage.getItem("surya_nav_intro_seen") || !!prefersReducedMotion;
  });

  const [introPhase, setIntroPhase] = useState(() => {
    if (typeof window === "undefined") return "settled";
    const hasRun = !!sessionStorage.getItem("surya_nav_intro_seen") || !!prefersReducedMotion;
    return hasRun ? "settled" : "spinning";
  });

  const location = useLocation();

  useEffect(() => {
    if (introFinished) return;

    // Phase 1: Logo 3D spin & light pulse (1.1s)
    const t1 = setTimeout(() => {
      setIntroPhase("unfolding");
    }, 1100);

    // Phase 2: Navigation unrolls and settles (0.8s)
    const t2 = setTimeout(() => {
      setIntroPhase("settled");
      setIntroFinished(true);
      sessionStorage.setItem("surya_nav_intro_seen", "true");
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [introFinished]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
    setLocationsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
      label: "Services",
      path: "/specialities",
      hasDropdown: true,
      dropdownKey: "services",
      items: [
        { label: "General Medicine", path: "/specialities" },
        { label: "General & Laparoscopic Surgery", path: "/specialities" },
        { label: "Orthopedics & Fracture Care", path: "/specialities" },
        { label: "24/7 Emergency Care", path: "/emergency" },
        { label: "In-House Diagnostics & Lab", path: "/specialities" },
        { label: "24/7 In-House Pharmacy", path: "/contact" },
      ],
    },
    { label: "Our Doctors", path: "/doctors" },
    {
      label: "Patient Resources",
      path: "/about",
      hasDropdown: true,
      dropdownKey: "resources",
      items: [
        { label: "Visiting Timings & OPD", path: "/contact" },
        { label: "Inpatient Rooms & Admission", path: "/about" },
        { label: "Insurance & Hospital Desk", path: "/contact" },
        { label: "Emergency Guidance", path: "/emergency" },
      ],
    },
    { label: "Contact", path: "/contact" },
    {
      label: "Locations",
      path: "/contact",
      hasDropdown: true,
      dropdownKey: "locations",
      items: [
        { label: "Sai Nagar, Anantapur (Main Campus)", path: "/contact" },
        { label: "Behind Ambedkar Bhavan, 9th Cross", path: "/contact" },
      ],
    },
  ];

  return (
    <>
      {/* Intro Overlay during initial session load */}
      <AnimatePresence>
        {!introFinished && introPhase === "spinning" && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100000] bg-[#FFF9F3] flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ rotateY: 0, scale: 0.85, opacity: 0 }}
              animate={{
                rotateY: [0, 360],
                scale: [0.85, 1.08, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex items-center justify-center"
              style={{ perspective: 1000 }}
            >
              <img
                src="/images/surya-hospital-orange-emblem-logo.png"
                alt="Surya Hospital"
                className="h-20 sm:h-24 w-auto object-contain drop-shadow-xl"
              />
              {/* Subtle light shimmer sweep */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 0.6, 0] }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-5 lg:px-6 transition-all duration-300 pointer-events-none`}
      >
        <div
          className={`max-w-[1440px] mx-auto pointer-events-auto flex items-center gap-3 lg:gap-4 transition-all duration-300 ${
            isScrolled ? "justify-center" : "justify-between"
          }`}
        >
          {/* Main Left/Center Navigation Pill - Collapses into centered Logo Pill on scroll matching Screenshot */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`flex items-center gap-3 lg:gap-4 bg-white/95 backdrop-blur-md rounded-full border border-[#E2D9D0] shadow-md px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 ${
              isScrolled ? "shadow-xl border-[#A84328]/30 shrink-0" : "flex-1 justify-between"
            }`}
          >
            {/* 1. Left: Prominent Surya Hospital Logo matching Screenshot 2 */}
            <div className="shrink-0 flex items-center py-0.5">
              <Link to="/" className="inline-flex items-center group focus:outline-none" aria-label="Surya Hospital">
                <img
                  src="/images/surya-hospital-orange-emblem-logo.png"
                  alt="Surya Hospital Logo"
                  className="h-10 sm:h-12 md:h-13 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-200"
                />
              </Link>
            </div>

            {/* 2. Middle: Desktop Navigation Links with Dropdowns - Animated Collapse on Scroll */}
            <AnimatePresence>
              {!isScrolled && (
                <motion.nav
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="hidden xl:flex items-center gap-1.5 2xl:gap-3 overflow-hidden whitespace-nowrap"
                >
                  {navLinks.map((link) => {
                    if (!link.hasDropdown) {
                      return (
                        <NavLink
                          key={link.label}
                          to={link.path}
                          className={({ isActive }) =>
                            `px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                              isActive
                                ? "text-[#1A1D20] font-bold"
                                : "text-[#1A1D20]/90 hover:text-[#A84328]"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      );
                    }

                    const isOpen =
                      link.dropdownKey === "services"
                        ? servicesOpen
                        : link.dropdownKey === "resources"
                        ? resourcesOpen
                        : locationsOpen;

                    const setOpen =
                      link.dropdownKey === "services"
                        ? setServicesOpen
                        : link.dropdownKey === "resources"
                        ? setResourcesOpen
                        : setLocationsOpen;

                    return (
                      <div
                        key={link.label}
                        className="relative"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                      >
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold text-[#1A1D20]/90 hover:text-[#A84328] transition-colors focus:outline-none"
                          onClick={() => setOpen(!isOpen)}
                          aria-expanded={isOpen}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-[#62666D] transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-[#A84328]" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-0 top-full pt-2 w-64 z-50"
                            >
                              <div className="bg-white rounded-2xl shadow-xl border border-[#E2D9D0] py-2 overflow-hidden">
                                {link.items.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.path}
                                    onClick={() => setOpen(false)}
                                    className="block px-4 py-2 text-xs font-semibold text-[#1A1D20] hover:bg-[#F8E6DC]/40 hover:text-[#A84328] transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.nav>
              )}
            </AnimatePresence>

            {/* Mobile Hamburger Trigger inside the main pill (< xl) */}
            <div className="xl:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 rounded-xl text-[#1A1D20] hover:bg-[#F8E6DC] transition focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>

          {/* Right Separate Action Pill - Displays when at top and gently hides on scroll so only centered logo pill displays */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-md rounded-full border border-[#E2D9D0] shadow-md px-3 sm:px-4 py-1.5 sm:py-2 shrink-0"
              >
                {/* Phone Call Info */}
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="hidden sm:inline-flex items-center gap-2 py-1 px-1 text-left group transition-all"
                  title="24/7 Emergency Helpline"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F8E6DC] text-[#A84328] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div className="pr-1">
                    <span className="block text-xs font-bold text-[#1A1D20] tracking-tight leading-none">
                      +91 85009 04999
                    </span>
                    <span className="block text-[10px] text-[#62666D] font-medium leading-tight mt-0.5">
                      24/7 Emergency
                    </span>
                  </div>
                </a>

                {/* Book Appointment Button */}
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-white bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[99999] xl:hidden overflow-hidden" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="px-6 py-5 border-b border-[#E2D9D0] flex items-center justify-between bg-[#FFF9F3]">
                  <img
                    src="/images/surya-hospital-horizontal-logo.png"
                    alt="Surya Hospital"
                    className="h-9 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#F8E6DC] text-[#1A1D20] transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    {navLinks.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2.5 rounded-xl text-sm font-bold transition ${
                            isActive
                              ? "bg-[#F8E6DC] text-[#A84328]"
                              : "text-[#1A1D20] hover:bg-[#FFF9F3]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#E2D9D0] space-y-3">
                    <a
                      href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF9F3] border border-[#E2D9D0] text-[#1A1D20]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#F8E6DC] text-[#A84328] flex items-center justify-center">
                        <Phone className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">+91 85009 04999</div>
                        <div className="text-[11px] text-[#62666D]">24/7 Emergency Casualty</div>
                      </div>
                    </a>

                    <Link
                      to="/appointment"
                      onClick={() => setMenuOpen(false)}
                      className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-[#A84328] hover:bg-[#8F371F] block shadow-md"
                    >
                      Book Appointment Online
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#E2D9D0] bg-[#FFF9F3] text-xs text-[#62666D]">
                Behind Ambedkar Bhavan, 9th Cross Road, Sai Nagar, Anantapur
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
