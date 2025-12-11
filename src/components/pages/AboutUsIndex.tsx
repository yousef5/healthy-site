"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Footer from "../Footer/Footer";

export default function AboutUsIndex() {
  const params = useParams();
  const [isArabic, setIsArabic] = useState(false);
  const t = useTranslations("AboutUs");

  useEffect(() => {
    if (params.locale) {
      setIsArabic(params.locale === "ar");
    }
  }, [params.locale]);

  const headingFontStyle = {
    fontFamily: isArabic ? "var(--font-cairo)" : "var(--font-inter)",
    fontWeight: isArabic ? 700 : 600,
  };

  const bodyFontStyle = {
    fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)",
    fontWeight: isArabic ? 400 : 400,
  };

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center min-h-screen"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
              style={headingFontStyle}
            >
              {t("title")}
            </h1>
            <p
              className="text-xl md:text-2xl text-center text-foreground/70 mb-8"
              style={bodyFontStyle}
            >
              {t("subtitle")}
            </p>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p
                className="text-lg leading-relaxed text-foreground/80 mb-6"
                style={bodyFontStyle}
              >
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
