/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/jorgegoco/blogposts-source/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
