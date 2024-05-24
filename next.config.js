/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spydogenesis.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/vanshaghar/**',
      },
    ],
  },
};

module.exports = nextConfig;
