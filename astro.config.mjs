import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://reevebyte.github.io",
  output: "static",
  build: {
    format: "directory",
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
