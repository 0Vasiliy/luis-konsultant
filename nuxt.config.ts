// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  }
})
