/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
    extend: {
      colors: {
        farb1:'#DCF3FF',
        farb2:'#E1E5F2',
        farb3:'#BFDBF7',
        farb4:'#00A6FB',
        farbbutton:'#e63946',
        farb6:'#0582CA',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],   
        kapakana: ['Kapakana', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        spectral: ['Spectral', 'serif'],
      },
    },
  },
  plugins: [],
}
