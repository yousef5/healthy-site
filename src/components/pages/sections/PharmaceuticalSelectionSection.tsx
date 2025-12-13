"use client";

import { motion } from "framer-motion";
import { Pill, Syringe, Droplets, Microscope, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface PharmaceuticalSelectionSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

interface CategoryData {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
  shadowColor: string;
  value: number;
  suffix: string;
}

function useCounter(
  end: number,
  duration: number = 2000,
  isActive: boolean = true
) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const prevTimeRef = useRef<number>(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive) return;

    const startValue = 0;
    const startTime = performance.now();
    countRef.current = startValue;

    const updateCount = (currentTime: number) => {
      if (!prevTimeRef.current) prevTimeRef.current = startTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const nextCount = Math.floor(
        startValue + easeProgress * (end - startValue)
      );

      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(updateCount);
      }
    };

    frameRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, isActive]);

  return count;
}

export default function PharmaceuticalSelectionSection({
  isArabic,
  bodyFontStyle,
}: PharmaceuticalSelectionSectionProps) {
  const [categoriesInView, setCategoriesInView] = useState(false);

  const prescriptionCount = useCounter(6000, 2500, categoriesInView);
  const otcCount = useCounter(4500, 2500, categoriesInView);
  const supplementsCount = useCounter(1500, 2500, categoriesInView);
  const specialtyCount = useCounter(500, 2500, categoriesInView);

  const categories: CategoryData[] = [
    {
      id: "prescription",
      titleEn: "Prescription Medications",
      titleAr: "الأدوية الموصوفة",
      descriptionEn: "Electronic verification & fast processing",
      descriptionAr: "تحقق إلكتروني ومعالجة سريعة",
      icon: <Pill className="w-7 h-7" strokeWidth={1.5} />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10",
      shadowColor: "shadow-blue-500/25",
      value: prescriptionCount,
      suffix: "+",
    },
    {
      id: "otc",
      titleEn: "Over-the-Counter",
      titleAr: "بدون وصفة طبية",
      descriptionEn: "Products for every health need",
      descriptionAr: "منتجات لكل احتياجاتك الصحية",
      icon: <Syringe className="w-7 h-7" strokeWidth={1.5} />,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/10",
      shadowColor: "shadow-emerald-500/25",
      value: otcCount,
      suffix: "+",
    },
    {
      id: "supplements",
      titleEn: "Vitamins & Supplements",
      titleAr: "الفيتامينات والمكملات",
      descriptionEn: "Premium formulations for wellness",
      descriptionAr: "تركيبات متميزة للعافية",
      icon: <Droplets className="w-7 h-7" strokeWidth={1.5} />,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/10 to-orange-600/10",
      shadowColor: "shadow-amber-500/25",
      value: supplementsCount,
      suffix: "+",
    },
    {
      id: "specialty",
      titleEn: "Specialty Medications",
      titleAr: "الأدوية المتخصصة",
      descriptionEn: "Rare & specialized pharmaceuticals",
      descriptionAr: "أدوية نادرة ومتخصصة",
      icon: <Microscope className="w-7 h-7" strokeWidth={1.5} />,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      shadowColor: "shadow-purple-500/25",
      value: specialtyCount,
      suffix: "+",
    },
  ];

  const totalProducts = 12000;

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900 relative py-24 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/20 dark:from-emerald-400/10 dark:to-teal-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/20 dark:from-blue-400/10 dark:to-indigo-500/10 blur-3xl"
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span
              className="text-sm font-medium text-emerald-700 dark:text-emerald-300"
              style={bodyFontStyle}
            >
              {isArabic ? "تشكيلة شاملة" : "Comprehensive Selection"}
            </span>
          </motion.div>

          {/* Main Title */}
          <h2
            className={`font-black text-gray-900 dark:text-white mb-6 leading-tight ${
              isArabic ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
            }`}
            style={{
              fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-inter)',
            }}
          >
            {isArabic ? (
              <>
                <span className="text-gray-900 dark:text-white">أكبر تشكيلة دوائية</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  في مصر
                </span>
              </>
            ) : (
              <>
                <span className="text-gray-900 dark:text-white">The Widest Pharmaceutical</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Selection in Egypt
                </span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p
            className={`text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed ${
              isArabic ? 'text-lg md:text-xl' : 'text-base md:text-lg'
            }`}
            style={bodyFontStyle}
          >
            {isArabic
              ? "شراكات استراتيجية مع كبرى شركات الأدوية العالمية والمحلية لتلبية جميع احتياجاتك الصحية"
              : "Strategic partnerships with leading global and local pharmaceutical companies to meet all your health needs"}
          </p>

          {/* Total Products Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-white dark:bg-zinc-800/80 shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-zinc-700/50"
          >
            <div className={`${isArabic ? 'text-right' : 'text-left'}`}>
              <div
                className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
                style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-inter)' }}
              >
                {totalProducts.toLocaleString()}+
              </div>
              <div
                className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1"
                style={bodyFontStyle}
              >
                {isArabic ? "منتج دوائي متاح" : "Pharmaceutical Products"}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          onViewportEnter={() => setCategoriesInView(true)}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative h-full p-6 rounded-3xl bg-white dark:bg-zinc-800/80 border border-gray-100 dark:border-zinc-700/50 shadow-lg ${category.shadowColor} dark:shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Shine Effect */}
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg ${category.shadowColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-gray-900 dark:text-white mb-2 ${
                      isArabic ? 'text-lg' : 'text-base'
                    }`}
                    style={{
                      fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-inter)',
                    }}
                  >
                    {isArabic ? category.titleAr : category.titleEn}
                  </h3>

                  {/* Counter */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span
                      className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                      style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-inter)' }}
                    >
                      {category.value.toLocaleString()}
                    </span>
                    <span
                      className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.suffix}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    style={bodyFontStyle}
                  >
                    {isArabic ? category.descriptionAr : category.descriptionEn}
                  </p>

                  {/* Arrow indicator */}
                  <div className={`mt-4 flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span style={bodyFontStyle}>
                      {isArabic ? "اكتشف المزيد" : "Learn more"}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} style={{ color: 'currentColor' }} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p
            className="text-gray-500 dark:text-gray-400 text-sm md:text-base"
            style={bodyFontStyle}
          >
            {isArabic
              ? "لن تحتاج إلى مكان آخر — نحن وجهتك الوحيدة"
              : "No need to look elsewhere — we're your one-stop destination"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
