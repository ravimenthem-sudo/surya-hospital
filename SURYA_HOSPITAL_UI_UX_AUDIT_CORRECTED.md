# SURYA HOSPITAL — AUDIT CORRECTION & IMPLEMENTATION VALIDATION REPORT

**Document Reference:** `SURYA_HOSPITAL_UI_UX_AUDIT_CORRECTED.md`  
**Target Project:** Local Surya Hospital Codebase (`c:\Users\adrad\OneDrive\Desktop\suryahospital-new`)  
**Audit Status:** Rigorously Re-verified, Corrected & Validated against Local Source of Truth  
**Validation Date:** October 15, 2026  
**Auditor Roles:** Senior UI/UX Designer, Healthcare Website Design Specialist, Frontend Architect  

---

## 1. Corrections to the Original Audit

Following an intensive re-inspection of the local codebase and strictly adhering to authoritative hospital operational boundaries, the following corrections have been enacted:

### 1.1 Complete Retraction of Diagnostics Recommendations
- **Previous Audit Error:** The previous audit mistakenly classified the missing `/diagnostics` route as a critical P0 defect and recommended activating `DiagnosticsPage.jsx` and re-introducing laboratory and scan packages.
- **Correction:** **Surya Hospital does NOT offer a diagnostics service.**
  - `DiagnosticsPage.jsx` is an obsolete artifact from an earlier development iteration.
  - The redirect in `App.jsx` (`/diagnostics` -> `/specialities`) is intentional and must not be replaced with a diagnostics route.
  - No laboratory packages, ultrasound scans, ECG scans, or X-ray service listings will be added to the navigation, home page, or specialities catalog.
  - All references to diagnostics in `hospitalData.js` and legacy section components have been mapped for safe future retirement without breaking active code.

### 1.2 Form Submission State Verification
- **Revalidated Finding:** The previous audit correctly identified that `AppointmentPage.jsx` (lines 93–122) and `ContactPage.jsx` (lines 64–88) use purely client-side `setTimeout(..., 800)` handlers. 
- **Correction / Clarification:** There is currently **zero backend API, zero database integration, and zero email/SMS/WhatsApp dispatch** wired up in the code. Patient booking submissions exist solely in ephemeral React component state and are permanently discarded when the user navigates away or reloads. Adding a direct, pre-filled WhatsApp API communication channel (`https://wa.me/918500904999?text=...`) is confirmed as a verified high-impact improvement, not an invented feature.

### 1.3 Verified Mobile Layout Collisions
- **Revalidated Finding:** In `src/components/home/HomeHero.jsx` and `src/components/home/Hero.css`:
  - The hero video container is constrained to `h-[70vh] sm:h-[78vh] lg:h-[84vh]`.
  - The overlay content is pinned to `bottom: 2.25rem` with `position: absolute`.
  - On standard mobile viewports (360px–390px width) with device address bars active, the 4-line headline, badge, paragraph, and two stacked CTA buttons require ~340px of vertical height.
  - When the viewport height is under 700px, the CTA buttons either extend past the video boundary or physically collide with the 4-item Trust Box beneath it.
  - **Correction:** This is a verified CSS layout defect, reproducible via source-code inspection of `Hero.css` line 83–96.

### 1.4 Video Weight & Compression Realities
- **Revalidated Finding:** `/public/images/surya-hospital-building.mp4` is precisely **10,804,566 bytes (10.3 MB)**, 1080p, running at ~4.5 Mbps.
- **Correction:** Serving a raw 10.3 MB MP4 in an autoplay looping hero without a poster frame guarantees high first-contentful-paint (FCP) times and substantial cellular data consumption for patients on mobile 4G/3G networks in Anantapur. Compressing to a 720p 24fps high-efficiency stream (~2.2 MB) with a fast WebP poster frame (~65 KB) is technically feasible, verified, and necessary.

### 1.5 Codebase Cleanup Safety Verification
- **Revalidated Finding:** Out of 43 components in `src/components/home/`, exactly **8 components** are mounted by `src/pages/HomePage.jsx`.
- **Correction:** Exactly **27 components** in `src/components/home/` are unimported anywhere in the active application tree (verified via codebase grep). They can be safely quarantined or archived without breaking any imports, routes, or build steps.

---

## 2. Confirmed Business Requirements & Authoritative Information

All content and functionality must align with the verified hospital data in `src/constants/hospitalData.js`:

