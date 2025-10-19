// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/index.css", "swiper/css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    baseUrl: "",
    locales: [
      { code: "uz", iso: "uz", file: "uz.json" },
      { code: "ru", iso: "ru", file: "ru.json" },
    ],
    lazy: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      fallbackLocale: "uz",
    },
    defaultLocale: "uz",
    strategy: "prefix_and_default",
  },
});
