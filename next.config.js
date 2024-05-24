/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '.',
  experimental: {
    outputFileTracingIncludes: {
      '/api/': ['./api/*'],
    },
  },
  images: {
    path: '',
    unoptimized: true,
    domains: ['www.venuecloud.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.www.venuecloud.net',
      },
    ],
  },
}

module.exports = nextConfig
