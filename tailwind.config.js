/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDC238",
        primary: "#1e1e1e",
        secondary: "#fefefe",
      },
      fontFamily: {
        anton: "var(--font-anton)",
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
