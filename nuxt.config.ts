// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // Importación global de tus estilos CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Configuración del encabezado de la página (Head)
  app: {
    head: {
      title: 'Tarjeta de Presentación - Semestre 9',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Configuración técnica y de desarrollo
  compatibilityDate: '2024-11-01',
  devtools: { 
    enabled: true 
  }
})
