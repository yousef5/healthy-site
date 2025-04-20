import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS === "true" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/healthy-site" : "",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/healthy-site/" : "",
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
