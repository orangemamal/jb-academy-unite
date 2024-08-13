/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  rewrites: async() => ([{
    source: '/asdf',
    destination: '/proxy',
  }])
};

export default nextConfig;