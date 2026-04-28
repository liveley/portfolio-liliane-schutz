import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  turbopack: {
    root: __dirname,
  },
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  // Suppress preload warnings for CSS chunks
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Cloudflare Pages compatibility
  images: {
    unoptimized: true, // Cloudflare Pages doesn't support Next.js Image Optimization
  },
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:8788/api/:path*',
        },
      ];
    }
    return [];
  },
  
  // Export static site for Cloudflare Pages (API calls happen client-side via D1)
  output: 'export',
};

export default nextConfig;
