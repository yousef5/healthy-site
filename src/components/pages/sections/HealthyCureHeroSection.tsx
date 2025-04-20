"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Heart, Shield, Sparkles } from "lucide-react";

interface HealthyCureHeroSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
  tajawalLightStyle: React.CSSProperties;
  tajawalRegularStyle: React.CSSProperties;
  tajawalBoldStyle: React.CSSProperties;
}

export default function HealthyCureHeroSection({
  isArabic,
  headingFontStyle,
  bodyFontStyle,
  tajawalLightStyle,
  tajawalRegularStyle,
  tajawalBoldStyle,
}: HealthyCureHeroSectionProps) {
  const t = useTranslations("HealthyCure");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Health features
  const healthFeatures = [
    {
      id: 1,
      icon: <Heart className="h-5 w-5 text-red-500" />,
      title: isArabic ? "منتجات طبيعية" : "Natural Products",
      description: isArabic
        ? "منتجاتنا مصنوعة من مكونات طبيعية 100%"
        : "Our products are made from 100% natural ingredients",
    },
    {
      id: 2,
      icon: <Shield className="h-5 w-5 text-green-500" />,
      title: isArabic ? "معتمدة طبياً" : "Medically Approved",
      description: isArabic
        ? "جميع منتجاتنا معتمدة من قبل الهيئات الصحية"
        : "All our products are approved by health authorities",
    },
    {
      id: 3,
      icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      title: isArabic ? "فعالية مثبتة" : "Proven Effectiveness",
      description: isArabic
        ? "نتائج مثبتة علمياً لضمان الفعالية"
        : "Scientifically proven results to ensure effectiveness",
    },
  ];

  // Predetermined positions for medical icons to avoid hydration mismatches
  const medicalIcons = [
    {
      icon: "⚕️",
      top: "15%",
      left: "20%",
      fontSize: "24px",
      delay: 0,
      duration: 20,
    },
    {
      icon: "💊",
      top: "75%",
      left: "30%",
      fontSize: "28px",
      delay: 2,
      duration: 18,
    },
    {
      icon: "🧬",
      top: "35%",
      left: "70%",
      fontSize: "22px",
      delay: 4,
      duration: 22,
    },
    {
      icon: "🧪",
      top: "85%",
      left: "80%",
      fontSize: "26px",
      delay: 1,
      duration: 19,
    },
    {
      icon: "⚕️",
      top: "25%",
      left: "10%",
      fontSize: "30px",
      delay: 3,
      duration: 21,
    },
    {
      icon: "💊",
      top: "65%",
      left: "55%",
      fontSize: "20px",
      delay: 5,
      duration: 17,
    },
    {
      icon: "🧬",
      top: "45%",
      left: "85%",
      fontSize: "23px",
      delay: 2.5,
      duration: 23,
    },
    {
      icon: "🧪",
      top: "5%",
      left: "60%",
      fontSize: "25px",
      delay: 3.5,
      duration: 20,
    },
    {
      icon: "⚕️",
      top: "55%",
      left: "5%",
      fontSize: "27px",
      delay: 1.5,
      duration: 24,
    },
    {
      icon: "💊",
      top: "90%",
      left: "40%",
      fontSize: "21px",
      delay: 4.5,
      duration: 18,
    },
    {
      icon: "🧬",
      top: "10%",
      left: "95%",
      fontSize: "26px",
      delay: 0.5,
      duration: 22,
    },
    {
      icon: "🧪",
      top: "50%",
      left: "25%",
      fontSize: "29px",
      delay: 2.8,
      duration: 19,
    },
  ];

  // Default to English if isArabic is undefined during initial render
  const safeIsArabic = isArabic === undefined ? false : isArabic;

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/5 dark:from-background dark:via-primary/5 dark:to-background flex items-center">
      {/* Decorative healthcare elements - improved for light theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 dark:from-primary/20"></div>

      {/* Additional light theme pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-40 dark:opacity-20"></div>

      {/* Subtle grid pattern - more visible in light mode */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Floating medical icons pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {medicalIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/50 dark:text-primary/20"
            style={{
              fontSize: item.fontSize,
              top: item.top,
              left: item.left,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 5, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute top-20 right-0 w-72 h-72 rounded-full blur-3xl bg-green-500/10 dark:bg-green-500/50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl bg-blue-500/5 dark:bg-blue-500/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <div className="container relative px-4 md:px-6 mx-auto py-12 md:py-16 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-start">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex justify-center lg:justify-start mb-6"
            >
              <Image
                src="/logos/healthycure.webp"
                alt="Healthy Cure Logo"
                width={150}
                height={60}
                className="h-auto"
                priority
              />
            </motion.div>

            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm"
              style={{
                ...(safeIsArabic ? tajawalRegularStyle : bodyFontStyle),
              }}
            >
              {safeIsArabic
                ? t("heroSubtitle") || "صحتك هي أولويتنا"
                : t("heroSubtitle") || "Your Health Is Our Priority"}
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight md:leading-tight lg:leading-tight"
              style={{
                ...headingFontStyle,
                letterSpacing: safeIsArabic ? "-0.02em" : "tight",
                lineHeight: safeIsArabic ? "1.3" : "1.2",
              }}
            >
              {safeIsArabic
                ? t("heroTitle") || "منتجات هيلثي كيور للحياة الصحية"
                : t("heroTitle") || "HealthyCure Products For A Healthy Life"}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base md:text-lg text-foreground/80 dark:text-foreground/70 max-w-xl mx-auto lg:mx-0"
              style={{
                ...(safeIsArabic ? tajawalLightStyle : bodyFontStyle),
                lineHeight: safeIsArabic ? "1.8" : "1.6",
                letterSpacing: safeIsArabic ? "0.01em" : "normal",
              }}
            >
              {safeIsArabic
                ? t("heroDescription") ||
                  "اكتشف مجموعتنا الرائدة من المنتجات الصحية المصممة لتعزيز صحتك ورفاهيتك بشكل طبيعي. منتجات عالية الجودة مدعومة بالعلم والخبرة."
                : t("heroDescription") ||
                  "Discover our premium range of health products designed to enhance your health and wellbeing naturally. High-quality products backed by science and expertise."}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-primary/20 text-base"
                style={{
                  ...(safeIsArabic ? tajawalBoldStyle : bodyFontStyle),
                }}
              >
                {safeIsArabic
                  ? t("browseProductsButton") || "تصفح المنتجات"
                  : t("browseProductsButton") || "Browse Products"}
              </Button>
            </motion.div>

            {/* Health Features */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-primary/10 dark:border-primary/20"
            >
              {healthFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-background/70 dark:bg-background/30 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/20 transition-all duration-300 hover:shadow-lg hover:border-primary/40"
                >
                  <div className="flex items-center mb-2 gap-2">
                    <div className="p-2 rounded-full bg-primary/10 dark:bg-background/60">
                      {feature.icon}
                    </div>
                    <h3
                      className="font-medium text-sm text-foreground"
                      style={{
                        ...headingFontStyle,
                        fontSize: safeIsArabic ? "0.9rem" : "0.875rem",
                        fontWeight: safeIsArabic ? 700 : 500,
                      }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className="text-xs text-foreground/80 dark:text-foreground/70"
                    style={{
                      ...(safeIsArabic ? tajawalLightStyle : bodyFontStyle),
                      lineHeight: safeIsArabic ? "1.6" : "1.5",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image with Framer Motion */}
          <motion.div
            className="relative flex items-center justify-center h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Health-themed background pattern */}
              <div
                className="absolute inset-0 bg-background/40 dark:bg-background/50"
                style={{
                  backgroundImage: `radial-gradient(circle, var(--primary) 0.8px, transparent 0.8px)`,
                  backgroundSize: "20px 20px",
                  opacity: "0.3",
                }}
              ></div>

              {/* Main health product showcase */}
              <div className="absolute inset-[20px] rounded-2xl overflow-hidden shadow-lg">
                <motion.div
                  className="relative w-full h-full"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src="/products/ome1.jpg"
                    alt={
                      safeIsArabic
                        ? "منتجات هيلثي كيور الصحية"
                        : "HealthyCure Products"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-all duration-1000 ease-in-out"
                    quality={90}
                  />

                  {/* Theme-appropriate overlay - adjusted for better light mode visibility */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/30 to-transparent dark:from-background/80 dark:via-background/40 dark:to-transparent"></div>

                  {/* Additional light-specific overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10 opacity-40 dark:opacity-20"></div>

                  {/* Floating product highlights */}
                  <div className="absolute inset-0">
                    <motion.div
                      className="absolute top-10 left-10 bg-background/80 backdrop-blur-md p-3 rounded-lg shadow-lg border border-primary/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <span
                        className="text-sm font-medium text-primary"
                        style={{
                          ...(safeIsArabic
                            ? tajawalBoldStyle
                            : headingFontStyle),
                          fontSize: safeIsArabic ? "0.85rem" : "0.875rem",
                        }}
                      >
                        {safeIsArabic ? "100% طبيعي" : "100% Natural"}
                      </span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-10 right-10 bg-background/80 backdrop-blur-md p-3 rounded-lg shadow-lg border border-primary/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <span
                        className="text-sm font-medium text-primary"
                        style={{
                          ...(safeIsArabic
                            ? tajawalBoldStyle
                            : headingFontStyle),
                          fontSize: safeIsArabic ? "0.85rem" : "0.875rem",
                        }}
                      >
                        {safeIsArabic
                          ? "فعالية مثبتة علمياً"
                          : "Scientifically Proven"}
                      </span>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-background/80 backdrop-blur-md p-3 rounded-lg shadow-lg border border-primary/20"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      <span
                        className="text-sm font-medium text-primary"
                        style={{
                          ...(safeIsArabic
                            ? tajawalBoldStyle
                            : headingFontStyle),
                          fontSize: safeIsArabic ? "0.85rem" : "0.875rem",
                        }}
                      >
                        {safeIsArabic ? "معتمد طبياً" : "Medically Approved"}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-green-500/30 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-green-500/30 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-green-500/30 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-green-500/30 rounded-br-3xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
