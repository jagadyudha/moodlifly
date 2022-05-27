const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38A678",
        secondary: "#DAFFEF",
        accent: "#926EA2",
      },
    },
  },
  plugins: [],
};
