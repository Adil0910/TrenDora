import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      devOptions: {
        enabled: true, 
      },
      manifest: {
        name: "Trendora AI",
        short_name: "TrenDora",
        description: "AI Chat, Resume Analyzer, Code Generator, and Bug Fixer",
        theme_color: "#4f46e5",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          { src: "image1.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "image1.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "image1.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
  },
});