
export default defineNuxtConfig({
  nitro: {
    preset: 'static',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      routes: ['/', '/biography', '/sticker', '/contacts', '/cases', '/services'],
      crawlLinks: true
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/luis-konsultant/' : '/',
    buildAssetsDir: 'assets/',
    
  },
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2025-09-22',
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
