import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutUsIndex from "@/components/pages/AboutUsIndex";
import Script from "next/script";

export default function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://healthycure-eg.com";
  const isArabic = locale === "ar";

  // Organization Schema (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: isArabic ? "شركة هلثي للصناعات الدوائية والطبية" : "Healthy Pharmaceutical & Medical Industries",
    alternateName: "Healthy Pharma",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/healthycure.webp`,
    image: `${SITE_URL}/logos/healthycure.webp`,
    description: isArabic
      ? "شركة هلثي فارما للصناعات الدوائية والطبية - شركة رائدة في تصنيع وتوزيع الأدوية في مصر مع شبكة توزيع تضم أكثر من 6000 صيدلية و450 موظف و59 سيارة توزيع"
      : "Healthy Pharma - Leading pharmaceutical manufacturer and distributor in Egypt with a distribution network of over 6,000 pharmacies, 450 employees, and 59 vehicles",
    foundingDate: "2004",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Sherif El-Rady St., Healthy Building, Old Tawriel",
      addressLocality: "Mansoura",
      addressRegion: "Dakahlia Governorate",
      postalCode: "35511",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+20-50-2338989",
      email: "info@healthy.com.eg",
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      "https://www.facebook.com/HealthyCure2020",
      "https://www.instagram.com/healthycure_insta/",
      "https://www.youtube.com/@healthycure105",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "GSDP - Good Storage and Distribution Practices",
        recognizedBy: {
          "@type": "Organization",
          name: "Egyptian Drug Authority",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "ISO 9001:2015 Quality Management System",
        recognizedBy: {
          "@type": "Organization",
          name: "Eriva Certificate of Approval - IAF Accredited",
        },
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 450,
    },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
  };

  // AboutPage Schema (JSON-LD)
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about-us#aboutpage`,
    url: `${SITE_URL}/about-us`,
    name: isArabic ? "من نحن - هلثي فارما" : "About Us - Healthy Pharma",
    description: isArabic
      ? "تعرف على شركة هلثي للصناعات الدوائية والطبية، شركة رائدة في تصنيع وتوزيع الأدوية في مصر. رؤيتنا، رسالتنا، وقيمنا الأساسية."
      : "Learn about Healthy Pharmaceutical & Medical Industries, a leading pharmaceutical manufacturer and distributor in Egypt. Our vision, mission, and core values.",
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
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
        name: isArabic ? "من نحن" : "About Us",
        item: `${SITE_URL}/about-us`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        strategy="beforeInteractive"
      />
      <Script
        id="aboutpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
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

      <AboutUsIndex />
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
  const t = await getTranslations({ locale, namespace: "AboutUs" });

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://healthycure-eg.com";
  const isArabic = locale === "ar";

  return {
    title: `${t("title")} | ${isArabic ? "هلثي فارما - الريادة في التميز الصيدلاني" : "Healthy Pharma - Leading Pharmaceutical Excellence"}`,
    description: isArabic
      ? "شركة هلثي للصناعات الدوائية والطبية - شركة رائدة في تصنيع وتوزيع الأدوية في مصر. شبكة توزيع تضم أكثر من 6000 صيدلية، 450 موظف، و59 سيارة توزيع. معتمدون من ISO 9001:2015 و GSDP."
      : "Healthy Pharmaceutical & Medical Industries - Leading pharmaceutical manufacturer and distributor in Egypt. Distribution network of 6,000+ pharmacies, 450 employees, and 59 vehicles. ISO 9001:2015 and GSDP certified.",
    keywords: isArabic
      ? "من نحن هلثي فارما, شركة هلثي للصناعات الدوائية, هلثي فارما مصر, شركة أدوية مصرية, تصنيع الأدوية مصر, توزيع الأدوية مصر, صيدليات مصر, هلثي كيور, أوميبيور, جيرميتين, ألفامور, شركة معتمدة ISO, GSDP مصر, رؤية هلثي فارما, رسالة هلثي فارما, قيم الشركة, المنصورة, about Healthy Pharma, pharmaceutical company Egypt, Egyptian drug manufacturer"
      : "About Healthy Pharma, Healthy Pharmaceutical Industries, Healthy Pharma Egypt, Egyptian pharmaceutical company, pharmaceutical manufacturer Egypt, drug distributor Egypt, Egyptian pharmacies network, HealthyCure, Omepure, Germitin, AlfaMore, ISO certified company, GSDP Egypt, Healthy Pharma vision, Healthy Pharma mission, company values, Mansoura Egypt, pharmaceutical excellence, من نحن",
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
      title: `${t("title")} - ${isArabic ? "الريادة في التميز الصيدلاني" : "Leading Pharmaceutical Excellence"}`,
      description: isArabic
        ? "تعرف على شركة هلثي فارما - شبكة توزيع تضم 6000+ صيدلية | 450 موظف | 59 سيارة توزيع | معتمدون من ISO 9001:2015 و GSDP"
        : "Learn about Healthy Pharma - 6,000+ pharmacies network | 450 employees | 59 vehicles | ISO 9001:2015 and GSDP certified",
      url: `${SITE_URL}/about-us`,
      siteName: isArabic ? "هلثي فارما" : "Healthy Pharma",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/logos/healthycure.webp`,
          width: 1200,
          height: 630,
          alt: "Healthy Pharma - Leading Pharmaceutical Company in Egypt",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} - Healthy Pharma`,
      description: isArabic
        ? "شركة رائدة في تصنيع وتوزيع الأدوية | 6000+ صيدلية | معتمدون من ISO و GSDP"
        : "Leading pharmaceutical manufacturer & distributor | 6,000+ pharmacies | ISO & GSDP certified",
      images: [`${SITE_URL}/logos/healthycure.webp`],
      creator: "@healthycure",
      site: "@healthycure",
    },
    alternates: {
      canonical: `${SITE_URL}/about-us`,
      languages: {
        "ar-EG": `${SITE_URL}/about-us`,
        "en-US": `${SITE_URL}/about-us`,
        "x-default": `${SITE_URL}/about-us`,
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
    category: isArabic ? "من نحن - شركة أدوية" : "About - Pharmaceutical Company",
    classification: "Healthcare",
    other: {
      "article:publisher": "Healthy Pharmaceutical & Medical Industries",
      "article:section": isArabic ? "من نحن" : "About Us",
      "article:tag": isArabic
        ? "من نحن, شركة أدوية, تصنيع, توزيع, مصر, صيدليات"
        : "About, Pharmaceutical, Manufacturing, Distribution, Egypt, Pharmacies",
      "og:email": "info@healthy.com.eg",
      "og:phone_number": "+20502338989",
      "og:street-address": "17 Sherif El-Rady St., Healthy Building, Old Tawriel",
      "og:locality": "Mansoura",
      "og:region": "Dakahlia",
      "og:postal-code": "35511",
      "og:country-name": "Egypt",
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
