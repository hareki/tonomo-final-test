import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
  typedRoutes: true,
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    viewTransition: true,
    inlineCss: true,
  },
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
