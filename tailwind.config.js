/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gt: ["GT Super Text", "sans-serif"],
        poppins: ["Poppins", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        neucha: ["Neucha", "cursive"],
      },
      animation: {
        bounceSm: "bounceSm 0.3s ease-out",
      },
      keyframes: {
        bounceSm: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
      },

      colors: {
        primary: "#191a1b",
        secondary: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
