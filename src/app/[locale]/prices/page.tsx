import { Metadata } from "next";
import PricesIndexPage from "./PricesIndexPage";

const SITE_URL = "https://healthy-eg.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "أسعار منتجات هلثي كيور | HealthyCure Prices"
    : "HealthyCure Product Prices | Healthy Pharma";

  const description = isArabic
    ? "قائمة أسعار منتجات هلثي كيور HealthyCure - أوميبيور Omepure - جيرميتين Germitin - ألفامور AlfaMore - ألفافريش AlfaFresh - ألفادرينك AlfaDrink - شكلوكال Choclocal - ايروفيت Irovit - أسعار المكملات الغذائية في مصر"
    : "HealthyCure product prices - Omepure, Germitin, AlfaMore, AlfaFresh, AlfaDrink, Choclocal, Irovit - Dietary supplements prices in Egypt - Healthy Pharma";

  const keywords = isArabic
    ? "أسعار هلثي كيور, سعر أوميبيور, سعر جيرميتين, سعر ألفامور, سعر ألفافريش, أسعار المكملات الغذائية, HealthyCure prices, Omepure price, Germitin price"
    : "HealthyCure prices, Omepure price, Germitin price, AlfaMore price, AlfaFresh price, supplement prices Egypt, Healthy Pharma products";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/prices`,
      siteName: "Healthy Pharma - HealthyCure",
      images: [
        {
          url: `${SITE_URL}/logos/healthycure.webp`,
          width: 800,
          height: 600,
          alt: "HealthyCure Products",
        },
      ],
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/prices`,
    },
  };
}

export default function Page() {
  return <PricesIndexPage />;
}
