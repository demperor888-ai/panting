/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Force webpack for compilation instead of SWC
    return config;
  },
  experimental: {
    forceSwcTransforms: false,
  },
};

module.exports = nextConfig;
