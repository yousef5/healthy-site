import { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://healthy.com.eg";

// Product paths for SEO
const productPaths = [
  "germeten10ml",
  "omepure10ml",
  "alphadrink12",
  "choclocal15",
  "alphamore15",
  "irovit15",
  "alphafresh15",
  "jaufree10ml",
];

// Static pages
const staticPages = [
  "",
  "healthycure",
  "prices",
  "products/omepure",
  "about-us",
  "contact-us",
  "our-mission",
  "our-vision",
  "certificate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Main pages
  const mainPages = staticPages.map((page) => ({
    url: `${SITE_URL}/${page}`,
    lastModified: now,
    changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
    priority: page === "" ? 1 : page === "healthycure" || page === "prices" ? 0.9 : 0.8,
  }));

  // Product price pages - high priority for SEO
  const productPages = productPaths.map((product) => ({
    url: `${SITE_URL}/prices/${product}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...productPages];
}
