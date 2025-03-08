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
        background: "var(--background)",
        foreground: "var(--foreground)",
        redShade: "var(--red-shade)",
        greenShade:"var(--green-shade)",
        blueShade:"var(--blue-shade)",
        yellowShade:"var(--yellow-shade)",
        peachShade:"var(--peach-shade)",
      },
    },
  },
  plugins: [],
} satisfies Config;
