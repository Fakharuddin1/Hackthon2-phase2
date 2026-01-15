/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined, // Required for static exports in production
  basePath: process.env.NODE_ENV === 'production' ? '/Hackthon2-phase2' : '', // GitHub Pages subdirectory path (only in production)
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Hackthon2-phase2' : '', // Prefix for asset paths (only in production)
  trailingSlash: process.env.NODE_ENV === 'production' ? true : undefined, // Only in production
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || (process.env.NODE_ENV === 'production'
      ? 'https://fakharuddin1.github.io/Hackthon2-phase2/api' // Production API URL
      : 'http://localhost:8000/api'), // Local development API URL
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'production' ? true : undefined, // Required for GitHub Pages
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'your-backend-domain.com',
      },
      {
        protocol: 'https',
        hostname: 'fakharuddin1.github.io',
      }
    ],
  },
};

module.exports = nextConfig;