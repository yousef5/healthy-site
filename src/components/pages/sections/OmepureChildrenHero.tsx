"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OmepureChildrenHeroProps {
  isArabic?: boolean;
}

export const OmepureChildrenHero = ({
  isArabic = false,
}: OmepureChildrenHeroProps) => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detect theme changes and set dark mode state
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  // Function to scroll to next section
  const scrollToNextSection = () => {
    const currentSection = document.querySelector("#omepure-hero-section");
    if (currentSection) {
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // If not mounted yet (server-side), return a skeleton
  if (!mounted) {
    return (
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50/80 via-white to-rose-50/70 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 animate-pulse">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
              <div className="h-12 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
              <div className="flex gap-4">
                <div className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="h-80 w-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const direction = isArabic ? "rtl" : "ltr";

  return (
    <section
      id="omepure-hero-section"
      dir={direction}
      className={`w-full min-h-screen flex items-center justify-center py-0 relative overflow-hidden
      bg-gradient-to-b from-blue-50/100 via-white to-rose-50/70
      dark:from-indigo-950 dark:via-purple-950/80 dark:to-slate-950
      transition-colors duration-500`}
    >
      {/* Playful background pattern */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDarkMode ? "opacity-10" : "opacity-10"
        } pointer-events-none`}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="childPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="3" fill="#60A5FA" opacity="0.5" />
              <circle cx="20" cy="20" r="2" fill="#F472B6" opacity="0.3" />
              <circle cx="80" cy="80" r="2" fill="#34D399" opacity="0.3" />
              <circle cx="20" cy="80" r="2" fill="#FBBF24" opacity="0.3" />
              <circle cx="80" cy="20" r="2" fill="#A78BFA" opacity="0.3" />
              <path
                d="M30,30 Q50,10 70,30"
                stroke="#60A5FA"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
              />
              <path
                d="M30,70 Q50,90 70,70"
                stroke="#F472B6"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#childPattern)" />
        </svg>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-cyan-400/15" : "bg-blue-300/20"
            } blur-md`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              x: `calc(${Math.random() * 100}vw)`,
              y: `calc(${Math.random() * 100}vh)`,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
            style={{
              width: `${15 + i * 8}px`,
              height: `${15 + i * 8}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-8">
        <div
          className={`flex flex-col-reverse ${
            isArabic ? "lg:flex-row" : "lg:flex-row"
          } items-center justify-between gap-8 lg:gap-12`}
        >
          {/* Left Side - Text Content */}
          <div
            className={`w-full lg:w-1/2 text-${
              isArabic ? "right" : "left"
            } px-4 md:px-8 py-6 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-slate-900/30 border border-white/20 dark:border-cyan-500/10 shadow-xl dark:shadow-cyan-900/10`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Company Logo */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Badge
                    variant="outline"
                    className="group px-6 py-2.5 text-base font-medium tracking-wide 
                    bg-gradient-to-r from-background/40 to-background/20 
                    dark:from-slate-900/40 dark:to-slate-900/20 
                    backdrop-blur-md border border-primary/20 dark:border-cyan-500/30
                    shadow-sm dark:shadow-cyan-900/10
                    hover:bg-background/50 dark:hover:bg-slate-900/50
                    transition-all duration-300 ease-in-out"
                  >
                    <span className="mr-3 flex items-center">
                      <Image
                        src="/logos/healthycure.webp"
                        alt="HealthyCure"
                        width={24}
                        height={24}
                        className="inline-block transition-transform duration-300 group-hover:scale-110"
                      />
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 dark:from-cyan-300 dark:to-cyan-200">
                      HealthyCure
                    </span>
                  </Badge>
                </motion.div>
              </div>

              {/* Main Title */}
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent h-20 bg-gradient-to-r ${
                  isDarkMode
                    ? "from-cyan-300 via-blue-300 to-purple-200"
                    : "from-blue-600 to-purple-500"
                }`}
              >
                {isArabic ? "أوميبيور نقط" : "Omepure Drops"}
              </h1>

              {/* Subheadline */}
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary/90 dark:text-cyan-200/90">
                {isArabic
                  ? "أوميغا 3،6،9 و فيتامين هـ"
                  : "Omega 3, 6, 9 & Vitamin E"}
              </h2>

              {/* Description Text */}
              <p className="text-foreground dark:text-sky-100 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                {isArabic
                  ? "ساعدي طفلكِ على تحقيق أقصى إمكانياته مع أوميبيور. منتجنا المدعّم بأوميغا 3،6،9 وفيتامين E يساهم في تعزيز النمو العقلي وتحسين ذاكرته."
                  : "Help your child unlock their full potential with Omepure. Our formula with Omega 3,6,9 and Vitamin E supports mental growth and memory enhancement."}
              </p>

              {/* Price and CTA Section */}
              <div className="flex flex-wrap items-center gap-6 mb-10">
                {/* Price Badge */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-50" />
                  <div className={`relative px-6 py-4 rounded-2xl ${
                    isDarkMode
                      ? "bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30"
                      : "bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-300"
                  }`}>
                    <span className={`block text-sm ${isDarkMode ? "text-amber-300" : "text-amber-700"}`}>
                      {isArabic ? "السعر" : "Price"}
                    </span>
                    <span className={`block text-3xl md:text-4xl font-black ${
                      isDarkMode ? "text-amber-400" : "text-amber-600"
                    }`}>
                      75 <span className="text-lg font-medium">{isArabic ? "جنيه" : "EGP"}</span>
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToNextSection}
                  className="text-lg px-8 py-6 h-auto border-primary/20 dark:border-cyan-400/40 hover:border-primary/40 dark:hover:border-cyan-400/60 dark:text-cyan-200 transition-all duration-300 group"
                >
                  {isArabic ? "تعرفي على الفوائد" : "Learn More"}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-y-1">
                    ↓
                  </span>
                </Button>
              </div>

              {/* Dosage Information */}
              <div
                className={`rounded-xl p-6 bg-background/80 dark:bg-slate-800/70 backdrop-blur-sm border border-primary/10 dark:border-cyan-500/30 shadow-sm dark:shadow-cyan-900/20 mb-6`}
              >
                <h3 className="text-base md:text-lg font-medium mb-4 text-primary dark:text-cyan-300">
                  {isArabic ? "الجرعة الموصى بها:" : "Recommended Dosage:"}
                </h3>
                <ul className="text-sm md:text-base text-foreground dark:text-sky-100/90 space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-primary dark:text-cyan-400">
                      •
                    </span>
                    {isArabic
                      ? "حديثي الولادة من عمر يوم حتى ٦ أشهر: نصف قطارة يوميًا"
                      : "Newborns (0-6 months): Half dropper daily"}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-primary dark:text-cyan-400">
                      •
                    </span>
                    {isArabic
                      ? "من عمر ٦ أشهر حتى عام: قطارة كاملة يوميًا"
                      : "6 months to 1 year: 1 full dropper daily"}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-primary dark:text-cyan-400">
                      •
                    </span>
                    {isArabic
                      ? "الأطفال أكبر من سنة: ١٠ مل يوميًا"
                      : "Children over 1 year: 10ml daily"}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mr-2 text-primary dark:text-cyan-400">
                      •
                    </span>
                    {isArabic
                      ? "الكبار: قطارة يوميًا"
                      : "Adults: 1 dropper daily"}
                  </li>
                </ul>
              </div>

              {/* Hashtags */}
              <div className="text-sm text-muted-foreground dark:text-sky-200/70">
                <span className="mr-2">
                  {isArabic
                    ? "#أوميبيور_لنمو_عقلي_سليم"
                    : "#Omepure_Mind_Growth"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Visuals */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative group">
                {/* Outer glow */}
                <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                    : "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                }`} />

                {/* Card container */}
                <div className={`relative rounded-3xl p-1 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700"
                    : "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
                }`}>
                  {/* Inner card */}
                  <div className={`relative rounded-[22px] overflow-hidden ${
                    isDarkMode ? "bg-slate-900" : "bg-white"
                  }`}>
                    {/* Decorative corner accents */}
                    <div className={`absolute top-0 left-0 w-20 h-20 ${
                      isDarkMode
                        ? "bg-gradient-to-br from-cyan-500/20 to-transparent"
                        : "bg-gradient-to-br from-blue-500/20 to-transparent"
                    }`} />
                    <div className={`absolute bottom-0 right-0 w-20 h-20 ${
                      isDarkMode
                        ? "bg-gradient-to-tl from-purple-500/20 to-transparent"
                        : "bg-gradient-to-tl from-pink-500/20 to-transparent"
                    }`} />

                    {/* Image - Responsive frame - Large scale */}
                    <div className={`relative ${
                      isArabic
                        ? "w-[420px] h-[420px] md:w-[580px] md:h-[580px] lg:w-[700px] lg:h-[700px]"
                        : "w-[420px] h-[340px] md:w-[600px] md:h-[480px] lg:w-[750px] lg:h-[600px]"
                    }`}>
                      <Image
                        src={isArabic ? "/products/ome7.jpg" : "/products/main/omepure.png"}
                        alt={isArabic ? "أوميبيور نقط" : "Omepure Drops"}
                        fill
                        className="object-contain p-2"
                        priority
                      />
                    </div>

                    {/* Bottom gradient overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 h-24 ${
                      isDarkMode
                        ? "bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"
                        : "bg-gradient-to-t from-white via-white/80 to-transparent"
                    }`} />

                    {/* Product name badge */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className={`px-6 py-2 rounded-full backdrop-blur-md ${
                        isDarkMode
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30"
                          : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                      }`}>
                        <span className={`font-bold text-sm md:text-base ${
                          isDarkMode ? "text-cyan-300" : "text-blue-600"
                        }`}>
                          {isArabic ? "أوميبيور نقط" : "Omepure Drops"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className={`absolute -top-6 -left-6 w-12 h-12 rounded-full ${
                  isDarkMode ? "bg-cyan-500/30" : "bg-blue-500/30"
                } blur-md`} />
                <div className={`absolute -bottom-4 -right-8 w-16 h-16 rounded-full ${
                  isDarkMode ? "bg-purple-500/30" : "bg-pink-500/30"
                } blur-md`} />
                <div className={`absolute top-1/2 -right-10 w-8 h-8 rounded-full ${
                  isDarkMode ? "bg-blue-500/40" : "bg-purple-500/40"
                } blur-sm`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
