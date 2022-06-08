/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cryptologos.cc", "static.news.bitcoin.com"],
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