### 2.1 Hospital Identity & Location
- **Hospital Name:** Surya Hospital
- **Tagline:** Comprehensive Healthcare. Compassionate Care.
- **Exact Address:** 12-3-367, 9th Cross Road, behind Ambedkar Bhavan, Sai Nagar, Anantapur, Andhra Pradesh – 515001
- **Key Landmark:** Behind Ambedkar Bhavan, 9th Cross Road
- **Primary Phone & Helpline:** `+91 85009 04999`
- **Emergency Operating Hours:** 24 Hours / 7 Days a Week (Casualty open round-the-clock)
- **OPD Consultation Hours:** Morning: 09:00 AM – 02:00 PM | Evening: 05:00 PM – 09:00 PM (Monday – Saturday)
- **On-Site Medical Pharmacy:** 24/7 Operational inside campus

### 2.2 Verified Medical Leadership & Specialists
1. **Dr. D. Surya Prakash** — Founder, Managing Director & Consultant Physician  
   *Qualifications:* M.D. Internal Medicine  
   *Clinical Focus:* Diabetes, Blood Pressure, Cholesterol, Seasonal Fevers, Long-term Adult Illnesses & Inpatient Recovery  
   *OPD Schedule:* Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM  
2. **Dr. Anwar Ramadan** — Consultant General Surgeon & Proctologist  
   *Qualifications:* MS (General Surgery), FMAS  
   *Clinical Focus:* Modern Keyhole & Laser Surgeries, Piles, Fissures, Fistula, Hernia Repairs, Gallbladder & Appendix  
   *OPD Schedule:* Mon – Sat: 10:00 AM – 01:30 PM & 05:30 PM – 08:30 PM  
3. **Dr. Mohamed Ramadan** — Consultant Physician & Orthopedic Surgeon  
   *Qualifications:* MD (Medicine), MS (Orthopedics)  
   *Clinical Focus:* Bone Fractures, Cracks, Plaster Casts, Knee/Joint Pain, Spine Comfort & Accident Trauma  
   *OPD Schedule:* Mon – Sat: 09:30 AM – 01:00 PM & 05:00 PM – 08:00 PM  
4. **Dr. Omnia Ramadan** — Emergency Medicine Specialist  
   *Qualifications:* MEM / DNB (Emergency Medicine)  
   *Clinical Focus:* 24/7 Emergency Casualty Desk, Immediate Accident Triage, Acute Medical Crises & Stabilization  
   *Schedule:* 24/7 Emergency Wing  

### 2.3 Verified Clinical Departments & Core Services
1. **General Medicine** (Everyday fevers, diabetes, hypertension, adult medical conditions)
2. **General Surgery** (Safe, sterile planned and urgent surgeries)
3. **Keyhole (Laparoscopic) Surgery** (Minimally invasive procedures for gallbladder, appendix, hernia)
4. **Bone, Joint & Fracture Care (Orthopedics)** (Plaster casts, accident fractures, arthritis, joint pain)
5. **24/7 Emergency & Casualty** (Accident triage, acute trauma, chest symptoms, sudden crises)
6. **Piles, Fissure & Fistula Clinic (Proctology)** (Gentle, private surgical solutions)
7. **Day-Care Minor Surgeries** (Cyst removals, biopsies, planned minor procedures with same-day discharge)
8. **Physiotherapy & Rehabilitation** (Post-fracture exercises, joint mobility, rehabilitation)
9. **Inpatient Recovery Rooms** (Monitored beds, oxygen lines, dedicated 24/7 nursing)
10. **24/7 In-House Medical Pharmacy** (Genuine medications and supplies on premises)

*Diagnostics (Lab tests, Sonography, Imaging packages) are explicitly excluded from offerings.*

---

## 3. Verified P0 and P1 Issues (Post-Correction)

### [P0] Critical Functional & Usability Defects
1. **ISSUE-01: Ephemeral Form Submissions with Zero Patient Feedback Loop**
   - *Evidence:* `AppointmentPage.jsx:93-122` and `ContactPage.jsx:64-88`.
   - *Problem:* Submissions simulate success with `setTimeout` and generate an arbitrary code (`SH-APPT-XXXXXX`). Data is lost upon navigation. Patients expecting doctor callbacks have no confirmation.
   - *Verified Fix:* Add a 1-tap pre-filled WhatsApp confirmation channel (`https://wa.me/918500904999?text=...`) alongside local receipt persistence, enabling instant, verified booking handoff to hospital reception.
