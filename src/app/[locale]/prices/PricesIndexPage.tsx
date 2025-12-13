"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  ArrowLeft,
  ArrowRight,
  Package,
} from "lucide-react";

type ProductType = {
  path: string;
  name: string;
  nameEn: string;
  price: number;
  img: string;
  category: string;
  categoryEn: string;
};

const products: ProductType[] = [
  {
    path: "germeten10ml",
    name: "جيرميتين 10 مل نقط",
    nameEn: "Germitin 10ml Drops",
    price: 57,
    img: "/products/main/germeten.png",
    category: "نقط",
    categoryEn: "Drops",
  },
  {
    path: "omepure10ml",
    name: "أوميبيور 10 مل نقط",
    nameEn: "Omepure 10ml Drops",
    price: 75,
    img: "/products/main/omepure.png",
    category: "نقط",
    categoryEn: "Drops",
  },
  {
    path: "alphadrink12",
    name: "الفادرينك 12 كيس",
    nameEn: "AlfaDrink 12 Sachets",
    price: 27,
    img: "/products/main/alfadrink.png",
    category: "أكياس",
    categoryEn: "Sachets",
  },
  {
    path: "choclocal15",
    name: "شكلوكال 15 كيس",
    nameEn: "Choclocal 15 Sachets",
    price: 49,
    img: "/products/main/choclocal.png",
    category: "أكياس",
    categoryEn: "Sachets",
  },
  {
    path: "alphamore15",
    name: "الفامور 15 كيس",
    nameEn: "AlfaMore 15 Sachets",
    price: 89,
    img: "/products/main/alfamore.png",
    category: "أكياس",
    categoryEn: "Sachets",
  },
  {
    path: "irovit15",
    name: "ايروفيت 15 كيس",
    nameEn: "Irovit 15 Sachets",
    price: 49,
    img: "/products/main/irovit.png",
    category: "أكياس",
    categoryEn: "Sachets",
  },
  {
    path: "alphafresh15",
    name: "الفافريش 15 كيس",
    nameEn: "AlfaFresh 15 Sachets",
    price: 40,
    img: "/products/main/alfafresh.png",
    category: "أكياس",
    categoryEn: "Sachets",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/HealthyCure2020",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/healthycure_insta/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@healthycure105",
    label: "YouTube",
  },
];

export default function PricesIndexPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isArabic = locale === "ar";

  const getLocalePath = (path: string) => {
    if (locale === "en") {
      return `/_locales/en${path}`;
    }
    return path;
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Static Background - No animations for performance */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[180px] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 animate-fade-in">
          <div className="container mx-auto flex items-center justify-between">
            <Link href={getLocalePath("/")} className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="/logos/healthycure.webp"
                  alt="HealthyCure"
                  fill
                  sizes="56px"
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="text-white font-bold text-lg hidden md:block">
                HealthyCure
              </span>
            </Link>

            <Link
              href={getLocalePath("/")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors duration-200"
            >
              {isArabic ? (
                <>
                  <span>الصفحة الرئيسية</span>
                  <ArrowLeft className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ArrowRight className="w-4 h-4" />
                  <span>Home</span>
                </>
              )}
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Page Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
              <Package className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-300 font-medium">
                {isArabic ? "منتجات هلثي كيور" : "HealthyCure Products"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              {isArabic ? "قائمة الأسعار" : "Price List"}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {isArabic
                ? "اكتشف مجموعتنا المتميزة من المكملات الغذائية والمنتجات الصحية"
                : "Discover our premium collection of nutritional supplements and health products"}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.path}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link href={getLocalePath(`/prices/${product.path}`)} className="block group">
                  <div className="relative">
                    {/* Card glow on hover - CSS only */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-emerald-500/50 overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                      {/* Category badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">
                          {isArabic ? product.category : product.categoryEn}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-48 bg-gradient-to-br from-white/5 to-transparent">
                        <Image
                          src={product.img}
                          alt={isArabic ? product.name : product.nameEn}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <h3
                          className={`text-white font-bold text-lg mb-2 line-clamp-1 ${
                            isArabic ? "text-right" : "text-left"
                          }`}
                        >
                          {isArabic ? product.name : product.nameEn}
                        </h3>

                        {/* Price and action */}
                        <div
                          className={`flex items-center justify-between ${
                            isArabic ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-emerald-400">
                              {product.price}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {isArabic ? "جنيه" : "EGP"}
                            </span>
                          </div>

                          <div
                            className={`flex items-center gap-1 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200 ${
                              isArabic ? "flex-row-reverse" : ""
                            }`}
                          >
                            <span className="text-sm">
                              {isArabic ? "التفاصيل" : "Details"}
                            </span>
                            {isArabic ? (
                              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                            ) : (
                              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="p-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="container mx-auto flex flex-col items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HealthyCure.{" "}
              {isArabic ? "جميع الحقوق محفوظة" : "All rights reserved."}
            </p>
          </div>
        </footer>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
