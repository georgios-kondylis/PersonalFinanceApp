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
        GREEN:'#277c78',
        BEIGE:'#F8f4f0',
        BLUE:'#3f82b2',
        RED:'#c94736',
      }
    },
  },
  plugins: [],
}
