import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-router-dom",
            "bootstrap",
            // add other large libs here if used, like:
            // "axios", "lodash" etc.
          ],
        },
      },
    },
  },
});
