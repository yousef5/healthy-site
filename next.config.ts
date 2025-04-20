import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/healthy-web" : "",
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
