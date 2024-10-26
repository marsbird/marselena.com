import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    colors: {
      light: "#d6dbdc",
      dark: "#242125",
    },
  },
} satisfies Config;
