"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Heart, TrendingUp, Users, Shield, ChevronDown } from "lucide-react";
import { useRef } from "react";

interface HeroSectionProps {
  isArabic: boolean;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
  heroImages: { id: number; src: string; alt: string }[];
  changeImage: () => void;
}

export default function HeroSection({
  isArabic,
  heroImages,
}: HeroSectionProps) {
  const t = useTranslations("Index");

  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Use once: true to prevent re-rendering animations
  const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  const section3InView = useInView(section3Ref, { once: true, amount: 0.3 });

  const stats = [
    {
      value: "6000+",
      label: t("statsPatients"),
      icon: Users,
      story: isArabic ? "صيدلية تثق بنا" : "Pharmacies trust us"
    },
    {
      value: "450+",
      label: t("statsProducts"),
      icon: Heart,
      story: isArabic ? "موظف متفاني" : "Dedicated employees"
    },
    {
      value: "59+",
      label: t("statsPartners"),
      icon: TrendingUp,
      story: isArabic ? "سيارة توزيع" : "Delivery vehicles"
    },
    {
      value: "15+",
      label: t("statsYears"),
      icon: Shield,
      story: isArabic ? "سنة من التميز" : "Years of excellence"
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* SECTION 1: HERO - APPLE STYLE */}
      <section
        id="hero-section"
        className="relative w-full min-h-screen overflow-hidden bg-black"
        aria-label={isArabic ? "القسم الرئيسي - هلثي فارما" : "Hero Section - Healthy Pharma"}
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Hidden SEO content for search engines */}
        <meta itemProp="name" content="Healthy Pharma" />
        <meta itemProp="description" content={isArabic ? "هلثي فارما للصناعات الدوائية والطبية - أكبر شبكة توزيع أدوية في مصر" : "Healthy Pharma - Leading pharmaceutical distribution network in Egypt"} />
        <meta itemProp="url" content="https://healthypharma.com" />
        <meta itemProp="logo" content="https://healthypharma.com/logos/logo.png" />
        <meta itemProp="image" content="https://healthypharma.com/images/hero-main.jpg" />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Healthy Pharma",
              "alternateName": "هلثي فارما",
              "url": "https://healthypharma.com",
              "logo": "https://healthypharma.com/logos/logo.png",
              "description": isArabic
                ? "هلثي فارما للصناعات الدوائية والطبية - أكبر شبكة توزيع أدوية في مصر تغطي 27 محافظة"
                : "Healthy Pharma - Egypt's leading pharmaceutical distribution company covering 27 governorates with 15+ years of excellence",
              "foundingDate": "2009",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "450+"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Egypt"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mansoura",
                "addressRegion": "Dakahlia",
                "addressCountry": "EG"
              },
              "sameAs": [
                "https://facebook.com/healthypharma",
                "https://linkedin.com/company/healthypharma"
              ],
              "knowsAbout": [
                "Pharmaceutical Distribution",
                "Medical Products",
                "Healthcare Supply Chain",
                "توزيع الأدوية",
                "المنتجات الطبية"
              ]
            })
          }}
        />

        {/* Simple Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Split Hero - Text Left, Images Right */}
        <div className="relative z-10 min-h-screen flex items-center py-20 lg:py-0">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">

              {/* Cards - Shows on LEFT for Arabic (order-2 in RTL = left), RIGHT for English */}
              {/* On mobile/tablet: order-2 ensures cards come AFTER text */}
              {isArabic && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex-1 w-full order-2 lg:order-2"
                >
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 -m-10 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-500/15 rounded-full blur-[60px]" />
                  </div>

                  {/* Bento Grid */}
                  <div className="relative grid grid-cols-2 gap-3 md:gap-4 lg:gap-5 xl:gap-6 min-[1920px]:gap-7 min-[2560px]:gap-8 p-2">
                    {/* Card 1 - Large Top Left */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative col-span-1 row-span-2 h-[280px] md:h-[340px] lg:h-[450px] xl:h-[520px] 2xl:h-[420px] min-[1920px]:h-[580px] min-[2560px]:h-[720px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                      style={{ boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(16, 185, 129, 0.1)' }}
                    >
                      <Image
                        src="/images/hero-main.jpg"
                        alt="هلثي فارما - التميز الدوائي والابتكار في الصناعات الطبية"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 300px"
                        priority
                        fetchPriority="high"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-8 h-1 bg-emerald-500 rounded-full mb-2" />
                        <h3 className="text-lg md:text-xl font-bold text-white font-cairo">التميز الدوائي</h3>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-emerald-400 text-xs font-bold">01</span>
                      </div>
                    </motion.div>

                    {/* Card 2 - Top Right */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative h-[135px] md:h-[165px] lg:h-[220px] xl:h-[255px] 2xl:h-[205px] min-[1920px]:h-[285px] min-[2560px]:h-[355px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                      style={{ boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35), 0 0 25px rgba(16, 185, 129, 0.08)' }}
                    >
                      <Image
                        src="/images/hero-main2.jpg"
                        alt="شهادات جودة معتمدة من الهيئات الدوائية المصرية والعالمية"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-sm md:text-base font-bold text-white font-cairo">شهادات جودة معتمدة</h3>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-emerald-400 text-[10px] font-bold">02</span>
                      </div>
                    </motion.div>

                    {/* Card 3 - Bottom Right */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative h-[135px] md:h-[165px] lg:h-[220px] xl:h-[255px] 2xl:h-[205px] min-[1920px]:h-[285px] min-[2560px]:h-[355px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                      style={{ boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35), 0 0 25px rgba(16, 185, 129, 0.08)' }}
                    >
                      <Image
                        src="/images/hero-main3.jpg"
                        alt="فريق توزيع هلثي فارما يغطي 27 محافظة مصرية"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-sm md:text-base font-bold text-white font-cairo">فريق توزيع عالمي</h3>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-emerald-400 text-[10px] font-bold">03</span>
                      </div>
                    </motion.div>

                    {/* Card 4 - Full Width Bottom (Featured) */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.01, y: -3 }}
                      className="relative col-span-2 h-[160px] md:h-[200px] lg:h-[280px] xl:h-[320px] 2xl:h-[240px] min-[1920px]:h-[360px] min-[2560px]:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                      style={{ boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45), 0 0 40px rgba(16, 185, 129, 0.12)' }}
                    >
                      <Image
                        src="/images/hero-bottom.jpg"
                        alt="رحلة التميز في الصناعات الدوائية - هلثي فارما مصر"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
                        priority
                        fetchPriority="high"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/10 group-hover:border-emerald-500/50 transition-colors duration-300" />
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                      <div className="absolute top-3 left-3 md:top-4 md:left-4">
                        <div className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40">
                          <span className="text-xs font-bold text-emerald-400 font-cairo">مميز</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-1 bg-emerald-500 rounded-full" />
                          <div className="w-3 h-1 bg-emerald-400/50 rounded-full" />
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white font-cairo">رحلة التميز في الصناعات الدوائية</h3>
                      </div>
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-emerald-400 text-xs font-bold">04</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Elements - Reduced for performance */}
                  <div className="absolute inset-0 pointer-events-none hidden lg:block">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/50"
                        style={{
                          left: `${25 + i * 25}%`,
                          top: `${20 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Text Content - Right side for Arabic (order-1 in RTL = right), Left side for English */}
              {/* On mobile/tablet: order-1 ensures text comes BEFORE cards */}
              <motion.div
                initial={{ opacity: 0, x: isArabic ? -50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex-1 space-y-6 md:space-y-8 text-center ${isArabic ? 'order-1 lg:text-right lg:order-1' : 'lg:text-left'}`}
              >
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className={`relative mx-auto ${isArabic ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'}`}
                >
                  <div className={`relative ${
                    isArabic
                      ? 'w-[240px] h-20 md:w-[300px] md:h-24 lg:w-[380px] lg:h-32'
                      : 'w-[280px] h-24 md:w-[360px] md:h-28 lg:w-[450px] lg:h-36'
                  }`}>
                    <Image
                      src={isArabic ? "/logos/full-logo-ar.webp" : "/logos/full-logo-en.webp"}
                      alt={isArabic ? "شعار هلثي فارما" : "Healthy Pharma Logo"}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 450px"
                      style={{ filter: "drop-shadow(0 10px 30px rgba(16, 185, 129, 0.25))" }}
                    />
                  </div>
                </motion.div>

                {/* Industry Label */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className={`text-gray-400 ${
                    isArabic ? 'text-lg md:text-xl lg:text-2xl font-bold' : 'text-base md:text-lg lg:text-xl font-semibold'
                  }`}
                  style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                >
                  {isArabic ? 'للصناعات الدوائية والطبية' : 'Pharmaceutical & Medical Industries'}
                </motion.p>

                {/* Main Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-2"
                >
                  <h1
                    className={`font-black leading-tight ${
                      isArabic
                        ? 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
                        : 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
                    }`}
                    style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                  >
                    <span className="text-white">{isArabic ? 'نحو مستقبل ' : 'Towards a '}</span>
                    <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                      {isArabic ? 'صحي أفضل' : 'Healthier Future'}
                    </span>
                  </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className={`text-gray-400 leading-relaxed max-w-xl ${
                    isArabic
                      ? 'text-lg md:text-xl lg:text-2xl mx-auto lg:mx-0 lg:mr-0'
                      : 'text-base md:text-lg lg:text-xl mx-auto lg:mx-0'
                  }`}
                  style={{ fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)' }}
                >
                  {t("heroSubtitle")}
                </motion.p>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className={`text-emerald-400 font-bold ${
                    isArabic ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                  }`}
                  style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                >
                  {t("heroTagline")}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className={`flex flex-col sm:flex-row gap-4 justify-center ${isArabic ? 'lg:justify-end sm:flex-row-reverse' : 'lg:justify-start'}`}
                >
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      className={`bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 ${
                        isArabic ? 'text-lg font-bold' : 'text-base font-semibold'
                      }`}
                      style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                    >
                      {t("contactUsButton")}
                    </Button>
                  </Link>
                  <Link href="/healthycure">
                    <Button
                      size="lg"
                      variant="outline"
                      className={`border-2 border-gray-700 hover:border-emerald-500/50 text-white hover:text-emerald-400 px-8 py-6 rounded-2xl transition-all duration-300 hover:bg-emerald-500/10 ${
                        isArabic ? 'text-lg font-bold' : 'text-base font-semibold'
                      }`}
                      style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                    >
                      {isArabic ? 'تعرف علينا' : 'Learn More'}
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className={`flex items-center gap-6 pt-4 justify-center ${isArabic ? 'lg:justify-end flex-row-reverse' : 'lg:justify-start'}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={`text-gray-500 text-sm ${isArabic ? 'font-cairo' : 'font-inter'}`}>
                      {isArabic ? '+15 سنة خبرة' : '15+ Years Experience'}
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gray-700" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className={`text-gray-500 text-sm ${isArabic ? 'font-cairo' : 'font-inter'}`}>
                      {isArabic ? '+6000 صيدلية' : '6000+ Pharmacies'}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image Grid - Right side for English only */}
              {!isArabic && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1"
              >
                {/* Ambient Glow */}
                <div className="absolute inset-0 -m-10 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
                  <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-500/15 rounded-full blur-[60px]" />
                </div>

                {/* Bento Grid */}
                <div className="relative grid grid-cols-2 gap-3 md:gap-4 lg:gap-5 xl:gap-6 min-[1920px]:gap-7 min-[2560px]:gap-8 p-2">
                  {/* Card 1 - Large Top Left */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative col-span-1 row-span-2 h-[280px] md:h-[340px] lg:h-[450px] xl:h-[520px] 2xl:h-[420px] min-[1920px]:h-[580px] min-[2560px]:h-[720px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                    style={{ boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(16, 185, 129, 0.1)' }}
                  >
                    <Image
                      src="/images/hero-main.jpg"
                      alt={isArabic ? "هلثي فارما - التميز الدوائي والابتكار" : "Healthy Pharma - Pharmaceutical Excellence and Innovation in Egypt"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 300px"
                      priority
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                    {/* Label */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-8 h-1 bg-emerald-500 rounded-full mb-2" />
                      <h3 className={`text-lg md:text-xl font-bold text-white ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'التميز الدوائي' : 'Excellence'}
                      </h3>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <span className="text-emerald-400 text-xs font-bold">01</span>
                    </div>
                  </motion.div>

                  {/* Card 2 - Top Right */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative h-[135px] md:h-[165px] lg:h-[220px] xl:h-[255px] 2xl:h-[205px] min-[1920px]:h-[285px] min-[2560px]:h-[355px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                    style={{ boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35), 0 0 25px rgba(16, 185, 129, 0.08)' }}
                  >
                    <Image
                      src="/images/hero-main2.jpg"
                      alt={isArabic ? "شهادات جودة معتمدة من الهيئات الدوائية" : "Certified Quality Standards from Egyptian and International Pharmaceutical Authorities"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className={`text-sm md:text-base font-bold text-white ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'شهادات جودة معتمدة' : 'Certified Quality'}
                      </h3>
                    </div>
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <span className="text-emerald-400 text-[10px] font-bold">02</span>
                    </div>
                  </motion.div>

                  {/* Card 3 - Bottom Right */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative h-[135px] md:h-[165px] lg:h-[220px] xl:h-[255px] 2xl:h-[205px] min-[1920px]:h-[285px] min-[2560px]:h-[355px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                    style={{ boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35), 0 0 25px rgba(16, 185, 129, 0.08)' }}
                  >
                    <Image
                      src="/images/hero-main3.jpg"
                      alt={isArabic ? "فريق توزيع هلثي فارما يغطي 27 محافظة" : "Healthy Pharma Distribution Team Covering 27 Egyptian Governorates"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className={`text-sm md:text-base font-bold text-white ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'فريق توزيع عالمي' : 'Global Distribution'}
                      </h3>
                    </div>
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <span className="text-emerald-400 text-[10px] font-bold">03</span>
                    </div>
                  </motion.div>

                  {/* Card 4 - Full Width Bottom (Featured) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.01, y: -3 }}
                    className="relative col-span-2 h-[160px] md:h-[200px] lg:h-[280px] xl:h-[320px] 2xl:h-[240px] min-[1920px]:h-[360px] min-[2560px]:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
                    style={{ boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45), 0 0 40px rgba(16, 185, 129, 0.12)' }}
                  >
                    <Image
                      src="/images/hero-bottom.jpg"
                      alt={isArabic ? "رحلة التميز في الصناعات الدوائية" : "Journey of Pharmaceutical Excellence - Healthy Pharma Egypt"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
                      priority
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/10 group-hover:border-emerald-500/50 transition-colors duration-300" />
                    {/* Premium Shine */}
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    {/* Featured Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <div className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/40">
                        <span className={`text-xs font-bold text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                          {isArabic ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-1 bg-emerald-500 rounded-full" />
                        <div className="w-3 h-1 bg-emerald-400/50 rounded-full" />
                      </div>
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-black text-white ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'رحلة التميز في الصناعات الدوائية' : 'Journey of Pharmaceutical Excellence'}
                      </h3>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <span className="text-emerald-400 text-xs font-bold">04</span>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements - Reduced for performance */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/50"
                      style={{
                        left: `${25 + i * 25}%`,
                        top: `${20 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={() => document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors duration-300 cursor-pointer group"
        >
          <span className={`text-sm font-medium ${isArabic ? 'font-cairo' : 'font-inter'}`}>
            {isArabic ? 'اكتشف المزيد' : 'Discover More'}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </section>

      {/* SECTION 2: THE STORY BEGINS - LIGHT */}
      <section id="story-section" ref={section1Ref} className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-32 overflow-hidden">
        {/* Static Background Elements - CSS only */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={section1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-8 mb-24"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={section1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={isArabic
                  ? "text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight"
                  : "text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
                }
                style={{
                  fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                }}
              >
                {isArabic ? "كل قصة نجاح تبدأ بحلم" : "Every Success Story Starts With a Dream"}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={section1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={isArabic
                  ? "text-2xl md:text-4xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
                  : "text-xl md:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
                }
                style={{
                  fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)',
                }}
              >
                {t("heroDescription")}
              </motion.p>
            </motion.div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80, scale: 0.8 }}
                  animate={section1InView ? {
                    opacity: 1,
                    y: 0,
                    scale: 1
                  } : {}}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <motion.div
                    className="relative p-6 md:p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg overflow-hidden backdrop-blur-sm"
                    whileHover={{
                      borderColor: "rgba(16, 185, 129, 0.5)",
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent"
                    />

                    {/* Icon with 3D Effect */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={section1InView ? {
                        scale: 1,
                        rotate: 0
                      } : {}}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: 1.2
                      }}
                      className="relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center"
                    >
                      <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                    </motion.div>

                    {/* Value with Counter Animation */}
                    <motion.h3
                      initial={{ scale: 0, opacity: 0 }}
                      animate={section1InView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        delay: 1 + index * 0.1,
                        type: "spring",
                        stiffness: 150,
                        damping: 15
                      }}
                      className={`relative text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2 ${
                        isArabic ? 'text-5xl md:text-6xl lg:text-7xl' : ''
                      }`}
                      style={{
                        fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                      }}
                    >
                      {stat.value}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={section1InView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className={`relative text-xs md:text-sm text-gray-600 uppercase tracking-wider font-bold ${
                        isArabic ? 'text-sm md:text-base' : ''
                      }`}
                      style={{
                        fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                      }}
                    >
                      {stat.label}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={section1InView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={() => document.getElementById('showcase-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors duration-300 cursor-pointer group"
        >
          <span className={`text-sm font-medium ${isArabic ? 'font-cairo' : 'font-inter'}`}>
            {isArabic ? 'المزيد' : 'More'}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all duration-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </section>

      {/* SECTION 3: VISUAL SHOWCASE - LUXURY DESIGN */}
      <section id="showcase-section" className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-32 overflow-hidden">
        {/* Static Background Elements - CSS only */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Masonry Grid - Bento Style */}
          <div className="max-w-7xl mx-auto px-4">
            {/* Masonry Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16 md:mb-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block mb-6"
              >
                <div className="px-6 py-3 rounded-full border-2 border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
                  <span className={`text-sm uppercase tracking-widest font-bold text-emerald-400 ${
                    isArabic ? 'text-base md:text-lg' : 'text-xs md:text-sm'
                  }`} style={{
                    fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                  }}>
                    {isArabic ? "معرض الصور" : "Our Gallery"}
                  </span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6 ${
                  isArabic ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-6xl'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                }}
              >
                {isArabic ? "رحلتنا في صور" : "Our Journey in Pictures"}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className={`text-gray-400 max-w-2xl mx-auto ${
                  isArabic ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)',
                }}
              >
                {isArabic ? "لحظات من التميز والابتكار في صناعة الأدوية" : "Moments of excellence and innovation in pharmaceutical manufacturing"}
              </motion.p>
            </motion.div>

            {/* Mobile: Single Column Stack */}
            <div className="grid grid-cols-1 md:hidden gap-6">
              {heroImages.map((image, index) => {
                const heights = ['h-[350px]', 'h-[450px]', 'h-[400px]', 'h-[380px]', 'h-[420px]', 'h-[480px]', 'h-[360px]', 'h-[440px]', 'h-[500px]'];
                const titles = isArabic
                  ? ['التميز الطبي', 'الابتكار والجودة', 'الرعاية الصحية', 'التصنيع المتقدم', 'البحث والتطوير', 'الفريق المحترف', 'معايير عالمية', 'التكنولوجيا الحديثة', 'شراكات استراتيجية']
                  : ['Medical Excellence', 'Innovation & Quality', 'Healthcare Solutions', 'Advanced Manufacturing', 'Research & Development', 'Professional Team', 'Global Standards', 'Modern Technology', 'Strategic Partnerships'];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -10 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`relative ${heights[index]} rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40`}
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)'
                      }}
                    >
                      {/* Backdrop Blur Layer */}
                      <div className="absolute inset-0 backdrop-blur-[2px]" />

                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt || `Gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </motion.div>

                      {/* Stronger gradient for text visibility on mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30"
                      />

                      {/* Number Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="absolute top-3 left-3 md:top-6 md:left-6 z-10"
                      >
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-500/30 backdrop-blur-xl border border-emerald-400/40 flex items-center justify-center">
                          <span className={`text-sm md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                            {index + 1}
                          </span>
                        </div>
                      </motion.div>

                      {/* Text Content - Always visible on mobile */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                        <motion.div
                          initial={{ y: 0, opacity: 1 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className={`text-lg md:text-2xl font-black text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                            {titles[index]}
                          </h3>
                          <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full" />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tablet & Desktop: Bento Grid Masonry */}
            <div className="hidden md:block relative">
              {/* Fading edges around masonry */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Top fade */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/50 to-transparent" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent" />
                {/* Left fade */}
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black via-black/50 to-transparent" />
                {/* Right fade */}
                <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black via-black/50 to-transparent" />
                {/* Corner shadows */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-black to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-black to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-black to-transparent" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black to-transparent" />
              </div>

              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[180px] relative z-10 p-4">
              {/* Image 1 - Large */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero1.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'تنظيم مخزني علي اعلي مستوي' : 'Top-Level Inventory Management'}
                    </h3>
                  </div>

                  {/* Number Badge */}
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>1</span>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 2 - Tall */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-3 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero2.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'موظفين متخصصين' : 'Specialized Employees'}
                    </h3>
                  </div>

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>2</span>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 3 - Less Height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-1 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero3.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-lg md:text-xl lg:text-2xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'اكبر تشكيلة دوائية' : 'Largest Pharmaceutical Collection'}
                    </h3>
                  </div>

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>3</span>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 4 - Small */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero4.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'اعتماد الجودة' : 'Quality Certification'}
                    </h3>
                  </div>

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>4</span>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 8 - Under Hero4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-3 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero8.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'نواقص الادوية' : 'Medicine Shortages'}
                    </h3>
                  </div>

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.75, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>8</span>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 6 - Under Hero8 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.68, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero5.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.78, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>6</span>
                    </div>
                  </motion.div>

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'نظام FIFO' : 'FIFO System'}
                    </h3>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 9 - Under Hero8 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero9.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>9</span>
                    </div>
                  </motion.div>

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'إدارة الباتش وتاريخ الصلاحية' : 'Batch & Expire Date Management'}
                    </h3>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 7 - Full Width Under 5 and 9 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-4 lg:col-span-4 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero7.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.85, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>7</span>
                    </div>
                  </motion.div>

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-lg md:text-xl lg:text-2xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'متابعة وتحكم درجات حرارة المخزن TempZone' : 'TempZone Storage Temperature Monitoring'}
                    </h3>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 5 - Medium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero6.webp" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 50vw" loading="lazy" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>5</span>
                    </div>
                  </motion.div>

                  {/* Fixed Text Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <h3
                      className="text-lg md:text-xl lg:text-2xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      style={{ fontFamily: 'var(--font-cairo)' }}
                    >
                      {isArabic ? 'نظام امان عالي لادوية الثلاجة' : 'High Security System for Refrigerated Medicines'}
                    </h3>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION - LIGHT THEME WITH GROW IMAGE */}
      <section ref={section3Ref} className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Static Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-[80px]" />
        </div>

        {/* Section Title - Top Center - Amazing Style */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16 md:pt-20 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={section3InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16 relative"
          >
            {/* Static Background Glow for Title */}
            <div className="absolute inset-0 -top-10 -bottom-10 bg-gradient-to-r from-emerald-400/15 via-green-300/20 to-emerald-400/15 blur-3xl rounded-full" />

            {/* Decorative Lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={section3InView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 -translate-x-1/2 -top-2 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"
            />

            <h2
              className={`relative font-black leading-tight ${
                isArabic ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl' : 'text-4xl md:text-6xl lg:text-7xl xl:text-8xl'
              }`}
              style={{
                fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
              }}
            >
              {/* Text with black and green for last word */}
              <span className="relative">
                <span className="text-gray-900">
                  {isArabic ? 'صحتك هي ' : 'Your Health is Our '}
                </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                    {isArabic ? 'مسؤوليتنا' : 'Responsibility'}
                  </span>
                  {/* Shine Effect on Green Word */}
                  <motion.span
                    initial={{ left: '-100%' }}
                    animate={section3InView ? { left: '200%' } : {}}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-clip-text text-transparent skew-x-12 overflow-hidden"
                    style={{ width: '50%' }}
                    aria-hidden="true"
                  >
                    {isArabic ? 'مسؤوليتنا' : 'Responsibility'}
                  </motion.span>
                </span>
              </span>
            </h2>

            {/* Decorative Lines Bottom */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={section3InView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-40 md:w-56 h-1.5 bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent rounded-full"
            />

            {/* Static Sparkle Decorations */}
            <div className="absolute -left-4 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
            <div className="absolute -right-4 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pb-20 lg:pb-0 flex items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
              animate={section3InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`space-y-8 ${isArabic ? 'lg:order-1 text-center lg:text-right' : 'text-center lg:text-left'}`}
            >
              {/* Logo - Bigger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={section3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className={`${isArabic ? 'flex justify-center lg:justify-start' : 'flex justify-center lg:justify-start'}`}
              >
                <div className={`relative ${isArabic ? 'w-[220px] h-[85px] md:w-[280px] md:h-[110px] lg:w-[350px] lg:h-[140px]' : 'w-[280px] h-[100px] md:w-[380px] md:h-[140px] lg:w-[480px] lg:h-[180px]'}`}>
                  <Image
                    src={isArabic ? "/logos/full-logo-ar.webp" : "/logos/full-logo-en.webp"}
                    alt="Healthy Cure"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, 350px"
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 4px 15px rgba(16, 185, 129, 0.2))"
                    }}
                  />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={section3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`font-black leading-tight ${
                  isArabic ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-6xl lg:text-7xl'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                }}
              >
                <span className="text-gray-900">{isArabic ? "هل أنت " : "Ready to "}</span>
                <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                  {isArabic ? "مستعد؟" : "Begin?"}
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={section3InView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`text-gray-600 leading-relaxed ${
                  isArabic ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)',
                }}
              >
                {isArabic
                  ? "انضم إلى آلاف الشركاء الذين يثقون بنا لتقديم حلول صيدلانية متميزة"
                  : "Join thousands of partners who trust us to deliver exceptional pharmaceutical solutions"}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={section3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className={`bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-10 py-7 rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 ${
                    isArabic ? 'text-xl md:text-2xl font-bold' : 'text-lg font-semibold'
                  }`}
                  style={{
                    fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                  }}
                  onClick={() => {
                    const contactSection = document.getElementById("contact-section");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {t("learnMoreButton")}
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Grow Image */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? -60 : 60 }}
              animate={section3InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className={`relative ${isArabic ? 'lg:order-2' : ''}`}
            >
              <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px]">
                {/* Static Outer Glow */}
                <div className="absolute inset-0 -m-8 rounded-[40px] bg-gradient-to-br from-emerald-200/30 via-green-100/20 to-emerald-200/30 blur-2xl" />

                {/* Main Image Container */}
                <div className="relative w-full h-full">
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl shadow-black/10">
                    <Image
                      src="/images/grow.webp"
                      alt={isArabic ? "ابدأ رحلتك" : "Start your journey"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(255,255,255,0.2)_85%,rgba(255,255,255,0.5)_100%)]" />
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/50 to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/30 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-green-500/3" />
                    <div className="absolute inset-0 rounded-[32px] border border-white/30 shadow-inner" />
                  </div>
                </div>

                {/* Bottom Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-black/5 blur-2xl rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={section3InView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => document.getElementById('distribution-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors duration-300 cursor-pointer group"
        >
          <span className={`text-sm font-medium ${isArabic ? 'font-cairo' : 'font-inter'}`}>
            {isArabic ? 'التوزيع' : 'Distribution'}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>

        {/* Bottom Transition to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent" />
      </section>
    </div>
  );
}
