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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
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
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(0, 0, 0, 0.5), rgba(16, 185, 129, 0.2))",
                  }}
                  whileHover={{
                    boxShadow: "0 30px 60px -15px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.15)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Inner Card */}
                  <div className="relative h-full w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-[24px] p-6 flex flex-col overflow-hidden">

                    {/* Animated background gradient */}
                    <motion.div
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
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
                          className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
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
                      whileHover={{ x: '150%', opacity: 0.4 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12"
                    />

                    {/* Top glow accent */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                          className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-500/30 blur-xl opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />

                        <div
                          className={`relative w-36 h-36 flex items-center justify-center rounded-2xl ${
                            customer.bgWhite
                              ? 'bg-white shadow-xl shadow-emerald-500/20'
                              : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50'
                          } p-4 transition-all duration-300 group-hover:border-emerald-500/50`}
                        >
                          <Image
                            src={customer.logo}
                            alt={`${isArabic ? customer.nameAr : customer.nameEn} Logo`}
                            width={130}
                            height={130}
                            className="object-contain w-full h-full transition-all duration-300 group-hover:scale-110"
                            style={{
                              filter: customer.bgWhite
                                ? "drop-shadow(0 8px 20px rgba(16, 185, 129, 0.3))"
                                : "drop-shadow(0 15px 40px rgba(16, 185, 129, 0.5))"
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
                        className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-4"
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
                          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-emerald-400 group-hover:to-green-300 transition-all duration-500">
                            {isArabic ? customer.nameAr : customer.nameEn}
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
                        className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-emerald-500/60 rounded-tl-lg"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                      <motion.div
                        initial={{ x: 20, y: 20, opacity: 0 }}
                        whileHover={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-emerald-500/60 rounded-br-lg"
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
