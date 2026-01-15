import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://indianapolis.vendingexchange.com/assets/img/**"),
    ],
  },
};

export default nextConfig;
