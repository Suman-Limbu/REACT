/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        pathname: "/djfop5zyp/**",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
