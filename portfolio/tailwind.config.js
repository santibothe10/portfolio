/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        appear: "appear 2s ease-in",
        marka: "marka 0.5s ease-in",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "25%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0",
          },
          "75%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
        },
        marka: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: ".6",
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
