"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface SuppliersSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

interface Supplier {
  id: string;
  nameAr: string;
  nameEn: string;
  logo: string;
  bgWhite?: boolean;
}

export default function SuppliersSection({
  isArabic,
}: SuppliersSectionProps) {
  const t = useTranslations("Index");

  const suppliers: Supplier[] = [
    {
      id: "healthycure",
      nameAr: "هلثي كيور",
      nameEn: "Healthy Cure",
      logo: "/suppliers/healthycure.webp",
    },
    {
      id: "solovit",
      nameAr: "سولوفيت",
      nameEn: "Solovit",
      logo: "/suppliers/solovit.png",
      bgWhite: true,
    },
    {
      id: "eva",
      nameAr: "ايفا فارما",
      nameEn: "Eva Pharma",
      logo: "/suppliers/eva.png",
      bgWhite: true,
    },
    {
      id: "rameda",
      nameAr: "راميدا",
      nameEn: "Rameda",
      logo: "/suppliers/rameda.png",
      bgWhite: true,
    },
    {
      id: "adwia",
      nameAr: "ادويا",
      nameEn: "Adwia",
      logo: "/suppliers/adwia.png",
      bgWhite: true,
    },
    {
      id: "sandoz",
      nameAr: "ساندوز",
      nameEn: "Sandoz",
      logo: "/suppliers/sandoz.webp",
      bgWhite: true,
    },
    {
      id: "european",
      nameAr: "الاوروبية",
      nameEn: "European",
      logo: "/suppliers/eruopean.webp",
      bgWhite: true,
    },
    {
      id: "incandesce",
      nameAr: "انكانديس",
      nameEn: "Incandesce",
      logo: "/suppliers/incandesce.png",
      bgWhite: true,
    },
    {
      id: "spimaco",
      nameAr: "سبيماكو",
      nameEn: "Spimaco",
      logo: "/suppliers/spimaco.jpeg",
      bgWhite: true,
    },
  ];

  return (
    <section id="suppliers-section" className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Animated Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/4 -right-48 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"
      />

      <div className="container px-6 md:px-12 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className={`font-black text-gray-900 mb-4 ${
              isArabic ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl lg:text-6xl'
            }`}
            style={{
              fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
            }}
          >
            {t("ourSuppliers")}
          </h2>
          <p
            className={`text-gray-600 max-w-3xl mx-auto leading-relaxed ${
              isArabic ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
            }`}
            style={{
              fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)',
            }}
          >
            {t("suppliersDescription")}
          </p>
        </motion.div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {suppliers.map((supplier, index) => (
            <motion.div
              key={supplier.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{
                  y: -15,
                  rotateX: 5,
                  rotateY: -5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="relative h-full min-h-[320px] rounded-[28px] p-1 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(255, 255, 255, 0.8), rgba(16, 185, 129, 0.3))",
                  }}
                  whileHover={{
                    boxShadow: "0 30px 60px -15px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.1)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Inner Card */}
                  <div className="relative h-full w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-[24px] p-6 flex flex-col overflow-hidden">

                    {/* Animated background gradient */}
                    <motion.div
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                        ]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[20, 50, 80].map((xPos, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
                          style={{ left: `${xPos}%` }}
                          initial={{
                            y: '100%',
                            opacity: 0
                          }}
                          animate={{
                            y: '-20%',
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>

                    {/* Shine sweep effect */}
                    <motion.div
                      initial={{ x: '-150%', opacity: 0 }}
                      whileHover={{ x: '150%', opacity: 0.3 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent pointer-events-none skew-x-12"
                    />

                    {/* Top glow accent */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Logo Container */}
                    <div className="flex-1 flex items-center justify-center mb-5 relative z-10">
                      <motion.div
                        className="relative"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3, type: "spring", stiffness: 300 }
                        }}
                      >
                        {/* Logo glow ring */}
                        <motion.div
                          className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-400/20 blur-xl opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />

                        <div
                          className={`relative w-36 h-36 flex items-center justify-center rounded-2xl ${
                            supplier.bgWhite
                              ? 'bg-white shadow-lg shadow-emerald-500/10 border border-gray-100'
                              : 'bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200'
                          } p-4 transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-emerald-500/20`}
                        >
                          <Image
                            src={supplier.logo}
                            alt={`${isArabic ? supplier.nameAr : supplier.nameEn} Logo`}
                            width={130}
                            height={130}
                            className="object-contain w-full h-full transition-all duration-300 group-hover:scale-110"
                            style={{
                              filter: "drop-shadow(0 8px 20px rgba(16, 185, 129, 0.2))"
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Name Section */}
                    <div className="relative z-10">
                      {/* Decorative line above name */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                        className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mb-4"
                      />

                      <div className="h-16 flex items-center justify-center">
                        <h3
                          className={`text-center font-bold transition-all duration-300 line-clamp-2 px-2 ${
                            isArabic ? 'text-base md:text-lg leading-tight' : 'text-sm md:text-base leading-tight'
                          }`}
                          style={{
                            fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                          }}
                        >
                          <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-emerald-500 group-hover:to-green-600 transition-all duration-500">
                            {isArabic ? supplier.nameAr : supplier.nameEn}
                          </span>
                        </h3>
                      </div>
                    </div>

                    {/* Bottom accent bar */}
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 origin-center"
                    />

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                      <motion.div
                        initial={{ x: -20, y: -20, opacity: 0 }}
                        whileHover={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-emerald-400/60 rounded-tl-lg"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                      <motion.div
                        initial={{ x: 20, y: 20, opacity: 0 }}
                        whileHover={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-emerald-400/60 rounded-br-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
