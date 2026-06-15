export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    port: 3001
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  image: {
    domains: ['coresg-normal.trae.ai', 'images.unsplash.com']
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'NeutourX - Premium Travel & Tourism',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'NeutourX is a modern travel and tourism company dedicated to delivering seamless travel experiences at affordable prices.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})
