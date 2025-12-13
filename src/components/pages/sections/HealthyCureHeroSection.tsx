"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Leaf, Shield, Award, Sparkles } from "lucide-react";

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
  bodyFontStyle,
  tajawalLightStyle,
  tajawalRegularStyle,
  tajawalBoldStyle,
}: HealthyCureHeroSectionProps) {
  const safeIsArabic = isArabic === undefined ? false : isArabic;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030712]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-transparent to-teal-950/30" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-500/15 blur-[180px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}>

            {/* Text Content - Appears on left in Arabic */}
            <div className={`flex-1 ${safeIsArabic ? 'text-right order-1 lg:order-1' : 'text-left order-1 lg:order-1'}`}>
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-8 ${safeIsArabic ? 'flex justify-end' : 'flex justify-start'}`}
              >
                <div className="relative w-48 h-16 md:w-56 md:h-20">
                  <Image
                    src="/logos/healthycure.webp"
                    alt={safeIsArabic ? "هلثي كيور" : "HealthyCure"}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              {/* Tagline Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-8 ${safeIsArabic ? 'flex-row-reverse' : ''}`}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </motion.div>
                <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" style={safeIsArabic ? tajawalBoldStyle : { fontFamily: "var(--font-montserrat)" }}>
                  {safeIsArabic ? "العلامة التجارية الرائدة في المكملات الغذائية" : "Leading Brand in Nutritional Supplements"}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span
                  className={`block text-white font-black leading-[1.1] ${safeIsArabic ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}
                  style={{ fontFamily: safeIsArabic ? "var(--font-cairo)" : "var(--font-montserrat)" }}
                >
                  {safeIsArabic ? "منتجات طبيعية" : "Natural Products"}
                </span>
                <span
                  className={`block mt-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-black ${safeIsArabic ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}
                  style={{ fontFamily: safeIsArabic ? "var(--font-cairo)" : "var(--font-montserrat)" }}
                >
                  {safeIsArabic ? "لصحة أفضل" : "For Better Health"}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`text-gray-300 mb-8 leading-relaxed max-w-xl ${safeIsArabic ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}
                style={safeIsArabic ? tajawalLightStyle : bodyFontStyle}
              >
                {safeIsArabic
                  ? "نقدم لكم مجموعة متميزة من المكملات الغذائية والمنتجات الصحية الطبيعية عالية الجودة، مصممة بعناية فائقة لتعزيز صحتكم ورفاهيتكم اليومية."
                  : "We offer a premium collection of high-quality nutritional supplements and natural health products, carefully designed to enhance your daily health and wellbeing."}
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`grid grid-cols-3 gap-4 mb-10 ${safeIsArabic ? 'text-right' : 'text-left'}`}
              >
                {[
                  { icon: <Leaf className="w-6 h-6" />, title: safeIsArabic ? "طبيعي 100%" : "100% Natural", desc: safeIsArabic ? "مكونات طبيعية" : "Natural Ingredients" },
                  { icon: <Shield className="w-6 h-6" />, title: safeIsArabic ? "معتمد دولياً" : "Certified", desc: safeIsArabic ? "جودة مضمونة" : "Quality Assured" },
                  { icon: <Award className="w-6 h-6" />, title: safeIsArabic ? "الأفضل" : "Best Quality", desc: safeIsArabic ? "منتجات مميزة" : "Premium Products" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm ${safeIsArabic ? 'items-end' : 'items-start'} flex flex-col`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-3">
                      <span className="text-emerald-400">{item.icon}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1" style={safeIsArabic ? tajawalBoldStyle : { fontFamily: "var(--font-montserrat)" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs" style={safeIsArabic ? tajawalRegularStyle : bodyFontStyle}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`flex flex-wrap gap-4 mb-10 ${safeIsArabic ? 'justify-end' : 'justify-start'}`}
              >
                <button
                  onClick={() => {
                    const nextSection = document.getElementById('products-section');
                    if (nextSection) {
                      nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer ${safeIsArabic ? 'flex-row-reverse' : ''}`}
                  style={safeIsArabic ? tajawalBoldStyle : { fontFamily: "var(--font-montserrat)" }}
                >
                  {safeIsArabic ? "تصفح المنتجات" : "Browse Products"}
                  <ArrowDown className={`w-5 h-5 transition-transform group-hover:translate-y-1`} />
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`flex gap-10 pt-8 border-t border-white/10 ${safeIsArabic ? 'justify-end' : 'justify-start'}`}
              >
                {[
                  { value: "10+", label: safeIsArabic ? "منتج طبيعي" : "Natural Products" },
                  { value: "5K+", label: safeIsArabic ? "عميل سعيد" : "Happy Clients" },
                  { value: "100%", label: safeIsArabic ? "رضا العملاء" : "Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className={safeIsArabic ? 'text-right' : 'text-left'}>
                    <motion.div
                      className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"
                      style={{ fontFamily: safeIsArabic ? "var(--font-cairo)" : "var(--font-montserrat)" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-1" style={safeIsArabic ? tajawalRegularStyle : bodyFontStyle}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Image Card - Appears on right in Arabic with more width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`w-full max-w-xl lg:max-w-none ${safeIsArabic ? 'lg:flex-[2] order-2 lg:order-2' : 'flex-1 order-2 lg:order-2'}`}
            >
              <div className="relative">
                {/* Glow Effect Behind Card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-[40px] blur-2xl opacity-60" />

                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Card Border Gradient */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-500/50 via-teal-500/30 to-cyan-500/50 rounded-[32px]" />

                  {/* Card Content */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 rounded-[32px] p-3 overflow-hidden">
                    {/* Inner Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 rounded-[32px]" />

                    {/* Image Container */}
                    <div className="relative rounded-[24px] overflow-hidden">
                      <Image
                        src={safeIsArabic ? "/healthyCure/main-ar.jpg" : "/healthyCure/main-en.png"}
                        alt={safeIsArabic ? "هلثي كيور" : "HealthyCure"}
                        width={800}
                        height={600}
                        className="object-contain w-full h-auto"
                        priority
                        quality={100}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-6 ${safeIsArabic ? '-left-6' : '-right-6'} w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center`}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className={`absolute -bottom-4 ${safeIsArabic ? '-right-4' : '-left-4'} w-16 h-16 rounded-full border border-teal-500/20 flex items-center justify-center`}
                >
                  <div className="w-8 h-8 rounded-full border border-teal-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
