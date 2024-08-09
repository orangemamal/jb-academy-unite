/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async() => ([{
    source: '/asdf',
    destination: '/proxy',
  }])
};

export default nextConfig;