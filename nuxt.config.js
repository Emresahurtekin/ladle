export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  strapi: {
    url: 'https://ladle-backend-production.up.railway.app',
    prefix: '/api',
    version: 'v4'
  },

  app: {
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' 
        }
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  compatibilityDate: '2025-01-07'
})