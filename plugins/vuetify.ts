import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    display: {
      mobileBreakpoint: "md",
    },
    theme: {
      defaultTheme: "sisifo",
      themes: {
        sisifo: {
          dark: false,
          colors: {
            background: "#fafafa",
            primary: "#2660a4",
            secondary: "#44af69",
            error: "#f71735",
            info: "#f0a202",
            success: "#44af69",
            warning: "#FB8C00",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
