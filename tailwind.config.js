/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.html"],
  theme: {
    extend: {
      aspectRatio: {
        "16/9": "16 / 9",
      },
      inset: {
        "25%": "25%",
        "55%": "55%",
        "85%": "85%",
        "115%": "115%",
        "145%": "145%",
        "175%": "175%",
      },
      transitionDelay: {
        400: "400ms",
        500: "500ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
