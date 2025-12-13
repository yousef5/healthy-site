"use client";

import { useEffect, useState, useTransition, useRef } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { createPortal } from "react-dom";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollPositionRef = useRef(0);
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setMounted(true);

    // Detect actual locale from URL for production sites
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const detectedLocale =
        path.startsWith('/en/') || path.startsWith('/en') ? 'en' :
        path.startsWith('/ar/') || path.startsWith('/ar') ? 'ar' :
        locale;
      setCurrentLocale(detectedLocale);
    }
  }, [locale]);

  // Restore scroll position after loading completes
  useEffect(() => {
    if (!isLoading && scrollPositionRef.current > 0) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollPositionRef.current, behavior: "instant" });
      });
      scrollPositionRef.current = 0;
    }
  }, [isLoading]);

  const changeLanguage = (newLocale: string) => {
    if (isPending || isLoading) return;

    // Don't switch if already on target locale
    if (newLocale === currentLocale) return;

    setIsLoading(true);
    scrollPositionRef.current = window.scrollY;

    // Save to localStorage and cookie
    localStorage.setItem('locale', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Check if we're on a dev server
    const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    const isDevServer =
      hostname.includes('localhost') ||
      hostname.includes('127.0.0.1') ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname);

    if (isDevServer) {
      // Dev server - use Next.js router
      startTransition(() => {
        router.replace(pathname, { locale: newLocale as "ar" | "en" });
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      });
    } else {
      // Production static export - navigate to locale-specific directory
      const currentPath = window.location.pathname;
      let newPath: string;

      if (newLocale === 'ar') {
        // Switch to Arabic
        if (currentPath.startsWith('/en/')) {
          newPath = currentPath.replace('/en/', '/ar/');
        } else if (currentPath === '/en') {
          newPath = '/ar/';
        } else if (currentPath === '/' || currentPath === '') {
          newPath = '/ar/';
        } else {
          // Path without locale prefix - prepend /ar
          newPath = '/ar' + currentPath;
        }
      } else {
        // Switch to English
        if (currentPath.startsWith('/ar/')) {
          newPath = currentPath.replace('/ar/', '/en/');
        } else if (currentPath === '/ar') {
          newPath = '/en/';
        } else if (currentPath === '/' || currentPath === '') {
          newPath = '/en/';
        } else {
          // Path without locale prefix - prepend /en
          newPath = '/en' + currentPath;
        }
      }

      console.log(`Switching language: ${currentPath} → ${newPath}`);

      // Use location.href for immediate navigation in static export
      window.location.href = newPath;
    }
  };

  // Loading Overlay Component
  const LoadingOverlay = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundColor: "rgba(17, 24, 39, 0.95)",
          border: "1px solid rgba(55, 65, 81, 0.5)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ position: "relative", width: "64px", height: "64px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "4px solid rgba(16, 185, 129, 0.2)",
              borderTopColor: "#10b981",
              animation: "spin 1s linear infinite",
            }}
          />
          <Globe
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "32px",
              height: "32px",
              color: "#34d399",
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: "1.125rem",
              margin: 0,
              fontFamily: currentLocale === "ar" ? "var(--font-cairo)" : "var(--font-inter)",
            }}
          >
            {currentLocale === "ar" ? "جاري تغيير اللغة..." : "Changing language..."}
          </p>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
              fontFamily: currentLocale === "ar" ? "var(--font-tajawal)" : "var(--font-inter)",
            }}
          >
            {currentLocale === "ar" ? "يرجى الانتظار" : "Please wait"}
          </p>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  return (
    <>
      {/* Loading Overlay - Rendered via Portal to body */}
      {mounted && isLoading && createPortal(<LoadingOverlay />, document.body)}

      {/* Language Buttons */}
      <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-900/50 border border-gray-800/50">
        <button
          onClick={() => changeLanguage("ar")}
          disabled={!mounted || isPending || isLoading}
          className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 disabled:opacity-50 ${
            currentLocale === "ar"
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          }`}
          style={{ fontFamily: "var(--font-cairo)" }}
        >
          ع
        </button>
        <button
          onClick={() => changeLanguage("en")}
          disabled={!mounted || isPending || isLoading}
          className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 disabled:opacity-50 ${
            currentLocale === "en"
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          EN
        </button>
      </div>
    </>
  );
};

export default LanguageSwitcher;
