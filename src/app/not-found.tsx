"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Search, RefreshCw } from "lucide-react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>404 - Page Not Found | Healthy Pharma</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          background: "linear-gradient(135deg, #030712 0%, #0a0a0a 50%, #030712 100%)",
          fontFamily: "'Inter', 'Cairo', sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          {/* Gradient Orbs */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(60px)",
              transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "10%",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(80px)",
              transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />

          {/* Grid Pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              opacity: 0.5,
            }}
          />
        </div>

        {/* Main Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          {/* 404 Number */}
          <div
            style={{
              position: "relative",
              marginBottom: "1rem",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(120px, 25vw, 250px)",
                fontWeight: 800,
                margin: 0,
                lineHeight: 1,
                background: "linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 80px rgba(16, 185, 129, 0.3)",
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              404
            </h1>
            {/* Decorative Pills */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "-20%",
                transform: `translateY(-50%) rotate(-15deg) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                width: "60px",
                height: "120px",
                background: "linear-gradient(180deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%)",
                borderRadius: "30px",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                transition: "transform 0.3s ease-out",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "30%",
                right: "-15%",
                transform: `rotate(25deg) translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                width: "40px",
                height: "80px",
                background: "linear-gradient(180deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.03) 100%)",
                borderRadius: "20px",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                transition: "transform 0.3s ease-out",
              }}
            />
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 1rem 0",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            الصفحة غير موجودة
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#9ca3af",
              margin: "0 0 2.5rem 0",
              maxWidth: "500px",
              lineHeight: 1.6,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            {/* Home Button */}
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 10px 40px -10px rgba(16, 185, 129, 0.5)",
                transition: "all 0.3s ease",
                fontFamily: "'Cairo', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 50px -10px rgba(16, 185, 129, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(16, 185, 129, 0.5)";
              }}
            >
              <Home size={20} />
              <span>العودة للرئيسية</span>
            </Link>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                background: "rgba(255, 255, 255, 0.05)",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "'Cairo', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <ArrowLeft size={20} />
              <span>الرجوع للخلف</span>
            </button>
          </div>

          {/* Help Links */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            <Link
              href="/products/omepure"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#6b7280",
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "color 0.2s ease",
                fontFamily: "'Cairo', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#10b981")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              <Search size={16} />
              <span>تصفح المنتجات</span>
            </Link>
            <Link
              href="/contact-us"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#6b7280",
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "color 0.2s ease",
                fontFamily: "'Cairo', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#10b981")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              <RefreshCw size={16} />
              <span>تواصل معنا</span>
            </Link>
          </div>

          {/* Brand Footer */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: isLoaded ? 0.5 : 0,
              transition: "opacity 0.8s ease 0.5s",
            }}
          >
            <p
              style={{
                color: "#4b5563",
                fontSize: "0.85rem",
                margin: 0,
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              Healthy Pharma © {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Floating particles effect */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        `}</style>
      </body>
    </html>
  );
}
