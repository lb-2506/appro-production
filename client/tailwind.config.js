/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // COLORS STUDIO
      white: "#FFFFFF",
      black: "#000000",
      darkGreen: "#002317",
      green: "#59DC6C",
      creamy: "#FFFFE3",
      pink: "#E2A5FF",
      turquoise: "#65EFDF",
      orange: "#FF9054",

      // COLORS FOOD
      darkBlue: "#001D25",
      lightBlue: "#0095FF",
      lightGrey: "#F7F8F8",

      // TRANSPARENT COLORS
      transparentWhite: "#ffffff26",
      transparentTurquoise: "#D1FBF6",
      transparentPink: "#F7E4FF",
      transparentGreen: "#CEF5D3",
      transparentOrange: "#FFDECC",
    },
    screens: {
      mobile: "768px",
      tablet: "1024px",
      desktop: "1220px",
      ultraWide: "1400px",
    },
    extend: {},
  },
  plugins: [],
};
