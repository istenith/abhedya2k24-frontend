/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    domains: ['0x0.st'],
  },
    compiler: {
      removeConsole: true,
    }
};

export default nextConfig;
