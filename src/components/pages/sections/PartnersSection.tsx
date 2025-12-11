"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface PartnersSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

interface Customer {
  id: string;
  nameAr: string;
  nameEn: string;
  logo: string;
  bgWhite?: boolean;
}

export default function PartnersSection({
  isArabic,
  headingFontStyle,
  bodyFontStyle,
}: PartnersSectionProps) {
  const t = useTranslations("Index");

  // Customer pharmacies data - only from pharmacies folder
  const customers: Customer[] = [
    {
      id: "tarshouby",
      nameAr: "صيدلية وليد الطرشوبي",
      nameEn: "Walid El-Tarshoby Pharmacy",
      logo: "/pharmacies/tarshouby.jpg",
    },
    {
      id: "sally",
      nameAr: "صيدلية سالي",
      nameEn: "Sally Pharmacy",
      logo: "/pharmacies/sally.jpeg",
    },
    {
      id: "khalifa",
      nameAr: "صيدلية خليفة",
      nameEn: "Khalifa Pharmacy",
      logo: "/pharmacies/خليفة.jpg",
    },
    {
      id: "moneer",
      nameAr: "صيدليات منير",
      nameEn: "Moneer Pharmacies",
      logo: "/pharmacies/moneer.webp",
      bgWhite: true,
    },
    {
      id: "abo-elgeed",
      nameAr: "صيدليات ابو الغيط بورسعيد",
      nameEn: "Abu El-Gheid Pharmacies Port Said",
      logo: "/pharmacies/abo-elgeed.jpeg",
    },
    {
      id: "houl",
      nameAr: "صيدلية الحول دمياط الجديدة",
      nameEn: "El-Houl Pharmacy New Damietta",
      logo: "/pharmacies/houl.jpeg",
    },
    {
      id: "shifq",
      nameAr: "صيدليات خالد شفيق الجمالية",
      nameEn: "Khaled Shafiq Pharmacies El-Gamaleya",
      logo: "/pharmacies/shifq.jpeg",
    },
    // Add more customers here easily:
    // {
    //   id: "pharmacy-name",
    //   nameAr: "اسم الصيدلية",
    //   nameEn: "Pharmacy Name",
    //   logo: "/pharmacies/pharmacy-logo.jpg",
    //   bgWhite: true, // optional - add white background for logo
    // },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Animated Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/4 -right-48 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-3xl"
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
            className={`font-black text-white mb-4 ${
              isArabic ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl lg:text-6xl'
            }`}
            style={{
              fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
            }}
          >
            {t("ourCustomers")}
          </h2>
          <p
            className={`text-gray-400 max-w-3xl mx-auto leading-relaxed ${
              isArabic ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
            }`}
            style={{
              fontFamily: isArabic ? 'var(--font-tajawal)' : 'var(--font-inter)',
            }}
          >
            {t("customersDescription")}
          </p>
        </motion.div>

        {/* Customers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-full"
              >
                <motion.div
                  className="relative h-full min-h-[280px] bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800 overflow-hidden flex flex-col"
                  whileHover={{
                    borderColor: "rgba(16, 185, 129, 0.6)",
                    boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-500/10 pointer-events-none"
                  />

                  {/* Shine effect on hover */}
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"
                    style={{ transform: 'skewX(-20deg)' }}
                  />

                  {/* Logo Container - Fixed Size */}
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <motion.div
                      className={`relative w-32 h-32 flex items-center justify-center ${
                        customer.bgWhite ? 'bg-white rounded-2xl p-4 shadow-lg' : ''
                      }`}
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src={customer.logo}
                        alt={`${isArabic ? customer.nameAr : customer.nameEn} Logo`}
                        width={120}
                        height={120}
                        className="object-contain w-full h-full"
                        style={{
                          filter: customer.bgWhite
                            ? "drop-shadow(0 4px 10px rgba(16, 185, 129, 0.2))"
                            : "drop-shadow(0 10px 30px rgba(16, 185, 129, 0.4))"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Name - Fixed Height */}
                  <div className="h-16 flex items-center justify-center">
                    <h3
                      className={`text-center font-bold text-white transition-all duration-300 group-hover:text-emerald-400 group-hover:scale-105 line-clamp-2 px-2 ${
                        isArabic ? 'text-base md:text-lg leading-tight' : 'text-sm md:text-base leading-tight'
                      }`}
                      style={{
                        fontFamily: isArabic ? 'var(--font-cairo)' : 'var(--font-montserrat)',
                      }}
                    >
                      {isArabic ? customer.nameAr : customer.nameEn}
                    </h3>
                  </div>

                  {/* Decorative bottom line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent origin-center"
                  />

                  {/* Corner accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