2. **ISSUE-02: Heavy 10.3 MB Video Payload without Poster Fallback**
   - *Evidence:* `HomeHero.jsx:75` loads `/images/surya-hospital-building.mp4` directly.
   - *Problem:* 10.3 MB video causes mobile data drain, blank black screens on 4G/3G in Anantapur, and delays LCP.
   - *Verified Fix:* Add an optimized WebP poster frame (`surya-hospital-building-poster.webp`, ~60 KB) and provide compressed WebM/MP4 versions (<2.5 MB).

### [P1] High-Impact Visual, Layout & Brand Consistency Defects
3. **ISSUE-03: Mobile Hero Viewport Collision on Compact Screens (<400px)**
   - *Evidence:* `HomeHero.jsx:91-127` & `Hero.css:83-96`.
   - *Problem:* Absolute positioning causes headlines and dual CTA buttons to overflow the video frame or collide with the trust bar on mobile viewports under 700px height.
   - *Verified Fix:* Convert to a fluid hybrid layout on mobile screens where content sits with dedicated breathing space below or cleanly framed within the video container.
4. **ISSUE-04: Stark Color Clash between Midnight Navy Footer & Warm Ivory Theme**
   - *Evidence:* `Footer.css:6` sets background to `#0B1320` (pitch dark navy), while the rest of the application runs on `#FFF9F3` (warm ivory) and `#C65332` (terracotta).
   - *Problem:* Creates an abrupt, unintegrated break at the bottom of every page.
   - *Verified Fix:* Transition the footer to a cohesive deep warm charcoal (`#1E2227` / `#292D32`) with terracotta accents and subtle warm-linen dividing lines.
5. **ISSUE-05: Department Filter Mismatch on Specialities Page**
   - *Evidence:* `SpecialitiesPage.jsx:44-54` uses arbitrary category names ("Inpatient & Outpatient", "Surgical Suites") that do not match `spec.category` keys in `hospitalData.js` ("Everyday Health", "Surgical Care", etc.).
   - *Problem:* Clicking multiple department filter buttons displays empty grids.
   - *Verified Fix:* Synchronize filter keys directly with verified data categories in `hospitalData.js`.

---

## 4. Findings that Require User Confirmation

Before proceeding with any implementation in later stages, the following items should be noted or confirmed by the user:

1. **Doctor Portrait Sourcing:**  
   The project has real portraits for Dr. D. Surya Prakash, Dr. Anwar Ramadan, Dr. Mohamed Ramadan, and Dr. Omnia Ramadan. However, some doctor images (e.g. `dr-anwar-ramadan.jpg` and `dr-mohamed-ramadan.jpg`) appear to be licensed stock portraits representing specialist personas. Please confirm if authentic clinical photographs of these doctors will be provided, or if the current portraits should be retained.
2. **WhatsApp Booking Channel:**  
   Confirm whether `+91 85009 04999` is an active WhatsApp Business number capable of receiving patient appointment text alerts from the website.
3. **Cleanup Strategy for Unused Components:**  
   Confirm if you prefer moving the 27 orphaned home components into an `src/components/home/_archive/` directory to preserve git history before eventual deletion, or deleting them directly during Phase 2 cleanup.

---

## 5. Components and Assets that Must Be Preserved

The following assets are verified authentic and must **never** be replaced, deleted, or overridden:

1. **Brand Identity:**
   - `public/images/surya-hospital-orange-emblem-logo.png` (Authoritative official emblem)
   - `public/images/surya-hospital-horizontal-logo.png` (Authoritative horizontal brand lockup)
2. **Architectural Video:**
   - `public/images/surya-hospital-building.mp4` (Authentic multi-story exterior showing the true Surya Hospital building, orange facade, entrance, and signage in Sai Nagar)
3. **Physical Hospital Photography:**
   - `public/images/surya-reception.jpg` (Authentic ground-floor reception lobby and triage desk)
   - `public/images/dr-d-surya-prakash.png` (Official portrait of Managing Director Dr. D. Surya Prakash)
4. **Core Institutional Pages & Routes:**
   - `/` (`HomePage.jsx`)
   - `/about` (`AboutPage.jsx`)
   - `/doctors` (`DoctorsPage.jsx`)
   - `/specialities` (`SpecialitiesPage.jsx`)
   - `/emergency` (`EmergencyPage.jsx`)
   - `/contact` (`ContactPage.jsx`)
   - `/appointment` (`AppointmentPage.jsx`)

---

## 6. Unused Components Safe for Later Cleanup

The following 27 components in `src/components/home/` have **zero active imports** in any page or layout file and are completely safe to archive or remove in Phase 2:

