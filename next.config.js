/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: false },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
