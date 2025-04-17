import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 3000,
    open: true, // Automatically open the browser
    strictPort: true, // Fail if port is already in use
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'build',
  },
  base: '/', // Ensure base path is correctly set
}));
