import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // TODO: Re-enable static export after fixing fumadocs-mdx integration
  // output: 'export',
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
