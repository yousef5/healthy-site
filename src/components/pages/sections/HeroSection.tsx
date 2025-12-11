"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Heart, TrendingUp, Users, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  headingFontStyle,
  bodyFontStyle,
  heroImages,
}: HeroSectionProps) {
  const t = useTranslations("Index");
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const section1InView = useInView(section1Ref, { once: false, amount: 0.5 });
  const section2InView = useInView(section2Ref, { once: false, amount: 0.5 });
  const section3InView = useInView(section3Ref, { once: false, amount: 0.5 });

  // Scroll-based transformations
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0.5, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const titleScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Simple Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Hero Content - Centered Apple Style */}
        <div className="relative h-full min-h-screen flex items-center justify-center z-10">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
            {/* Logo - Large 3D Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateX: -20 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: [0, -15, 0],
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="mb-6 relative"
              style={{ perspective: "1500px" }}
            >
              {/* Animated Glow Rings */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 -m-20 bg-gradient-to-r from-emerald-500/30 via-green-500/30 to-emerald-500/30 blur-3xl rounded-full"
              />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-0 -m-32 bg-gradient-to-r from-green-400/20 via-emerald-600/20 to-green-400/20 blur-3xl rounded-full"
              />

              {/* 3D Logo Container */}
              <motion.div
                className={`relative mx-auto max-w-full group ${
                  isArabic
                    ? 'w-[350px] h-32 md:w-[450px] md:h-40 lg:w-[550px] lg:h-48'
                    : 'w-[500px] h-48 md:w-[700px] md:h-64 lg:w-[900px] lg:h-80'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1500px"
                }}
                whileHover={{
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.05,
                  z: 50
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                {/* 3D Shadow Layers - Create Depth */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-emerald-500/20 blur-2xl"
                  style={{ transform: "translateZ(-30px)" }}
                />

                <motion.div
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                  className="absolute inset-0 bg-green-500/15 blur-2xl"
                  style={{ transform: "translateZ(-50px)" }}
                />

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 -m-8 bg-gradient-to-r from-emerald-400/40 via-green-500/40 to-emerald-400/40 blur-2xl rounded-full"
                  style={{ transform: "translateZ(20px)" }}
                />

                {/* Logo Image with 3D Transform */}
                <motion.div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateZ: [0, -2, 0, 2, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* 3D Light Effect on Top */}
                  <div
                    className="absolute -top-4 inset-x-0 h-32 bg-gradient-to-b from-emerald-400/20 to-transparent blur-xl"
                    style={{ transform: "translateZ(10px)" }}
                  />

                  {/* Logo */}
                  <Image
                    src={isArabic ? "/logos/full-logo-ar.png" : "/logos/full-logo-en.png"}
                    alt={isArabic ? "شعار هلثي فارما" : "Healthy Pharma Logo"}
                    fill
                    className="object-contain"
                    priority
                    style={{
                      filter: "drop-shadow(0 25px 50px rgba(16, 185, 129, 0.3)) drop-shadow(0 10px 30px rgba(5, 150, 105, 0.4))",
                      transform: "translateZ(30px)"
                    }}
                  />

                  {/* 3D Bottom Shadow */}
                  <div
                    className="absolute -bottom-4 inset-x-0 h-32 bg-gradient-to-t from-black/30 to-transparent blur-xl"
                    style={{ transform: "translateZ(-10px)" }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Text under logo */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={isArabic
                ? "text-2xl md:text-3xl lg:text-4xl text-gray-400 font-bold mb-16 -mt-4"
                : "text-2xl md:text-3xl lg:text-4xl text-gray-400 font-semibold mb-16 -mt-4"
              }
              style={{
                fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
              }}
            >
              {isArabic ? 'الصناعات الدوائية والطبية' : 'Pharmaceutical & Medical Industries'}
            </motion.p>

            {/* Subtitle - Clean and Simple */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={isArabic
                ? "text-3xl md:text-4xl lg:text-5xl text-gray-400 font-bold mb-6"
                : "text-2xl md:text-3xl lg:text-4xl text-gray-400 font-medium mb-4"
              }
              style={{
                fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
              }}
            >
              {t("heroSubtitle")}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={isArabic
                ? "text-2xl md:text-3xl lg:text-4xl text-emerald-500 font-black mb-12"
                : "text-xl md:text-2xl text-emerald-500 font-semibold mb-12"
              }
              style={{
                fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
              }}
            >
              {t("heroTagline")}
            </motion.p>

            {/* CTA Buttons - Apple Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className={`bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 ${
                  isArabic ? 'text-xl md:text-2xl font-bold' : 'text-lg font-semibold'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                }}
              >
                {t("getStartedButton")}
              </Button>

              <Button
                size="lg"
                variant="link"
                className={`text-emerald-500 hover:text-emerald-400 ${
                  isArabic ? 'text-xl md:text-2xl font-bold' : 'text-lg font-semibold'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                }}
              >
                {t("learnMoreButton")} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE STORY BEGINS - LIGHT */}
      <section ref={section1Ref} className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl"
        />

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
                    className="relative p-6 md:p-8 rounded-2xl bg-white border-2 border-gray-100 shadow-lg overflow-hidden"
                    whileHover={{
                      borderColor: "rgba(16, 185, 129, 0.3)",
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-transparent"
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
      </section>

      {/* SECTION 3: VISUAL SHOWCASE - LUXURY DESIGN */}
      <section ref={section2Ref} className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-32 overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
        />

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

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

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
                        className="absolute top-6 left-6 z-10"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className={`text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                            {index + 1}
                          </span>
                        </div>
                      </motion.div>

                      {/* Text Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className={`text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                            {titles[index]}
                          </h3>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4 }}
                            className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left"
                          />
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
            <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[180px] relative z-10">
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
                    <Image src="/images/hero1.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />

                  {/* Number Badge */}
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>1</span>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'التميز الطبي' : 'Medical Excellence'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>

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
                    <Image src="/images/hero2.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>2</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'الابتكار والجودة' : 'Innovation & Quality'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 3 - Medium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero3.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>3</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'الرعاية الصحية' : 'Healthcare Solutions'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
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
                    <Image src="/images/hero4.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>4</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'التصنيع المتقدم' : 'Advanced Manufacturing'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 5 - Wide */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-3 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero5.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 50vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>5</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'البحث والتطوير' : 'Research & Development'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 6 - Medium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-1 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero6.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 16vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>6</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'الفريق المحترف' : 'Professional Team'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 7 - Tall */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-3 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero7.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>7</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'معايير عالمية' : 'Global Standards'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 8 - Medium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero8.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>8</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'التكنولوجيا الحديثة' : 'Modern Technology'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>

              {/* Image 9 - Large */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:col-span-2 lg:col-span-2 md:row-span-2 group"
              >
                <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.5 }} className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/40" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(16, 185, 129, 0.1)' }}>
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
                    <Image src="/images/hero9.jpg" alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-green-500/30" />
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }} className="absolute top-4 left-4 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className={`text-lg md:text-xl font-black text-emerald-400 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>9</span>
                    </div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                      <h3 className={`text-xl md:text-2xl font-black text-white mb-2 ${isArabic ? 'font-cairo' : 'font-montserrat'}`}>
                        {isArabic ? 'شراكات استراتيجية' : 'Strategic Partnerships'}
                      </h3>
                      <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full origin-left" />
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.4)]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION - APPLE STYLE MINIMAL */}
      <section ref={section3Ref} className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
              animate={section3InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`space-y-8 ${isArabic ? 'lg:order-2 text-center lg:text-right' : 'text-center lg:text-left'}`}
            >
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={section3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`font-bold text-white leading-tight ${
                  isArabic ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-6xl lg:text-7xl'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                }}
              >
                {isArabic ? "هل أنت مستعد؟" : "Ready to Begin?"}
              </motion.h2>

              {/* Tagline - Your health is our responsibility */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={section3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`text-emerald-500 font-semibold ${
                  isArabic ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl lg:text-3xl'
                }`}
                style={{
                  fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                }}
              >
                {t("heroTagline")}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={section3InView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`text-gray-400 ${
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
                className="pt-6"
              >
                <Button
                  size="lg"
                  className={`bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 rounded-full transition-all duration-300 ${
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

            {/* Right Side - Medical Care Illustration */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
              animate={section3InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className={`relative ${isArabic ? 'lg:order-1' : ''}`}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
              >
                {/* Glow Effect Behind SVG */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 blur-3xl rounded-full"
                />

                {/* SVG Illustration */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/Medical care-cuate.svg"
                    alt={isArabic ? "الرعاية الطبية" : "Medical Care"}
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 -25px 50px rgba(0, 0, 0, 0.8)) drop-shadow(0 -15px 30px rgba(0, 0, 0, 0.6))"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
