"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Footer from "../Footer/Footer";
import { Award, Shield, CheckCircle } from "lucide-react";

export default function CertificateIndex() {
  const params = useParams();
  const [isArabic, setIsArabic] = useState(false);
  const t = useTranslations("Certificate");

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
                className="text-lg leading-relaxed text-foreground/80 mb-6"
                style={bodyFontStyle}
              >
                {t("description")}
              </p>
              <p
                className="text-lg leading-relaxed text-foreground/80"
                style={bodyFontStyle}
              >
                {t("content")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
                <Award className="h-16 w-16 mb-4 text-primary" />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={headingFontStyle}
                >
                  {isArabic ? "شهادات الجودة" : "Quality Certifications"}
                </h3>
                <p className="text-foreground/70" style={bodyFontStyle}>
                  {isArabic
                    ? "معايير الجودة الدولية"
                    : "International Quality Standards"}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
                <Shield className="h-16 w-16 mb-4 text-primary" />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={headingFontStyle}
                >
                  {isArabic ? "الامتثال التنظيمي" : "Regulatory Compliance"}
                </h3>
                <p className="text-foreground/70" style={bodyFontStyle}>
                  {isArabic
                    ? "الامتثال لجميع اللوائح"
                    : "Full Regulatory Compliance"}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
                <CheckCircle className="h-16 w-16 mb-4 text-primary" />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={headingFontStyle}
                >
                  {isArabic ? "التدقيق المنتظم" : "Regular Audits"}
                </h3>
                <p className="text-foreground/70" style={bodyFontStyle}>
                  {isArabic
                    ? "مراجعات دورية للجودة"
                    : "Periodic Quality Reviews"}
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
