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

  useEffect(() => {
    setMounted(true);
  }, []);

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
    if (newLocale === locale || isPending || isLoading) return;

    setIsLoading(true);

    // Save to localStorage and cookie
    localStorage.setItem('locale', newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    // Check if running on static export (not dev server)
    // Dev server includes: localhost, 127.0.0.1, and local network IPs (192.168.x.x, 10.x.x.x, 172.16-31.x.x)
    const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    const isDevServer =
      hostname.includes('localhost') ||
      hostname.includes('127.0.0.1') ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname);
    const isStaticSite = !isDevServer;

    if (isStaticSite) {
      // Static site - redirect to correct locale path
      const currentPath = window.location.pathname;

      if (newLocale === 'en') {
        // Switch to English: go to /_locales/en/ version
        const newPath = currentPath.startsWith('/_locales/')
          ? currentPath.replace('/_locales/ar/', '/_locales/en/')
          : '/_locales/en' + (currentPath === '/' ? '/' : currentPath);
        window.location.href = newPath;
      } else {
        // Switch to Arabic: go to root version (no prefix)
        const newPath = currentPath.replace('/_locales/en/', '/').replace('/_locales/ar/', '/');
        window.location.href = newPath;
      }
    } else {
      // Dev server - use Next.js router
      scrollPositionRef.current = window.scrollY;
      startTransition(() => {
        router.replace(pathname, { locale: newLocale as "ar" | "en" });
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      });
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
              fontFamily: locale === "ar" ? "var(--font-cairo)" : "var(--font-inter)",
            }}
          >
            {locale === "ar" ? "جاري تغيير اللغة..." : "Changing language..."}
          </p>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
              fontFamily: locale === "ar" ? "var(--font-tajawal)" : "var(--font-inter)",
            }}
          >
            {locale === "ar" ? "يرجى الانتظار" : "Please wait"}
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
            locale === "ar"
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
            locale === "en"
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
