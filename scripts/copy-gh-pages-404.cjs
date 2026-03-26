/**
 * GitHub Pages serves 404.html for unknown paths. Copy the SPA shell so
 * client-side routes work on refresh (e.g. /printbag-magic-builder/sobre).
 */
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const index = path.join(dist, "index.html");
const notFound = path.join(dist, "404.html");

if (!fs.existsSync(index)) {
  console.error("copy-gh-pages-404: dist/index.html not found. Run vite build first.");
  process.exit(1);
}

fs.copyFileSync(index, notFound);
console.log("copy-gh-pages-404: wrote dist/404.html");
