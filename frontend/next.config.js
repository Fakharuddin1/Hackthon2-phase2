/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static exports
  basePath: '/Hackthon2-phase2', // GitHub Pages subdirectory path (new repository name)
  assetPrefix: '/Hackthon2-phase2', // Prefix for asset paths
  trailingSlash: true, // Optional: adds trailing slashes to URLs
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://fakharuddin1.github.io/Hackthon2-phase2/api', // Updated for GitHub Pages
  },
  images: {
    unoptimized: true, // Required for GitHub Pages
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