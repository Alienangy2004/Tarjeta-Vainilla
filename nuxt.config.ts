// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. Configuración de la ruta base para GitHub Pages
  app: {
    // IMPORTANTE: Si tu repo se llama 'Tulipan3D', cambia esto a '/Tulipan3D/'
    baseURL: '/Tarjeta-Vainilla/', 
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

  // 2. Importación global de estilos
  css: [
    '~/assets/css/main.css'
  ],

  // 3. CONFIGURACIÓN PARA THREE.JS (Añadido para corregir posibles errores)
  build: {
    transpile: ['three']
  },

  // 4. Configuración técnica
  compatibilityDate: '2024-11-01',
  
  devtools: { 
    enabled: true 
  }
})