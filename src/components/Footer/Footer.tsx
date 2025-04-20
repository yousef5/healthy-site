import React from "react";
import { useTranslations } from "next-intl";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  const f = useTranslations("Footer");
  const t = useTranslations("Navbar");

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-6 py-12">
        <div className="md:flex md:justify-between">
          <FooterBrand />
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
            <FooterLinks
              title={f("contactUs")}
              links={[
                { href: "/about", text: t("about") },
                { href: "/contact", text: t("contact") },
              ]}
            />
            <FooterLinks
              title={t("services")}
              links={[
                { href: "/services/consultation", text: t("consultation") },
                { href: "/services/delivery", text: t("delivery") },
              ]}
            />
            <FooterSocial title={f("followUs")} />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
