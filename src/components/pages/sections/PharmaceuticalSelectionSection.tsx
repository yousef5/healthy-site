"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Pill, Syringe, Droplets, Microscope } from "lucide-react";
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
  descriptionBaseEn: string;
  descriptionBaseAr: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  value: number;
  suffix: string;
}

// Modified counter hook to handle inactive state
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

      // Easing function - ease out cubic
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
  headingFontStyle,
  bodyFontStyle,
}: PharmaceuticalSelectionSectionProps) {
  // Track if sections are in view for counters
  const [categoriesInView, setCategoriesInView] = useState(false);

  // Create counters for each category - always call hooks but control their behavior
  const prescriptionCount = useCounter(6000, 2500, categoriesInView);
  const otcCount = useCounter(4500, 2500, categoriesInView);
  const supplementsCount = useCounter(1500, 2500, categoriesInView);
  const specialtyCount = useCounter(500, 2500, categoriesInView);

  // Define the categories data
  const categories: CategoryData[] = [
    {
      id: "prescription",
      titleEn: "Prescription Medications",
      titleAr: "الأدوية المقررة بوصفة طبية",
      descriptionBaseEn: "options with quick electronic verification",
      descriptionBaseAr: "خيار مع تحقق إلكتروني سريع",
      icon: <Pill size={32} strokeWidth={1.5} />,
      color: "from-blue-500/20 to-blue-600/20",
      gradient: "from-blue-500 via-blue-400 to-blue-600",
      value: prescriptionCount,
      suffix: "+",
    },
    {
      id: "otc",
      titleEn: "Over-the-Counter",
      titleAr: "أدوية بدون وصفة طبية",
      descriptionBaseEn: "products for every health need",
      descriptionBaseAr: "منتج لكل احتياجات الصحة",
      icon: <Syringe size={32} strokeWidth={1.5} />,
      color: "from-emerald-500/20 to-emerald-600/20",
      gradient: "from-emerald-500 via-teal-400 to-emerald-600",
      value: otcCount,
      suffix: "+",
    },
    {
      id: "supplements",
      titleEn: "Supplements & Vitamins",
      titleAr: "المكملات والفيتامينات",
      descriptionBaseEn: "formulations for optimal wellness",
      descriptionBaseAr: "تركيبة للعافية المثلى",
      icon: <Droplets size={32} strokeWidth={1.5} />,
      color: "from-amber-500/20 to-amber-600/20",
      gradient: "from-amber-500 via-yellow-400 to-amber-600",
      value: supplementsCount,
      suffix: "+",
    },
    {
      id: "specialty",
      titleEn: "Specialty Medications",
      titleAr: "الأدوية المتخصصة",
      descriptionBaseEn: "rare and specialty pharmaceutical products",
      descriptionBaseAr: "منتج دوائي نادر ومتخصص",
      icon: <Microscope size={32} strokeWidth={1.5} />,
      color: "from-purple-500/20 to-purple-600/20",
      gradient: "from-purple-500 via-fuchsia-400 to-purple-600",
      value: specialtyCount,
      suffix: "+",
    },
  ];

  // Define partners data - we'll keep the structure but enhance styling
  const partnerLogos = [
    { id: "pfizer", path: "/images/pfizer.png", name: "Pfizer" },
    { id: "novartis", path: "/images/novartis.png", name: "Novartis" },
    { id: "bayer", path: "/images/bayer.png", name: "Bayer" },
    { id: "gsk", path: "/images/gsk.png", name: "GSK" },
    { id: "eva", path: "/images/eva.png", name: "EVA" },
    { id: "mash", path: "/images/mash.jpg", name: "Mash" },
  ];

  return (
    <section className="min-h-screen w-full bg-background relative flex items-center py-20 overflow-hidden">
      {/* Decorative background elements - enhanced for both modes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode gradients that are slightly visible in dark mode */}
        <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-500/10 via-primary/5 to-transparent dark:from-blue-500/20 dark:via-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-emerald-500/10 via-primary/5 to-transparent dark:from-emerald-500/20 dark:via-primary/10 blur-3xl"></div>
        <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-gradient-to-bl from-amber-500/10 via-primary/5 to-transparent dark:from-amber-500/20 dark:via-primary/10 blur-3xl"></div>

        {/* Particle-like dot pattern - different sizes for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_0.5px,transparent_0.5px)] dark:bg-[radial-gradient(#CBD5E1_0.5px,transparent_0.5px)] [background-size:12px_12px] opacity-30 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_0.3px,transparent_0.3px)] dark:bg-[radial-gradient(#94A3B8_0.3px,transparent_0.3px)] [background-size:24px_24px] opacity-20 dark:opacity-15"></div>

        {/* Additional subtle patterns for texture */}
        <div className="absolute inset-0 bg-grid-primary/[0.01] dark:bg-grid-primary/[0.02] bg-[size:32px_32px]"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section Header - Enhanced with animation */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center mb-1">
                <div className="h-px w-10 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <div className="mx-2 text-primary/80 dark:text-primary/90 text-sm font-medium tracking-wider uppercase">
                  {isArabic ? "تشكيلة متنوعة" : "Diverse Selection"}
                </div>
                <div className="h-px w-10 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80 dark:from-primary dark:via-primary/95 dark:to-primary/85 drop-shadow-sm"
                style={headingFontStyle}
              >
                {isArabic
                  ? "أكبر تشكيلة دوائية في مصر"
                  : "The Widest Pharmaceutical Selection in Egypt"}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p
              className="text-base sm:text-lg text-foreground/70 dark:text-foreground/80 max-w-3xl mx-auto leading-relaxed"
              style={bodyFontStyle}
            >
              {isArabic
                ? "أكثر من 12,000 منتج دوائي مختلف، نغطي جميع الاحتياجات الصحية من خلال شراكات استراتيجية مع كبرى شركات الأدوية العالمية والمحلية."
                : "With over 12,000 different pharmaceutical products, we cover all health needs through strategic partnerships with major global and local pharmaceutical companies."}
            </p>
          </motion.div>
        </div>

        {/* Categories Grid - More dramatic reveal animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setCategoriesInView(true)}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15 * index,
                ease: [0.22, 1, 0.36, 1], // Custom bezier curve for smoother animation
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full backdrop-blur-md rounded-3xl shadow-xl border-0 overflow-hidden bg-white/5 dark:bg-black/30">
                {/* Inner glass morphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/5 dark:from-white/10 dark:to-white/5 opacity-50"></div>

                {/* Category-specific gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} dark:opacity-40 opacity-30`}
                ></div>

                {/* Light reflections */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_70%)] opacity-20 dark:opacity-10"></div>

                {/* Card content with enhanced padding */}
                <CardContent className="p-7 flex flex-col h-full relative z-10">
                  {/* Centered Large Icon with more dramatic styling */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg transform-gpu hover:rotate-6 transition-all duration-500 ring-2 ring-white/20 dark:ring-white/10`}
                    >
                      {category.icon}
                      <div className="absolute inset-0 rounded-2xl bg-white/20 dark:bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Title with enhanced styling */}
                  <div className="text-center mb-3">
                    <h3
                      className="font-bold text-lg text-foreground dark:text-white/90 tracking-wide"
                      style={headingFontStyle}
                    >
                      {isArabic ? category.titleAr : category.titleEn}
                    </h3>
                  </div>

                  {/* Animated Counter with enhanced styling */}
                  <div className="flex justify-center items-baseline mb-3">
                    <span
                      className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.gradient} drop-shadow-sm`}
                    >
                      {category.value}
                    </span>
                    <span
                      className={`text-xl md:text-2xl font-bold ml-0.5 bg-clip-text text-transparent bg-gradient-to-r ${category.gradient} drop-shadow-sm`}
                    >
                      {category.suffix}
                    </span>
                  </div>

                  {/* Description with enhanced styling */}
                  <p
                    className="text-sm text-center text-foreground/70 dark:text-foreground/60 mt-1"
                    style={bodyFontStyle}
                  >
                    {isArabic
                      ? category.descriptionBaseAr
                      : category.descriptionBaseEn}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Logos - Premium design without gradients */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 overflow-hidden relative"
        >
          {/* Clean, elegant container without top accent line */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden">
            {/* Content with improved padding */}
            <div className="py-14 px-8 md:px-12">
              {/* Premium heading with refined underline */}
              <div className="text-center mb-12 relative">
                <h3
                  className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 font-medium relative inline-block"
                  style={headingFontStyle}
                >
                  {isArabic
                    ? "شراكات استراتيجية مع الشركات العالمية"
                    : "Strategic Partnerships with Global Companies"}
                  <span className="block h-[2px] w-24 bg-primary/30 dark:bg-primary/40 absolute -bottom-2 left-1/2 -translate-x-1/2"></span>
                </h3>
              </div>

              {/* Logo grid with refined styling */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
                {partnerLogos.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    className="relative group flex justify-center"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    {/* Simple card with refined border and shadow */}
                    <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-lg p-4 h-24 w-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                      <Image
                        src={partner.path}
                        alt={partner.name}
                        width={85}
                        height={42}
                        className="object-contain max-h-16 transition-all duration-200 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>

                    {/* Partner name tooltip with refined styling */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 dark:bg-zinc-700 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {partner.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bold Slogan - Clean, premium design without gradients */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center px-8 py-12 md:py-16 mt-6 rounded-3xl overflow-hidden relative shadow-xl"
        >
          {/* Clean background */}
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>

          {/* Subtle dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_0.5px,transparent_0.5px)] dark:bg-[radial-gradient(#fff_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5"></div>

          {/* Elegant border */}
          <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] border border-primary/10 dark:border-primary/20"></div>

          {/* Minimal accent lines */}
          <div className="absolute w-16 h-1 bg-primary/30 dark:bg-primary/40 rounded-full top-4 left-1/2 -translate-x-1/2"></div>
          <div className="absolute w-16 h-1 bg-primary/30 dark:bg-primary/40 rounded-full bottom-4 left-1/2 -translate-x-1/2"></div>

          {/* Content with clean styling */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-foreground dark:text-white px-4"
              style={headingFontStyle}
            >
              {isArabic
                ? "لدينا أكبر تشكيلة للأدوية في مصر... لن تحتاج إلى مكان آخر – نحن وجهتك الوحيدة."
                : "We offer the largest pharmaceutical selection in Egypt — no need to look elsewhere. We've got it all."}
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
