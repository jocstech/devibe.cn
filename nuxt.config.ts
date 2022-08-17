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
      htmlAttrs: [
        {
          lang: 'en',
        },
      ],
      title: 'The Best Developer Online Community in China',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      noscript: [{ children: 'Javascript is required!' }],
      link: [
        ...[57, 60, 72, 76, 114, 120, 144, 152, 180].map((size: number) => ({
          rel: 'apple-touch-icon',
          sizes: `${size}x${size}`,
          href: `/favicons/apple-icon-${size}x${size}.png`,
        })),
        ...[16, 32, 96].map((size: number) => ({
          rel: 'icon',
          type: 'image/png',
          sizes: `${size}x${size}`,
          href: `/favicons/favicon-${size}x${size}.png`,
        })),
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicons/android-icon-192x192.png',
        },
        { rel: 'manifest', href: '/favicons/manifest.json' },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#ffffff' },
        {
          name: 'msapplication-TileImage',
          content: '/favicons/ms-icon-144x144.png',
        },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },
  css: ['@/assets/css/main.scss', '@/assets/css/animation.scss'],
});
