import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // If you have enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar), you can disable generating the shim for *.vue files:
  typescript: {
    shim: false,
  },
  modules: ['nuxt-windicss'],
  app: {
    head: {
      title: 'The Best Developer Online Community in China',
      charset: 'utf-8',
      viewport:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      noscript: [{ children: 'Javascript is required!' }],
    },
  },
  css: ['@/assets/css/main.scss'],
});
