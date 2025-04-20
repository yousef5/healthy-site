"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface OmepureScienceHeroProps {
  isArabic?: boolean;
}

export const OmepureScienceHero = ({
  isArabic = false,
}: OmepureScienceHeroProps) => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detect theme changes and set dark mode state
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  // If not mounted yet (server-side), return a skeleton
  if (!mounted) {
    return (
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-850 dark:to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 animate-pulse">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <div className="h-12 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
              <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="h-80 w-80 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const direction = isArabic ? "rtl" : "ltr";

  // Animation variants for floating elements
  const floatAnimation: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <section
      dir={direction}
      className={`w-full py-12 md:py-24 relative overflow-hidden
      bg-gradient-to-b from-blue-50/90 via-white to-indigo-50/80
      dark:from-gray-900 dark:via-gray-850 dark:to-gray-900
      transition-colors duration-500`}
    >
      {/* Scientific pattern background */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDarkMode ? "opacity-5" : "opacity-10"
        } pointer-events-none`}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="moleculePattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="2"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="20"
                cy="20"
                r="1"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="80"
                cy="80"
                r="1"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="20"
                cy="80"
                r="1"
                fill="currentColor"
                className="text-primary"
              />
              <circle
                cx="80"
                cy="20"
                r="1"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M50,50 L20,20"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
              <path
                d="M50,50 L80,80"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
              <path
                d="M50,50 L20,80"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
              <path
                d="M50,50 L80,20"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#moleculePattern)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-primary/10" : "bg-primary/20"
            } blur-md`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
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
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`flex flex-col-reverse ${
            isArabic ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center justify-between gap-12 md:gap-16`}
        >
          {/* Text Content */}
          <div
            className={`w-full lg:w-1/2 text-${
              isArabic ? "right" : "left"
            } mb-12 md:mb-0`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1
                className={` text-3xl  md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
                  isDarkMode
                    ? "from-blue-400 to-indigo-300"
                    : "from-primary to-blue-700"
                }`}
              >
                {isArabic
                  ? "أوميبيور – ابتكار مستهدف لصحة المعدة"
                  : "Omepure – Targeted Innovation for Gastric Health"}
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                {isArabic
                  ? "تم تطويره علميًا لتخفيف ارتجاع المريء وحماية الجهاز الهضمي بدقة."
                  : "Scientifically developed to relieve acid reflux and protect your digestive system with precision."}
              </p>
              <Button
                size="lg"
                className={`bg-gradient-to-r text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDarkMode
                    ? "from-primary/90 to-blue-500 hover:from-primary/80 hover:to-blue-600"
                    : "from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
                }`}
              >
                {isArabic ? "اعرف المزيد" : "Learn More"}
              </Button>
            </motion.div>
          </div>

          {/* 3D Molecule Visualization */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                {/* Glowing background effect */}
                <div
                  className={`absolute inset-0 rounded-full blur-xl ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400/20 to-indigo-400/20"
                      : "bg-gradient-to-r from-blue-500/10 to-indigo-500/10"
                  }`}
                />

                {/* Main molecule image */}
                <Image
                  src="/products/main/omepure.png"
                  alt="Omepure Molecule Structure"
                  width={350}
                  height={350}
                  className="object-contain relative z-10 border-none shadow-none"
                  priority
                />

                {/* Scientific annotation pointers */}
                <motion.div
                  className="absolute top-[25%] left-[10%]"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <div
                    className={`bg-background dark:bg-gray-800 shadow-md rounded-lg px-3 py-1 text-xs whitespace-nowrap ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {isArabic ? "موقع الارتباط النشط" : "Active Binding Site"}
                  </div>
                  <div className="w-10 h-0.5 bg-primary rotate-45 translate-x-6 -translate-y-1"></div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[30%] right-[15%]"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: 0.5,
                  }}
                >
                  <div
                    className={`bg-background dark:bg-gray-800 shadow-md rounded-lg px-3 py-1 text-xs whitespace-nowrap ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {isArabic ? "العنصر النشط" : "Active Ingredient"}
                  </div>
                  <div className="w-10 h-0.5 bg-primary -rotate-45 -translate-x-6 -translate-y-1"></div>
                </motion.div>

                <motion.div
                  className="absolute top-[60%] left-[20%]"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: 1,
                  }}
                >
                  <div
                    className={`bg-background dark:bg-gray-800 shadow-md rounded-lg px-3 py-1 text-xs whitespace-nowrap ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {isArabic ? "توصيل مستهدف" : "Targeted Delivery"}
                  </div>
                  <div className="w-8 h-0.5 bg-primary -rotate-[30deg] translate-x-5 -translate-y-1"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
