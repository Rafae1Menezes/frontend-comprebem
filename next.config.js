/** @type {import('next').NextConfig} */

import nextPWA from "next-pwa";

const withPWA = nextPWA({ dest: "public" });

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withPWA(nextConfig);
