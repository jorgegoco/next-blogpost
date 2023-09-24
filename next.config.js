/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/jorgegoco/test-blogposts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
