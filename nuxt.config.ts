// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/css/main.css'],
  modules: ['@nuxtjs/seo', '@nuxtjs/tailwindcss'],
  site: {
    url: 'https://vantanto.github.io',
    name: 'VanTanto',
  },
})
