/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100% / <alpha-value>)",
      desaturatedblue: {
        500: "hsl(225, 21%, 49% / <alpha-value>)",
        600: "hsl(224, 28%, 35% / <alpha-value>) ",
        700: "hsl(222, 26%, 31% / <alpha-value>)",
        800: "hsl(223, 31%, 20% / <alpha-value>)",
        900: "hsl(224, 36%, 15% / <alpha-value>)",
      },
      red: "hsl(6, 63%, 50% / <alpha-value>)",
      darkRed: "hsl(6, 70%, 34% / <alpha-value>)",
      lightGrayishOrange: "hsl(30, 25%, 89% / <alpha-value>)",
      grayishOrange: "hsl(28, 16%, 65% / <alpha-value>)",
      darkGrayishBlue: "hsl(221, 14%, 31% / <alpha-value>)",
      gray: {
        50: "hsl(0, 0%, 93% / <alpha-value>)",
        100: "hsl(0, 0%, 90% / <alpha-value>)",
        150: "hsl(0, 5%, 81% / <alpha-value>)",
      },
      darkCyan: "hsl(185, 42%, 37% / <alpha-value>)",
      veryDarkCyan: "hsl(185, 58%, 25% / <alpha-value>)",
      orange: "hsl(25, 98%, 40% / <alpha-value>)",
      darkOrange: "hsl(25, 99%, 27% / <alpha-value>)",
      lightGrayishYellow: "hsl(45, 7%, 89% / <alpha-value>)",
      darkGrayishOrange: "hsl(35, 11%, 61% / <alpha-value>)",
      veryDarkGrayishYellow: "hsl(60, 10%, 19% / <alpha-value>)",
      violet: {
        600: "hsl(268, 47%, 21% / <alpha-value>)",
        700: "hsl(281, 89%, 26% / <alpha-value>)",
        900: "hsl(268, 71%, 12% / <alpha-value>)",
        950: "hsl(268, 75%, 9% / <alpha-value>)",
      },
      magenta: {
        vivid: "hsl(285, 91%, 52% / <alpha-value>)",
        dark: "hsl(290, 70%, 36% / <alpha-value>)",
      },
      lightYellow: "hsl(52, 100%, 62% / <alpha-value>)",
      veryDarkBlue: "hsl(198, 20%, 13% / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
