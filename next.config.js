/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
    output: "export",
    future: { webpack5: true }
  }
}

module.exports = nextConfig
