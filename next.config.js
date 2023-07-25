/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: 'df8aswwta/image/upload/**',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig