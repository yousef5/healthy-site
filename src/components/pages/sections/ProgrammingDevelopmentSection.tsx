"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Database,
  Globe,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

interface ProgrammingDevelopmentSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

interface TechnologyData {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.ReactNode;
}

export default function ProgrammingDevelopmentSection({
  isArabic,
  headingFontStyle,
  bodyFontStyle,
}: ProgrammingDevelopmentSectionProps) {
  const technologies: TechnologyData[] = [
    {
      id: "web-development",
      titleEn: "Web Development",
      titleAr: "تطوير الويب",
      descriptionEn:
        "Modern web applications with React, Next.js, and TypeScript.",
      descriptionAr: "تطبيقات ويب حديثة باستخدام React وNext.js وTypeScript.",
      icon: <Globe size={18} />,
    },
    {
      id: "backend-services",
      titleEn: "Backend Services",
      titleAr: "خدمات الخلفية",
      descriptionEn:
        "Robust backend systems with Node.js, Express, and GraphQL.",
      descriptionAr: "أنظمة خلفية قوية باستخدام Node.js وExpress وGraphQL.",
      icon: <Server size={18} />,
    },
    {
      id: "database-solutions",
      titleEn: "Database Solutions",
      titleAr: "حلول قواعد البيانات",
      descriptionEn: "Optimized database architectures using SQL and NoSQL.",
      descriptionAr: "هندسة قواعد بيانات محسّنة باستخدام SQL وNoSQL.",
      icon: <Database size={18} />,
    },
    {
      id: "custom-software",
      titleEn: "Custom Software",
      titleAr: "برمجيات مخصصة",
      descriptionEn:
        "Tailored software solutions for specific business challenges.",
      descriptionAr: "حلول برمجية مخصصة لمعالجة تحديات الأعمال المحددة.",
      icon: <Code size={18} />,
    },
    {
      id: "integration-services",
      titleEn: "Integration Services",
      titleAr: "خدمات التكامل",
      descriptionEn: "Seamless integration with third-party APIs and systems.",
      descriptionAr: "تكامل سلس مع واجهات برمجة التطبيقات الخارجية والأنظمة.",
      icon: <Workflow size={18} />,
    },
    {
      id: "innovative-solutions",
      titleEn: "Innovative Solutions",
      titleAr: "حلول مبتكرة",
      descriptionEn:
        "AI, machine learning, and real-time analytics implementation.",
      descriptionAr: "تنفيذ الذكاء الاصطناعي والتعلم الآلي والتحليلات الفورية.",
      icon: <Sparkles size={18} />,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-muted/30 relative">
      {/* Decorative grid background */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-2"
              style={headingFontStyle}
            >
              {isArabic ? "تطوير البرمجيات" : "Software Development"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <p
              className="text-muted-foreground max-w-2xl text-center text-sm"
              style={bodyFontStyle}
            >
              {isArabic
                ? "نقدم حلول برمجية متكاملة مصممة خصيصًا لتلبية احتياجات الأعمال"
                : "We provide comprehensive software solutions custom-tailored to meet evolving business needs"}
            </p>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Left Column - Technologies Cards */}
          <div className="space-y-4">
            <div className="relative mb-5 overflow-hidden rounded-lg bg-card/80 backdrop-blur-sm border border-border/40 p-4 shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="text-xs font-mono text-primary/90 font-medium overflow-x-auto">
                <div className="text-muted-foreground/70">
                  {/* Modern software development approach */}
                </div>
                <div className="mt-1">
                  <span className="text-blue-500 dark:text-blue-400">
                    const
                  </span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    createSolutions
                  </span>{" "}
                  ={" "}
                  <span className="text-amber-600 dark:text-amber-400">
                    (businessNeeds)
                  </span>{" "}
                  =&gt; {"{"}
                </div>
                <div className="ml-2">
                  <span className="text-blue-500 dark:text-blue-400">
                    return
                  </span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    optimize
                  </span>
                  (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    develop
                  </span>
                  (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    design
                  </span>
                  (businessNeeds)));
                </div>
                <div>{"}"}</div>
                <div className="mt-2 text-muted-foreground/70">
                  {/* Import core functionalities */}
                </div>
                <div className="mt-1">
                  <span className="text-blue-500 dark:text-blue-400">
                    import
                  </span>{" "}
                  {"{"}{" "}
                  <span className="text-purple-500 dark:text-purple-400">
                    innovation
                  </span>
                  ,{" "}
                  <span className="text-purple-500 dark:text-purple-400">
                    efficiency
                  </span>
                  ,{" "}
                  <span className="text-purple-500 dark:text-purple-400">
                    reliability
                  </span>{" "}
                  {"}"}
                </div>
                <div className="ml-2">
                  <span className="text-blue-500 dark:text-blue-400">from</span>{" "}
                  <span className="text-orange-500 dark:text-orange-400">
                    &apos;@healthy-web/core&apos;
                  </span>
                  ;
                </div>
                <div className="mt-2 text-muted-foreground/70">
                  {/* Deliver business value */}
                </div>
                <div className="mt-1">
                  <span className="text-blue-500 dark:text-blue-400">
                    export function
                  </span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    DeliverValue
                  </span>
                  () {"{"}
                </div>
                <div className="ml-2 text-gray-500 dark:text-gray-400">
                  {/* Your success is our commitment */}
                </div>
                <div>{"}"}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2.5">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  className="group"
                >
                  <div className="bg-card hover:bg-card/90 transition-colors duration-200 p-3 rounded-lg border border-border/30 hover:border-primary/20 shadow-sm hover:shadow h-full">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 rounded-md bg-primary/10 text-primary mt-0.5 shrink-0">
                        {tech.icon}
                      </div>
                      <div>
                        <h3
                          className="text-sm font-semibold group-hover:text-primary transition-colors duration-200"
                          style={headingFontStyle}
                        >
                          {isArabic ? tech.titleAr : tech.titleEn}
                        </h3>
                        <p
                          className="text-xs text-muted-foreground/80 mt-0.5 line-clamp-2"
                          style={bodyFontStyle}
                        >
                          {isArabic ? tech.descriptionAr : tech.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-full">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/programming-main.jpg"
                  alt="Programming and Development"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                <div className="absolute bottom-0 left-0 p-5 lg:p-6">
                  <div className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground mb-2 inline-block">
                    {isArabic ? "برمجة متقدمة" : "Advanced Development"}
                  </div>
                  <h3 className="text-white text-lg lg:text-xl font-bold mb-1.5">
                    {isArabic
                      ? "حلول ذكية لأعمالك"
                      : "Smart Solutions for Your Business"}
                  </h3>
                  <p className="text-white/80 text-xs max-w-md">
                    {isArabic
                      ? "نطور البرمجيات المتكاملة التي تلبي احتياجات عملك مع التركيز على الأداء والموثوقية والتصميم الحديث"
                      : "We develop integrated software that meets your business needs with a focus on performance, reliability, and modern design"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 flex justify-end"
              >
                <button className="group inline-flex items-center gap-1.5 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  {isArabic ? "المزيد من الحلول" : "More Solutions"}
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">
                    {isArabic ? "←" : "→"}
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-12 bg-border"></div>
            <div className="px-4 text-sm text-muted-foreground font-medium">
              {isArabic ? "اكتشف المزيد" : "Discover More"}
            </div>
            <div className="h-px w-12 bg-border"></div>
          </div>

          <div className="mt-4">
            <button className="bg-card hover:bg-card/90 text-foreground border border-border/50 hover:border-primary/30 rounded-full px-6 py-2.5 text-sm inline-flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow">
              {isArabic
                ? "عرض جميع المشاريع البرمجية"
                : "View All Development Projects"}
              <span className="bg-primary/10 text-primary rounded-full p-1 inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={isArabic ? "rotate-180" : ""}
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
