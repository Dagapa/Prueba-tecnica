/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/Login",
      },
    ];
  },
};

module.exports = nextConfig;