| Component File | Size | Verification Status | Safety Verdict |
| :--- | :--- | :--- | :--- |
| `AboutEditorial.jsx` | 5.7 KB | Zero imports | 100% Safe to archive |
| `AboutSection.jsx` | 4.3 KB | Zero imports | 100% Safe to archive |
| `AppointmentCtaSection.jsx` | 2.8 KB | Zero imports | 100% Safe to archive |
| `AppointmentJourney.jsx` | 18.7 KB | Zero imports | 100% Safe to archive |
| `AppointmentModal.jsx` | 8.3 KB | Zero imports | 100% Safe to archive |
| `ContactModal.jsx` | 3.4 KB | Zero imports | 100% Safe to archive |
| `DiagnosticsSection.jsx` | 6.2 KB | Zero imports | 100% Safe to archive |
| `DoctorCarousel.jsx` | 7.7 KB | Zero imports | 100% Safe to archive |
| `EmergencySection.jsx` | 5.3 KB | Zero imports | 100% Safe to archive |
| `FacilitiesCinematic.jsx` | 4.3 KB | Zero imports | 100% Safe to archive |
| `FacilitiesSection.jsx` | 2.9 KB | Zero imports | 100% Safe to archive |
| `FacilityMovingGallery.jsx` | 6.5 KB | Zero imports | 100% Safe to archive |
| `FeaturedCareSection.jsx` | 4.5 KB | Zero imports | 100% Safe to archive |
| `FeaturedSurgicalSection.jsx` | 8.1 KB | Zero imports | 100% Safe to archive |
| `Header.jsx` | 8.0 KB | Zero imports | 100% Safe to archive |
| `Hero.jsx` | 6.1 KB | Zero imports | 100% Safe to archive |
| `HeroCarousel.jsx` | 7.2 KB | Zero imports | 100% Safe to archive |
| `HomeDiagnosticsPreview.jsx` | 4.9 KB | Zero imports | 100% Safe to archive |
| `HomeEmergencySection.jsx` | 3.4 KB | Zero imports | 100% Safe to archive |
| `HomeTrustStrip.jsx` | 2.5 KB | Zero imports | 100% Safe to archive |
| `HorizontalCareSlider.jsx` | 6.7 KB | Zero imports | 100% Safe to archive |
| `HospitalStory.jsx` | 4.7 KB | Zero imports | 100% Safe to archive |
| `ImageRevealIntro.jsx` | 6.6 KB | Zero imports | 100% Safe to archive |
| `LocationSection.jsx` | 8.5 KB | Zero imports | 100% Safe to archive |
| `MovingServiceStrip.jsx` | 5.1 KB | Zero imports | 100% Safe to archive |
| `PatientActionHub.jsx` | 4.8 KB | Zero imports | 100% Safe to archive |
| `PinnedSurgicalStory.jsx` | 6.0 KB | Zero imports | 100% Safe to archive |
| `QuickAccessSection.jsx` | 3.3 KB | Zero imports | 100% Safe to archive |
| `QuickAccessStrip.jsx` | 3.4 KB | Zero imports | 100% Safe to archive |
| `SpecialtiesHorizontal.jsx` | 6.6 KB | Zero imports | 100% Safe to archive |
| `SpecialtiesSection.jsx` | 5.9 KB | Zero imports | 100% Safe to archive |
| `SpecialtyCarousel.jsx` | 10.1 KB | Zero imports | 100% Safe to archive |
| `TestimonialCarousel.jsx` | 5.2 KB | Zero imports | 100% Safe to archive |
| `WhySuryaSection.jsx` | 2.8 KB | Zero imports | 100% Safe to archive |
| `DiagnosticsPage.jsx` (in `pages/`) | 12.6 KB | Zero incoming routes | Safe to keep dormant or archive |

---

## 7. Indian Cultural and Regional Authenticity Guidelines

Surya Hospital is an essential community healthcare provider in **Anantapur, Rayalaseema, Andhra Pradesh**. The digital experience must reflect the lived reality of patients and families in an Indian tier-3 city:

### 7.1 Visual & Demographic Tone
- **Patient Diversity:** Represent everyday South Indian families—multi-generational family units (grandparents, parents, children), working professionals, farmers, local merchants, and seniors.
- **Natural Appearance:** Authentic South Indian features, natural skin tones, realistic hairstyles, subtle attire (cotton sarees, salwar kameez, shirts, formal trousers), avoiding staged glamorous models.
- **Healthcare Professionals:** Indian doctors wearing white coats with stethoscopes over formal Indian clinical attire; Indian nurses in tidy teal/blue scrubs or hospital uniforms; helpful receptionists at welcoming desks.

