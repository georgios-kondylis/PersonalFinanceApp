/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'superwide': '1450px', // Custom breakpoint for large screens
        '950' : '950px',
        '1250': '1250px'
      },
      colors:{
        Green:'#277c78',
        Beige1:'#F8f4f0',
        Blue:'#3f82b2',
      }
    },
  },
  plugins: [],
}
