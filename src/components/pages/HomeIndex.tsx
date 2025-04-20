"use client";
import { useEffect, useState, useCallback } from "react";
import { Navbar } from "../Navbar";
import { useParams } from "next/navigation";
import DistributionSection from "./sections/DistributionSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnersSection";
import Footer from "../Footer/Footer";

import PharmaceuticalSelectionSection from "./sections/PharmaceuticalSelectionSection";
import CompanyDivisionsSection from "./sections/CompanyDivisionsSection";
import ProgrammingDevelopmentSection from "./sections/ProgrammingDevelopmentSection";
import ContactSection from "./sections/ContactSection";

export default function HomeIndex() {
  const [isRTL, setIsRTL] = useState(false);
  const params = useParams();
  const isArabic = params.locale === "ar";

  // State for the currently displayed hero image
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  // Font styles based on locale
  const headingFontStyle = isArabic
    ? { fontFamily: "var(--font-cairo)" }
    : { fontFamily: "var(--font-inter)" };
  const bodyFontStyle = isArabic
    ? { fontFamily: "var(--font-tajawal-bold)" }
    : { fontFamily: "var(--font-inter)" };

  // Array of hero images
  const heroImages = [
    { id: 1, src: "/images/hero1.jpg", alt: "Pharmaceutical products" },
    { id: 2, src: "/images/hero2.jpg", alt: "Expert pharmacists" },
    { id: 3, src: "/images/hero3.jpg", alt: "Modern facilities" },
  ];

  // Function to change image randomly
  const changeImage = useCallback(() => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * heroImages.length) + 1;
    } while (nextIndex === currentImageIndex);

    setCurrentImageIndex(nextIndex);
  }, [currentImageIndex, heroImages.length]);

  useEffect(() => {
    setIsRTL(document.documentElement.dir === "rtl");

    // Set up interval to change image every 5 seconds
    const interval = setInterval(changeImage, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [changeImage]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section - Using the extracted component */}
        <HeroSection
          isArabic={isArabic}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
          heroImages={heroImages}
          changeImage={changeImage}
        />

        {/* Partners Section - Using the extracted component */}
        <PartnersSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
        />

        {/* Distribution Section */}
        <DistributionSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
        />

        {/* Pharmaceutical Selection Section */}
        <PharmaceuticalSelectionSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
        />

        {/* Company Divisions Section */}
        <CompanyDivisionsSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
        />

        {/* Programming Development Section */}
        <ProgrammingDevelopmentSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
        />

        {/* Contact Section */}
        <ContactSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
        />
      </main>

      <Footer />
    </div>
  );
}
