// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:4500/v1',
      jwtKey: process.env.NUXT_PUBLIC_JWT_KEY || '_devibe_current_jwt_',
      authStateKey:
        process.env.NUXT_PUBLIC_AUTH_STATE_KEY || '_devibe_current_auth_state_',
      systemUserKey:
        process.env.NUXT_PUBLIC_SYSTEM_USER_KEY ||
        '_devibe_current_system_user_',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'The Best Developer Community',
      titleTemplate: '%s | The Best Developer Community',
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
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/main.scss',
    '@/assets/css/typography.scss',
    '@/assets/css/animation.scss',
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@vueuse/nuxt',
    '@unocss/nuxt',
  ],
  // If you have enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar), you can disable generating the shim for *.vue files:
  typescript: {
    shim: false,
  },
});
