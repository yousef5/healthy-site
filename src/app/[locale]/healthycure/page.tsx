import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HealthyCureIndex from "@/components/pages/HealthyCureIndex";

export default function HealthyCurePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  return <HealthyCureIndex />;
}

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HealthyCure" });

  return {
    title: t("title"),
    description: t("subtitle"),
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      locale: locale,
      type: "website",
    },
  };
}
