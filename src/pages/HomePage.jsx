import React, { useEffect } from "react";
import { HomeHero } from "../components/home/HomeHero";
import { HomeAboutPreview } from "../components/home/HomeAboutPreview";
import { HomeSpecialitiesGrid } from "../components/home/HomeSpecialitiesGrid";
import { FacilitiesCinematic } from "../components/home/FacilitiesCinematic";
import { HomeFeaturedDoctors } from "../components/home/HomeFeaturedDoctors";
import { TestimonialCarousel } from "../components/home/TestimonialCarousel";
import { HomeAppointmentCta } from "../components/home/HomeAppointmentCta";

export function HomePage() {
  useEffect(() => {
    document.title = "Surya Hospital | Sai Nagar, Anantapur | Comprehensive Healthcare";
  }, []);

  return (
    <div className="w-full bg-[#FFF9F3]">
      {/* 1. Hero Section with Integrated Stats & Organic Flowing Bottom Wave */}
      <HomeHero />

      {/* 2. Editorial About Section with Circular Masked Imagery & Metrics */}
      <HomeAboutPreview />

      {/* 3. Services Section with 6 Horizontal Panels & Navigation Controls */}
      <HomeSpecialitiesGrid />

      {/* 4. Advanced Technology & Facilities Section in Deep Clinical Teal */}
      <FacilitiesCinematic />

      {/* 5. Experienced Doctors Editorial Section */}
      <HomeFeaturedDoctors />

      {/* 6. Patient Stories & Testimonials 3-Card Carousel */}
      <TestimonialCarousel />

      {/* 7. Take the First Step Appointment Booking CTA Section */}
      <HomeAppointmentCta />
    </div>
  );
}

export default HomePage;
