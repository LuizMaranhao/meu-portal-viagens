import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configuração profissional para permitir imagens externas */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // O Turbopack já está ativo por padrão no seu terminal
};

export default nextConfig;