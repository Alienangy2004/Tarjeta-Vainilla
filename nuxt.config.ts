// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Importación global de tus estilos CSS para que el fondo dinámico funcione en toda la app
  css: [
    '~/assets/css/main.css'
  ],

  // Configuración del encabezado de la página (Head)
  app: {
    head: {
      title: 'Tarjeta de Presentación - Angel Martinez',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Proyecto de Tarjeta de Presentación - Semestre 9' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Importación de la fuente Poppins para que los estilos del CSS carguen correctamente
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap' 
        }
      ]
    }
  },

  // Configuración técnica y de desarrollo
  compatibilityDate: '2024-11-01',
  
  devtools: { 
    enabled: true 
  }
})