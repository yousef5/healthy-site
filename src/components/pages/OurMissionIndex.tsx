"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Footer from "../Footer/Footer";
import {
  Target,
  Factory,
  Truck,
  Lightbulb,
  Users,
  Building2,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurMissionIndex() {
  const params = useParams();
  const [isArabic, setIsArabic] = useState(false);
  const t = useTranslations("OurMission");

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

  const pillars = useMemo(
    () => [
      {
        id: "manufacturing",
        icon: Factory,
        title: t("pillars.manufacturing.title"),
        description: t("pillars.manufacturing.description"),
        gradient: "from-emerald-500 to-teal-500",
      },
      {
        id: "distribution",
        icon: Truck,
        title: t("pillars.distribution.title"),
        description: t("pillars.distribution.description"),
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        id: "innovation",
        icon: Lightbulb,
        title: t("pillars.innovation.title"),
        description: t("pillars.innovation.description"),
        gradient: "from-purple-500 to-pink-500",
      },
      {
        id: "service",
        icon: Users,
        title: t("pillars.service.title"),
        description: t("pillars.service.description"),
        gradient: "from-orange-500 to-red-500",
      },
    ],
    [t]
  );

  const impacts = useMemo(
    () => [
      { id: "pharmacies", text: t("impact.pharmacies"), icon: Building2 },
      { id: "employees", text: t("impact.employees"), icon: Users },
      { id: "quality", text: t("impact.quality"), icon: Award },
      { id: "commitment", text: t("impact.commitment"), icon: Target },
    ],
    [t]
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
        aria-label={isArabic ? "صفحة رسالتنا" : "Our mission page"}
      >
        {/* Hero Section */}
        <header className="w-full bg-gradient-to-br from-emerald-500/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 py-20 md:py-28 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              {...fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-6">
                <Target className="w-10 h-10 text-emerald-500" />
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500"
                style={headingFontStyle}
              >
                {t("heroTitle")}
              </h1>
              <p
                className="text-xl md:text-2xl text-foreground/70 mb-6"
                style={bodyFontStyle}
              >
                {t("subtitle")}
              </p>
              <p
                className="text-lg text-foreground/60 max-w-3xl mx-auto leading-relaxed"
                style={bodyFontStyle}
              >
                {t("description")}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Mission Statement Section */}
        <section className="w-full py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-xl">
                  <p
                    className="text-xl md:text-2xl leading-relaxed text-foreground/80 text-center"
                    style={bodyFontStyle}
                  >
                    {t("content")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Pillars Section */}
        <section className="w-full py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={headingFontStyle}
                >
                  {t("pillars.title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} p-0.5 mb-4`}>
                      <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                        <pillar.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={headingFontStyle}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-foreground/70 text-sm leading-relaxed"
                      style={bodyFontStyle}
                    >
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="w-full py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              {/* Approach Content */}
              <motion.div
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={headingFontStyle}
                >
                  {t("approach.title")}
                </h2>
                <p
                  className="text-lg text-foreground/70 leading-relaxed"
                  style={bodyFontStyle}
                >
                  {t("approach.content")}
                </p>
              </motion.div>

              {/* Impact Cards */}
              <motion.div
                initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-xl"
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={headingFontStyle}
                >
                  {t("impact.title")}
                </h3>
                <div className="space-y-4">
                  {impacts.map((impact, index) => (
                    <motion.div
                      key={impact.id}
                      initial={{ opacity: 0, x: isArabic ? -10 : 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl"
                    >
                      <impact.icon className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                      <span
                        className="text-base leading-relaxed"
                        style={bodyFontStyle}
                      >
                        {impact.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-br from-emerald-500/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={headingFontStyle}
              >
                {t("cta.title")}
              </h2>
              <p
                className="text-xl text-foreground/70 mb-8"
                style={bodyFontStyle}
              >
                {t("cta.description")}
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                style={bodyFontStyle}
              >
                {t("cta.button")}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
