/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable Static Export
  output: 'export',

  // 2. REQUIRED: Set the Base Path to the name of your GitHub Repository.
  //    This tells Next.js to prefix all asset and routing links with /my-portfolio/

  // 3. REMOVE assetPrefix: It conflicts with basePath in this deployment model.
  // assetPrefix: '/my-portfolio/', <--- DELETE THIS LINE
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',


  // 4. Optional: Disable server-side image optimization
  images: {
    unoptimized: true,
  },
};

//module.exports = nextConfig;
export default nextConfig;