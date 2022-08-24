import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/typography')({
      dark: true,
    }),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
  shortcuts: {
    btn: 'py-2 px-3 rounded shadow',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    input: 'py-2 px-3 rounded',
    'input-bordered': 'border border-black dark:border-dark-800',
  },
});
