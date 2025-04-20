import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FooterBrand() {
  const f = useTranslations("Footer");

  return (
    <div className="mb-6 md:mb-0 space-y-4">
      <Link href="/" className="flex items-center group">
        <span className="self-center text-2xl font-bold whitespace-nowrap text-primary group-hover:text-primary/80 transition-colors duration-300">
          Healthy Pharma
        </span>
      </Link>
      <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
        {f("copyright")}
      </p>
      <p className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300">
        {f("developedBy")}
      </p>
    </div>
  );
}
