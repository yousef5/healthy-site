"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Footer from "../Footer/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsIndex() {
  const params = useParams();
  const [isArabic, setIsArabic] = useState(false);
  const t = useTranslations("ContactUs");

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
              className="text-xl md:text-2xl text-center text-foreground/70 mb-12"
              style={bodyFontStyle}
            >
              {t("subtitle")}
            </p>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p
                className="text-lg leading-relaxed text-foreground/80 text-center mb-8"
                style={bodyFontStyle}
              >
                {t("description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
                <Mail className="h-12 w-12 mb-4 text-primary" />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={headingFontStyle}
                >
                  {t("email")}
                </h3>
                <p className="text-foreground/70" style={bodyFontStyle}>
                  {t("emailValue")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
                <Phone className="h-12 w-12 mb-4 text-primary" />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={headingFontStyle}
                >
                  {t("phone")}
                </h3>
                <p className="text-foreground/70" style={bodyFontStyle}>
                  {t("phoneValue")}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
                <MapPin className="h-12 w-12 mb-4 text-primary" />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={headingFontStyle}
                >
                  {t("address")}
                </h3>
                <p className="text-foreground/70" style={bodyFontStyle}>
                  {t("addressValue")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
