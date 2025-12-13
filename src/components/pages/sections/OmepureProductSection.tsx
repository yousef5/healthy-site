"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Baby,
  Heart,
  Users,
  Brain,
  Eye,
  Bone,
  Shield,
  Activity,
  Droplets,
  Leaf,
  Check,
  Sparkles,
} from "lucide-react";

interface OmepureProductSectionProps {
  isArabic?: boolean;
}

export const OmepureProductSection = ({
  isArabic = false,
}: OmepureProductSectionProps) => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  // Omega ingredients from PDF
  const omegaIngredients = [
    { name: "Omega 3", nameAr: "أوميجا 3", amount: "700 mg", amountAr: "700 مجم" },
    { name: "Omega 6", nameAr: "أوميجا 6", amount: "160 mg", amountAr: "160 مجم" },
    { name: "Omega 9", nameAr: "أوميجا 9", amount: "160 mg", amountAr: "160 مجم" },
  ];

  // Vitamins from PDF
  const vitamins = [
    { name: "Vitamin E", nameAr: "فيتامين E", amount: "50 IU" },
    { name: "Vitamin C", nameAr: "فيتامين C", amount: "20 mg" },
    { name: "Vitamin D", nameAr: "فيتامين D", amount: "160 IU" },
    { name: "Vitamin K", nameAr: "فيتامين K", amount: "2 mcg" },
    { name: "Vitamin B1", nameAr: "فيتامين B1", amount: "2 mg" },
    { name: "Vitamin B2", nameAr: "فيتامين B2", amount: "0.5 mg" },
    { name: "Vitamin B3", nameAr: "فيتامين B3", amount: "6.8 mg" },
    { name: "Vitamin B5", nameAr: "فيتامين B5", amount: "2.3 mg" },
    { name: "Vitamin B6", nameAr: "فيتامين B6", amount: "1.3 mg" },
    { name: "Vitamin B12", nameAr: "فيتامين B12", amount: "2.4 mg" },
    { name: "Folic Acid", nameAr: "حمض الفوليك", amount: "281 mcg" },
  ];

  // Benefits for Baby from PDF
  const babyBenefits = [
    { text: isArabic ? "زيادة وزن الرضيع (المبتسر أو المكتمل)" : "Increase weight gain for infant (premature or mature)", icon: <Baby className="w-5 h-5" /> },
    { text: isArabic ? "زيادة الذكاء" : "Increase intelligence", icon: <Brain className="w-5 h-5" /> },
    { text: isArabic ? "تحسين التواصل والمهارات الاجتماعية" : "Better communication & social skills", icon: <Users className="w-5 h-5" /> },
    { text: isArabic ? "تقليل خطر اضطراب فرط الحركة" : "Decrease risk of ADHD", icon: <Activity className="w-5 h-5" /> },
    { text: isArabic ? "دعم وظائف المخ" : "Brain Function support", icon: <Brain className="w-5 h-5" /> },
    { text: isArabic ? "صحة العيون" : "Eye Health", icon: <Eye className="w-5 h-5" /> },
    { text: isArabic ? "التطور المعرفي" : "Cognitive Development", icon: <Sparkles className="w-5 h-5" /> },
    { text: isArabic ? "تطور الجهاز العصبي" : "Nervous System Development", icon: <Activity className="w-5 h-5" /> },
    { text: isArabic ? "الوقاية من الشلل الدماغي" : "Prevention of Cerebral Palsy", icon: <Shield className="w-5 h-5" /> },
  ];

  // Benefits for Mother from PDF
  const motherBenefits = [
    { text: isArabic ? "زيادة معدل نمو الأجنة عند تناوله أثناء الحمل" : "Increase growth rate to infants when taken by pregnant woman", icon: <Heart className="w-5 h-5" /> },
    { text: isArabic ? "تقليل خطر تأخر النمو" : "Decrease Risk of developmental delay", icon: <Shield className="w-5 h-5" /> },
    { text: isArabic ? "حماية مراحل تطور الجنين" : "Protect Embryonic Development Stages", icon: <Baby className="w-5 h-5" /> },
    { text: isArabic ? "زيادة تدفق الدم للمشيمة" : "Increase Placental Blood Flow", icon: <Droplets className="w-5 h-5" /> },
    { text: isArabic ? "تحسين وزن الولادة" : "Optimizing Birth Weight", icon: <Baby className="w-5 h-5" /> },
    { text: isArabic ? "تأثيرات مفيدة ضد الولادة المبكرة" : "Beneficial effects against preterm delivery", icon: <Shield className="w-5 h-5" /> },
    { text: isArabic ? "تطور الجهاز العصبي" : "Development of Neurological system", icon: <Brain className="w-5 h-5" /> },
  ];

  // Benefits for All Family from PDF
  const familyBenefits = [
    { text: isArabic ? "زيادة الكوليسترول الجيد HDL" : "Increase HDL (Good Cholesterol)", icon: <Heart className="w-5 h-5" /> },
    { text: isArabic ? "تقليل السمنة" : "Reduce Obesity", icon: <Activity className="w-5 h-5" /> },
    { text: isArabic ? "تقليل الدهون الثلاثية" : "Lower Triglycerides", icon: <Droplets className="w-5 h-5" /> },
    { text: isArabic ? "تأثير مضاد للالتهابات" : "Anti-inflammatory effect", icon: <Shield className="w-5 h-5" /> },
    { text: isArabic ? "منع تجلط الدم" : "Prevent blood clots", icon: <Droplets className="w-5 h-5" /> },
    { text: isArabic ? "الحفاظ على صحة الشرايين" : "Keep arteries smooth & healthy", icon: <Heart className="w-5 h-5" /> },
    { text: isArabic ? "تقليل خطر النزيف الدماغي" : "Decrease risk of intracranial hemorrhage", icon: <Brain className="w-5 h-5" /> },
    { text: isArabic ? "صحة العظام والمفاصل" : "Bone and joint health", icon: <Bone className="w-5 h-5" /> },
  ];

  // Improvements list from PDF
  const improvements = [
    { text: isArabic ? "معدل النمو" : "Growth rate", icon: <Activity className="w-5 h-5" /> },
    { text: isArabic ? "صحة الجهاز العصبي" : "Healthy Nervous System", icon: <Brain className="w-5 h-5" /> },
    { text: isArabic ? "التطور العقلي" : "Mental Development", icon: <Sparkles className="w-5 h-5" /> },
    { text: isArabic ? "جهاز المناعة" : "Immune System", icon: <Shield className="w-5 h-5" /> },
    { text: isArabic ? "صحة القلب والدورة الدموية" : "Healthy Heart & Circulatory System", icon: <Heart className="w-5 h-5" /> },
    { text: isArabic ? "صحة العظام والمفاصل" : "Bones & Joint Health", icon: <Bone className="w-5 h-5" /> },
    { text: isArabic ? "التمثيل الغذائي الصحي" : "Healthy Metabolism", icon: <Activity className="w-5 h-5" /> },
    { text: isArabic ? "تأثيرات مفيدة ضد الولادة المبكرة" : "Beneficial effects against preterm delivery", icon: <Baby className="w-5 h-5" /> },
  ];

  const sectionBg = isDarkMode
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"
    : "bg-gradient-to-br from-emerald-50 via-white to-teal-50";

  if (!mounted) {
    return (
      <section className="w-full min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 py-20 animate-pulse">
          <div className="h-12 w-64 bg-gray-200 rounded mb-8 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Banner - Safe Growth Plan */}
      <section className={`w-full py-16 ${sectionBg} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${isDarkMode ? '#10b981' : '#059669'} 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, ${isDarkMode ? '#14b8a6' : '#0d9488'} 0%, transparent 50%)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Leaf className="w-5 h-5 text-emerald-500" />
              <span className={`text-emerald-600 dark:text-emerald-400 font-medium ${isArabic ? 'font-[Tajawal]' : ''}`}>
                {isArabic ? "مصدر الأوميجا من النباتات" : "Source of Omega is Plant Origin"}
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
              {isArabic ? "خطة النمو الآمن" : "Safe Growth Plan"}
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto ${isArabic ? 'font-[Tajawal]' : ''}`}>
              {isArabic
                ? "أوميبيور يحتوي على أوميجا 3، 6، 9 من زيت جنين القمح (معصور على البارد) مع فيتامين E"
                : "Omepure contains Omega 3, 6, 9 from Wheat Germ Oil (Cold Pressed) with Vitamin E"}
            </p>
          </motion.div>

          {/* Omega Ingredients Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {omegaIngredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-emerald-100'} border backdrop-blur-sm shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                      {isArabic ? ingredient.nameAr : ingredient.name}
                    </h3>
                  </div>
                  <div className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'} font-bold text-lg`}>
                    {isArabic ? ingredient.amountAr : ingredient.amount}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vitamins Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-emerald-100'} border backdrop-blur-sm shadow-xl`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
              {isArabic ? "الفيتامينات" : "Vitamins"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {vitamins.map((vitamin, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-xl text-center ${isDarkMode ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'} border`}
                >
                  <p className={`font-semibold ${isDarkMode ? 'text-amber-300' : 'text-amber-700'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                    {isArabic ? vitamin.nameAr : vitamin.name}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-amber-400/80' : 'text-amber-600'}`}>
                    {vitamin.amount}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Baby, Mother, Family */}
      <section className={`w-full py-20 ${sectionBg} relative`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
              {isArabic ? "أوميبيور له دور مهم جداً في" : "Omepure Has a Very Important Role in"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Baby Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl ${isDarkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-200'} border`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                  <Baby className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-700'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                  {isArabic ? "الطفل" : "Baby"}
                </h3>
              </div>
              <ul className="space-y-3">
                {babyBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} ${isArabic ? 'font-[Tajawal]' : ''}`}
                  >
                    <span className={`mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Mother Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl ${isDarkMode ? 'bg-pink-500/10 border-pink-500/20' : 'bg-pink-50 border-pink-200'} border`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-pink-500/20' : 'bg-pink-100'}`}>
                  <Heart className={`w-8 h-8 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                  {isArabic ? "الأم" : "Mother"}
                </h3>
              </div>
              <ul className="space-y-3">
                {motherBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} ${isArabic ? 'font-[Tajawal]' : ''}`}
                  >
                    <span className={`mt-1 ${isDarkMode ? 'text-pink-400' : 'text-pink-500'}`}>{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Family Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl ${isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'} border`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-emerald-500/20' : 'bg-emerald-100'}`}>
                  <Users className={`w-8 h-8 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-700'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                  {isArabic ? "جميع أفراد العائلة" : "All Family"}
                </h3>
              </div>
              <ul className="space-y-3">
                {familyBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} ${isArabic ? 'font-[Tajawal]' : ''}`}
                  >
                    <span className={`mt-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-500'}`}>{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jaundice Recovery Section */}
      <section className={`w-full py-20 ${isDarkMode ? 'bg-gradient-to-br from-red-950/30 via-gray-900 to-gray-950' : 'bg-gradient-to-br from-red-50 via-white to-orange-50'} relative`}>
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${isArabic ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDarkMode ? 'bg-red-500/10 border-red-500/20' : 'bg-red-100 border-red-200'} border mb-6`}>
                <Droplets className={`w-5 h-5 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                <span className={`${isDarkMode ? 'text-red-300' : 'text-red-600'} font-medium ${isArabic ? 'font-[Tajawal]' : ''}`}>
                  {isArabic ? "فيتامين E مضاد للأكسدة" : "Vitamin E - Antioxidant"}
                </span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                {isArabic ? "يساعد في التعافي السريع من اليرقان" : "Help in Rapid Recovery From Jaundice"}
              </h2>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                {isArabic
                  ? "فيتامين E المضاد للأكسدة يقلل من تكسر خلايا الدم الحمراء، مما يساعد الجسم على التخلص من البيليروبين المتراكم"
                  : "Vitamin E as an antioxidant reduces Red Blood Cells Hemolysis, helping the body get rid of stocked Bilirubin"}
              </p>
              <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border`}>
                <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                  {isArabic ? "كيف يعمل:" : "How it works:"}
                </h4>
                <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                  <li className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    <span>{isArabic ? "يقلل من تكسر كريات الدم الحمراء" : "Reduces Red Blood Cells Hemolysis"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    <span>{isArabic ? "يساعد الجسم على التخلص من البيليروبين" : "Helps body eliminate Bilirubin"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    <span>{isArabic ? "دورة حياة كريات الدم الحمراء 120 يوم" : "Red blood cell lifecycle is 120 days"}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                <div className={`absolute -inset-4 rounded-full blur-3xl ${isDarkMode ? 'bg-red-500/10' : 'bg-red-200/30'}`} />
                <Image
                  src="/products/main/omepure.png"
                  alt="Omepure"
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Improvements Section */}
      <section className={`w-full py-20 ${sectionBg} relative`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
              {isArabic ? "أوميبيور يحسّن" : "Omepure Improves"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {improvements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl text-center ${isDarkMode ? 'bg-gray-800/50 border-gray-700 hover:border-emerald-500/50' : 'bg-white border-gray-200 hover:border-emerald-300'} border transition-all shadow-lg`}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-emerald-500/20' : 'bg-emerald-100'}`}>
                  <span className={isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}>{item.icon}</span>
                </div>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosage Section */}
      <section className={`w-full py-20 ${isDarkMode ? 'bg-gradient-to-br from-amber-950/20 via-gray-900 to-gray-950' : 'bg-gradient-to-br from-amber-50 via-white to-yellow-50'} relative`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
              {isArabic ? "الجرعة" : "Dosage"}
            </h2>
          </motion.div>

          <div className={`max-w-2xl mx-auto p-8 rounded-3xl ${isDarkMode ? 'bg-gray-800/50 border-amber-500/20' : 'bg-white border-amber-200'} border shadow-xl`}>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-4 p-4 rounded-xl ${isDarkMode ? 'bg-amber-500/10' : 'bg-amber-50'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-amber-500/20' : 'bg-amber-100'}`}>
                  <Baby className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                </div>
                <div>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                    {isArabic ? "من 0 إلى 6 أشهر" : "0 day to 6 months"}
                  </p>
                  <p className={`${isDarkMode ? 'text-amber-300' : 'text-amber-700'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                    {isArabic ? "ربع قطارة يومياً" : "1/4 dropper daily"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl ${isDarkMode ? 'bg-amber-500/10' : 'bg-amber-50'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-amber-500/20' : 'bg-amber-100'}`}>
                  <Baby className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                </div>
                <div>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                    {isArabic ? "من 6 أشهر إلى سنة" : "6 months to 1 year"}
                  </p>
                  <p className={`${isDarkMode ? 'text-amber-300' : 'text-amber-700'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                    {isArabic ? "نصف قطارة يومياً" : "1/2 dropper daily"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`flex items-center gap-4 p-4 rounded-xl ${isDarkMode ? 'bg-amber-500/10' : 'bg-amber-50'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-amber-500/20' : 'bg-amber-100'}`}>
                  <Users className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                </div>
                <div>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${isArabic ? 'font-[Cairo]' : ''}`}>
                    {isArabic ? "أكبر من سنة" : "Above 1 year"}
                  </p>
                  <p className={`${isDarkMode ? 'text-amber-300' : 'text-amber-700'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                    {isArabic ? "قطارة كاملة يومياً" : "Once daily (full dropper)"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Price CTA */}
      <section className={`w-full py-16 ${sectionBg} relative`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto p-8 md:p-12 rounded-3xl ${isDarkMode ? 'bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border-emerald-500/30' : 'bg-gradient-to-r from-emerald-500 to-teal-500'} border text-center`}
          >
            <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-white'} ${isArabic ? 'font-[Cairo]' : ''}`}>
              {isArabic ? "أوميبيور - خطة النمو الآمن" : "Omepure - Safe Growth Plan"}
            </h3>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-emerald-100' : 'text-white/90'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
              {isArabic ? "زيت جنين القمح - أوميجا 3،6،9 - فيتامين E - معصور على البارد" : "Wheat Germ Oil - Omega 3,6,9 - Vitamin E - Cold Pressed"}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className={`px-8 py-4 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-white/20'} backdrop-blur-sm`}>
                <span className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}>75</span>
                <span className={`text-xl ml-2 ${isDarkMode ? 'text-emerald-200' : 'text-white'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                  {isArabic ? "ج.م" : "EGP"}
                </span>
              </div>
              <div className={`text-lg ${isDarkMode ? 'text-emerald-200' : 'text-white/90'} ${isArabic ? 'font-[Tajawal]' : ''}`}>
                {isArabic ? "10 مل" : "10 ml"}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
