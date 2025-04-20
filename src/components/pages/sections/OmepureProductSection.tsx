"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Info } from "lucide-react";

interface Ingredient {
  name: string;
  nameAr: string;
  concentration: string;
  concentrationAr: string;
  importance: string;
  importanceAr: string;
  icon?: string;
}

interface OmepureProductSectionProps {
  isArabic?: boolean;
}

export const OmepureProductSection = ({
  isArabic = false,
}: OmepureProductSectionProps) => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [themeVersion, setThemeVersion] = useState(0);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const [activeCount, setActiveCount] = useState(0);

  // Detect theme changes and set dark mode state
  useEffect(() => {
    setMounted(true);
    if (isDarkMode !== (resolvedTheme === "dark")) {
      setIsDarkMode(resolvedTheme === "dark");
      setThemeVersion((prev) => prev + 1);
    }
  }, [resolvedTheme, isDarkMode]);

  // Animate the ingredient counter
  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setActiveCount((prevCount) => {
          if (prevCount < 15) return prevCount + 1;
          clearInterval(interval);
          return prevCount;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [mounted]);

  // Sample ingredients data
  const ingredientsData: Ingredient[] = useMemo(
    () => [
      {
        name: "Omega-3",
        nameAr: "أوميجا ٣",
        concentration: "700 mg",
        concentrationAr: "٧٠٠ مجم",
        importance: "Hyperactivity & Focus",
        importanceAr: "فرط الحركة وقلة التركيز",
        icon: "brain",
      },
      {
        name: "Omega-6",
        nameAr: "أوميجا ٦",
        concentration: "160 mg",
        concentrationAr: "١٦٠ مجم",
        importance: "Reading & Writing Difficulties",
        importanceAr: "ضعف القراءة والكتابة",
        icon: "book",
      },
      {
        name: "Omega-9",
        nameAr: "أوميجا ٩",
        concentration: "160 mg",
        concentrationAr: "١٦٠ مجم",
        importance: "Sleep Disorders",
        importanceAr: "صعوبة النوم",
        icon: "moon",
      },
      {
        name: "Vitamin E",
        nameAr: "فيتامين هـ",
        concentration: "25 IU",
        concentrationAr: "٢٥ وحدة دولية",
        importance: "Autism Support",
        importanceAr: "التوحد",
        icon: "shield",
      },
      {
        name: "Folic Acid (B9)",
        nameAr: "فوليك أسيد (فيتامين ب٩)",
        concentration: "281 mcg",
        concentrationAr: "٢٨١ ميكروجرام",
        importance: "Treats Anemia",
        importanceAr: "لعلاج الأنيميا",
        icon: "droplet",
      },
    ],
    []
  );

  // Memoize complex style calculations
  const { sectionClasses, headingStyles, patternOneStyles, patternTwoStyles } =
    useMemo(() => {
      return {
        sectionClasses: `w-full pt-16 min-h-screen transition-all duration-700 ease-in-out relative overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"
            : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
        }`,

        headingStyles: {
          background: isDarkMode
            ? "linear-gradient(90deg, #00ffcc 0%, #00bfff 50%, #c183ff 100%)"
            : "linear-gradient(90deg, #0284c7 0%, #4f46e5 50%, #9333ea 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          transition: "all 0.5s ease-in-out",
        },

        patternOneStyles: {
          backgroundImage: isDarkMode
            ? 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.15" fill-rule="evenodd"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"%3E%3C/path%3E%3C/g%3E%3C/svg%3E")'
            : 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%234f46e5" fill-opacity="0.1" fill-rule="evenodd"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"%3E%3C/path%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        },

        patternTwoStyles: {
          backgroundImage: isDarkMode
            ? 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2364ffda" fill-opacity="0.2" fill-rule="evenodd"%3E%3Ccircle cx="10" cy="10" r="2"%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")'
            : 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%233b82f6" fill-opacity="0.2" fill-rule="evenodd"%3E%3Ccircle cx="10" cy="10" r="2"%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "20px 20px",
        },
      };
    }, [isDarkMode]);

  // If not mounted yet (server-side), return a skeleton
  if (!mounted) {
    return (
      <section className="w-full h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-4 animate-pulse">
          <div className="flex flex-col items-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-1 w-24 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 w-96 bg-gray-200 rounded"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="h-96 w-96 bg-gray-200 rounded"></div>
            <div className="w-full max-w-lg">
              <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-6"></div>
              <div className="h-10 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* First Section - Ingredients */}
      <section className={sectionClasses} key={`theme-${themeVersion}`}>
        {/* Pattern overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDarkMode ? "opacity-10" : "opacity-15"
          }`}
          style={patternOneStyles}
        />

        {/* Second pattern overlay with different scale */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDarkMode ? "opacity-5" : "opacity-10"
          }`}
          style={patternTwoStyles}
        />

        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className={`text-4xl h-12 md:text-5xl font-bold mb-3 inline-block transition-all duration-700 drop-shadow-md ${
                isArabic ? "font-[Tajawal]" : "font-[Inter]"
              }`}
              style={headingStyles}
            >
              {isArabic
                ? "أوميبيور – تركيبة فعالة تحتوي على ١٥ مادة نشطة"
                : "Omepure – Powerful Formula with 15 Active Ingredients"}
            </h1>
            <motion.div
              className={`w-24 h-1.5 rounded-full transition-all duration-700 ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                  : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
              }`}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            ></motion.div>
            <motion.p
              className={`mt-6 text-lg max-w-2xl transition-colors duration-700 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } ${isArabic ? "font-[Cairo]" : "font-[Inter]"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {isArabic
                ? "مصمم علميًا لدعم التركيز والتعلم والهدوء وتطور الدماغ عند الأطفال."
                : "Scientifically designed to support focus, learning, calmness, and brain development in children."}
            </motion.p>
          </motion.div>

          <div className="flex flex-col items-center mb-10">
            <motion.div
              className={`flex justify-center items-center mb-2 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-3xl font-bold mr-2">{activeCount}</span>
              <span className="text-lg">
                {isArabic ? "مكون نشط" : "Active Ingredients"}
              </span>
            </motion.div>
          </div>

          <div className="relative overflow-x-auto">
            <Card
              className={`w-full mb-8 border backdrop-blur-sm ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/95 border-gray-200"
              }`}
            >
              <CardHeader className="pb-4">
                <CardTitle
                  className={`flex justify-between items-center ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  <span
                    className={`text-2xl ${
                      isArabic ? "font-[Tajawal]" : "font-[Inter]"
                    }`}
                  >
                    {isArabic ? "المكونات النشطة" : "Active Ingredients"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr
                        className={`text-center border-b ${
                          isDarkMode
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        <th
                          className={`py-4 px-6 font-medium ${
                            isArabic ? "font-[Tajawal]" : "font-[Inter]"
                          }`}
                        >
                          {isArabic ? "المادة" : "Ingredient"}
                        </th>
                        <th
                          className={`py-4 px-6 font-medium ${
                            isArabic ? "font-[Tajawal]" : "font-[Inter]"
                          }`}
                        >
                          {isArabic ? "التركيز" : "Concentration"}
                        </th>
                        <th
                          className={`py-4 px-6 font-medium ${
                            isArabic ? "font-[Tajawal]" : "font-[Inter]"
                          }`}
                        >
                          {isArabic ? "الأهمية" : "Importance/Use"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredientsData.map((ingredient, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className={`${
                            index % 2 === 0
                              ? isDarkMode
                                ? "bg-gray-800/30"
                                : "bg-blue-50/30"
                              : ""
                          } ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          } hover:${
                            isDarkMode ? "bg-gray-700/40" : "bg-blue-50/50"
                          } transition-colors duration-200`}
                        >
                          <td className="py-4 px-6 border-b border-opacity-10 relative text-center">
                            <div className="flex items-center justify-center">
                              <span
                                className={`${
                                  isArabic ? "font-[Cairo]" : "font-[Inter]"
                                } text-base`}
                              >
                                {isArabic ? ingredient.nameAr : ingredient.name}
                              </span>
                              <button
                                className={`ml-3 p-1.5 rounded-full transition-colors duration-200 ${
                                  isDarkMode
                                    ? "text-blue-300 hover:bg-blue-900/30"
                                    : "text-blue-500 hover:bg-blue-100"
                                }`}
                                onClick={() =>
                                  setShowTooltip(
                                    showTooltip === index ? null : index
                                  )
                                }
                              >
                                <Info size={16} />
                              </button>
                            </div>
                            {showTooltip === index && (
                              <div
                                className={`absolute z-10 w-72 p-4 rounded-lg shadow-xl ${
                                  isDarkMode
                                    ? "bg-gray-800 text-gray-200"
                                    : "bg-white text-gray-700"
                                } text-sm top-full left-1/2 transform -translate-x-1/2 mt-2 border ${
                                  isDarkMode
                                    ? "border-gray-700"
                                    : "border-gray-200"
                                }`}
                              >
                                <p
                                  className={`${
                                    isArabic ? "font-[Cairo]" : "font-[Inter]"
                                  } leading-relaxed`}
                                >
                                  {isArabic
                                    ? "معلومات إضافية عن المكون وفوائده العلمية"
                                    : "Additional scientific information about this ingredient and its benefits"}
                                </p>
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-6 border-b border-opacity-10 text-center">
                            <span
                              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                                isDarkMode
                                  ? "bg-indigo-900/40 text-indigo-300"
                                  : "bg-indigo-100 text-indigo-700"
                              } ${isArabic ? "font-[Cairo]" : "font-[Inter]"}`}
                            >
                              {isArabic
                                ? ingredient.concentrationAr
                                : ingredient.concentration}
                            </span>
                          </td>
                          <td
                            className={`py-4 px-6 border-b border-opacity-10 text-center ${
                              isArabic ? "font-[Cairo]" : "font-[Inter]"
                            }`}
                          >
                            {isArabic
                              ? ingredient.importanceAr
                              : ingredient.importance}
                          </td>
                        </motion.tr>
                      ))}
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        } font-medium`}
                      >
                        <td
                          colSpan={3}
                          className={`py-4 px-6 text-center italic ${
                            isArabic ? "font-[Cairo]" : "font-[Inter]"
                          }`}
                        >
                          {isArabic
                            ? "+ ١٠ فيتامينات أخرى مهمة"
                            : "+ 10 other essential vitamins"}
                        </td>
                      </motion.tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Second Section - Benefits */}
      <section className={`${sectionClasses} bg-opacity-90`}>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <Card
                className={`h-full backdrop-blur-sm shadow-xl ${
                  isDarkMode
                    ? "bg-gray-800/80 border-gray-700"
                    : "bg-white/95 border-gray-200"
                }`}
              >
                <CardHeader className="pb-6">
                  <CardTitle
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-800"
                    } font-[Tajawal] text-3xl mb-2`}
                  >
                    {isArabic ? "لماذا أوميبيور؟" : "Why Omepure?"}
                  </CardTitle>
                  <CardDescription
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } font-[cairo] text-xl`}
                  >
                    {isArabic
                      ? "البديل العلمي الأفضل للشراب والكبسولات للأطفال"
                      : "The best scientifically formulated alternative to syrup and capsules for children"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul
                    className={`space-y-6 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {[
                      {
                        text: isArabic
                          ? "سهل الاستخدام والابتلاع"
                          : "Easy to use and swallow",
                        icon: "✨",
                        description: isArabic
                          ? "تصميم سهل الاستخدام للأطفال"
                          : "Child-friendly design",
                      },
                      {
                        text: isArabic
                          ? "طعم مقبول للأطفال"
                          : "Child-friendly taste",
                        icon: "🍬",
                        description: isArabic
                          ? "نكهة لذيذة يحبها الأطفال"
                          : "Delicious flavor kids love",
                      },
                      {
                        text: isArabic
                          ? "يحسن النتائج الأكاديمية"
                          : "Improves academic performance",
                        icon: "📚",
                        description: isArabic
                          ? "تحسين التركيز والذاكرة"
                          : "Enhanced focus and memory",
                      },
                      {
                        text: isArabic
                          ? "تركيبة علمية مدروسة"
                          : "Scientifically researched formulation",
                        icon: "🔬",
                        description: isArabic
                          ? "مدعوم بأبحاث علمية"
                          : "Backed by scientific research",
                      },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div
                          className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110 ${
                            isDarkMode
                              ? "bg-green-900/40 text-green-300"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`${
                              isArabic ? "font-[Tajawal]" : "font-[Inter]"
                            } text-xl font-semibold`}
                          >
                            {item.text}
                          </span>
                          <span
                            className={`${
                              isArabic ? "font-[Cairo]" : "font-[Inter]"
                            } text-base text-gray-500`}
                          >
                            {item.description}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full md:w-1/2"
            >
              <Card
                className={`h-full backdrop-blur-sm shadow-xl ${
                  isDarkMode
                    ? "bg-gray-800/80 border-gray-700"
                    : "bg-white/95 border-gray-200"
                }`}
              >
                <CardHeader className="pb-6">
                  <CardTitle
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-800"
                    } font-[Tajawal] text-3xl mb-2`}
                  >
                    {isArabic ? "الفوائد الرئيسية" : "Key Benefits"}
                  </CardTitle>
                  <CardDescription
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } font-[Cairo] text-xl`}
                  >
                    {isArabic
                      ? "كيف يساعد أوميبيور طفلك"
                      : "How Omepure helps your child"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: isArabic ? "تحسين التركيز" : "Improved Focus",
                        icon: "👁️",
                        description: isArabic
                          ? "زيادة الانتباه والتركيز"
                          : "Enhanced attention and focus",
                        color: isDarkMode
                          ? "from-blue-500 to-cyan-400"
                          : "from-blue-400 to-cyan-300",
                      },
                      {
                        title: isArabic ? "تطوير الدماغ" : "Brain Development",
                        icon: "🧠",
                        description: isArabic
                          ? "دعم نمو الدماغ الصحي"
                          : "Support healthy brain growth",
                        color: isDarkMode
                          ? "from-purple-500 to-pink-400"
                          : "from-purple-400 to-pink-300",
                      },
                      {
                        title: isArabic
                          ? "تقليل فرط الحركة"
                          : "Reduced Hyperactivity",
                        icon: "🏃",
                        description: isArabic
                          ? "تحسين السلوك والهدوء"
                          : "Better behavior and calmness",
                        color: isDarkMode
                          ? "from-green-500 to-emerald-400"
                          : "from-green-400 to-emerald-300",
                      },
                      {
                        title: isArabic ? "دعم النوم الصحي" : "Better Sleep",
                        icon: "💤",
                        description: isArabic
                          ? "نوم أفضل وأعمق"
                          : "Deeper and better sleep",
                        color: isDarkMode
                          ? "from-indigo-500 to-violet-400"
                          : "from-indigo-400 to-violet-300",
                      },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg ${
                          isDarkMode
                            ? "bg-gradient-to-br text-gray-200"
                            : "bg-gradient-to-br text-gray-700"
                        } ${benefit.color}`}
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{benefit.icon}</span>
                            <span
                              className={`${
                                isArabic ? "font-[Tajawal]" : "font-[Inter]"
                              } text-xl font-bold`}
                            >
                              {benefit.title}
                            </span>
                          </div>
                          <span
                            className={`${
                              isArabic ? "font-[Cairo]" : "font-[Inter]"
                            } text-base opacity-90`}
                          >
                            {benefit.description}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
