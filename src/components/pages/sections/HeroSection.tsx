"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface HeroSectionProps {
  isArabic: boolean;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
  heroImages: { id: number; src: string; alt: string }[];
  changeImage: () => void;
}

export default function HeroSection({
  isArabic,
  currentImageIndex,
  setCurrentImageIndex,
  headingFontStyle,
  bodyFontStyle,
  heroImages,
  changeImage,
}: HeroSectionProps) {
  const t = useTranslations("Index");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/5 dark:from-background dark:via-primary/5 dark:to-background flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 dark:from-primary/20"></div>
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 rounded-full blur-3xl bg-primary/10 dark:bg-primary/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl bg-primary/5 dark:bg-primary/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[conic-gradient(var(--tw-gradient-stops))] from-primary/5 via-transparent to-primary/5 opacity-30 dark:opacity-40"></div>

      <div className="container relative px-4 md:px-6 mx-auto py-12 md:py-16 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content - No Card Container */}
          <div className="space-y-8 text-center lg:text-start">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm"
              style={bodyFontStyle}
            >
              {t("heroSubtitle")}
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight md:leading-tight lg:leading-tight"
              style={headingFontStyle}
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base md:text-lg text-foreground/80 dark:text-foreground/70 max-w-xl mx-auto lg:mx-0"
              style={bodyFontStyle}
            >
              {t("heroDescription")}
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-lg md:text-xl font-bold text-primary dark:text-primary/90"
              style={headingFontStyle}
            >
              {t("heroTagline")}
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm text-base"
                style={bodyFontStyle}
                onClick={() => {
                  const contactSection =
                    document.getElementById("contact-section");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("learnMoreButton")}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-primary/10 dark:border-primary/20"
            >
              <div className="text-center">
                <motion.p
                  className="text-2xl font-bold text-primary dark:text-primary/90"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  2500+
                </motion.p>
                <p
                  className="text-xs text-foreground/70 dark:text-foreground/60"
                  style={bodyFontStyle}
                >
                  {t("statsPatients")}
                </p>
              </div>
              <div className="text-center">
                <motion.p
                  className="text-2xl font-bold text-primary dark:text-primary/90"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  1000+
                </motion.p>
                <p
                  className="text-xs text-foreground/70 dark:text-foreground/60"
                  style={bodyFontStyle}
                >
                  {t("statsProducts")}
                </p>
              </div>
              <div className="text-center">
                <motion.p
                  className="text-2xl font-bold text-primary dark:text-primary/90"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  200+
                </motion.p>
                <p
                  className="text-xs text-foreground/70 dark:text-foreground/60"
                  style={bodyFontStyle}
                >
                  {t("statsPartners")}
                </p>
              </div>
              <div className="text-center">
                <motion.p
                  className="text-2xl font-bold text-primary dark:text-primary/90"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  15+
                </motion.p>
                <p
                  className="text-xs text-foreground/70 dark:text-foreground/60"
                  style={bodyFontStyle}
                >
                  {t("statsYears")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image with Framer Motion */}
          <motion.div
            className="relative flex items-center justify-center h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dot Pattern Background */}
              <div
                className="absolute inset-0 bg-background/40 dark:bg-background/50"
                style={{
                  backgroundImage: `radial-gradient(circle, var(--primary) 0.6px, transparent 0.6px)`,
                  backgroundSize: "20px 20px",
                  opacity: "0.2",
                }}
              ></div>

              {/* Card with Image */}
              <div className="absolute inset-[20px] rounded-2xl overflow-hidden shadow-lg">
                {/* Hero Image with Next.js Image */}
                <motion.div
                  className="relative w-full h-full"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src={heroImages[currentImageIndex - 1].src}
                    alt={
                      isArabic
                        ? `صورة ${heroImages[currentImageIndex - 1].alt}`
                        : heroImages[currentImageIndex - 1].alt
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-all duration-1000 ease-in-out"
                    quality={90}
                  />

                  {/* Theme-appropriate overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/30 to-transparent dark:from-background/80 dark:via-background/40 dark:to-transparent"></div>

                  {/* Interactive elements */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <motion.div
                      className="flex justify-end"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.button
                        onClick={changeImage}
                        className="w-12 h-12 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center hover:bg-primary/20 transition-all duration-300 text-primary"
                        aria-label="Change image"
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                          <path d="M16 21h5v-5"></path>
                        </svg>
                      </motion.button>
                    </motion.div>

                    <div className="flex gap-2 justify-center">
                      {heroImages.map((img) => (
                        <motion.button
                          key={img.id}
                          onClick={() => setCurrentImageIndex(img.id)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            currentImageIndex === img.id
                              ? "w-8 bg-primary"
                              : "bg-background/50 hover:bg-primary/50"
                          }`}
                          aria-label={`Show image ${img.id}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-primary/30 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-primary/30 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary/30 rounded-br-3xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
