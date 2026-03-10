import type { NextConfig } from "next";

// Set to "" for Cloudflare / root-domain deployments
// Set to "/University" for GitHub Pages
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
