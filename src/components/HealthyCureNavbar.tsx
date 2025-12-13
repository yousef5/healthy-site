"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";

export function HealthyCureNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const bodyFontStyle = isArabic
    ? { fontFamily: "var(--font-tajawal)", fontWeight: 700 }
    : { fontFamily: "var(--font-inter)" };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Products for HealthyCure
  const products = [
    { href: "/products/omepure", nameAr: "أوميبور", nameEn: "Omepure", active: true },
    { href: "#", nameAr: "ألفا مور", nameEn: "Alfa More", active: false },
    { href: "#", nameAr: "ألفا فريش", nameEn: "Alfa Fresh", active: false },
    { href: "#", nameAr: "جيرمتين", nameEn: "Germetin", active: false },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-md shadow-emerald-500/5"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex h-18 items-center justify-between">
          {/* Logo - Links to HealthyCure */}
          <div className="flex items-center">
            <Link href="/healthycure" className="flex items-center group">
              <div className={`relative ${isArabic ? 'h-12 w-40 md:w-48' : 'h-16 w-64 md:h-20 md:w-96'}`}>
                <Image
                  src={isArabic ? "/logos/full-logo-ar.webp" : "/logos/full-logo-en.webp"}
                  alt={isArabic ? "شعار هلثي كيور" : "HealthyCure Logo"}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                  sizes={isArabic ? "(max-width: 768px) 160px, 192px" : "(max-width: 768px) 256px, 384px"}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Only Products */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/healthycure"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {isArabic ? "الرئيسية" : "Main"}
            </Link>
            <Link
              href="/prices"
              className="relative px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              style={bodyFontStyle}
            >
              <span className="relative z-10">{isArabic ? "الأسعار" : "Prices"}</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Link>
            {products.map((product) => (
              product.active ? (
                <Link
                  key={product.nameEn}
                  href={product.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                  style={bodyFontStyle}
                >
                  {isArabic ? product.nameAr : product.nameEn}
                </Link>
              ) : (
                <span
                  key={product.nameEn}
                  className="text-sm font-medium text-foreground/40 cursor-not-allowed"
                  style={bodyFontStyle}
                >
                  {isArabic ? product.nameAr : product.nameEn}
                </span>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Healthy - Return to Main */}
            <Link
              href="/"
              className="hidden md:inline-flex relative px-4 py-2 text-sm font-extrabold rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 hover:text-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="relative z-10">{isArabic ? "هلثي" : "Healthy"}</span>
            </Link>
            <LanguageSwitcher />
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-primary/10 transition-colors duration-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only" style={bodyFontStyle}>
                {t("toggleMenu")}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden p-4 pb-6 border-t animate-in fade-in slide-in-from-top duration-300">
            <nav className="space-y-4">
              {/* HealthyCure Main */}
              <Link
                href="/healthycure"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "الرئيسية" : "Main"}
              </Link>

              {/* Prices - Special Button */}
              <Link
                href="/prices"
                className="inline-flex px-5 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "الأسعار" : "Prices"}
              </Link>

              {/* Healthy - Return to Main Site */}
              <Link
                href="/"
                className="inline-block px-3 py-1.5 text-sm font-extrabold rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 hover:text-emerald-300 transition-all duration-300"
                style={{ fontFamily: "var(--font-montserrat)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "هلثي" : "Healthy"}
              </Link>

              {/* Products */}
              <div className="pt-2">
                <p className="text-xs text-foreground/50 uppercase tracking-wider mb-2" style={bodyFontStyle}>
                  {isArabic ? "المنتجات" : "Products"}
                </p>
                <div className="space-y-1 border-l border-primary/20 ml-2 pl-4">
                  {products.map((product) => (
                    product.active ? (
                      <Link
                        key={product.nameEn}
                        href={product.href}
                        className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                        style={bodyFontStyle}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {isArabic ? product.nameAr : product.nameEn}
                      </Link>
                    ) : (
                      <span
                        key={product.nameEn}
                        className="block py-2 text-sm text-foreground/40 cursor-not-allowed"
                        style={bodyFontStyle}
                      >
                        {isArabic ? product.nameAr : product.nameEn}
                      </span>
                    )
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
