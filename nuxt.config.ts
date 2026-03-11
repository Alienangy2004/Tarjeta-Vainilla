// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. Configuración de la ruta base para GitHub Pages
  // Esto asegura que el CSS y las imágenes se busquen en la subcarpeta correcta
  app: {
    baseURL: '/Tarjeta-Vainilla/', // IMPORTANTE: Debe coincidir con el nombre de tu repo en GitHub
    head: {
      title: 'Tarjeta de Presentación - Angel Martinez',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Proyecto de Tarjeta de Presentación - Semestre 9' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap' 
        }
      ]
    }
  },

  // 2. Importación global de tus estilos CSS
  css: [
    '~/assets/css/main.css'
  ],

  // 3. Configuración técnica y de desarrollo
  compatibilityDate: '2024-11-01',
  
  devtools: { 
    enabled: true 
  }
})