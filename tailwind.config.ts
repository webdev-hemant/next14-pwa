import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colors: {
          // Primary Colors
          "soft-blue": "#A3D1E8",
          "soft-green": "#A8D5BA",

          // Accent Colors
          "light-gray": "#F1F1F1",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
