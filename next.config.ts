// next.config.js
const nextConfig = {
  devIndicators: false,
  // Opcional: Si usas PostCSS (Tailwind v4 puede no necesitarlo)
  experimental: {
    optimizeCss: true, // Ayuda a que Vercel optimice el CSS
  },
};

export default nextConfig;