import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Sitemap({ hostname: "https://tracylio.vercel.app" }),
  ],
});
