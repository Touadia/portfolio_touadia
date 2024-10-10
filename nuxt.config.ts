// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/index.css",'@fortawesome/fontawesome-free/css/all.min.css'],
  

})
