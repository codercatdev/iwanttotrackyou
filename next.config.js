/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/api/",
        has: [
          {
            type: "host",
            value: "api.iwanttotrackyou.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
