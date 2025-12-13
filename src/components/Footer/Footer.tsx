"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
  Heart,
} from "lucide-react";

export default function Footer() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: isArabic ? "الرئيسية" : "Home" },
    { href: "/about-us", label: isArabic ? "من نحن" : "About Us" },
    { href: "/healthycure", label: isArabic ? "هلثي كيور" : "HealthyCure" },
    { href: "/products/omepure", label: isArabic ? "منتجاتنا" : "Products" },
    { href: "/contact-us", label: isArabic ? "اتصل بنا" : "Contact" },
  ];

  const services = [
    { href: "/prices", label: isArabic ? "قائمة الأسعار" : "Price List" },
    { href: "/certificate", label: isArabic ? "الشهادات" : "Certificates" },
    { href: "/our-vision", label: isArabic ? "رؤيتنا" : "Our Vision" },
    { href: "/our-mission", label: isArabic ? "رسالتنا" : "Our Mission" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/HealthyCure2020",
      icon: Facebook,
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/healthycure_insta/",
      icon: Instagram,
      color: "hover:bg-pink-600",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@healthycure105",
      icon: Youtube,
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="relative bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <div className="relative h-12 w-40">
                  <Image
                    src={isArabic ? "/logos/full-logo-ar.webp" : "/logos/full-logo-en.webp"}
                    alt="Healthy Pharma"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-6"
                style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
              >
                {isArabic
                  ? "شركة هلثي فارما للصناعات الدوائية والطبية - ريادة في التصنيع وتميز في التوزيع."
                  : "Healthy Pharma for pharmaceutical and medical industries - Leading in manufacturing and excellence in distribution."}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: isArabic ? "var(--font-cairo)" : "var(--font-inter)" }}
              >
                {isArabic ? "روابط سريعة" : "Quick Links"}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                      style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
                    >
                      <ArrowUpRight className={`w-4 h-4 ${isArabic ? "ml-2" : "mr-2"} opacity-0 group-hover:opacity-100 transition-all duration-300 ${isArabic ? "rotate-[225deg]" : ""}`} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: isArabic ? "var(--font-cairo)" : "var(--font-inter)" }}
              >
                {isArabic ? "خدماتنا" : "Our Services"}
              </h3>
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                      style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
                    >
                      <ArrowUpRight className={`w-4 h-4 ${isArabic ? "ml-2" : "mr-2"} opacity-0 group-hover:opacity-100 transition-all duration-300 ${isArabic ? "rotate-[225deg]" : ""}`} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3
                className="text-white font-bold text-lg mb-6"
                style={{ fontFamily: isArabic ? "var(--font-cairo)" : "var(--font-inter)" }}
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://maps.google.com/?q=17+Sherif+El-Rady+St.,+Old+Tawriel,+Mansoura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span
                      className="text-sm"
                      style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
                    >
                      {isArabic
                        ? "17 شارع شريف الراضي، عمارة هيلثي، توريل القديمة، المنصورة"
                        : "17 Sherif El-Rady St., Old Tawriel, Mansoura"}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+20502338989"
                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm" dir="ltr">+20 50 2338989</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@healthy.com.eg"
                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm">info@healthy.com.eg</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p
                className="text-gray-500 text-sm text-center md:text-start"
                style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
              >
                {isArabic
                  ? `© ${currentYear} هلثي فارما. جميع الحقوق محفوظة.`
                  : `© ${currentYear} Healthy Pharma. All rights reserved.`}
              </p>

              {/* Developer Credit */}
              <a
                href="https://aboyousef.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-all duration-300"
              >
                <span
                  className="text-sm"
                  style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
                >
                  {isArabic ? "صُنع بـ" : "Made with"}
                </span>
                <Heart className="w-4 h-4 text-red-500 group-hover:scale-125 transition-transform duration-300" />
                <span
                  className="text-sm"
                  style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
                >
                  {isArabic ? "بواسطة" : "by"}
                </span>
                <span
                  className="text-sm font-semibold text-emerald-500 group-hover:text-emerald-400"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Mohammed Yousef
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
