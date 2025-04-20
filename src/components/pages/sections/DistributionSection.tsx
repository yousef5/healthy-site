"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
  imagePath: string;
}

export default function DistributionSection({
  isArabic,
  headingFontStyle,
  bodyFontStyle,
}: DistributionSectionProps) {
  // Region data array - add Cairo, Delta and Alexandria
  const regions: RegionData[] = [
    {
      id: "cairo",
      nameEn: "Greater Cairo",
      nameAr: "القاهرة الكبرى",
      descriptionEn:
        "Comprehensive coverage across all districts of the capital",
      descriptionAr: "تغطية شاملة في جميع أحياء العاصمة",
      imagePath: "/images/cairo.jpg",
    },
    {
      id: "alexandria",
      nameEn: "Alexandria",
      nameAr: "الإسكندرية",
      descriptionEn: "Fast delivery network across the Mediterranean coast",
      descriptionAr: "شبكة توصيل سريعة على طول ساحل البحر المتوسط",
      imagePath: "/images/alexandria.jpg",
    },
    {
      id: "north-coast",
      nameEn: "North Coast",
      nameAr: "الساحل الشمالي",
      descriptionEn: "Seasonal coverage for summer resorts and communities",
      descriptionAr: "تغطية موسمية للمنتجعات والتجمعات الصيفية",
      imagePath: "/images/north-coast.jpg",
    },
    {
      id: "matrouh",
      nameEn: "Matrouh",
      nameAr: "مطروح",
      descriptionEn: "Strategic distribution to western border communities",
      descriptionAr: "توزيع استراتيجي للمجتمعات الحدودية الغربية",
      imagePath: "/images/matrouh.jpg",
    },
    {
      id: "delta",
      nameEn: "Delta Region",
      nameAr: "منطقة الدلتا",
      descriptionEn:
        "Dense distribution network covering all major delta cities",
      descriptionAr: "شبكة توزيع كثيفة تغطي جميع مدن الدلتا الرئيسية",
      imagePath: "/images/delta.jpg",
    },
    {
      id: "north-sinai",
      nameEn: "North Sinai",
      nameAr: "شمال سيناء",
      descriptionEn: "Despite challenging terrain, we reach El-Arish and Rafah",
      descriptionAr: "رغم التضاريس الصعبة، نصل إلى العريش ورفح",
      imagePath: "/images/sini.jpg",
    },
    {
      id: "western-desert",
      nameEn: "Western Desert",
      nameAr: "الصحراء الغربية",
      descriptionEn: "Specialized networks to Siwa and Bahariya",
      descriptionAr: "شبكة متخصصة لواحات سيوة والبحرية",
      imagePath: "/images/osis.jpg",
    },
    {
      id: "upper-egypt",
      nameEn: "Upper Egypt",
      nameAr: "صعيد مصر",
      descriptionEn: "Reliable service to Aswan and Luxor",
      descriptionAr: "خدمة موثوقة لأسوان والأقصر",
      imagePath: "/images/upper.jpg",
    },
    {
      id: "red-sea",
      nameEn: "Red Sea Coast",
      nameAr: "ساحل البحر الأحمر",
      descriptionEn: "Logistics network for Hurghada and Sharm El-Sheikh",
      descriptionAr: "شبكة لوجستية للغردقة وشرم الشيخ",
      imagePath: "/images/red-sea.webp",
    },
  ];

  // Statistics data
  const statistics = [
    {
      id: "governorates",
      value: "27",
      labelEn: "Governorates",
      labelAr: "محافظة",
      icon: "🏛️",
    },
    {
      id: "population",
      value: "98%",
      labelEn: "Population Coverage",
      labelAr: "تغطية سكانية",
      icon: "👥",
    },
    {
      id: "centers",
      value: "122+",
      labelEn: "Distribution Centers",
      labelAr: "مركز توزيع",
      icon: "🏭",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Enhanced background gradient with more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/15 dark:from-background dark:via-background/90 dark:to-primary/25 transition-colors duration-500"></div>

      {/* Enhanced decorative gradient elements */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-primary/15 opacity-50 dark:opacity-40"></div>

      {/* Animated decorative elements with improved animations */}
      <motion.div
        className="absolute top-40 right-10 w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full blur-3xl bg-primary/10 dark:bg-primary/15"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute -bottom-32 -left-32 w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-3xl bg-primary/8 dark:bg-primary/15"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Enhanced radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-background/50 dark:to-background/70"></div>

      <div className="container relative px-4 md:px-6 mx-auto py-20 lg:py-24 z-10">
        {/* Enhanced header section with improved animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="inline-block mb-6 relative">
            <motion.div
              className="h-2 w-10 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full mb-4 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/20 rounded-full"
              animate={{
                scaleX: [0.5, 1, 0.5],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 tracking-tighter leading-[1.3] md:leading-[1.4] lg:leading-[1.5] relative py-2"
            style={headingFontStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary/90 to-foreground dark:from-foreground dark:via-primary/80 dark:to-foreground inline-block">
              {isArabic
                ? "شبكة توزيع تغطي مصر بالكامل – حتى أقصى الأماكن النائية"
                : "Nationwide Distribution – Even to the Furthest Corners"}
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </motion.h2>

          <motion.div
            className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-[900px] mx-auto leading-snug"
            style={bodyFontStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/90 dark:from-foreground/90 dark:via-foreground/70 dark:to-foreground/90">
              {isArabic
                ? "نفتخر بشبكة توزيع قوية تصل إلى مناطق مصر الأكثر تحديًا، مما يضمن أن جميع المناطق في مصر يمكنها الوصول إلى منتجاتنا الصيدلانية عالية الجودة"
                : "We take pride in our robust distribution network that reaches Egypt's most challenging areas, ensuring no region is left without access to our quality pharmaceutical products"}
            </span>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Improved two-column layout with better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Column: Distribution Cards Grid with enhanced styling */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-center lg:text-start bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              style={headingFontStyle}
            >
              {isArabic ? "مناطق التوزيع الرئيسية" : "Key Distribution Regions"}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Map through the regions array to create cards with enhanced styling */}
              {regions.map((region, index) => (
                <motion.div
                  key={region.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.07 * (index + 1) }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="group"
                >
                  <Card className="p-0 bg-card/30 backdrop-blur-sm rounded-xl shadow-lg border border-primary/15 hover:border-primary/30 hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0 flex flex-col h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Enhanced image container with better proportions */}
                      <div className="w-full h-24 sm:h-28 relative overflow-hidden rounded-t-xl">
                        <Image
                          src={region.imagePath}
                          alt={isArabic ? region.nameAr : region.nameEn}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transform-gpu transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Improved overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-70"></div>

                        {/* Enhanced title positioning */}
                        <div className="absolute bottom-0 left-0 right-0 p-2">
                          <div className="flex items-center gap-1">
                            <h3
                              className="text-sm font-bold text-white drop-shadow-md"
                              style={headingFontStyle}
                            >
                              {isArabic ? region.nameAr : region.nameEn}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced description with better readability */}
                      <div className="p-2 flex-1">
                        <div
                          className="text-xs leading-tight text-foreground/80 dark:text-foreground/70 relative z-10"
                          style={bodyFontStyle}
                        >
                          {isArabic
                            ? region.descriptionAr
                            : region.descriptionEn}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Map & Statistics with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h3
              className="text-xl md:text-2xl font-bold mb-4 text-center lg:text-start bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              style={headingFontStyle}
            >
              {isArabic ? "تغطية شاملة" : "Comprehensive Coverage"}
            </h3>

            <Card className="w-full flex-1 rounded-xl overflow-hidden shadow-xl bg-card/50 backdrop-blur-md border-primary/15 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-5">
                {/* Enhanced two-column layout for map and stats */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                  {/* Statistics Column - Left with enhanced styling */}
                  <div className="flex flex-col gap-3">
                    <h4
                      className="text-sm font-semibold mb-1 text-primary"
                      style={headingFontStyle}
                    >
                      {isArabic ? "إحصائيات التوزيع" : "Distribution Stats"}
                    </h4>

                    {/* Map through statistics array with enhanced cards */}
                    {statistics.map((stat, index) => (
                      <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                        className="group"
                      >
                        <Card className="relative p-4 bg-gradient-to-br from-white/90 to-white/50 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                          <CardContent className="p-0">
                            {/* Decorative mini icon */}
                            <div className="absolute top-3 left-3 w-6 h-6">
                              <div className="absolute inset-0 bg-primary/10 rounded-md transform rotate-45"></div>
                              <div className="absolute inset-0 bg-primary/10 rounded-md transform -rotate-45"></div>
                            </div>

                            {/* Compact content layout */}
                            <div className="pl-10 pt-1">
                              <h3 className="text-3xl font-bold tracking-tight text-primary">
                                {stat.value}
                              </h3>
                              <p className="text-muted-foreground text-xs mt-0.5">
                                {isArabic ? stat.labelAr : stat.labelEn}
                              </p>
                            </div>

                            {/* Subtle bottom line */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-b-2xl"></div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Map Container - Right with enhanced styling */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-background/40 flex-grow shadow-inner group">
                    {/* Enhanced Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

                    {/* SVG Map with enhanced sizing and animations */}
                    <div className="relative w-full h-full">
                      <motion.div
                        initial={{ scale: 1.1 }}
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src="/map-light.svg"
                          alt={isArabic ? "خريطة مصر" : "Map of Egypt"}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain transform-gpu dark:hidden transition-transform duration-500 group-hover:scale-105"
                          style={{ opacity: 0.95 }}
                        />
                        <Image
                          src="/map-dark.svg"
                          alt={isArabic ? "خريطة مصر" : "Map of Egypt"}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain transform-gpu hidden dark:block transition-transform duration-500 group-hover:scale-105"
                          style={{ opacity: 0.95 }}
                        />
                      </motion.div>
                    </div>

                    {/* Enhanced Distribution Points with animations */}
                    <div className="absolute inset-0">
                      {/* Animated Connection Lines */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <g
                          stroke="var(--primary)"
                          strokeWidth="0.5"
                          opacity="0.4"
                        >
                          {/* Animated distribution network lines */}
                          <motion.path
                            d="M38.5 32.5 Q48.5 25 58.5 32.5"
                            fill="none"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                          />
                          <motion.path
                            d="M45 55 Q60 50 55 40"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                          />
                          <motion.path
                            d="M30 70 Q40 60 50 65"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                          />
                          <motion.path
                            d="M70 50 Q65 60 75 65"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                          />
                        </g>

                        {/* Animated Distribution hub points */}
                        <g>
                          {[
                            { cx: "38.5", cy: "32.5" },
                            { cx: "58.5", cy: "32.5" },
                            { cx: "45", cy: "55" },
                            { cx: "55", cy: "40" },
                            { cx: "30", cy: "70" },
                            { cx: "50", cy: "65" },
                            { cx: "70", cy: "50" },
                            { cx: "75", cy: "65" },
                          ].map((point, index) => (
                            <motion.circle
                              key={`point-${index}`}
                              cx={point.cx}
                              cy={point.cy}
                              r="1.2"
                              fill="var(--primary)"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 0.7, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 * index }}
                              whileHover={{
                                opacity: 1,
                                scale: 1.5,
                                transition: { duration: 0.2 },
                              }}
                            />
                          ))}
                        </g>

                        {/* Pulsing effect for distribution points */}
                        <g>
                          {[
                            { cx: "38.5", cy: "32.5" },
                            { cx: "58.5", cy: "32.5" },
                            { cx: "45", cy: "55" },
                            { cx: "55", cy: "40" },
                          ].map((point, index) => (
                            <motion.circle
                              key={`pulse-${index}`}
                              cx={point.cx}
                              cy={point.cy}
                              r="1.2"
                              fill="var(--primary)"
                              initial={{ opacity: 0, scale: 1 }}
                              animate={{
                                opacity: [0, 0.3, 0],
                                scale: [1, 2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.5,
                              }}
                            />
                          ))}
                        </g>
                      </svg>
                    </div>

                    {/* Interactive overlay with hover effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
