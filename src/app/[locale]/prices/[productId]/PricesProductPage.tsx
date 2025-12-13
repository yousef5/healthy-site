"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Youtube, Home, Sparkles } from "lucide-react";

type ProductType = {
  path: string;
  name: string;
  nameEn: string;
  price: number;
  img: string;
  bgGradient: string;
};

const products: ProductType[] = [
  {
    path: "germeten10ml",
    name: "جيرميتين 10 مل نقط",
    nameEn: "Germitin 10ml Drops",
    price: 57,
    img: "/products/main/germeten.png",
    bgGradient: "from-emerald-900 via-teal-900 to-cyan-900",
  },
  {
    path: "omepure10ml",
    name: "أوميبيور 10 مل نقط",
    nameEn: "Omepure 10ml Drops",
    price: 75,
    img: "/products/main/omepure.png",
    bgGradient: "from-blue-900 via-indigo-900 to-purple-900",
  },
  {
    path: "alphadrink12",
    name: "الفادرينك 12 كيس",
    nameEn: "AlfaDrink 12 Sachets",
    price: 27,
    img: "/products/main/alfadrink.png",
    bgGradient: "from-amber-900 via-orange-900 to-red-900",
  },
  {
    path: "choclocal15",
    name: "شكلوكال 15 كيس",
    nameEn: "Choclocal 15 Sachets",
    price: 49,
    img: "/products/main/choclocal.png",
    bgGradient: "from-amber-950 via-orange-950 to-red-950",
  },
  {
    path: "alphamore15",
    name: "الفامور 15 كيس",
    nameEn: "AlfaMore 15 Sachets",
    price: 89,
    img: "/products/main/alfamore.png",
    bgGradient: "from-violet-900 via-purple-900 to-fuchsia-900",
  },
  {
    path: "irovit15",
    name: "ايروفيت 15 كيس",
    nameEn: "Irovit 15 Sachets",
    price: 49,
    img: "/products/main/irovit.png",
    bgGradient: "from-red-900 via-rose-900 to-pink-900",
  },
  {
    path: "alphafresh15",
    name: "الفافريش 15 كيس",
    nameEn: "AlfaFresh 15 Sachets",
    price: 40,
    img: "/products/main/alfafresh.png",
    bgGradient: "from-cyan-900 via-teal-900 to-emerald-900",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/HealthyCure2020", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/healthycure_insta/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@healthycure105", label: "YouTube" },
];

export default function PricesProductPage() {
  const params = useParams();
  const locale = params.locale as string;
  const productId = params.productId as string;
  const isArabic = locale === "ar";

  const product = products.find(
    (p) => p.path.toLowerCase() === productId?.toLowerCase()
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            {isArabic ? "المنتج غير موجود" : "Product Not Found"}
          </h1>
          <Link
            href="/prices"
            className="text-emerald-400 hover:underline"
          >
            {isArabic ? "العودة للأسعار" : "Back to Prices"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative flex flex-col"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className={`fixed inset-0 bg-gradient-to-br ${product.bgGradient}`} />

      {/* Static background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-15" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-4 animate-fade-in">
        <Link href="/prices">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 hover:bg-white/20 transition-colors">
            <Image
              src="/logos/healthycure.webp"
              alt="HealthyCure"
              width={50}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <Link
          href="/prices"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>{isArabic ? "الأسعار" : "Prices"}</span>
        </Link>
      </header>

      {/* Main Content - Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-sm animate-fade-in-up">
          {/* Premium Card */}
          <div className="relative">
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-[2.5rem] blur-xl opacity-50" />

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-[2rem] border border-white/20 overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              {/* Logo in card */}
              <div className="absolute top-4 left-4 z-20 animate-scale-in" style={{ animationDelay: "100ms" }}>
                <Link href="/prices">
                  <div className="bg-white/90 rounded-xl p-1.5 shadow-lg hover:scale-105 transition-transform">
                    <Image
                      src="/logos/healthycure.webp"
                      alt="HealthyCure"
                      width={40}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>

              {/* Sparkle badge */}
              <div className="absolute top-4 right-4 z-20 animate-scale-in" style={{ animationDelay: "150ms" }}>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span className="text-xs font-bold text-white">
                    {isArabic ? "منتج مميز" : "Premium"}
                  </span>
                </div>
              </div>

              {/* Product Image Section */}
              <div className="relative pt-14 pb-2 px-4 flex justify-center">
                <div className="animate-scale-in" style={{ animationDelay: "200ms" }}>
                  <Image
                    src={product.img}
                    alt={isArabic ? product.name : product.nameEn}
                    width={280}
                    height={350}
                    sizes="280px"
                    className="object-contain drop-shadow-2xl max-h-[50vh] w-auto"
                    priority
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="px-6 pb-6">
                {/* Product Name */}
                <h1 className="text-xl font-bold text-white text-center mb-4 animate-fade-in-up" style={{ animationDelay: "250ms" }}>
                  {isArabic ? product.name : product.nameEn}
                </h1>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4" />

                {/* Price Section */}
                <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                  <div className="bg-gradient-to-r from-white/20 via-white/30 to-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <p className="text-white/60 text-xs text-center mb-1 font-medium">
                      {isArabic ? "السعر" : "Price"}
                    </p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-black text-5xl text-white drop-shadow-lg">
                        {product.price}
                      </span>
                      <span className="text-lg font-bold text-white/80">
                        {isArabic ? "جنيه" : "EGP"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Social Links */}
      <footer className="relative z-10 py-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <div className="flex justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-center text-white/40 text-xs mt-3">
          © {new Date().getFullYear()} HealthyCure
        </p>
      </footer>

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
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
