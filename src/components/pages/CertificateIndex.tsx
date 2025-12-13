"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Footer from "../Footer/Footer";
import { Award, Shield, CheckCircle, FileCheck2, Building2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  const certificates = useMemo(
    () => [
      {
        id: "gsdp",
        image: "/certificates/gsdp-certificate.webp",
        fallbackImage: "/certificates/gsdp-certificate.png",
        placeholder: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAgCdASoOABQAPpE4l0eloyIhMAgAsBIJZwAAfEEAAP7yFSF/KK2jGxcilZC8ybgo01KowAA=",
        icon: Building2,
        color: "emerald",
      },
      {
        id: "iso",
        image: "/certificates/iso-certificate.webp",
        fallbackImage: "/certificates/iso-certificate.png",
        placeholder: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACQAwCdASoPABQALmlIpFIiJaWlhYBoSygE6AHpcu6iWRjvDs8AAP3Ghq/DMLtUjzAmdoeexu3tCTKGNhsI50u12gEcNVwAAAA=",
        icon: FileCheck2,
        color: "blue",
      },
    ],
    []
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center min-h-screen bg-background"
        dir={isArabic ? "rtl" : "ltr"}
        role="main"
        aria-label={isArabic ? "محتوى الشهادات" : "Certifications content"}
      >
        {/* Hero Section */}
        <header className="w-full bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              {...fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                style={headingFontStyle}
              >
                {t("title")}
              </h1>
              <p
                className="text-xl md:text-2xl text-foreground/70 mb-8"
                style={bodyFontStyle}
              >
                {t("subtitle")}
              </p>
              <p
                className="text-lg leading-relaxed text-foreground/60 max-w-3xl mx-auto"
                style={bodyFontStyle}
              >
                {t("description")}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Certificates Section */}
        <section
          className="container mx-auto px-4 py-16 md:py-24"
          aria-label={isArabic ? "قائمة الشهادات" : "Certifications list"}
        >
          <div className="max-w-7xl mx-auto space-y-24">
            {certificates.map((cert, index) => {
              const certData = t.raw(`certificates.${cert.id}`) as {
                title: string;
                fullTitle: string;
                description: string;
                issuedBy: string;
                features: string[];
              };

              return (
                <motion.article
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Certificate Image */}
                  <div
                    className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative w-full">
                      <Image
                        src={cert.image}
                        alt={`${certData.fullTitle} - ${t("title")} - Healthy Pharma - Egyptian Drug Authority - ISO 9001:2015 - GSDP - Quality Management System - Pharmaceutical Certification`}
                        width={1200}
                        height={1600}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={95}
                        loading={index === 0 ? "eager" : "lazy"}
                        priority={index === 0}
                        placeholder="blur"
                        blurDataURL={cert.placeholder}
                      />

                      {/* Certificate Badge */}
                      <div className={`absolute top-6 ${isArabic ? "left-6" : "right-6"}`}>
                        <div className={`px-5 py-2.5 bg-${cert.color}-500 backdrop-blur-sm text-white rounded-full font-bold text-sm flex items-center gap-2 shadow-lg`}>
                          <cert.icon className="w-5 h-5" />
                          {certData.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} flex flex-col justify-center`}>
                    <div className="space-y-6">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-4">
                          <cert.icon className={`w-7 h-7 text-${cert.color}-500`} />
                          <span className={`text-sm font-bold text-${cert.color}-500 uppercase tracking-wide`}>
                            {certData.title}
                          </span>
                        </div>
                        <h2
                          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                          style={headingFontStyle}
                        >
                          {certData.fullTitle}
                        </h2>
                        <p
                          className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-6"
                          style={bodyFontStyle}
                        >
                          {certData.description}
                        </p>
                      </div>

                      {/* Issued By */}
                      <div className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl border border-border">
                        <Shield className="w-6 h-6 mt-1 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-sm text-foreground/60 mb-1.5" style={bodyFontStyle}>
                            {isArabic ? "صادرة من" : "Issued by"}
                          </p>
                          <p className="font-bold text-lg" style={bodyFontStyle}>
                            {certData.issuedBy}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h3
                          className="text-xl font-bold flex items-center gap-2"
                          style={headingFontStyle}
                        >
                          <CheckCircle className="w-6 h-6 text-primary" />
                          {isArabic ? "المميزات الرئيسية" : "Key Features"}
                        </h3>
                        <ul className="space-y-3">
                          {certData.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-foreground/70 text-base md:text-lg"
                              style={bodyFontStyle}
                            >
                              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Certification Features */}
        <section
          className="w-full bg-muted/30 py-20"
          aria-label={isArabic ? "مميزات الشهادات" : "Certification features"}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={headingFontStyle}
                  >
                    {t("certificationFeatures.quality")}
                  </h3>
                  <p className="text-foreground/70 text-lg" style={bodyFontStyle}>
                    {t("certificationFeatures.qualityDesc")}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={headingFontStyle}
                  >
                    {t("certificationFeatures.compliance")}
                  </h3>
                  <p className="text-foreground/70 text-lg" style={bodyFontStyle}>
                    {t("certificationFeatures.complianceDesc")}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={headingFontStyle}
                  >
                    {t("certificationFeatures.audits")}
                  </h3>
                  <p className="text-foreground/70 text-lg" style={bodyFontStyle}>
                    {t("certificationFeatures.auditsDesc")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
