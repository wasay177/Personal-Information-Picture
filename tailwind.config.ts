import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   extend: {
      fontFamily: {
        'fascinate': ['Fascinate Inline', 'system-ui',],
        'shadows': ['Shadows Into Light', 'cursive',],
        'protest': ['Protest Guerrilla', 'sans-serif',],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
