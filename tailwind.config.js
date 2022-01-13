module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      anton: ["Mochiy Pop P One", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
