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
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
