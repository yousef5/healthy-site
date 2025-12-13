"use client";

import { OmepureProductSection } from "@/components/pages/sections/OmepureProductSection";
import { HealthyCureNavbar } from "@/components/HealthyCureNavbar";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import { OmepureChildrenHero } from "@/components/pages/sections/OmepureChildrenHero";
import { OmepureSafeGrowthSection } from "@/components/pages/sections/OmepureSafeGrowthSection";
import Footer from "@/components/Footer/Footer";

export default function OmepurePage() {
  const params = useParams();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    if (params.locale) {
      setIsArabic(params.locale === "ar");
    }
  }, [params.locale]);

  return (
    <>
      <HealthyCureNavbar />
      <main className="min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
        <OmepureChildrenHero isArabic={isArabic} />
        <OmepureProductSection isArabic={isArabic} />
        <OmepureSafeGrowthSection isArabic={isArabic} />
      </main>
      <Footer />
    </>
  );
}
