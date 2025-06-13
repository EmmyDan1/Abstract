/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        neucha: ["Neucha", "cursive"],
      },

      colors: {
        primary: "#191a1b",
        secondary: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
