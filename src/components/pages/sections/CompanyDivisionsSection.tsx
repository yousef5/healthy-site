"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Building2,
  Truck,
  BarChart3,
  PackageOpen,
  ShoppingCart,
  Users,
  CheckCircle,
  Laptop,
  Code,
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
  color: string;
}

export default function CompanyDivisionsSection({
  isArabic,
  headingFontStyle,
  bodyFontStyle,
}: CompanyDivisionsSectionProps) {
  // Define the divisions data
  const divisions: DivisionData[] = [
    {
      id: "general-management",
      titleEn: "General Management",
      titleAr: "الإدارة العامة",
      descriptionEn: "Strategic decision-making and operations management.",
      descriptionAr: "اتخاذ القرارات الاستراتيجية وإدارة العمليات.",
      icon: <Building2 size={24} />,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "quality-control",
      titleEn: "Quality Control",
      titleAr: "قسم الجودة",
      descriptionEn: "Ensuring product quality and compliance with standards.",
      descriptionAr: "ضمان جودة المنتجات والامتثال للمعايير.",
      icon: <CheckCircle size={24} />,
      color: "text-red-600 dark:text-red-400",
    },
    {
      id: "information-technology",
      titleEn: "Information Technology",
      titleAr: "تكنولوجيا المعلومات",
      descriptionEn: "Managing IT infrastructure and technical support.",
      descriptionAr: "إدارة البنية التحتية لتكنولوجيا المعلومات والدعم الفني.",
      icon: <Laptop size={24} />,
      color: "text-indigo-600 dark:text-indigo-400",
    },
    {
      id: "software-development",
      titleEn: "Software Development",
      titleAr: "التطوير البرمجي",
      descriptionEn:
        "Building and maintaining software solutions for the company.",
      descriptionAr: "بناء وصيانة الحلول البرمجية للشركة.",
      icon: <Code size={24} />,
      color: "text-cyan-600 dark:text-cyan-400",
    },
    {
      id: "distribution",
      titleEn: "Distribution Division",
      titleAr: "قطاع التوزيع",
      descriptionEn: "Managing the fleet and delivering products across Egypt.",
      descriptionAr: "إدارة الأسطول وتوصيل المنتجات لكل أنحاء الجمهورية.",
      icon: <Truck size={24} />,
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "finance",
      titleEn: "Finance & Accounting",
      titleAr: "إدارة الحسابات",
      descriptionEn: "Monitoring invoices and accounts.",
      descriptionAr: "متابعة الفواتير والحسابات.",
      icon: <BarChart3 size={24} />,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "inventory",
      titleEn: "Inventory & Warehousing",
      titleAr: "إدارة المخازن",
      descriptionEn: "Organizing inventory and ensuring readiness.",
      descriptionAr: "تنظيم المخزون وضمان الجاهزية.",
      icon: <PackageOpen size={24} />,
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      id: "purchasing",
      titleEn: "Purchasing Department",
      titleAr: "إدارة المشتريات",
      descriptionEn:
        "Contracting with suppliers and securing products at the best prices.",
      descriptionAr: "التعاقد مع الموردين وتوفير المنتجات بأفضل الأسعار.",
      icon: <ShoppingCart size={24} />,
      color: "text-teal-600 dark:text-teal-400",
    },
    {
      id: "representatives",
      titleEn: "Field Representatives",
      titleAr: "المناديب الأرضي",
      descriptionEn: "Daily field coverage and communication with pharmacies.",
      descriptionAr: "التغطية الميدانية اليومية والتواصل مع الصيدليات.",
      icon: <Users size={24} />,
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <section className="w-full bg-background py-16 md:py-20 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_0.5px,transparent_0.5px)] dark:bg-[radial-gradient(#334155_0.5px,transparent_0.5px)] [background-size:12px_12px] opacity-40 dark:opacity-30"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground/90"
              style={headingFontStyle}
            >
              {isArabic ? "أقسام الشركة" : "Our Company Divisions"}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              style={bodyFontStyle}
            >
              {isArabic
                ? "نعمل معًا كفريق واحد متكامل لضمان تقديم خدمات ومنتجات عالية الجودة"
                : "We work together as one integrated team to ensure the delivery of high-quality services and products"}
            </p>
          </motion.div>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {divisions.map((division, index) => (
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 relative border-0 shadow-md hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-xl transition-colors duration-300"></div>

                <CardContent className="p-6 flex flex-col h-full relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-muted/80 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 transform`}
                    >
                      <div
                        className={`${division.color} transition-colors duration-300`}
                      >
                        {division.icon}
                      </div>
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-foreground dark:text-foreground/90 line-clamp-2 group-hover:text-primary transition-colors duration-300"
                        style={headingFontStyle}
                      >
                        {isArabic ? division.titleAr : division.titleEn}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm text-muted-foreground mt-2 group-hover:text-muted-foreground/90 transition-colors duration-300"
                    style={bodyFontStyle}
                  >
                    {isArabic ? division.descriptionAr : division.descriptionEn}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
