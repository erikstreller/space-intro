const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1250px" },
      md: { max: "800px" },
      sm: { max: "420px" },
    },
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
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Port Lligat Sans", ...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        overlay: "clamp(64px, 15vw, 288px)",
      },
      margin: {
        11: "44px",
        26: "104px",
      },
      width: {
        22: "88px",
      },
    },
  },
  plugins: [],
}
