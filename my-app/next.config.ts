import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.externals = config.externals || [];
    if (Array.isArray(config.externals)) {
      config.externals.push('process');
    }
    return config;
  },
};

export default nextConfig;
