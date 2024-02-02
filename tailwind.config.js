/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f6f6f6",
        secondary: "#e8e8e8",
        secondary2: "#c2c2c2",
        tertiary: "#070014",
        tertiary2: "#220061",
        quarto: "#990100",
        quinto: "#b90504",
        sexto: "#7B2CBF",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      backdropBlur: {
        xs: '2px', 
      },
    },
  },
  plugins: [],
};