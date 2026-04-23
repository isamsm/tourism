/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBlue': '#EFF5FF',
        'textBlue': '#00062C',
        'bgBlueDarker': '#E5EFFF'
      }
    },
  },
  plugins: [],
}