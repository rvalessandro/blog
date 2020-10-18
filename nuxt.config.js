export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  server: {
    port: 3001
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Raffi Verrel Alessandro",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Raffi Verrel Alessandro. A student, a learner, and an aspiring tech leader."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "nuxt-compress"
  ],
  "nuxt-compress": {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    injected: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "https://blog-api.rvalessandro.com"
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  /**
   * PWA STUFF
   */
  pwa: {
    manifest: {
      name: "Raffi Verrel Alessandro",
      icons: [{ source: "./static/icon.png" }],
      short_name: "rvalessandro",
      description: "rvalessandro's personal website",
      start_url: "https://rvalessandro.com/"
    },
    meta: { theme_color: "#fff" },
    workbox: {
      dev: true,
      runtimeCaching: [
        {
          urlPattern: "https://blog-api.rvalessandro.com/*",
          strategyOptions: {
            cacheName: "articles-cache"
          }
        }
      ]
    }
  }
};
