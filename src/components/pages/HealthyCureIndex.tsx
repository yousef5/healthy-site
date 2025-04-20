"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import HealthyCureHeroSection from "@/components/pages/sections/HealthyCureHeroSection";
import { ProductsSection } from "@/components/pages/sections/ProductsSection";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

export default function HealthyCureIndex() {
  const params = useParams();
  const [isArabic, setIsArabic] = useState(false);

  // Product data from translations

  useEffect(() => {
    // Handle the locale parameter safely in an effect
    if (params.locale) {
      setIsArabic(params.locale === "ar");
    }
  }, [params.locale]);

  // Font styles for Arabic/English
  const headingFontStyle = {
    fontFamily: isArabic ? "var(--font-cairo)" : "var(--font-inter)",
    fontWeight: isArabic ? 700 : 600,
  };

  const bodyFontStyle = {
    fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)",
    fontWeight: isArabic ? 400 : 400,
  };

  // Specific font styles for Tajawal variants
  const tajawalLightStyle = {
    fontFamily: "var(--font-tajawal-light)",
    fontWeight: 300,
  };

  const tajawalRegularStyle = {
    fontFamily: "var(--font-tajawal-regular)",
    fontWeight: 400,
  };

  const tajawalBoldStyle = {
    fontFamily: "var(--font-tajawal-bold)",
    fontWeight: 700,
  };

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center"
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Hero Section using the HealthyCureHeroSection component */}
        <HealthyCureHeroSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
          bodyFontStyle={bodyFontStyle}
          tajawalLightStyle={tajawalLightStyle}
          tajawalRegularStyle={tajawalRegularStyle}
          tajawalBoldStyle={tajawalBoldStyle}
        />

        {/* Products Section */}
        <ProductsSection
          isArabic={isArabic}
          headingFontStyle={headingFontStyle}
        />
      </main>
      <Footer />
    </>
  );
}
