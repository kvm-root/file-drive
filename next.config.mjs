/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cheery-chipmunk-143.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
