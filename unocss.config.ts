import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  theme: {
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
  shortcuts: [
    { btn: 'py-2 px-3 rounded shadow' },
    { 'btn-primary': 'text-white bg-primary hover:bg-secondary' },
    { 'btn-loading': 'text-white bg-green-500 cursor-not-allowed' },
    { input: 'py-2 px-3 rounded' },
    { 'input-bordered': 'border border-black dark:border-dark-800' },
    // [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
