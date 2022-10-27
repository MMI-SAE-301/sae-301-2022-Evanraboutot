const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'josefin-sans': ['josefin-sans', 'sans-serif'],
      },
      "borderRadius": {
       "none": "0",
       "xs": "0.3125rem",
       "sm": "0.39533132314682007rem",
       "default": "0.4027424454689026rem",
       "lg": "0.40274250507354736rem",
       "xl": "0.5585151314735413rem",
       "2xl": "0.7776639461517334rem",
       "3xl": "1.0625rem",
       "4xl": "1.5625rem",
       "5xl": "1.6664299964904785rem",
       "6xl": "1.9375rem",
       "7xl": "2.1875rem",
       "8xl": "2.362144708633423rem",
       "9xl": "2.375rem",
       "10xl": "2.53806734085083rem",
       "11xl": "2.5625rem",
       "12xl": "2.636322021484375rem",
       "13xl": "2.6849496364593506rem",
       "14xl": "2.805046796798706rem",
       "15xl": "3.5625rem",
       "16xl": "3.6875rem",
       "17xl": "3.8125rem",
       "18xl": "4.832910060882568rem",
       "full": "9999px"
      }
     },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
  ],
};
