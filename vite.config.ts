import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // ── Docker Dev Server Config ──────────────────────────────
  // host: true → allows access from outside the container
  server: {
    host: true,         // Bind to 0.0.0.0 (required for Docker)
    port: 5173,
    strictPort: true,   // Fail if port is already in use
  },
});
