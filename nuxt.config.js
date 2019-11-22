
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css" },
      { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Barlow+Condensed:400,500|Roboto&display=swap" },
      { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap" },
      { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" },
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js" },
      { src: "/assets/js/owl.carousel.min.js" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" },
      { src: "/assets/js/toastr.min.js" },
      { src: "/assets/js/custom.js" },
      { src: "/assets/js/slick.min.js" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/owl.carousel.min.css',
    '@/assets/themify-icons.css',
    '@/assets/css/owl.theme.default.min.css',
    '@/assets/css/style.css',
    '@/assets/css/slick.css',
    '@/assets/css/flaticon.css',
    '@/assets/css/all.css',
    '@/assets/css/animate.css',
    '@/assets/css/toastr.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/main.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
