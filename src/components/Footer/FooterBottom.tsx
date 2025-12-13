import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Code2 } from "lucide-react";

export default function FooterBottom() {
  const f = useTranslations("Footer");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <hr className="my-8 border-gray-200 dark:border-gray-700" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
          <Link
            href="/privacy"
            className="text-xs text-gray-500 hover:text-primary transition-colors duration-300"
          >
            {f("privacyPolicy")}
          </Link>
          <Link
            href="/terms"
            className="text-xs text-gray-500 hover:text-primary transition-colors duration-300"
          >
            {f("termsOfService")}
          </Link>
        </div>

        {/* Developer Credit */}
        <div className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
          <a
            href="https://aboyousef.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-gray-500 hover:text-emerald-500 transition-all duration-300"
            style={{ fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)" }}
          >
            <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span>
              {isArabic ? "تطوير" : "Developed by"}
            </span>
            <span className="font-semibold text-emerald-500 group-hover:text-emerald-400">
              AboYousef
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
