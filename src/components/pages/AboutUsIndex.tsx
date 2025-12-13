"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Footer from "../Footer/Footer";
import {
  Building2,
  Users,
  Truck,
  Award,
  Target,
  Eye,
  Lightbulb,
  Shield,
  Heart,
  CheckCircle2,
  FileCheck2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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

  const stats = useMemo(
    () => [
      {
        id: "pharmacies",
        icon: Building2,
        value: t("stats.pharmaciesValue"),
        label: t("stats.pharmacies"),
        gradient: "from-emerald-500 to-teal-500",
      },
      {
        id: "employees",
        icon: Users,
        value: t("stats.employeesValue"),
        label: t("stats.employees"),
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        id: "vehicles",
        icon: Truck,
        value: t("stats.vehiclesValue"),
        label: t("stats.vehicles"),
        gradient: "from-purple-500 to-pink-500",
      },
      {
        id: "experience",
        icon: TrendingUp,
        value: t("stats.experienceValue"),
        label: t("stats.experience"),
        gradient: "from-orange-500 to-red-500",
      },
    ],
    [t]
  );

  const values = useMemo(
    () => [
      {
        id: "quality",
        icon: Award,
        title: t("values.quality.title"),
        description: t("values.quality.description"),
        gradient: "from-emerald-500 to-teal-500",
      },
      {
        id: "innovation",
        icon: Lightbulb,
        title: t("values.innovation.title"),
        description: t("values.innovation.description"),
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        id: "integrity",
        icon: Shield,
        title: t("values.integrity.title"),
        description: t("values.integrity.description"),
        gradient: "from-purple-500 to-pink-500",
      },
      {
        id: "customer",
        icon: Heart,
        title: t("values.customer.title"),
        description: t("values.customer.description"),
        gradient: "from-orange-500 to-red-500",
      },
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
        aria-label={isArabic ? "صفحة من نحن" : "About us page"}
      >
        {/* Hero Section */}
        <header className="w-full bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 py-20 md:py-28 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              {...fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
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
                {t("heroDescription")}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="w-full py-16 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <div className="text-3xl md:text-4xl font-bold mb-2" style={headingFontStyle}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70" style={bodyFontStyle}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are & What We Do Section */}
        <section className="w-full py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Who We Are */}
              <motion.div
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-0.5">
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={headingFontStyle}
                  >
                    {t("whoWeAre")}
                  </h2>
                </div>
                <p
                  className="text-foreground/70 leading-relaxed text-lg"
                  style={bodyFontStyle}
                >
                  {t("whoWeAreDescription")}
                </p>
              </motion.div>

              {/* What We Do */}
              <motion.div
                initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={headingFontStyle}
                  >
                    {t("whatWeDo")}
                  </h2>
                </div>
                <p
                  className="text-foreground/70 leading-relaxed text-lg"
                  style={bodyFontStyle}
                >
                  {t("whatWeDoDescription")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={headingFontStyle}
                  >
                    {t("missionTitle")}
                  </h2>
                  <p
                    className="text-foreground/70 leading-relaxed text-lg"
                    style={bodyFontStyle}
                  >
                    {t("missionDescription")}
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={headingFontStyle}
                  >
                    {t("visionTitle")}
                  </h2>
                  <p
                    className="text-foreground/70 leading-relaxed text-lg"
                    style={bodyFontStyle}
                  >
                    {t("visionDescription")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
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
                  {t("values.title")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 mb-4`}>
                      <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                        <value.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={headingFontStyle}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-foreground/70 text-sm leading-relaxed"
                      style={bodyFontStyle}
                    >
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="w-full py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={headingFontStyle}
                >
                  {t("certifications.title")}
                </h2>
                <p
                  className="text-xl text-foreground/70 max-w-2xl mx-auto"
                  style={bodyFontStyle}
                >
                  {t("certifications.description")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20"
                >
                  <FileCheck2 className="w-12 h-12 text-blue-500 mb-4" />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={headingFontStyle}
                  >
                    {t("certifications.iso")}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span style={bodyFontStyle}>
                      {isArabic ? "معتمد" : "Certified"}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/20"
                >
                  <Building2 className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={headingFontStyle}
                  >
                    {t("certifications.gsdp")}
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span style={bodyFontStyle}>
                      {isArabic ? "معتمد" : "Certified"}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
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
