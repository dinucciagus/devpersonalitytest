/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      pink1: "#e63888",
      gray1: "#DCDDF9",
      darkblue1: "#171c8f",
      white: "#FFFFFF",
      violet1: "#48188D",
    },
    extend: {
      keyframes: {
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        wave: "wave 13s ease infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
