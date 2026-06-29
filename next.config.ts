import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/FleetTabs-Landing",
  assetPrefix: "/FleetTabs-Landing",
  images: { unoptimized: true },
};

export default nextConfig;
