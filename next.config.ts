import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isStaticExport = process.env.STATIC_EXPORT === "true" || isGitHubPages;

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: isStaticExport,
  },
  // No basePath needed for custom domain (healthy.com.eg)
  basePath: "",
  trailingSlash: isStaticExport,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
