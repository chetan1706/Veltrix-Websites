import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  skipTrailingSlashRedirect: true,

  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    unoptimized: true,

    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;