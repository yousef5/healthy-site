"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Truck,
  BarChart3,
  ShoppingCart,
  Users,
  CheckCircle,
  Laptop,
  ArrowRight,
} from "lucide-react";

interface CompanyDivisionsSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

interface DivisionData {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.ReactNode;
  image: string;
  gradient: string;
  accentColor: string;
}

export default function CompanyDivisionsSection({
  isArabic,
  bodyFontStyle,
}: CompanyDivisionsSectionProps) {
  const divisions: DivisionData[] = [
    {
      id: "general-management",
      titleEn: "General Management",
      titleAr: "الإدارة العامة",
      descriptionEn: "Strategic decision-making and comprehensive operations management",
      descriptionAr: "اتخاذ القرارات الاستراتيجية وإدارة العمليات الشاملة",
      icon: <Building2 className="w-5 h-5" />,
      image: "/departments/GeneralManagement.jpg",
      gradient: "from-blue-600 to-indigo-700",
      accentColor: "blue",
    },
    {
      id: "quality-control",
      titleEn: "Quality Control",
      titleAr: "قسم الجودة",
      descriptionEn: "Ensuring product quality and compliance with international standards",
      descriptionAr: "ضمان جودة المنتجات والامتثال للمعايير الدولية",
      icon: <CheckCircle className="w-5 h-5" />,
      image: "/departments/QualityControl.jpg",
      gradient: "from-rose-600 to-red-700",
      accentColor: "rose",
    },
    {
      id: "information-technology",
      titleEn: "Information Technology",
      titleAr: "تكنولوجيا المعلومات",
      descriptionEn: "Managing IT infrastructure and providing technical support",
      descriptionAr: "إدارة البنية التحتية لتكنولوجيا المعلومات والدعم الفني",
      icon: <Laptop className="w-5 h-5" />,
      image: "/departments/InformationTechnology.jpg",
      gradient: "from-violet-600 to-purple-700",
      accentColor: "violet",
    },
    {
      id: "distribution",
      titleEn: "Distribution Division",
      titleAr: "قطاع التوزيع",
      descriptionEn: "Managing fleet operations and delivering products nationwide",
      descriptionAr: "إدارة الأسطول وتوصيل المنتجات لجميع أنحاء الجمهورية",
      icon: <Truck className="w-5 h-5" />,
      image: "/departments/Distribution.jpg",
      gradient: "from-emerald-600 to-teal-700",
      accentColor: "emerald",
    },
    {
      id: "finance",
      titleEn: "Finance & Accounting",
      titleAr: "إدارة الحسابات",
      descriptionEn: "Financial management, invoicing, and account monitoring",
      descriptionAr: "الإدارة المالية ومتابعة الفواتير والحسابات",
      icon: <BarChart3 className="w-5 h-5" />,
      image: "/departments/Accounting.jpg",
      gradient: "from-amber-600 to-orange-700",
      accentColor: "amber",
    },
    {
      id: "purchasing",
      titleEn: "Purchasing Department",
      titleAr: "إدارة المشتريات",
      descriptionEn: "Supplier contracting and securing products at optimal prices",
      descriptionAr: "التعاقد مع الموردين وتوفير المنتجات بأفضل الأسعار",
      icon: <ShoppingCart className="w-5 h-5" />,
      image: "/departments/Purchasing.jpg",
      gradient: "from-cyan-600 to-sky-700",
      accentColor: "cyan",
    },
    {
      id: "representatives",
      titleEn: "Field Representatives",
      titleAr: "المناديب الميدانيين",
      descriptionEn: "Daily field coverage and direct pharmacy communication",
      descriptionAr: "التغطية الميدانية اليومية والتواصل المباشر مع الصيدليات",
      icon: <Users className="w-5 h-5" />,
      image: "/departments/FieldRepresentatives.jpg",
      gradient: "from-pink-600 to-rose-700",
      accentColor: "pink",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 blur-3xl -translate-y-1/2 translate-x-1/3"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5 blur-3xl translate-y-1/2 -translate-x-1/3"
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 mb-6"
          >
            <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span
              className="text-sm font-medium text-emerald-700 dark:text-emerald-300"
              style={bodyFontStyle}
            >
              {isArabic ? "هيكلنا التنظيمي" : "Our Structure"}
            </span>
          </motion.div>

          {/* Main Title */}
          <h2
            className={`font-black text-gray-900 dark:text-white mb-6 leading-tight ${
              isArabic ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'
            }`}
            style={{
              fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-inter)',
            }}
          >
            {isArabic ? (
              <>
                <span className="text-gray-900 dark:text-white">أقسام</span>{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  الشركة
                </span>
              </>
            ) : (
              <>
                <span className="text-gray-900 dark:text-white">Our Company</span>{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Divisions
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
              ? "نعمل معًا كفريق واحد متكامل لضمان تقديم خدمات ومنتجات عالية الجودة"
              : "Working together as one integrated team to deliver high-quality services and products"}
          </p>
        </motion.div>

        {/* Divisions Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, index) => (
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative h-full min-h-[380px] rounded-3xl overflow-hidden bg-white dark:bg-zinc-800/80 border border-gray-100 dark:border-zinc-700/50 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={division.image}
                    alt={isArabic ? division.titleAr : division.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />

                  {/* Colored accent on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${division.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay`} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${division.gradient} flex items-center justify-center text-white shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    {division.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-white mb-2 group-hover:text-white transition-colors duration-300 ${
                      isArabic ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                    }`}
                    style={{
                      fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-inter)',
                    }}
                  >
                    {isArabic ? division.titleAr : division.titleEn}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={bodyFontStyle}
                  >
                    {isArabic ? division.descriptionAr : division.descriptionEn}
                  </p>

                  {/* Learn More Link */}
                  <div className={`flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100`}>
                    <span style={bodyFontStyle}>
                      {isArabic ? "اعرف المزيد" : "Learn more"}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${division.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isArabic ? 'origin-right' : 'origin-left'}`} />
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${division.gradient} opacity-50 blur-md`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { valueEn: "7", valueAr: "٧", labelEn: "Departments", labelAr: "أقسام" },
            { valueEn: "450+", valueAr: "+٤٥٠", labelEn: "Employees", labelAr: "موظف" },
            { valueEn: "59", valueAr: "٥٩", labelEn: "Vehicles", labelAr: "سيارة" },
            { valueEn: "24/7", valueAr: "٢٤/٧", labelEn: "Operations", labelAr: "عمليات" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-gray-100 dark:border-zinc-700/50"
            >
              <div
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-1"
                style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-inter)' }}
              >
                {isArabic ? stat.valueAr : stat.valueEn}
              </div>
              <div
                className="text-sm text-gray-500 dark:text-gray-400"
                style={bodyFontStyle}
              >
                {isArabic ? stat.labelAr : stat.labelEn}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
