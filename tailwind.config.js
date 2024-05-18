/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "custom-grey": "#EDEDED",
      "custom-grey-dark": "#757575",
      "custom-grey-3": "#E3E3E3",
      "custom-grey-4": "#545454",
      "black-1": "#0F0F0F",
      "green-1": "#0B5459",
      "add-cart-color": "#C5B4F5",
      "add-cart-text": "#6E42E5",
      white: colors.white,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      slate: colors.slate,
      red: colors.red,
      orange: colors.orange,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      violet: colors.violet,
      green: colors.green,
    },
  },
  plugins: [],
};
