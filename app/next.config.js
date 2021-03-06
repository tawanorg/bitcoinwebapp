/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cryptologos.cc", "static.news.bitcoin.com", "tawan.org"],
  },
  async rewrites() {
    return [
      {
        source: "/weekly-popular-posts",
        destination:
          "https://news.bitcoin.com/wp-content/weekly_popular_posts.json",
      },
    ];
  },
};

module.exports = nextConfig;
