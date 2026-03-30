import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// Relative base: same build works at custom domain root (printbag.com.br) and at
// https://user.github.io/repo/ (assets resolve relative to index.html).
export default defineConfig({
  base: "./",
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
