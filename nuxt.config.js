export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ukraine Support',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'primeicons/primeicons.css',
    'primevue/resources/primevue.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      '@nuxtjs/i18n',
      {
        langDir: 'translations/',
        locales: [
          {
            code: 'de',
            name: 'Deutsch',
            file: 'de-DE.js',
            iso: 'de-DE',
          },
          {
            code: 'en',
            name: 'English',
            file: 'en-GB.js',
            iso: 'en-GB',
          },
        ],
        defaultLocale: 'en',
        fallbackLocale: 'en',
        strategy: 'no_prefix',
        detectBrowserLanguage: {
          useCookie: true,
          fallbackLocale: 'en',
          redirectOn: 'root',
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:4000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [ 'primevue' ]
  },

  publicRuntimeConfig: {
    api: process.env.API_URL || 'http://localhost:4000'
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: false,
          user: { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  },
}
