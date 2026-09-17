import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

const root = fileURLToPath(new URL(".", import.meta.url));
const languages = JSON.parse(
  readFileSync(new URL("./config/languages.json", import.meta.url), "utf8"),
);

export default defineConfig({
  output: "static",
  site: process.env.PUBLIC_SITE_URL,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  i18n: {
    defaultLocale: languages.default,
    locales: languages.supported,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@config": `${root}config`,
        "@content": `${root}content`,
        "@data": `${root}data`,
        "@seo": `${root}seo`,
      },
    },
  },
});
