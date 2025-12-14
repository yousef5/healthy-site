"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Truck, Building2, Users, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface DistributionSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

interface RegionData {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  coverage: string;
}

export default function DistributionSection({
  isArabic,
}: DistributionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // Distribution regions
  const regions: RegionData[] = [
    { id: "cairo", nameEn: "Greater Cairo", nameAr: "القاهرة الكبرى", descriptionEn: "Comprehensive coverage across all districts", descriptionAr: "تغطية شاملة في جميع الأحياء", coverage: "100%" },
    { id: "alexandria", nameEn: "Alexandria", nameAr: "الإسكندرية", descriptionEn: "Fast delivery on Mediterranean coast", descriptionAr: "توصيل سريع على ساحل المتوسط", coverage: "100%" },
    { id: "delta", nameEn: "Delta Region", nameAr: "منطقة الدلتا", descriptionEn: "Dense network covering all delta cities", descriptionAr: "شبكة كثيفة تغطي مدن الدلتا", coverage: "98%" },
    { id: "mansoura", nameEn: "Mansoura HQ", nameAr: "المنصورة - المقر", descriptionEn: "Main headquarters and distribution center", descriptionAr: "المقر الرئيسي ومركز التوزيع", coverage: "100%" },
    { id: "suez", nameEn: "Suez Canal", nameAr: "قناة السويس", descriptionEn: "Strategic coverage for canal cities", descriptionAr: "تغطية استراتيجية لمدن القناة", coverage: "95%" },
    { id: "upperEgypt", nameEn: "Upper Egypt", nameAr: "صعيد مصر", descriptionEn: "Luxor, Aswan and surrounding areas", descriptionAr: "الأقصر وأسوان والمناطق المحيطة", coverage: "90%" },
  ];

  // Statistics
  const statistics = [
    { value: "27", labelEn: "Governorates", labelAr: "محافظة", icon: Building2 },
    { value: "98%", labelEn: "Coverage", labelAr: "تغطية", icon: MapPin },
    { value: "6000+", labelEn: "Pharmacies", labelAr: "صيدلية", icon: Users },
    { value: "59+", labelEn: "Vehicles", labelAr: "مركبة", icon: Truck },
  ];

  return (
    <section
      id="distribution-section"
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black py-20 lg:py-28"
    >
      {/* Static Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1600px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5">
              <span
                className={`uppercase tracking-widest font-bold text-emerald-400 ${
                  isArabic ? 'text-sm' : 'text-xs'
                }`}
                style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
              >
                {isArabic ? "شبكة التوزيع" : "Distribution Network"}
              </span>
            </div>
          </div>

          <h2
            className={`font-black text-white mb-4 leading-tight ${
              isArabic ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'
            }`}
            style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
          >
            <span className="text-white">{isArabic ? "نصل إلى " : "We Reach "}</span>
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              {isArabic ? "كل مكان" : "Everywhere"}
            </span>
          </h2>

          <p
            className={`text-gray-400 max-w-2xl mx-auto ${
              isArabic ? 'text-base md:text-lg' : 'text-sm md:text-base'
            }`}
            style={{ fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)' }}
          >
            {isArabic
              ? "شبكة توزيع متكاملة تغطي جميع محافظات مصر"
              : "A comprehensive distribution network covering all of Egypt"}
          </p>
        </motion.div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="relative p-4 md:p-5 rounded-xl bg-gray-900/60 border border-gray-800/50 text-center hover:border-emerald-500/30 transition-colors duration-300">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-emerald-400 mx-auto mb-2" />
                <h3
                  className={`font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent ${
                    isArabic ? 'text-2xl md:text-3xl' : 'text-2xl md:text-3xl'
                  }`}
                  style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                >
                  {stat.value}
                </h3>
                <p
                  className={`text-gray-400 text-xs font-medium`}
                  style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                >
                  {isArabic ? stat.labelAr : stat.labelEn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Width Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative w-full"
        >
          {/* Full Width Image Container */}
          <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800/50 group">
            {/* Main Image */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9]">
              <Image
                src="/images/hero-main3.jpg"
                alt={isArabic ? "شبكة التوزيع" : "Distribution Network"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
                priority
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-end p-6 md:p-10 lg:p-12">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">
                        {isArabic ? 'تغطية شاملة' : 'Full Coverage'}
                      </span>
                    </div>
                    <h3
                      className={`font-black text-white mb-3 ${isArabic ? 'text-2xl md:text-4xl lg:text-5xl' : 'text-xl md:text-3xl lg:text-4xl'}`}
                      style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                    >
                      {isArabic ? '27 محافظة في خدمتكم' : '27 Governorates at Your Service'}
                    </h3>
                    <p
                      className={`text-gray-300 ${isArabic ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}
                      style={{ fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)' }}
                    >
                      {isArabic
                        ? 'فريق توزيع متخصص يصل إلى جميع أنحاء مصر بكفاءة وسرعة'
                        : 'A specialized distribution team reaching all parts of Egypt efficiently'}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-2xl" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-2xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-emerald-500/40 rounded-br-2xl" />
            </div>
          </div>

          {/* Region Cards - Below Map */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
                className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
                  activeRegion === region.id
                    ? 'bg-gradient-to-br from-emerald-500/20 to-green-500/10 border-emerald-500/50 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-gray-900/60 border-gray-800/50 hover:border-gray-700'
                } border group`}
              >
                <div className="relative z-10 text-center">
                  <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${region.id === "mansoura" ? "bg-amber-500" : "bg-emerald-500"}`} />
                  <h4
                    className={`font-bold text-white mb-1 ${isArabic ? 'text-sm' : 'text-xs'}`}
                    style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                  >
                    {isArabic ? region.nameAr : region.nameEn}
                  </h4>
                  <span className={`font-bold text-lg ${activeRegion === region.id ? 'text-emerald-400' : 'text-gray-400'} transition-colors duration-300`}>
                    {region.coverage}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Link
              href="/contact-us"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-emerald-500/25 ${isArabic ? 'text-base' : 'text-sm'}`}
              style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
            >
              <Truck className="w-5 h-5" />
              {isArabic ? 'اطلب خدمة التوصيل' : 'Request Delivery Service'}
            </Link>
          </motion.div>

          {/* Scroll Down Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={() => document.getElementById('pharmaceutical-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 mx-auto flex flex-col items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors duration-300 cursor-pointer group"
          >
            <span className={`text-sm font-medium ${isArabic ? 'font-cairo' : 'font-inter'}`}>
              {isArabic ? 'المنتجات' : 'Products'}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
