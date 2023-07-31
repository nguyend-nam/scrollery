/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        word: {
          light: "#6B7280",
          main: "#334155",
        },
        v2: {
          green: {
            light: "#03FBA2",
            normal: "#0DBBA5",
            dark: "#02A8A8",
            extraDark: "#018383",
          },
          blue: {
            extraDark: "#26588a",
            dark: "#2B2992",
            normal: "#183FE1",
            light: "#55E3FF",
          },
          purple: {
            dark: "#581EFF",
          },
          rose: {
            normal: "#FF3565",
          },
        },
      },
    },
  },
  plugins: [],
};
