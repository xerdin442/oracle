/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./project/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "clash-display-bold": ["clash-display-bold", "serif"],
        "clash-display-medium": ["clash-display-medium", "serif"],
      }
    },
  },
  plugins: [],
}

