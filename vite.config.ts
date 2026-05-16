import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Maintains the @/ path aliases used by shadcn/components
    tsconfigPaths(),
    react(),
    tanstackStart({
      server: { 
        // Preserves your custom SSR error wrapper
        entry: "./src/server.ts" 
      },
    }),
    // Automatically handles Netlify Edge/Functions routing for TanStack Start
    netlify(),
  ],
});