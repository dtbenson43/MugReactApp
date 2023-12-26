import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'
import codegen from 'vite-plugin-graphql-codegen';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), codegen({ runOnBuild: false })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
