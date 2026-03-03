import type { NextConfig } from "next";

// NEXT_BASE_PATH="" for Cloudflare / root-domain deployments
// NEXT_BASE_PATH="/University" (default) for GitHub Pages
const basePath =
  process.env.NEXT_BASE_PATH !== undefined
    ? process.env.NEXT_BASE_PATH
    : "/University";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
