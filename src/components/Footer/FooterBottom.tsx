import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FooterBottom() {
  const f = useTranslations("Footer");

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
          <Link
            className="text-xs text-gray-500 hover:text-primary transition-colors duration-300"
            href="https://github.com/S0vers/i18n-Nextjs-BoilerPlate"
            target="_blank"
            rel="noopener noreferrer"
          >
            {f("githubLink")}
          </Link>
        </div>
      </div>
    </>
  );
}
