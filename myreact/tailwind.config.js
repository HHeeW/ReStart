/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      boxShadow: {
        'defaultBox': '0 0px 10px 5px rgba(0, 0, 0, 0.1)',
        'hoverBox': '0 0px 10px 10px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
