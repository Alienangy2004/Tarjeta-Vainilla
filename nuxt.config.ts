// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enlaza tu archivo de estilos global
  css: [
    '~/assets/css/main.css'
  ],

  // Configuración del Head (lo que aparece en la pestaña y metadatos)
  app: {
    head: {
      title: 'Mi Tarjeta de Presentación - Semestre 9', // El título de la pestaña
      meta: [
        { name: 'description', content: 'Proyecto SPA creado con Nuxt' }
      ],
      link: [
        // Aquí conectarías tu favicon si está en la carpeta public
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
//./app/