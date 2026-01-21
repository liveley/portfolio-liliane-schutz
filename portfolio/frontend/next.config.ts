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
  
  // Cloudflare Pages compatibility
  images: {
    unoptimized: true, // Cloudflare Pages doesn't support Next.js Image Optimization
  },
  
  // Export static site for Cloudflare Pages (API calls happen client-side)
  output: 'export',
};

export default nextConfig;
