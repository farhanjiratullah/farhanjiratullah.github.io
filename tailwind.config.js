/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#FBFBFA", dark: "#0B0F19" },
        surface: { DEFAULT: "#F2F2F0", dark: "#141A28" },
        ink: { DEFAULT: "#111318", dark: "#F4F6FB" },
        accent: { DEFAULT: "#4F46E5", dark: "#818CF8" },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1280px" },
      spacing: {
        0.75: "0.1875rem", // 3px
        2.75: "0.6875rem", // 11px
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        6.5: "1.625rem", // 26px
        7.5: "1.875rem", // 30px
        13: "3.25rem", // 52px
        18: "4.5rem", // 72px
        26: "6.5rem", // 104px
      },
    },
  },
  plugins: [],
};
