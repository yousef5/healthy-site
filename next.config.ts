import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_ACTIONS === "true" ? "export" : undefined,
  images: {
    unoptimized: process.env.GITHUB_ACTIONS === "true",
  },
  basePath: process.env.GITHUB_ACTIONS === "true" ? "/healthy-site" : "",
  trailingSlash: process.env.GITHUB_ACTIONS === "true",
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
