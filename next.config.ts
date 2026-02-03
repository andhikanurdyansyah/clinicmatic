import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  
  // Fix trailing slash issues
  trailingSlash: false,
  
  // Ensure proper redirects
  async redirects() {
    return [
      // Force non-www to www if needed (or remove if using non-www)
      // Currently using non-www based on canonical
    ];
  },
  
  // Add security and SEO headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
