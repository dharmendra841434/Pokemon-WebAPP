/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        cardShadow: "0px 0px 39px -7px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
