"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const params = useParams();
  const isArabic = params.locale === "ar";

  // Font styles based on locale
  const headingFontStyle = isArabic
    ? { fontFamily: "var(--font-cairo)" }
    : { fontFamily: "var(--font-inter)" };
  const bodyFontStyle = isArabic
    ? { fontFamily: "var(--font-tajawal-bold)" }
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
            <Link href="/" className="flex items-center group">
              <div className={`relative ${isArabic ? 'h-12 w-40 md:w-48' : 'h-16 w-64 md:h-20 md:w-96'}`}>
                <Image
                  src={isArabic ? "/logos/full-logo-ar.png" : "/logos/full-logo-en.png"}
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
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            <Link
              href="/healthycure"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("healthyCure")}
            </Link>
            <Link
              href="/about-us"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("aboutUs")}
            </Link>
            <Link
              href="/our-vision"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("ourVision")}
            </Link>
            <Link
              href="/our-mission"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("ourMission")}
            </Link>
            <Link
              href="/certificate"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("certificate")}
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              style={bodyFontStyle}
            >
              {t("contactUs")}
            </Link>
            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary group-hover:after:w-full after:transition-all after:duration-300"
                style={bodyFontStyle}
              >
                {t("products")}{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-52 rounded-md bg-background/95 dark:bg-background/95 shadow-lg dark:shadow-primary/10 ring-1 ring-black/5 dark:ring-white/10 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 backdrop-blur-md">
                <div className="py-1">
                  <Link
                    href="/products/omepure"
                    className="block px-4 py-3 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    style={bodyFontStyle}
                  >
                    {isArabic ? "أوميبور" : "Omepure"}
                  </Link>
                  <div
                    className="block px-4 py-3 text-sm text-foreground/40 cursor-not-allowed"
                    style={bodyFontStyle}
                  >
                    {isArabic ? "ألفا مور" : "Alfa More"}
                  </div>
                  <div
                    className="block px-4 py-3 text-sm text-foreground/40 cursor-not-allowed"
                    style={bodyFontStyle}
                  >
                    {isArabic ? "ألفا فريش" : "Alfa Fresh"}
                  </div>
                  <div
                    className="block px-4 py-3 text-sm text-foreground/40 cursor-not-allowed"
                    style={bodyFontStyle}
                  >
                    {isArabic ? "جيرمتين" : "Germetin"}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
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
                href="/"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "الرئيسية" : "Home"}
              </Link>
              <Link
                href="/healthycure"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("healthyCure")}
              </Link>
              <Link
                href="/about-us"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("aboutUs")}
              </Link>
              <Link
                href="/our-vision"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("ourVision")}
              </Link>
              <Link
                href="/our-mission"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("ourMission")}
              </Link>
              <Link
                href="/certificate"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("certificate")}
              </Link>
              <Link
                href="/contact-us"
                className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                style={bodyFontStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contactUs")}
              </Link>
              <div className="py-2">
                <button
                  className="flex items-center text-sm font-medium w-full justify-between text-foreground/80 hover:text-primary transition-colors duration-200"
                  style={bodyFontStyle}
                >
                  {t("products")} <ChevronDown className="h-4 w-4" />
                </button>
                <div className="pl-4 mt-2 space-y-1 border-l border-primary/20 ml-2">
                  <Link
                    href="/products/omepure"
                    className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                    style={bodyFontStyle}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {isArabic ? "أوميبور" : "Omepure"}
                  </Link>
                  <div
                    className="block py-2 text-sm text-foreground/40 cursor-not-allowed"
                    style={bodyFontStyle}
                  >
                    {isArabic ? "ألفا مور" : "Alfa More"}
                  </div>
                  <div
                    className="block py-2 text-sm text-foreground/40 cursor-not-allowed"
                    style={bodyFontStyle}
                  >
                    {isArabic ? "ألفا فريش" : "Alfa Fresh"}
                  </div>
                  <div
                    className="block py-2 text-sm text-foreground/40 cursor-not-allowed"
                    style={bodyFontStyle}
                  >
                    {isArabic ? "جيرمتين" : "Germetin"}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
