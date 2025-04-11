/* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

const repo = 'GuestHouseWebsite';

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
};