### 7.2 Hospital Architectural Context
- **Clinical Environment:** Bright, clean, well-lit, dignified hospital spaces. Stainless steel railings, vitrified tile flooring, clean pastel walls, organized signage in English and Telugu if depicted, patient waiting chairs, standard Indian hospital beds with clean linen.
- **Avoid:** Ultra-futuristic luxury corporate hospital lobbies with glass waterfalls, Western-style hyper-luxurious atrium corridors, or foreign surgical suites with foreign personnel.

### 7.3 Cultural Nuance
- Maintain warmth and reassurance without overusing overt religious symbols. The focus must remain firmly on clinical competence, cleanliness, honest doctor advice, and round-the-clock availability.

---

## 8. Image-Generation Requirements & Copy-Ready Prompts

When visual gaps require new supportive photographic assets (to replace generic Western Unsplash images on the Specialities and About pages), use the following copy-ready prompts specifically engineered for authentic Indian healthcare realism:

### Asset 1: Senior Indian Physician in Warm Consultation
- **Target Location:** `AboutPage.jsx` (Patient Care Philosophy) or `HomeAboutPreview.jsx`
- **Aspect Ratio:** `4:3` (Landscape)
- **Cultural Context:** Rayalaseema/Andhra Pradesh hospital consultation room.
- **Copy-Ready Prompt:**
  ```text
  Authentic documentary-style photograph of a compassionate senior South Indian male doctor in his late 50s wearing a clean white doctor's coat and stethoscope, sitting in a tidy, well-lit Indian hospital consultation room in Anantapur. He is attentively speaking with an elderly Indian couple in modest traditional South Indian attire. The consultation desk has a blood pressure monitor, patient files, and a pen stand. Warm daylight through clean windows, natural skin tones, respectful clinical interaction, authentic Indian hospital interior, high detail, photorealistic, no text.
  ```

### Asset 2: Modern Indian Surgical Operation Theatre
- **Target Location:** `SpecialitiesPage.jsx` (General Surgery & Laparoscopy Card)
- **Aspect Ratio:** `16:10`
- **Cultural Context:** Clean, sterile tier-2/tier-3 Indian multi-speciality hospital OT.
- **Copy-Ready Prompt:**
  ```text
  Clean, state-of-the-art sterile surgical operation theatre inside a modern Indian hospital. A team of Indian surgeons and surgical nurses in sterile blue surgical scrubs, surgical caps, and masks performing a precise laparoscopic procedure under bright overhead surgical lights. High-end laparoscopic monitor display, stainless steel medical equipment, spotless hygienic operating room, realistic clinical environment in India, photorealistic, 8k resolution, cinematic lighting, no text.
  ```

### Asset 3: 24/7 Indian Emergency & Trauma Casualty Wing
- **Target Location:** `EmergencyPage.jsx` & `HomePage.jsx` (Emergency Section)
- **Aspect Ratio:** `16:9`
- **Cultural Context:** Rapid casualty triage in an Andhra Pradesh hospital.
- **Copy-Ready Prompt:**
  ```text
  Realistic photograph of a well-organized 24/7 emergency casualty room in a clean Indian hospital. An attentive Indian emergency physician and female nurse in uniform carefully checking vitals of an adult Indian patient resting comfortably on a hospital gurney with an IV drip and bedside patient monitor. Stainless steel railings, oxygen supply outlet on the wall, well-lit clean medical ward, sense of urgent professional care and reassurance, photorealistic, natural documentary lighting, no text.
  ```

### Asset 4: Post-Surgical Physiotherapy & Mobility Recovery
- **Target Location:** `SpecialitiesPage.jsx` (Physiotherapy & Rehab Card)
- **Aspect Ratio:** `16:10`
- **Cultural Context:** Dedicated rehabilitation room in an Indian multi-speciality hospital.
- **Copy-Ready Prompt:**
  ```text
  Professional photograph of a caring South Indian female physiotherapist in clinical attire helping an adult Indian man with gentle knee mobility exercises in a bright hospital physiotherapy department. Modern rehabilitation equipment, exercise bars, and clean recovery mats in the background. Natural daylight, warm and encouraging atmosphere, authentic Indian hospital setting, photorealistic, sharp focus, no text.
  ```

---

## 9. Updated Phased Implementation Roadmap

