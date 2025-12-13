"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const isArabic = locale === "ar";

  // Get locale prefix for links
  const getLocalePath = (path: string) => {
    if (locale === "en") {
      return `/_locales/en${path}`;
    }
    return path;
  };

  // Font styles based on locale
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
          <div className="flex items-center">
            <Link href={getLocalePath("/")} className="flex items-center group">
              <div className={`relative ${isArabic ? 'h-12 w-40 md:w-48' : 'h-16 w-64 md:h-20 md:w-96'}`}>
                <Image
                  src={isArabic ? "/logos/full-logo-ar.webp" : "/logos/full-logo-en.webp"}
                  alt={isArabic ? "شعار هلثي فارما" : "Healthy Pharma Logo"}
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                  sizes={isArabic ? "(max-width: 768px) 160px, 192px" : "(max-width: 768px) 256px, 384px"}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={getLocalePath("/")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            <Link
              href={getLocalePath("/about-us")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("aboutUs")}
            </Link>
            <Link
              href={getLocalePath("/our-vision")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("ourVision")}
            </Link>
            <Link
              href={getLocalePath("/our-mission")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("ourMission")}
            </Link>
            <Link
              href={getLocalePath("/certificate")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("certificate")}
            </Link>
            <Link
              href={getLocalePath("/contact-us")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("contactUs")}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* HealthyCure - Go to HealthyCure */}
            <Link
              href={getLocalePath("/healthycure")}
              className="hidden md:inline-flex relative px-4 py-2 text-sm font-extrabold rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 hover:text-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="relative z-10">{isArabic ? "هلثي كيور" : "HealthyCure"}</span>
            </Link>
            {/* Prices Button */}
            <Link
              href={getLocalePath("/prices")}
              className="hidden md:inline-flex relative px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
              style={bodyFontStyle}
            >
              <span className="relative z-10">{isArabic ? "الأسعار" : "Prices"}</span>
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
              <Link
                href={getLocalePath("/")}
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "الرئيسية" : "Home"}
              </Link>
              {/* HealthyCure Link */}
              <Link
                href={getLocalePath("/healthycure")}
                className="inline-block px-3 py-1.5 text-sm font-extrabold rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 hover:from-emerald-500/30 hover:to-teal-500/30 hover:border-emerald-400/50 hover:text-emerald-300 transition-all duration-300"
                style={{ fontFamily: "var(--font-montserrat)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "هلثي كيور" : "HealthyCure"}
              </Link>
              {/* Prices Link */}
              <Link
                href={getLocalePath("/prices")}
                className="inline-block px-3 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "الأسعار" : "Prices"}
              </Link>
              <Link
                href={getLocalePath("/about-us")}
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("aboutUs")}
              </Link>
              <Link
                href={getLocalePath("/our-vision")}
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("ourVision")}
              </Link>
              <Link
                href={getLocalePath("/our-mission")}
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("ourMission")}
              </Link>
              <Link
                href={getLocalePath("/certificate")}
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("certificate")}
              </Link>
              <Link
                href={getLocalePath("/contact-us")}
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contactUs")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
