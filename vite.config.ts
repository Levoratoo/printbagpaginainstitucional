import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// Base "/" por omissão: em rotas como /blog/ ou /blog/slug/ os assets continuam em /assets/...
// (com "./" o browser pedia /blog/assets/... → página em branco).
// Preview em github.io/nome-do-repo/ sem domínio próprio: npm run build -- --base /nome-do-repo/
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  server: {
    host: true,
    port: 3026,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
