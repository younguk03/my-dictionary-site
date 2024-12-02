import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async wirtes() {
    return [
      {
        source:"/:path*",
        destination: "https://openapi.naver.com/v1/search/encyc.json"
      }
    ]
  }
};

export default nextConfig;
