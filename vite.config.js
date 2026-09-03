import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
// base: './' keeps asset URLs relative, so the build works whether it's served
// from the domain root or from a GitHub Pages project subpath (/<repo>/).
export default defineConfig({
  base: "./",
  plugins: [vue()],
});
