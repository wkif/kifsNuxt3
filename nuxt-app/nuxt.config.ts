// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    // "@": "/<rootDir>",
    // assets: "/<rootDir>/assets",
    // public: "/<rootDir>/public",
  },
  app: {
    head: {
      title: "kif",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: [],
    },
  },
  srcDir: "src/",
  modules: ["@pinia/nuxt"],
});
