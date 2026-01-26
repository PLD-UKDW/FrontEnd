import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow loading images from local backend during development
    domains: ["localhost", "127.0.0.1"],
  },
};

export default nextConfig;
