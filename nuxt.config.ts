// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : ['@mdi/font/css/materialdesignicons.min.css','/assets/style/global.css'],
  build :{
    transpile : ['vuetify']
  },
    vite: {
      define: {
        "process.env.DEBUG" : false
      },
        css: {
          preprocessorOptions: {
            sass: {
              additionalData: '@use "@/assets/_colors.sass" as *\n'
            }
          }
        }
      }
})
