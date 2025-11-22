import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',          // ← ini yang paling penting
  trailingSlash: true,       // biar link /about jadi /about/index.html (penting!)
  images: {
    unoptimized: true        // karena static export tidak support Next/Image optimization
  }
}

module.exports = nextConfig
