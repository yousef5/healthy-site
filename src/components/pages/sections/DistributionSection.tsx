"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Truck, Building2, Users } from "lucide-react";

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
  x: number;
  y: number;
  coverage: string;
}

export default function DistributionSection({
  isArabic,
}: DistributionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // Headquarters location (Mansoura) - positioned on the map
  const headquarters = { x: 440, y: 150 };

  // Distribution regions with coordinates positioned on the Egypt map
  const regions: RegionData[] = [
    { id: "cairo", nameEn: "Greater Cairo", nameAr: "القاهرة الكبرى", descriptionEn: "Comprehensive coverage across all districts", descriptionAr: "تغطية شاملة في جميع الأحياء", x: 490, y: 230, coverage: "100%" },
    { id: "alexandria", nameEn: "Alexandria", nameAr: "الإسكندرية", descriptionEn: "Fast delivery on Mediterranean coast", descriptionAr: "توصيل سريع على ساحل المتوسط", x: 320, y: 100, coverage: "100%" },
    { id: "delta", nameEn: "Delta Region", nameAr: "منطقة الدلتا", descriptionEn: "Dense network covering all delta cities", descriptionAr: "شبكة كثيفة تغطي مدن الدلتا", x: 490, y: 100, coverage: "98%" },
    { id: "mansoura", nameEn: "Mansoura", nameAr: "المنصورة", descriptionEn: "Main headquarters and distribution center", descriptionAr: "المقر الرئيسي ومركز التوزيع", x: 440, y: 150, coverage: "100%" },
    { id: "suez", nameEn: "Suez Canal", nameAr: "قناة السويس", descriptionEn: "Strategic coverage for canal cities", descriptionAr: "تغطية استراتيجية لمدن القناة", x: 590, y: 150, coverage: "95%" },
    { id: "sinai", nameEn: "Sinai", nameAr: "سيناء", descriptionEn: "Reaching El-Arish and southern Sinai", descriptionAr: "نصل للعريش وجنوب سيناء", x: 690, y: 130, coverage: "85%" },
    { id: "redSea", nameEn: "Red Sea", nameAr: "البحر الأحمر", descriptionEn: "Hurghada and resort areas", descriptionAr: "الغردقة والمناطق السياحية", x: 690, y: 460, coverage: "90%" },
    { id: "upperEgypt", nameEn: "Upper Egypt", nameAr: "صعيد مصر", descriptionEn: "Luxor, Qena and surrounding areas", descriptionAr: "الأقصر وقنا والمناطق المحيطة", x: 490, y: 490, coverage: "92%" },
    { id: "aswan", nameEn: "Aswan", nameAr: "أسوان", descriptionEn: "Southern Egypt coverage", descriptionAr: "تغطية جنوب مصر", x: 450, y: 840, coverage: "88%" },
    { id: "matrouh", nameEn: "Matrouh", nameAr: "مطروح", descriptionEn: "Western border communities", descriptionAr: "المجتمعات الحدودية الغربية", x: 140, y: 70, coverage: "80%" },
    { id: "oasis", nameEn: "Oasis", nameAr: "الواحات", descriptionEn: "Western desert oasis communities", descriptionAr: "مجتمعات واحات الصحراء الغربية", x: 170, y: 300, coverage: "75%" },
  ];

  // Statistics
  const statistics = [
    { value: "27", labelEn: "Governorates", labelAr: "محافظة", icon: Building2 },
    { value: "98%", labelEn: "Coverage", labelAr: "تغطية", icon: MapPin },
    { value: "6000+", labelEn: "Pharmacies", labelAr: "صيدلية", icon: Users },
    { value: "59+", labelEn: "Vehicles", labelAr: "مركبة", icon: Truck },
  ];

  // Accurate Egypt SVG path from mapsicon
  const egyptPath = `M1211 10204 c-39 -30 -50 -34 -105 -34 -43 0 -97 -12 -183 -39 l-122
-39 -80 24 c-74 23 -81 28 -106 70 l-26 44 -44 -31 c-24 -17 -46 -41 -49 -54
-9 -36 -94 -114 -132 -121 -19 -3 -37 -10 -40 -16 -3 -5 -6 -78 -6 -163 l-1
-154 52 -120 c28 -67 51 -134 51 -153 -1 -18 -11 -83 -24 -143 -24 -120 -53
-173 -148 -280 -35 -39 -52 -71 -77 -147 l-32 -97 56 -142 c31 -78 54 -147 51
-153 -2 -6 -13 -35 -25 -64 l-21 -52 50 -55 c54 -60 53 -54 25 -148 -12 -40
-10 -49 37 -187 l50 -145 -161 -3690 c-89 -2030 -161 -3699 -161 -3710 0 -20
13 -21 813 -53 1447 -58 2761 -90 4007 -98 l1115 -6 40 71 c78 141 94 161 126
161 45 0 63 -36 55 -113 -4 -34 -10 -72 -13 -84 l-5 -23 618 0 c379 0 685 5
790 12 l171 12 35 -30 c20 -16 87 -75 150 -131 l115 -102 194 -12 195 -12 74
39 74 39 62 205 62 205 263 67 c144 37 266 71 270 75 6 7 189 554 189 566 0 3
60 -13 133 -34 l132 -38 183 182 c171 171 182 184 182 219 0 25 -11 55 -33 90
-19 29 -37 72 -40 96 -3 23 -19 64 -37 91 l-31 49 16 115 c14 105 14 121 0
175 -28 111 -14 212 31 212 8 0 36 -11 62 -25 40 -21 56 -24 100 -18 l53 6
-32 33 c-24 25 -42 34 -66 34 -36 0 -63 21 -88 69 -8 17 -20 31 -25 31 -18 0
-83 65 -136 137 -29 40 -66 79 -81 87 -16 8 -65 52 -111 99 -79 79 -83 85 -71
109 10 23 8 31 -10 57 -12 16 -33 56 -48 88 -14 32 -41 76 -59 99 -22 27 -35
56 -39 90 -4 27 -16 61 -26 76 -11 14 -22 41 -26 60 -10 52 -109 244 -162 311
-26 34 -55 84 -65 110 -10 26 -33 70 -51 97 -18 26 -36 65 -39 87 -11 54 -46
111 -115 182 -51 51 -61 67 -61 96 0 28 -8 40 -44 69 -31 26 -49 52 -65 94
-12 31 -37 82 -56 113 -19 31 -46 89 -61 130 -37 104 -107 229 -175 314 -41
51 -61 86 -69 120 -6 26 -9 50 -6 52 2 2 19 -3 36 -12 l32 -17 -26 35 c-31 41
-34 67 -6 67 31 0 26 46 -10 87 -16 18 -30 40 -30 48 0 8 -15 32 -34 52 -20
23 -36 54 -40 78 -9 49 -69 152 -107 183 -15 12 -33 39 -40 60 -23 72 -58 130
-103 169 -45 40 -81 107 -74 140 2 13 11 17 33 15 l30 -3 -22 18 c-13 10 -26
33 -29 51 -5 22 -16 38 -35 48 -34 17 -36 25 -10 48 14 13 24 14 45 6 15 -5
31 -10 36 -10 9 0 -11 71 -38 133 -17 38 -25 44 -76 60 -64 21 -153 97 -227
195 -24 31 -63 78 -86 104 -24 26 -43 52 -43 57 0 14 -130 182 -161 208 -28
24 -43 68 -54 163 -7 52 -10 57 -61 95 -32 23 -61 54 -70 74 -8 19 -23 40 -33
48 -30 21 -45 78 -31 114 20 48 7 208 -25 300 -21 61 -34 83 -66 108 -98 79
-147 288 -89 383 12 20 16 41 13 67 -5 33 -1 41 27 64 37 31 70 36 70 9 0 -10
14 -31 30 -47 17 -16 30 -35 30 -43 0 -9 12 -35 26 -60 22 -37 26 -56 26 -114
-1 -54 4 -77 18 -97 10 -14 26 -62 35 -106 15 -73 20 -84 63 -128 35 -36 50
-60 57 -94 9 -42 14 -48 43 -57 23 -6 47 -27 77 -66 24 -32 67 -76 95 -100 49
-41 50 -43 50 -96 0 -30 9 -76 19 -104 15 -40 18 -66 14 -128 -7 -95 11 -138
86 -203 29 -27 61 -68 80 -105 29 -60 32 -63 97 -85 l67 -24 33 -70 c18 -38
52 -92 74 -120 23 -27 53 -71 67 -98 18 -36 33 -52 61 -63 158 -64 159 -64
171 -104 9 -31 19 -41 59 -58 26 -11 70 -22 97 -26 57 -7 40 -21 171 149 l69
90 0 85 c0 64 -4 92 -17 112 -27 41 -13 114 40 217 24 47 50 114 57 147 8 34
23 80 35 103 15 30 20 58 19 99 -1 31 3 70 10 85 6 16 11 47 11 70 0 23 7 55
16 72 14 27 13 71 -2 126 -3 9 7 30 21 47 15 18 29 52 35 84 5 29 38 111 75
184 l65 131 -19 54 c-10 30 -23 91 -30 136 -7 48 -28 121 -50 176 -21 51 -69
189 -107 306 -72 224 -66 213 -131 236 -8 3 -8 14 -1 45 10 37 8 43 -12 65
-19 20 -22 31 -16 62 5 34 -9 74 -124 343 -72 168 -143 320 -159 339 l-28 34
-44 -17 c-23 -10 -58 -31 -76 -47 -47 -41 -134 -83 -228 -109 -66 -19 -95 -22
-170 -17 -49 3 -104 11 -122 17 -38 14 -86 1 -145 -37 -20 -14 -55 -27 -77
-30 -38 -5 -41 -4 -41 18 0 35 -27 69 -56 69 -13 0 -41 -15 -63 -35 -33 -30
-46 -35 -87 -35 -40 0 -53 -5 -80 -31 l-32 -31 -70 12 c-69 13 -70 13 -118 75
-42 54 -153 145 -177 145 -4 0 -23 -10 -41 -22 -26 -17 -38 -35 -51 -80 -18
-56 -18 -57 -67 -68 -41 -10 -52 -10 -73 4 -20 14 -25 25 -25 61 l0 45 -108 0
-108 0 -47 48 c-40 41 -47 53 -47 88 0 39 2 41 65 75 69 36 85 67 46 89 -38
20 -75 11 -145 -36 -82 -55 -66 -57 -272 41 -120 57 -138 63 -237 74 -126 14
-151 10 -277 -39 -127 -50 -254 -69 -310 -46 -22 9 -43 16 -46 16 -3 0 -28
-47 -55 -104 -41 -85 -55 -106 -80 -117 -29 -11 -30 -13 -14 -25 17 -12 16
-14 -9 -24 -41 -15 -46 -13 -97 30 -26 22 -50 40 -53 40 -3 0 -67 -48 -143
-108 -208 -162 -295 -221 -442 -301 -122 -66 -140 -73 -205 -78 -90 -6 -131
10 -269 110 -56 41 -132 90 -169 110 -66 37 -68 37 -230 47 -149 9 -283 22
-365 35 -39 7 -63 42 -72 104 -6 45 -7 46 -41 43 -19 -2 -65 -19 -102 -38 -51
-26 -80 -34 -120 -34 -52 0 -54 1 -125 72 -54 54 -73 79 -73 99 0 29 -15 39
-59 39 -15 0 -67 15 -115 34 -91 36 -206 66 -252 66 -15 0 -41 9 -58 19 -24
15 -58 21 -151 26 -174 9 -316 50 -410 118 -46 33 -89 55 -125 64 -75 17 -79
17 -129 -23z`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-20 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1600px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-3 rounded-full border-2 border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
              <span
                className={`uppercase tracking-widest font-bold text-emerald-400 ${
                  isArabic ? 'text-base md:text-lg' : 'text-xs md:text-sm'
                }`}
                style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
              >
                {isArabic ? "مناطق التوزيع" : "Distribution Network"}
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`font-black text-white mb-6 leading-tight ${
              isArabic ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-5xl lg:text-6xl'
            }`}
            style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
          >
            <span className="text-white">{isArabic ? "نصل إلى " : "We Reach "}</span>
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              {isArabic ? "كل مكان" : "Everywhere"}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-gray-400 max-w-3xl mx-auto ${
              isArabic ? 'text-lg md:text-xl' : 'text-base md:text-lg'
            }`}
            style={{ fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)' }}
          >
            {isArabic
              ? "شبكة توزيع متكاملة تغطي جميع محافظات مصر من الإسكندرية إلى أسوان"
              : "A comprehensive distribution network covering all of Egypt from Alexandria to Aswan"}
          </motion.p>
        </motion.div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/50 backdrop-blur-sm overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <motion.h3
                  className={`font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent ${
                    isArabic ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'
                  }`}
                  style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                >
                  {stat.value}
                </motion.h3>
                <p
                  className={`text-gray-400 mt-1 font-semibold ${isArabic ? 'text-sm' : 'text-xs'}`}
                  style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                >
                  {isArabic ? stat.labelAr : stat.labelEn}
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map with Cards Below */}
        <div className="relative">
          {/* Big Map */}
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative"
            >
              <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-black border border-gray-800/50 backdrop-blur-sm p-4 md:p-6 lg:p-8">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5" />

                {/* SVG Map Container - Huge */}
                <div className="relative w-full mx-auto">
              <svg
                viewBox="100 0 700 950"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Egypt gradient fill */}
                  <linearGradient id="egyptFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#059669" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#047857" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Stronger glow for HQ */}
                  <filter id="glowStrong" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Egypt Map - Accurate Shape */}
                <g transform="translate(20, 20) scale(0.082) scale(1, -1) translate(0, -10300)">
                  <motion.path
                    d={egyptPath}
                    fill="url(#egyptFill)"
                    stroke="#10b981"
                    strokeWidth="15"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </g>

                {/* Distribution Lines from Cairo HQ */}
                {regions.filter(r => r.id !== 'mansoura').map((region, index) => (
                  <g key={`line-${region.id}`}>
                    <motion.path
                      d={region.id === 'delta' ? `M ${headquarters.x} ${headquarters.y} L ${region.x} ${region.y}` : `M ${headquarters.x} ${headquarters.y} Q ${(headquarters.x + region.x) / 2} ${region.id === 'matrouh' ? Math.max(headquarters.y, region.y) + 120 : region.id === 'alexandria' ? Math.max(headquarters.y, region.y) + 50 : region.id === 'oasis' ? Math.max(headquarters.y, region.y) + 80 : Math.min(headquarters.y, region.y) - 30}, ${region.x} ${region.y}`}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth={activeRegion === region.id ? "3" : "2"}
                      strokeOpacity={activeRegion === region.id ? 0.8 : 0.25}
                      strokeDasharray="12 6"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ delay: 2.5 + index * 0.2, duration: 1 }}
                    />
                    {/* Animated particle */}
                    {isInView && (
                      <motion.circle
                        r="6"
                        fill="#10b981"
                        filter="url(#glow)"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: 3.5 + index * 0.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      >
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          begin={`${3.5 + index * 0.5}s`}
                          path={region.id === 'delta' ? `M ${headquarters.x} ${headquarters.y} L ${region.x} ${region.y}` : `M ${headquarters.x} ${headquarters.y} Q ${(headquarters.x + region.x) / 2} ${region.id === 'matrouh' ? Math.max(headquarters.y, region.y) + 120 : region.id === 'alexandria' ? Math.max(headquarters.y, region.y) + 50 : region.id === 'oasis' ? Math.max(headquarters.y, region.y) + 80 : Math.min(headquarters.y, region.y) - 30}, ${region.x} ${region.y}`}
                        />
                      </motion.circle>
                    )}
                  </g>
                ))}

                {/* Region Points */}
                {regions.map((region, index) => (
                  <g key={region.id}>
                    {/* Outer pulse ring */}
                    <motion.circle
                      cx={region.x}
                      cy={region.y}
                      r="25"
                      fill="none"
                      stroke={region.id === "mansoura" ? "#f59e0b" : "#10b981"}
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? {
                        scale: [1, 2, 1],
                        opacity: [0.6, 0, 0.6],
                      } : {}}
                      transition={{
                        duration: 3,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />

                    {/* Middle ring */}
                    <motion.circle
                      cx={region.x}
                      cy={region.y}
                      r={activeRegion === region.id ? "18" : "14"}
                      fill={region.id === "mansoura" ? "rgba(245, 158, 11, 0.25)" : "rgba(16, 185, 129, 0.25)"}
                      stroke={region.id === "mansoura" ? "#f59e0b" : "#10b981"}
                      strokeWidth="2.5"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 3 + index * 0.1, type: "spring" }}
                      className="transition-all duration-300"
                    />

                    {/* Center point */}
                    <motion.circle
                      cx={region.x}
                      cy={region.y}
                      r={activeRegion === region.id ? "9" : "7"}
                      fill={region.id === "mansoura" ? "#f59e0b" : "#10b981"}
                      filter={region.id === "mansoura" ? "url(#glowStrong)" : "url(#glow)"}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 3.1 + index * 0.1, type: "spring" }}
                      onMouseEnter={() => setActiveRegion(region.id)}
                      onMouseLeave={() => setActiveRegion(null)}
                      className="cursor-pointer transition-all duration-300"
                      style={{ pointerEvents: 'all' }}
                    />

                    {/* HQ special rotating marker */}
                    {region.id === "mansoura" && (
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1, rotate: 360 } : {}}
                        transition={{
                          opacity: { delay: 3.5, duration: 0.5 },
                          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                        }}
                        style={{ transformOrigin: `${region.x}px ${region.y}px` }}
                      >
                        <circle
                          cx={region.x}
                          cy={region.y}
                          r="30"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="2"
                          strokeDasharray="8 8"
                        />
                      </motion.g>
                    )}

                    {/* Region Label */}
                    <motion.text
                      x={region.x}
                      y={region.y - 35}
                      textAnchor="middle"
                      fill={activeRegion === region.id ? "#10b981" : "#d1d5db"}
                      fontSize={activeRegion === region.id ? "16" : "14"}
                      fontWeight="bold"
                      className="pointer-events-none select-none transition-all duration-300"
                      style={{ fontFamily: isArabic ? 'Cairo, sans-serif' : 'Montserrat, sans-serif' }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 3.5 + index * 0.1 }}
                    >
                      {isArabic ? region.nameAr : region.nameEn}
                    </motion.text>
                  </g>
                ))}

              </svg>
            </div>

            {/* Active Region Tooltip */}
            {activeRegion && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80 p-6 rounded-2xl bg-gray-900/95 border border-emerald-500/40 backdrop-blur-md shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-4 h-4 rounded-full ${activeRegion === 'mansoura' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  <h4
                    className={`font-bold text-white ${isArabic ? 'text-xl' : 'text-lg'}`}
                    style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}
                  >
                    {isArabic
                      ? regions.find((r) => r.id === activeRegion)?.nameAr
                      : regions.find((r) => r.id === activeRegion)?.nameEn}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {isArabic
                    ? regions.find((r) => r.id === activeRegion)?.descriptionAr
                    : regions.find((r) => r.id === activeRegion)?.descriptionEn}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                  <span className="text-gray-500 text-sm">{isArabic ? "نسبة التغطية" : "Coverage"}</span>
                  <span className="text-emerald-400 font-bold text-xl">
                    {regions.find((r) => r.id === activeRegion)?.coverage}
                  </span>
                </div>
              </motion.div>
            )}

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-2xl" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-2xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-emerald-500/40 rounded-br-2xl" />
              </div>
          </motion.div>

          {/* Cards Grid Below Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
                className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
                  activeRegion === region.id
                    ? 'bg-gradient-to-br from-emerald-500/20 to-green-500/10 border-emerald-500/50 shadow-lg shadow-emerald-500/20'
                    : 'bg-gray-900/60 border-gray-800/50 hover:border-gray-700/50'
                } border backdrop-blur-sm group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${region.id === "mansoura" ? "bg-amber-500 shadow-lg shadow-amber-500/50" : "bg-emerald-500 shadow-lg shadow-emerald-500/50"}`} />
                      <h4 className={`font-bold text-white ${isArabic ? 'text-base' : 'text-sm'}`} style={{ fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)' }}>
                        {isArabic ? region.nameAr : region.nameEn}
                      </h4>
                      {region.id === "mansoura" && (
                        <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold">
                          {isArabic ? "المقر" : "HQ"}
                        </span>
                      )}
                    </div>
                    <span className={`font-bold text-sm ${activeRegion === region.id ? 'text-emerald-400' : 'text-gray-500'}`}>{region.coverage}</span>
                  </div>
                  <p className={`text-gray-400 text-xs ${isArabic ? 'text-right' : ''}`} style={{ fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)' }}>
                    {isArabic ? region.descriptionAr : region.descriptionEn}
                  </p>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeRegion === region.id ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
