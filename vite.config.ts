import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// Base "/" por omissão: em rotas como /blog/ ou /blog/slug/ os assets continuam em /assets/...
// (com "./" o browser pedia /blog/assets/... → página em branco).
// GitHub Pages em subpath: definir VITE_BASE=/nome-do-repo/ no build (ver workflow deploy-gh-pages).
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  server: {
    host: "192.168.1.104",
    port: 3017,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
