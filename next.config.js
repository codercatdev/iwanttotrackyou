/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/:path((?!another-page$).*)",
        destination: "/api",
        has: [
          {
            type: "host",
            value: "api.iwanttotrackyou.com",
          },
        ],
        permanent: false,
      },
      {
        source: "/:path((?!another-page$).*)",
        destination: "https://www.google.com",
        missing: [
          {
            type: "host",
            value: "api.iwanttotrackyou.com",
          },
        ],
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
