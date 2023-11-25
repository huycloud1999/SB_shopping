/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "media.istockphoto.com",
      "www.nj.com",
      "lh3.googleusercontent.com",
      "cdn.vjshop.vn",
      "bizweb.dktcdn.net",
      "localhost",
      "image.anhducdigital.vn",
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
