import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ["localhost", "127.0.0.1"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/berita/**",
      },
    ],
  },
};

export default nextConfig;
