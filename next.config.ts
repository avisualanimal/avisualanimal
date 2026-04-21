import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    // Allows Webflow CDN images temporarily while migrating assets to /public/images/
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.webflow.com',
      },
      {
        protocol: 'https',
        hostname: '**.webflow.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

export default nextConfig
