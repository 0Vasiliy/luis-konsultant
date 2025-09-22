// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'static',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      routes: ['/', '/qr-generator'],
      crawlLinks: true
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/luis-konsultant/' : '/',
    
  },
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2024-09-20',
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api'
        : '/api',
      baseURL: process.env.NODE_ENV === 'production' ? '/luis-konsultant/' : '/',
    }
  },

})
