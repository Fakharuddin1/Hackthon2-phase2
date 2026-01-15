/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['example.com'], // Add your image domains here
    unoptimized: true, // GitHub Pages ke liye zaruri
  },
  output: 'export', // Static export ke liye
  basePath: '/phase2-todo', // Apne repo ka naam
  assetPrefix: '/phase2-todo/', // Apne repo ka naam
};

module.exports = nextConfig;
