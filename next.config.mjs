/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
   poweredByHeader: false,
  images: {
      domains: [
        'admin.upturnist.com',
        'localhost',
        'upturnist.com',
        'greenenergyfarm.in'
      ], 
    },


    
    
};

export default nextConfig;
