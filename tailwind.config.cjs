/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      satoshi: ['Satoshi-Variable', 'sans-serif'],
      satoshiItalic: ['Satoshi-VariableItalic', 'sans-serif'],
    },
    colors: {
      light: '#d6dbdc',
      dark: '#242125',
    },
  },
  plugins: [],
};
