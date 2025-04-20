"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface PartnersSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

export default function PartnersSection({
  isArabic,
  headingFontStyle,
  bodyFontStyle,
}: PartnersSectionProps) {
  const t = useTranslations("Index");

  return (
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background elements */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 rounded-full blur-3xl bg-primary/5 dark:bg-primary/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl bg-primary/5 dark:bg-primary/10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <motion.div
              className="h-1 w-10 bg-primary/60 rounded-full mb-2 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={headingFontStyle}
          >
            {t("ourTrustedPartners")}
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-[700px] mx-auto"
            style={bodyFontStyle}
          >
            {t("partnersDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Partner 1: Healthy Cure */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: 25 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/30 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
              <Card className="relative overflow-hidden rounded-xl bg-background/70 backdrop-blur-sm border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <div className="p-6 md:p-8 flex flex-col items-center relative z-10">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-primary/10 to-transparent rounded-full opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                      rotate: [0, 45, 0],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-t from-primary/10 to-transparent rounded-full opacity-40"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, -45, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Logo */}
                  <motion.div
                    className="relative w-40 h-40 mb-8 rounded-full overflow-hidden bg-gradient-to-br from-background/80 via-primary/10 to-background/80 p-4 border border-primary/30 shadow-xl flex items-center justify-center z-10"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-background/80 p-4 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 opacity-70"
                      />
                      <Image
                        src="/logos/healthycure.webp"
                        alt="Healthy Cure Logo"
                        width={100}
                        height={100}
                        className="object-contain relative z-10 hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  {/* Card Header with fancy title */}
                  <CardHeader className="p-0 pb-6 text-center w-full">
                    <div className="relative mb-4">
                      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <CardTitle
                          className="relative text-3xl font-bold px-8 py-3 inline-block mx-auto bg-background/80 backdrop-blur-md rounded-lg shadow-sm border border-primary/10"
                          style={headingFontStyle}
                        >
                          {isArabic ? "هيلثي كيور" : "Healthy Cure"}
                        </CardTitle>
                      </motion.div>
                    </div>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="text-center mb-6 w-full">
                    <p
                      className="text-foreground/70 text-lg"
                      style={bodyFontStyle}
                    >
                      {isArabic
                        ? "المكتب العلمي المتخصص في تطوير وتصنيع الأدوية عالية الجودة مثل أوميبيور وجيرميتين"
                        : "Scientific office specializing in the development and manufacture of high-quality medications like Omepure and Germytin"}
                    </p>
                  </CardContent>

                  {/* Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button
                      variant="default"
                      className="bg-primary/90 hover:bg-primary w-full py-6 text-base shadow-lg relative overflow-hidden group"
                      style={bodyFontStyle}
                      asChild
                    >
                      <Link href="/healthycure">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                        {isArabic ? "اكتشف منتجاتنا" : "Discover Our Products"}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Partner 2: Moneer Pharmacies */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -25 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
              <Card className="relative overflow-hidden rounded-xl bg-background/70 backdrop-blur-sm border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <div className="p-6 md:p-8 flex flex-col items-center relative z-10">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-b from-primary/10 to-transparent rounded-full opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                      rotate: [0, -45, 0],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-t from-primary/10 to-transparent rounded-full opacity-40"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, 45, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Logo */}
                  <motion.div
                    className="relative w-40 h-40 mb-8 rounded-full overflow-hidden bg-gradient-to-br from-background/80 via-primary/10 to-background/80 p-4 border border-primary/30 shadow-xl flex items-center justify-center z-10"
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-background/80 p-4 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 opacity-70"
                      />
                      <Image
                        src="/logos/moneer.webp"
                        alt="Moneer Pharmacies Logo"
                        width={100}
                        height={100}
                        className="object-contain relative z-10 hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  {/* Card Header with fancy title */}
                  <CardHeader className="p-0 pb-6 text-center w-full">
                    <div className="relative mb-4">
                      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <CardTitle
                          className="relative text-3xl font-bold px-8 py-3 inline-block mx-auto bg-background/80 backdrop-blur-md rounded-lg shadow-sm border border-primary/10"
                          style={headingFontStyle}
                        >
                          {isArabic ? "صيدليات منير" : "Moneer Pharmacies"}
                        </CardTitle>
                      </motion.div>
                    </div>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="text-center mb-6 w-full">
                    <p
                      className="text-foreground/70 text-lg"
                      style={bodyFontStyle}
                    >
                      {isArabic
                        ? "سلسلة صيدليات رائدة في المنصورة توفر تجربة صيدلانية موثوقة ومتكاملة للمرضى والعملاء"
                        : "Leading pharmacy chain in Mansoura providing a trusted, seamless pharmaceutical experience to patients and customers"}
                    </p>
                  </CardContent>

                  {/* Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button
                      variant="default"
                      className="bg-primary/90 hover:bg-primary w-full py-6 text-base shadow-lg relative overflow-hidden group"
                      style={bodyFontStyle}
                      asChild
                      disabled
                    >
                      <Link href="/">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                        {isArabic ? "تعرف على فروعنا" : "Find Our Locations"}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
