import { ProductCard } from "../../ProductCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductsSectionProps {
  isArabic?: boolean;
  headingFontStyle?: React.CSSProperties;
}

export const ProductsSection = ({
  isArabic = false,
  headingFontStyle = {},
}: ProductsSectionProps) => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detect theme changes and set dark mode state
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  // Example product data with custom image sizes
  const products = [
    {
      id: 1,
      name: isArabic ? "اوميبيور نقط " : "Omepure drops",
      image: "/products/main/omepure.png",
      alt: isArabic ? "اوميبيور نقط " : "Omepure drops",
      imageWidth: 420,
      imageHeight: 420,
      url: "/products/omepure",
    },
    {
      id: 2,
      name: isArabic ? "جيرميتين نقط" : "Germitin drops",
      image: "/products/main/germeten.png",
      alt: isArabic ? "جيرميتين نقط" : "Germitine drops",
      imageWidth: 300,
      imageHeight: 300,
      url: "/products/germitin",
    },
    {
      id: 3,
      name: isArabic ? "الفا مور اكياس" : "AlfaMore bags",
      image: "/products/main/alfamore.png",
      alt: isArabic ? "الفا مور اكياس" : "AlfaMore bags",
      imageWidth: 480,
      imageHeight: 480,
      url: "/products/alfamore",
    },
    {
      id: 4,
      name: isArabic ? "الفا فريش اكياس" : "AlfaFresh bags",
      image: "/products/main/alfafresh.png",
      alt: isArabic ? "الفا فريش اكياس" : "AlfaFresh bags",
      imageWidth: 440,
      imageHeight: 440,
      url: "/products/alfafresh",
    },
  ];

  // Dynamic styles based on theme - on server render, default to light mode
  const sectionClasses = mounted
    ? `w-full py-20 transition-all duration-700 ease-in-out relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950"
          : "bg-gradient-to-b from-blue-50 via-white to-indigo-50"
      }`
    : "w-full py-20 bg-gradient-to-b from-blue-50 via-white to-indigo-50 relative overflow-hidden";

  const headingStyles = {
    ...headingFontStyle,
    background: isDarkMode
      ? "linear-gradient(90deg, #64ffda 0%, #64b5ff 50%, #a78bfa 100%)"
      : "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    transition: "all 0.5s ease-in-out",
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

  // Render a skeleton during server-side rendering or before hydration
  if (!mounted) {
    return (
      <section className="w-full py-20 bg-gradient-to-b from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-4 animate-pulse">
          <div className="flex flex-col items-center mb-16">
            <div className="h-12 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-1 w-24 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 w-96 bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-96 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={sectionClasses}>
      {/* Pattern overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDarkMode ? "opacity-5" : "opacity-10"
        }`}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "30px 30px",
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={isDarkMode ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            className="relative mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 inline-block transition-all duration-700"
              style={headingStyles}
            >
              {isArabic ? "منتجاتنا" : "Our Products"}
            </h2>
            <motion.div
              className={`w-24 h-1 mx-auto rounded-full transition-all duration-700 ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                  : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
              }`}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            ></motion.div>
            <motion.p
              className={`mt-4 text-lg max-w-2xl mx-auto transition-colors duration-700 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {isArabic
                ? "منتجات صحية عالية الجودة لتحسين صحتك ورفاهيتك"
                : "Premium health products to enhance your wellbeing"}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-24  justify-items-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="transform rounded-2xl transition-all duration-300 overflow-hidden"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: isDarkMode
                    ? "0 15px 30px -10px rgba(100, 255, 218, 0.2)"
                    : "0 15px 30px -10px rgba(59, 130, 246, 0.25)",
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                <ProductCard
                  productName={product.name}
                  imageSrc={product.image}
                  altText={product.alt}
                  ownerName="Healthy Pharma"
                  username="@healthypharma"
                  lastSoldPrice="12.50"
                  currency="USD"
                  isDarkMode={isDarkMode}
                  imageWidth={product.imageWidth}
                  imageHeight={product.imageHeight}
                  url={product.url}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
