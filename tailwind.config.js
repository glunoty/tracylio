/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [""],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      colors: {
        background: colors.neutral[900],
        foreground: colors.neutral[200],
        primary: colors.lime[400],
        primaryForeground: colors.zinc[50],
        accent: "#84a9ac",
        muted: colors.zinc[400],
        border: colors.neutral[800],
      },
    },
  },
  plugins: [],
};
