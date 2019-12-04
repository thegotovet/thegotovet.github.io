
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/owl.carousel.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/themify-icons.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/owl.theme.default.min.css"
      },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/style.css" },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/slick.css" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/themify-icons.css"
      },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/flaticon.css" },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/all.css" },
      { rel: "stylesheet", type: "text/css", href: "/assets/css/animate.css" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/css/toastr.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Barlow+Condensed:400,500|Roboto&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bree+Serif&display=swap"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.4.1.min.js" },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"
      },
      { src: "/assets/js/owl.carousel.min.js" },
      { src: "/assets/js/toastr.min.js" },
      { src: "/assets/js/custom.js" },
      { src: "/assets/js/slick.min.js" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  server: {
    host: "",
    port: 8080
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/main"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
    },
    extractCSS: process.env.NODE_ENV !== "development"
  }
};
