import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ["static.tvmaze.com"],
  },
};

export default nextConfig;
