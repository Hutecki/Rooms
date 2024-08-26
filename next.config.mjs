/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable strict mode
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_DOMAIN,
  },
  // Example of a custom configuration depending on the environment
  assetPrefix:
    process.env.NODE_ENV === "production" ? "http://localhost:3000" : "",
};

export default nextConfig;
