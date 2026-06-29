import type { NextConfig } from "next";

const repoPath = "/FleetTabs-Landing";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoPath,
  assetPrefix: repoPath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoPath : "",
  },
};

export default nextConfig;
