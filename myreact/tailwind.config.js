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
      backgroundColor:{
        'Main': '#4B8EB5',
        'Custom1': '#6bd4bb',
        'Custom2': '#65B77C',
        'Custom3': '#DF8888',
        'Custom4': '#A247C1',
        'Custom5': '#CEB846'
      },
      colors:{
        'Main': 'mix-blend-mode: difference;'
      }
    },
  },
  plugins: [],
}
