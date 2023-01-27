/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/api",
        has: [
          {
            type: "host",
            value: "api.iwanttotrackyou.com",
          },
        ],
      },
      {
        source: "/",
        destination: "www.google.com",
        missing: [
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