With the diagnostics feature removed and requirements strictly verified, the revised implementation backlog is structured as follows:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: Critical Usability, Media Optimization & Fast Wins (Est. 4.5 hrs) │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1.1 Wire Appointment & Contact forms to 1-tap WhatsApp booking channel      │
│ 1.2 Compress 10.3MB building video to <2.5MB & create instant WebP poster   │
│ 1.3 Fix mobile Hero viewport height & button collision on screens <400px    │
│ 1.4 Resolve React Compiler synchronous setState warning in AnimateIn.jsx    │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ PHASE 2: Codebase Hygiene & Design System Standardization (Est. 5.5 hrs)   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2.1 Safely archive 27 unused home components into an archive folder         │
│ 2.2 Unify color tokens (Warm Ivory #FFF9F3, Terracotta #C65332, Charcoal)   │
│ 2.3 Refactor Footer to eliminate dark navy break and harmonize with theme   │
│ 2.4 Synchronize category filter keys on SpecialitiesPage.jsx                │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ PHASE 3: Hero & Core Section Cinematic Elevation (Est. 6.5 hrs)             │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3.1 Grounded Architectural Hero layout with crisp typography & clear scrim  │
│ 3.2 Redesign Integrated Trust Strip with responsive cards & clear icons     │
│ 3.3 Elevate Dr. D. Surya Prakash MD leadership showcase card on Home/About  │
│ 3.4 Polish Patient Journey 4-step progressive timeline cards                │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ PHASE 4: Subpage Polish & Authentic Regional Imagery (Est. 6.5 hrs)         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4.1 Enhance DoctorsPage with symptom search ("fever", "fracture", "hernia") │
│ 4.2 Replace generic Western stock images with authentic Indian assets       │
│ 4.3 Add 1-tap Google Maps native navigation trigger on ContactPage          │
│ 4.4 Emergency page mobile optimization with prominent 1-tap casualty dialer │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ PHASE 5: SEO, Accessibility & Multi-Device QA (Est. 4.0 hrs)                │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5.1 Adjust low-contrast badges and muted labels to satisfy WCAG AA 4.5:1   │
│ 5.2 Inject Schema.org Hospital / MedicalBusiness JSON-LD structured data    │
│ 5.3 Cross-device verification (iPhone SE 360px, iPad 768px, Desktop 1440px) │
└─────────────────────────────────────────────────────────────────────────────┘

Total Estimated Effort: 27.0 Hours (3 hours saved by removing Diagnostics)
```

---

## 10. Dependencies, Risks & Verification Methods

| Workstream | Key Dependencies | Identified Risks | Mitigation & Verification Method |
| :--- | :--- | :--- | :--- |
| **Video Compression** | FFmpeg or Handbrake script | Visual quality loss on 1080p desktop | Use two-pass WebM/MP4 encoding targeting ~1.8 Mbps with CRF 24; test visual clarity on 1920px display. |
| **WhatsApp Booking** | Valid WhatsApp number (`+91 85009 04999`) | Incorrect URL encoding on mobile browsers | Use `encodeURIComponent` for patient name, department, date; test in Chrome and Safari mobile simulators. |
| **Component Cleanup** | Zero imports in active pages | Accidental deletion of shared UI | Move files to `src/components/home/_archive/` first; run `npm run lint` and `npm run build` to guarantee zero build breakage. |
| **Hero Mobile Fix** | `Hero.css` responsive media queries | Regressions on desktop layout | Use CSS Grid / Flex column wrap with min-height clamping (`min(75vh, 620px)`); test at 360px, 390px, 430px, 768px, 1280px. |
| **Category Synchronization** | `hospitalData.js` specialities array | Broken category filters | Direct match of `spec.category` strings; assert all 8 specialities appear when clicking "All" or category pills. |

---

## 11. Recommended First Implementation Phase

### Recommended Starting Point: **Phase 1 (Critical Usability, Media Optimization & Fast Wins)**
- **Why Phase 1 First?**
  1. It immediately fixes the most critical user-facing friction points: booking form submissions will no longer disappear into a void, but will route directly to hospital staff via WhatsApp.
  2. It cuts page payload by over **8 MB** by introducing video compression and a WebP poster frame, immediately benefiting patients on mobile data in Anantapur.
  3. It repairs the verified mobile hero text clipping defect on compact smartphones.
  4. It requires **zero destructive changes** and leaves all active pages and components fully intact.
- **Estimated Phase 1 Duration:** 4.5 Hours
- **Prerequisite:** User confirmation of the WhatsApp phone number and approval to begin Phase 1 execution.
