/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.shopify.com"], // Allow images from Shopify CDN
  },
};

export default nextConfig; // Use export default for ESM
