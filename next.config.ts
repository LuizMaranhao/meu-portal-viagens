// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Adicione isso para gerar arquivos HTML estáticos
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;