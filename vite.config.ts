import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import codegen from "vite-plugin-graphql-codegen";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    codegen({ runOnBuild: false }),
    visualizer({
      open: false, // it opens the visualizer in your browser after build
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
