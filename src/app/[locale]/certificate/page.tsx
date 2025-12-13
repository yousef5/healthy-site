import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CertificateIndex from "@/components/pages/CertificateIndex";
import Script from "next/script";

export default function CertificatePage({
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
    image: `${SITE_URL}/certificates/gsdp-certificate.webp`,
    description: isArabic
      ? "شركة هلثي فارما للصناعات الدوائية والطبية - موزع أدوية رائد في مصر مع شهادات ISO 9001:2015 و GSDP"
      : "Healthy Pharma - Leading pharmaceutical manufacturer and distributor in Egypt with ISO 9001:2015 and GSDP certifications",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Sherif El-Rady St., Old Tawriel",
      addressLocality: "Mansoura",
      addressRegion: "Dakahlia",
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
        name: isArabic ? "شهاداتنا" : "Our Certifications",
        item: `${SITE_URL}/certificate`,
      },
    ],
  };

  // WebPage Schema (JSON-LD)
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/certificate#webpage`,
    url: `${SITE_URL}/certificate`,
    name: isArabic ? "شهادات هلثي فارما - ISO 9001:2015 و GSDP" : "Healthy Pharma Certifications - ISO 9001:2015 & GSDP",
    description: isArabic
      ? "شهادات شركة هلثي فارما - ISO 9001:2015، GSDP، ومعايير الجودة الصيدلانية. اطلع على شهاداتنا الرسمية التي تثبت الامتثال للوائح التخزين والتوزيع وإدارة الجودة الدولية."
      : "Healthy Pharma certifications - ISO 9001:2015, GSDP, and pharmaceutical quality standards. View our official certificates demonstrating compliance with international pharmaceutical storage, distribution and quality management regulations.",
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: isArabic ? "هلثي فارما" : "Healthy Pharma",
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/certificate#primaryimage`,
      url: `${SITE_URL}/certificates/gsdp-certificate.webp`,
      width: 1200,
      height: 1600,
      caption: "GSDP Certificate - Good Storage and Distribution Practices",
    },
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE_URL}/certificates/gsdp-certificate.webp`,
        width: 1200,
        height: 1600,
        caption: "GSDP Certificate - Good Storage and Distribution Practices - Egyptian Drug Authority",
      },
      {
        "@type": "ImageObject",
        url: `${SITE_URL}/certificates/iso-certificate.webp`,
        width: 1200,
        height: 1600,
        caption: "ISO 9001:2015 Quality Management System Certificate - Eriva IAF Accredited",
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
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="beforeInteractive"
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
        strategy="beforeInteractive"
      />

      <CertificateIndex />
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
  const t = await getTranslations({ locale, namespace: "Certificate" });

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://healthycure-eg.com";
  const isArabic = locale === "ar";

  return {
    title: `${t("title")} | ${isArabic ? "هلثي فارما - شركة أدوية معتمدة" : "Healthy Pharma - Certified Pharmaceutical Company"}`,
    description: t("pageDescription"),
    keywords: isArabic
      ? "شهادات هلثي فارما, شهادة GSDP, شهادة ISO 9001:2015, شهادات الجودة الصيدلانية, معايير التخزين والتوزيع, شركة أدوية معتمدة مصر, هيئة الدواء المصرية, ISO 9001, GSDP Egypt, pharmaceutical certifications Egypt, Good Storage Distribution Practices, شهادات الجودة, معايير الجودة الدولية, شركة هلثي فارما المنصورة, Healthy Pharma Mansoura, certified pharmaceutical distributor Egypt, GMP compliance Egypt"
      : "Healthy Pharma certifications, GSDP certificate Egypt, ISO 9001:2015 certificate, pharmaceutical quality standards Egypt, storage and distribution standards, certified pharmaceutical company Egypt, Egyptian Drug Authority EDA, ISO 9001 Egypt, GSDP Egypt, pharmaceutical certifications Egypt, Good Storage Distribution Practices, quality certifications, international quality standards, Healthy Pharma Mansoura, pharmaceutical distributor Egypt, GMP compliance, pharmaceutical quality assurance, IAF accredited Egypt, Eriva certification Egypt",
    authors: [{ name: "Healthy Pharmaceutical & Medical Industries" }],
    creator: "Healthy Pharma",
    publisher: "Healthy Pharmaceutical & Medical Industries",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: `${t("title")} - ISO 9001:2015 & GSDP`,
      description: t("pageDescription"),
      url: `${SITE_URL}/certificate`,
      siteName: isArabic ? "هلثي فارما" : "Healthy Pharma",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/certificates/gsdp-certificate.webp`,
          width: 1200,
          height: 1600,
          alt: `${t("certificates.gsdp.fullTitle")} - Healthy Pharma - Egyptian Drug Authority`,
          type: "image/webp",
        },
        {
          url: `${SITE_URL}/certificates/iso-certificate.webp`,
          width: 1200,
          height: 1600,
          alt: `${t("certificates.iso.fullTitle")} - Healthy Pharma - Eriva IAF Accredited`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} - ISO 9001:2015 & GSDP`,
      description: t("pageDescription"),
      images: [`${SITE_URL}/certificates/gsdp-certificate.webp`],
      creator: "@healthycure",
      site: "@healthycure",
    },
    alternates: {
      canonical: `${SITE_URL}/certificate`,
      languages: {
        "ar-EG": `${SITE_URL}/certificate`,
        "en-US": `${SITE_URL}/certificate`,
        "x-default": `${SITE_URL}/certificate`,
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
    category: isArabic ? "الشهادات والجودة الصيدلانية" : "Pharmaceutical Certifications & Quality",
    classification: "Healthcare",
    other: {
      "article:publisher": "Healthy Pharmaceutical & Medical Industries",
      "article:section": isArabic ? "الشهادات والجودة" : "Certifications & Quality",
      "article:tag": isArabic
        ? "شهادات, ISO, GSDP, جودة, أدوية, مصر"
        : "Certifications, ISO, GSDP, Quality, Pharmaceutical, Egypt",
      "og:email": "info@healthy.com.eg",
      "og:phone_number": "+20502338989",
      "og:street-address": "17 Sherif El-Rady St., Old Tawriel",
      "og:locality": "Mansoura",
      "og:region": "Dakahlia",
      "og:country-name": "Egypt",
    },
  };
}
