const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1600px" },
      lg: { max: "1250px" },
      md: { max: "800px" },
      sm: { max: "420px" },
    },
    extend: {
      colors: {
        primary: "#E0505F",
        secondary: "#FFC445",
        light: "#FFFFFA",
        paper: "#FAFAFA",
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
        "section-title": "clamp(36px, 4vw, 48px)",
        "section-description": "clamp(20px, 2vw, 24px)",
      },
      margin: {
        11: "44px",
        26: "104px",
      },
      width: {
        22: "88px",
      },
      maxWidth: {
        "section-description": "clamp(250px, 30vw, 512px)",
        "section-description-md": "clamp(250px, 70vw, 512px)",
      },
      inset: {
        center: `calc(50% - 65px)`,
      },
    },
  },
  plugins: [],
}
