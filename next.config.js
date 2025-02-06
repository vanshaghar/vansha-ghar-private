/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vanshaghar.s3.me-central-1.amazonaws.com',
        port: '',
        pathname: '/payload/**',
      },
    ],
  },
};

module.exports = nextConfig;
