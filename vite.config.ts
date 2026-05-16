import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // 1. Core routing/start plugin MUST be first to split and map routes safely
    tanstackStart({
      server: { 
        entry: "./src/server.ts" 
      },
    }),
    // 2. Netlify plugin handles adapter conversion right after
    netlify(),
    // 3. Asset path resolution
    tsconfigPaths(),
    // 4. React compilation handles JSX elements last
    react(),
  ],
});