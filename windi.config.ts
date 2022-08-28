import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0060FF',
          light: '#0060FF',
          dark: '#0060FF',
        },
        secondary: {
          DEFAULT: '#007DFF',
          light: '#007DFF',
          dark: '#007DFF',
        },
        accent: {
          DEFAULT: '#008DFC',
          light: '#008DFC',
          dark: '#008DFC',
        },
        semantic: {
          DEFAULT: '#2E2D4B',
          light: '#2E2D4B',
          dark: '#E1E1E1',
        },
        base: {
          lightest: '#F7F7F7',
          lighter: '#E7E7E7',
          light: '#D7D7D7',
          DEFAULT: '#FFFFFF',
          dark: '#2B303B',
          darker: '#252932',
          darkest: '#1A1D23',
        },
      },
    },
  },
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
    'btn-primary': 'text-white bg-primary hover:bg-secondary',
    'btn-loading': 'text-white bg-green-500 cursor-not-allowed',
    input: 'py-2 px-3 rounded',
    'input-bordered': 'border border-black dark:border-dark-800',
  },
});
