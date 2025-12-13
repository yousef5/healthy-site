import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactUsIndex from "@/components/pages/ContactUsIndex";
import Script from "next/script";

export default function ContactUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://healthycure-eg.com";
  const isArabic = locale === "ar";

  // LocalBusiness Schema (JSON-LD)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: isArabic ? "شركة هلثي للصناعات الدوائية والطبية" : "Healthy Pharmaceutical & Medical Industries",
    alternateName: "Healthy Pharma",
    image: `${SITE_URL}/logos/healthycure.webp`,
    description: isArabic
      ? "شركة هلثي فارما للصناعات الدوائية والطبية - موزع أدوية رائد في مصر"
      : "Healthy Pharma - Leading pharmaceutical manufacturer and distributor in Egypt",
    url: SITE_URL,
    telephone: "+20502338989",
    email: "info@healthy.com.eg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Sherif El-Rady St., Healthy Building, Old Tawriel",
      addressLocality: "Mansoura",
      addressRegion: "Dakahlia Governorate",
      postalCode: "35511",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.050922,
      longitude: 31.397399,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/HealthyCure2020",
      "https://www.instagram.com/healthycure_insta/",
      "https://www.youtube.com/@healthycure105",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
  };

  // ContactPage Schema (JSON-LD)
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact-us#contactpage`,
    url: `${SITE_URL}/contact-us`,
    name: isArabic ? "اتصل بنا - هلثي فارما" : "Contact Us - Healthy Pharma",
    description: isArabic
      ? "تواصل معنا في شركة هلثي فارما. نحن هنا للإجابة على استفساراتك وتقديم الدعم. اتصل بنا عبر الهاتف أو البريد الإلكتروني أو قم بزيارتنا في المنصورة."
      : "Contact Healthy Pharma. We're here to answer your questions and provide support. Reach us by phone, email, or visit our office in Mansoura, Egypt.",
    mainEntity: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
  };

  // Breadcrumb Schema (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isArabic ? "الرئيسية" : "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isArabic ? "اتصل بنا" : "Contact Us",
        item: `${SITE_URL}/contact-us`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="beforeInteractive"
      />
      <Script
        id="contactpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
        strategy="beforeInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="beforeInteractive"
      />

      <ContactUsIndex />
    </>
  );
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
  const t = await getTranslations({ locale, namespace: "ContactUs" });

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://healthycure-eg.com";
  const isArabic = locale === "ar";

  return {
    title: `${t("title")} | ${isArabic ? "هلثي فارما - تواصل معنا" : "Healthy Pharma - Get in Touch"}`,
    description: isArabic
      ? "تواصل مع شركة هلثي فارما للصناعات الدوائية والطبية. نحن هنا للإجابة على استفساراتك. اتصل بنا على +20 050 2338989 أو عبر info@healthy.com.eg. العنوان: 17 شارع شريف الرادي، عمارة هيلثي، المنصورة، مصر."
      : "Contact Healthy Pharma for pharmaceutical products and services. We're here to answer your questions. Call us at +20 050 2338989 or email info@healthy.com.eg. Address: 17 Sherif El-Rady St., Healthy Building, Mansoura, Egypt.",
    keywords: isArabic
      ? "اتصل بنا هلثي فارما, تواصل هلثي فارما, خدمة عملاء هلثي فارما, رقم هاتف هلثي فارما, بريد هلثي فارما, عنوان هلثي فارما المنصورة, شركة أدوية المنصورة, هلثي فارما مصر, contact healthy pharma, pharmaceutical company Egypt, Mansoura pharmaceutical distributor, دعم العملاء, خدمة العملاء, استفسارات الأدوية"
      : "Contact Healthy Pharma, Healthy Pharma customer service, Healthy Pharma phone number, Healthy Pharma email, Healthy Pharma Mansoura address, pharmaceutical company Mansoura, Healthy Pharma Egypt contact, pharmaceutical distributor Egypt, customer support, pharmaceutical inquiries, contact pharmaceutical company Egypt, Mansoura pharmaceutical contact, اتصل بنا",
    authors: [{ name: "Healthy Pharmaceutical & Medical Industries" }],
    creator: "Healthy Pharma",
    publisher: "Healthy Pharmaceutical & Medical Industries",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: `${t("title")} - Healthy Pharma`,
      description: isArabic
        ? "تواصل معنا - نحن هنا للإجابة على جميع استفساراتك | هاتف: +20 050 2338989 | البريد: info@healthy.com.eg"
        : "Get in Touch - We're here to answer all your questions | Phone: +20 050 2338989 | Email: info@healthy.com.eg",
      url: `${SITE_URL}/contact-us`,
      siteName: isArabic ? "هلثي فارما" : "Healthy Pharma",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/logos/healthycure.webp`,
          width: 1200,
          height: 630,
          alt: "Healthy Pharma - Contact Us",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} - Healthy Pharma`,
      description: isArabic
        ? "تواصل معنا - هاتف: +20 050 2338989 | البريد: info@healthy.com.eg"
        : "Contact Us - Phone: +20 050 2338989 | Email: info@healthy.com.eg",
      images: [`${SITE_URL}/logos/healthycure.webp`],
      creator: "@healthycure",
      site: "@healthycure",
    },
    alternates: {
      canonical: `${SITE_URL}/contact-us`,
      languages: {
        "ar-EG": `${SITE_URL}/contact-us`,
        "en-US": `${SITE_URL}/contact-us`,
        "x-default": `${SITE_URL}/contact-us`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google52d37058772b10e6",
    },
    category: isArabic ? "اتصل بنا" : "Contact",
    classification: "Healthcare",
    other: {
      "article:publisher": "Healthy Pharmaceutical & Medical Industries",
      "article:section": isArabic ? "اتصل بنا" : "Contact",
      "og:email": "info@healthy.com.eg",
      "og:phone_number": "+20502338989",
      "og:street-address": "17 Sherif El-Rady St., Healthy Building, Old Tawriel",
      "og:locality": "Mansoura",
      "og:region": "Dakahlia",
      "og:postal-code": "35511",
      "og:country-name": "Egypt",
      "og:latitude": "31.050922",
      "og:longitude": "31.397399",
      "business:contact_data:street_address": "17 Sherif El-Rady St., Healthy Building",
      "business:contact_data:locality": "Mansoura",
      "business:contact_data:region": "Dakahlia",
      "business:contact_data:postal_code": "35511",
      "business:contact_data:country_name": "Egypt",
      "business:contact_data:email": "info@healthy.com.eg",
      "business:contact_data:phone_number": "+20502338989",
      "business:contact_data:website": SITE_URL,
    },
  };
}
