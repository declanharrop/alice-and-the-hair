/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MAILCHIMP_URL: process.env.MAILCHIMP_URL,
  },
};

module.exports = nextConfig;
