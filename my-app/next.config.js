/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable Static Export
  output: 'export',
  
  // 2. Set the Base Path to the name of your GitHub Repository
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  
  // 3. CRITICAL: Add assetPrefix to fix CSS loading on GitHub Pages
  // This ensures all static assets (CSS, JS) load from the correct path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  
  // 4. Disable server-side image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // 5. Add trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;