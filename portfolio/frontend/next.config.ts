import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  // Suppress preload warnings for CSS chunks
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  /* turbopack: {
    root: __dirname
  }*/
};

export default nextConfig;
