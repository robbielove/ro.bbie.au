import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX(nextConfig)
