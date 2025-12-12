/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],  // ✅ allow Pexels images
  },
};

export default nextConfig;