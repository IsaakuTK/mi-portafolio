import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "mi-portafolio"; // Cambia esto por el nombre de tu repositorio

const nextConfig: NextConfig = {
  output: "export", // Necesario para GitHub Pages (exportación estática)
  basePath: isProd ? `/${repoName}` : "", // Ajusta las rutas para GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : "", // Para que carguen CSS/imágenes
  devIndicators: false, // Opcional: desactiva indicadores de desarrollo
  // Otras configuraciones personalizadas...
};

export default nextConfig;