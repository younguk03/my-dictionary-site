import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ]
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  staticPageGenerationTimeout: 120, //in second
};

export default nextConfig;

