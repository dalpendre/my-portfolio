/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔑 1. Enable Static Export
  output: 'export',

  // 🔑 2. Set the Base Path (replace with your repo name)
  basePath: '/site-diogo-alpendre',

  // 🔑 3. Optional: Disable server-side image optimization
  images: {
    unoptimized: true,
  },

  // 🔑 4. Ensure images/css are loaded correctly
  assetPrefix: '/site-diogo-alpendre/',
};

module.exports = nextConfig; // CommonJS export