const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0505F",
        secondary: "#FFC445",
        light: "#FFFFFA",
        paper: "#F6F5F1",
        darkblue: "#071F3D",
        dark: "#020C17",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
