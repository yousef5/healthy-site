import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { jsonLdScriptProps } from "react-schemaorg";
import { Organization, WebSite } from "schema-dts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ScrollToTop from "@/components/ScrollToTop";
import "../globals.css";
import {
  cairo,
  tajawal,
  inter,
  montserrat,
} from "@/lib/fonts";

const SITE_URL = "https://healthy-eg.com";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const isArabic = locale === "ar";
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="ar" href={SITE_URL} />
        <meta name="keywords" content={t("keywords")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Healthy Pharma - هلثي فارما" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/logos/healthycure.webp" />
        <link rel="apple-touch-icon" href="/logos/healthycure.webp" />

        {/* Organization Schema */}
        <script
          {...jsonLdScriptProps<Organization>({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Healthy Pharma - هلثي فارما",
            alternateName: ["HealthyCure", "هلثي كيور", "Healthy Cure", "شركة هلثي للصناعات الدوائية"],
            url: SITE_URL,
            logo: `${SITE_URL}/logos/healthycure.webp`,
            description: isArabic
              ? "شركة هلثي فارما للصناعات الدوائية والطبية - موزع أدوية رائد في مصر"
              : "Healthy Pharma - Leading pharmaceutical manufacturer and distributor in Egypt",
            address: {
              "@type": "PostalAddress",
              streetAddress: "17 Sherif El-Rady St., Old Tawriel",
              addressLocality: "Mansoura",
              addressCountry: "Egypt",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+20-50-2338989",
              contactType: "customer service",
              availableLanguage: ["Arabic", "English"],
            },
            sameAs: [
              "https://www.facebook.com/HealthyCure2020",
              "https://www.instagram.com/healthycure_insta/",
              "https://www.youtube.com/@healthycure105",
            ],
          })}
        />

        {/* WebSite Schema */}
        <script
          {...jsonLdScriptProps<WebSite>({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: t("title"),
            description: t("description"),
            url: SITE_URL,
            inLanguage: locale,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/prices/{search_term_string}`,
            },
          })}
        />

        <style>
          {`
            :root {
              --color-primary-rgb: 52, 52, 52;
              --color-secondary-rgb: 152, 152, 152;
            }
            .dark {
              --color-primary-rgb: 235, 235, 235;
              --color-secondary-rgb: 69, 69, 69;
            }
          `}
        </style>
      </head>
      <body
        className={`${cairo.variable} ${tajawal.variable} ${inter.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {children}
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const locales = ["en", "ar"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | Healthy Pharma - هلثي فارما`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: "Healthy Pharma", url: SITE_URL }],
    creator: "Healthy Pharma - هلثي فارما",
    publisher: "Healthy Pharma",
    other: {
      "google-site-verification": "sVYBYfSJfXdBca3QoqsZtD6lsWVH6sk02RCH4YAbcm8",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: SITE_URL,
      siteName: "Healthy Pharma - هلثي فارما - HealthyCure",
      images: [
        {
          url: `${SITE_URL}/logos/healthycure.webp`,
          width: 800,
          height: 600,
          alt: "Healthy Pharma - HealthyCure Logo",
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${SITE_URL}/logos/healthycure.webp`],
      creator: "@HealthyCure1",
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        en: SITE_URL,
        ar: SITE_URL,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "pharmaceutical",
  };
}
