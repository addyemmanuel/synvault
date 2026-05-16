import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite"; // 1. Import the Tailwind plugin

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { 
        entry: "./src/server.ts" 
      },
    }),
    netlify(),
    tailwindcss(), // 2. Add Tailwind to process utility classes during build
    tsconfigPaths(),
    react(),
  ],
});