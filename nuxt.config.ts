// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    baseURL: '/Tarjeta-Vainilla/', 
    head: {
      title: 'Portafolio 3D - Angel Martinez',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@tresjs/nuxt'],
  build: {
    transpile: ['three', 'gsap']
  },
  compatibilityDate: '2024-11-01'
})