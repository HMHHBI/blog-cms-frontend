/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "blog-cms-api.test",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
