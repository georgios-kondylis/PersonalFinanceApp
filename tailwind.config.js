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
        '950' : '950px' 
      },
    },
  },
  plugins: [],
}
