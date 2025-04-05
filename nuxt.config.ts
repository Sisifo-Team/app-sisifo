import { resolvePath } from "nuxt/kit";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Sisifo App",
      htmlAttrs: {
        lang: "es",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },

  typescript: {
    shim: false,
  },

  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    "assets/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  build: {
    transpile: ["vuetify"],
  },

  modules: ["@pinia/nuxt", "@vite-pwa/nuxt"],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  hooks: {
    "vite:extendConfig": async (config) => {
      config?.plugins?.push(
        vuetify({
          styles: { configFile: await resolvePath("./settings.scss") },
        })
      );
    },
  },
});
