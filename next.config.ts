import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.redseam.redberryinternship.ge",
      },
    ],
  },
};

export default nextConfig;
