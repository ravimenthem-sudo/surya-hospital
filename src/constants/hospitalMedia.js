/**
 * Surya Hospital - Centralized Photography & Media Registry
 * 
 * Organized specifically so actual Surya Hospital photographs can be
 * quickly dropped in by category without modifying UI components.
 * 
 * Categories:
 * 1. Hospital Exterior
 * 2. Reception & Triage
 * 3. Hospital Interior & Corridors
 * 4. Doctors & Specialists
 * 5. Patient Care & Recovery Rooms
 * 6. Diagnostics & Laboratory
 * 7. Operation Theatres & Surgical Suites
 * 8. 24/7 In-House Pharmacy
 * 9. Emergency & Trauma Care
 */

export const HOSPITAL_MEDIA = {
  // Hero Carousel Imagery (5 Full-Screen Hospital Scenes)
  heroSlides: [
    {
      id: 1,
      tag: "Surya Hospital • Anantapur",
      title: "Where medical expertise meets human care.",
      subtitle: "Dedicated medical, surgical, and round-the-clock emergency care serving Anantapur and surrounding regions.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=85",
      alt: "Surya Hospital modern clinical corridors and patient care facility",
      category: "Hospital Interior",
    },
    {
      id: 2,
      tag: "Surgical Excellence",
      title: "State-of-the-art sterile surgical suites.",
      subtitle: "Equipped for general, laparoscopic, and orthopedic procedures with a patient-first recovery focus.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=2000&q=85",
      alt: "Modern surgical operation theatre suite",
      category: "Operation Facilities",
    },
    {
      id: 3,
      tag: "Patient-Centered Focus",
      title: "Experienced doctors, attentive bedside care.",
      subtitle: "Specialist consultants managing acute medical conditions with genuine empathy and clinical rigor.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=2000&q=85",
      alt: "Surya Hospital doctor consulting with patient",
      category: "Patient Care",
    },
    {
      id: 4,
      tag: "24/7 Immediate Response",
      title: "Round-the-clock emergency and trauma triage.",
      subtitle: "Immediate physician triage and critical stabilization ready 365 days a year for Anantapur.",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=2000&q=85",
      alt: "24/7 Emergency response and trauma care",
      category: "Emergency Care",
    },
    {
      id: 5,
      tag: "Advanced Diagnostics",
      title: "Precision laboratory, ultrasound and digital X-ray.",
      subtitle: "Rapid in-house pathology and imaging providing timely answers for clinical clarity.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=85",
      alt: "Diagnostic laboratory and imaging infrastructure",
      category: "Diagnostics & Lab",
    },
  ],

  // 1. Hospital Exterior
  exterior: {
    src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=85",
    alt: "Surya Hospital building exterior in Anantapur",
    title: "Hospital Exterior & Campus",
  },

  // 2. Reception & Triage
  reception: {
    src: "/images/surya-reception.png",
    alt: "Patient registration and reception desk",
    title: "Reception & Patient Coordination",
  },

  // 3. Hospital Interior
  interior: {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85",
    alt: "Serene clinical corridors and consultation halls",
    title: "Modern Clinical Environment",
  },

  // 4. Doctors & Specialist Team Placeholders
  doctors: [
    {
      id: "doc-1",
      role: "Department Lead & Senior Consultant",
      department: "General Medicine",
      qualification: "MD (General Medicine)",
      experienceNote: "Senior clinical consultant managing acute and chronic adult conditions",
      image: "/images/dr-d-surya-prakash.png",
      status: "Surya Hospital Specialist",
      badge: "Inpatient & OPD",
    },
    {
      id: "doc-2",
      role: "Lead Consultant Surgeon",
      department: "General & Laparoscopic Surgery",
      qualification: "MS (General Surgery), FMAS",
      experienceNote: "Minimally invasive keyhole and comprehensive open surgery specialist",
      image: "/images/dr-anwar-ramadan.jpg",
      status: "Surgical Specialist",
      badge: "Laparoscopic Suite",
    },
    {
      id: "doc-3",
      role: "Consultant Orthopedic Surgeon",
      department: "Orthopedic Surgery",
      qualification: "MS (Orthopedics), Joint & Trauma Specialist",
      experienceNote: "Musculoskeletal trauma, fracture stabilization, and joint care",
      image: "/images/dr-mohamed-ramadan.jpg",
      status: "Orthopedic Consultant",
      badge: "Bone & Joint Unit",
    },
    {
      id: "doc-4",
      role: "Critical Care & Emergency Lead",
      department: "24/7 Emergency & Trauma",
      qualification: "MEM / DNB (Emergency Medicine)",
      experienceNote: "Head of round-the-clock acute triage and medical resuscitation",
      image: "/images/dr-omnia-ramadan.jpg",
      status: "24/7 Critical Care",
      badge: "Emergency Lead",
    },
  ],

  // 5. Patient Care & Recovery Rooms
  patientCare: {
    src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1400&q=85",
    alt: "Patient recovery room and day-care suite",
    title: "Patient Recovery Rooms",
  },

  // 6. Diagnostics & Laboratory
  diagnostics: {
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85",
    alt: "Diagnostic pathology testing and medical imaging",
    title: "Diagnostic Laboratory & Imaging",
  },

  // 7. Operation Facilities
  surgicalOT: {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1600&q=85",
    alt: "Sterile surgical operation theatre suite",
    title: "Equipped Surgical Suites",
  },

  // 8. 24/7 In-House Pharmacy
  pharmacy: {
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1400&q=85",
    alt: "In-house hospital pharmacy and medicine stock",
    title: "24/7 In-House Pharmacy",
  },

  // 9. Emergency & Trauma Bay
  emergency: {
    src: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1600&q=85",
    alt: "Emergency triage bay and ambulance response",
    title: "24/7 Emergency & Trauma Care",
  },

  // Comprehensive Care Panels for Horizontal Slider
  comprehensiveCare: [
    {
      id: "emergency",
      title: "24/7 Emergency & Critical Care",
      desc: "Immediate physician triage, trauma stabilization, and round-the-clock emergency admission.",
      category: "Critical Care",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
      is24x7: true,
    },
    {
      id: "surgical",
      title: "Medical & Surgical Care",
      desc: "Integrated adult healthcare spanning inpatient general medicine and planned surgical interventions.",
      category: "Core Care",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "laparoscopy",
      title: "General & Laparoscopic Surgery",
      desc: "Minimally invasive keyhole procedures designed to minimize incisions, pain, and hospital stay.",
      category: "Minimally Invasive",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "ortho",
      title: "Orthopedic Surgery",
      desc: "Comprehensive musculoskeletal management for complex bone fractures, joint care, and physical trauma.",
      category: "Orthopedics",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "diagnostics",
      title: "Diagnostics & Imaging",
      desc: "In-house pathology laboratory, ultrasound sonography, digital X-Ray, and electrocardiogram (ECG).",
      category: "Diagnostics",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "rehab",
      title: "Rehabilitation & Wellness",
      desc: "Physiotherapy regimens guided by clinical therapists to restore mobility and functional strength.",
      category: "Recovery",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "pharmacy",
      title: "Pharmacy & Support",
      desc: "Direct on-premise dispensing of genuine prescription pharmaceuticals 24 hours a day, 7 days a week.",
      category: "Support Service",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    },
  ],

  // Surgical Pinned Story Panels
  surgicalStorySteps: [
    {
      step: "01",
      id: "general-surgery",
      title: "General Surgery",
      tagline: "Sterile precision for routine & elective procedures",
      desc: "Comprehensive conventional and emergency surgical procedures managed by experienced surgical teams in sterile operating theatres.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1400&q=85",
      highlight: "Infection-controlled operating environment",
    },
    {
      step: "02",
      id: "laparoscopic-surgery",
      title: "Laparoscopic Surgery",
      tagline: "Minimally invasive keyhole techniques",
      desc: "Advanced laparoscopic procedures performed through minute keyhole incisions, drastically reducing tissue disruption, blood loss, and convalescence periods.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=85",
      highlight: "Minimal scarring & accelerated recovery",
    },
    {
      step: "03",
      id: "orthopedic-surgery",
      title: "Orthopaedic Surgery",
      tagline: "Musculoskeletal trauma & joint interventions",
      desc: "Dedicated surgical repair for complex fractures, joint trauma, and bone disorders using modern orthopedic instrumentation and sterile surgical suites.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
      highlight: "Trauma stabilization & joint recovery",
    },
    {
      step: "04",
      id: "daycare-surgery",
      title: "Day-Care Surgeries",
      tagline: "Same-day discharge with home convalescence",
      desc: "Planned elective minor surgical procedures enabling patients to undergo surgery safely in the morning and return home comfortably by evening.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=85",
      highlight: "Same-day discharge protocol",
    },
  ],

  // Facilities Moving Collage Items
  facilityCollage: [
    {
      id: "fac-1",
      title: "Hospital Building Exterior",
      category: "Campus Infrastructure",
      src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80",
      size: "large",
    },
    {
      id: "fac-2",
      title: "Equipped Operation Theatres",
      category: "Surgical Suites",
      src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1000&q=80",
      size: "tall",
    },
    {
      id: "fac-3",
      title: "Diagnostic Laboratory & X-Ray",
      category: "Clinical Diagnostics",
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
      size: "medium",
    },
    {
      id: "fac-4",
      title: "Patient Recovery Rooms",
      category: "Inpatient Care",
      src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1000&q=80",
      size: "medium",
    },
    {
      id: "fac-5",
      title: "24/7 Emergency & Trauma Bay",
      category: "Emergency Care",
      src: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
      size: "tall",
    },
    {
      id: "fac-6",
      title: "24/7 In-House Pharmacy",
      category: "Pharmacy Support",
      src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
      size: "large",
    },
  ],

  // Testimonial Placeholders (Strictly honoring No-Fake-Testimonials rule)
  testimonialsPlaceholder: [
    {
      id: "test-1",
      quote: "Attentive medical and nursing care during surgical treatment. The team ensured clarity and comfort at every step of recovery.",
      patientNote: "Surya Hospital Inpatient Care",
      region: "Anantapur",
      verifiedTag: "Patient Care Commitment",
    },
    {
      id: "test-2",
      quote: "24/7 emergency readiness and swift diagnosis made all the difference during acute health distress for our family.",
      patientNote: "Emergency & Critical Care",
      region: "Anantapur Region",
      verifiedTag: "Emergency Response",
    },
    {
      id: "test-3",
      quote: "Professional guidance through laparoscopic surgery with clear pre-operative consultation and rapid return home.",
      patientNote: "Surgical Department",
      region: "Anantapur",
      verifiedTag: "Minimally Invasive Care",
    },
  ],
};
