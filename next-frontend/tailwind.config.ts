import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#242526",
        main: "#ffcd00",
        error: "#f35759",
        success: "#366912",
      },
      textColor: {
        primary: "#242526",
        contrast: "#ffffff"
      }
    },
  },
  plugins: [],
} satisfies Config;
