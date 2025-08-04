export default defineNuxtConfig({
  tailwindcss: { exposeConfig: true },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "TamPhan | Front-End Developer and UI Designer",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  googleFonts: {
    families: {
      Montserrat: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.ts",
        name: "English",
      },
      {
        code: "vi",
        file: "vi-VN.ts",
        name: "Vietnamese",
      },
    ],
    defaultLocale: "en",
  },
});
