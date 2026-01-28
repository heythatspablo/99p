import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Custom domain configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://99pablos.com' : undefined,
  // Force trailing slash for consistency
  trailingSlash: true,
};

export default nextConfig;
