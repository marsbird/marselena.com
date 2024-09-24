import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
    },
    colors: {
      light: '#d6dbdc',
      dark: '#242125',
    },
  },
  plugins: [],
} satisfies Config;
