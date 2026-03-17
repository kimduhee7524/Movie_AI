import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  cacheComponents: true,

  experimental: {
    serverComponentsHmrCache: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1800, stale-while-revalidate=3600',
          },
        ],
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: 'duhee',
  project: 'javascript-react',
  silent: !process.env.CI,
  widenClientFileUpload: true,

  // disableLogger, automaticVercelMonitors → webpack 아래로 이동
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
    automaticVercelMonitors: true,
  },
});
