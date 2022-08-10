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
      link: [
        {
          rel: 'stylesheet',
          href: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css',
        },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      noscript: [{ children: 'Javascript is required' }],
    },
  },
  css: ['@/assets/css/main.scss'],
});
