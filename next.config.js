/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Isso permite que o build termine mesmo se o ESLint reclamar de versões
    ignoreDuringBuilds: true, 
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
