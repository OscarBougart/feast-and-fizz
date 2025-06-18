/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
    extend: {
      colors: {
        farbfont:'#fafdfd', //font and buttons white
        farb2:'#',
        farb3:'#fafdfd',//title logo
        farbbutton:'#e95d54', //button hover
        farbnav:'#07b0ac',//background of nav bar
        farbgbutton:'#79DFDE' ,
        farb4:'#00A6FB',//index change of color
        farb6:'#0582CA',//change of color index
        farbborders:'fafdfd'
      },
      
      
      
    /*  colors: {
        farb1:'#DCF3FF', // Pale Sky Blue
        farb2:'#E1E5F2', // Light Grayish Blue
        farb3:'#BFDBF7', // Light Baby Blue
        farb4:'#00A6FB', // Vivid Blue
        farbbutton:'#e63946', // Red Salsa
        farb6:'#0582CA', // Strong Blue
      },
      colors: {
        farb1:'#0487e2', // Azure Blue
        farb2:'#0463ca', // Royal Blue
        farb3:'#b0d6f5', // Pale Sky Blue
        farb4:'#65c2f5', // Sky Blue
        farbbutton:'#09b1ec', // Capri Blue
        farb6:'#09b1ec', // Capri Blue
      },
      colors: {
        farb1:'#f91a47', // Raspberry Red
        farb2:'#1b47a5', // Cobalt Blue
        farb3:'#bceadf', // Pale Aqua
        farb4:'#5f7ab7', // Blue Gray
        farbbutton:'#1db9ce', // Strong Cyan
        farb6:'#1db9ce', // Strong Cyan
      },
      colors: {
        farb1:'#ffb7c5', // Cotton Candy Pink
        farb2:'#008081', // Teal
        farb3:'#fe705d', // Coral
        farb4:'#6b59cd', // Medium Purple
        farbbutton:'#00cc99', // Caribbean Green
        farb6:'#00cc99', // Caribbean Green
      },
      colors: {
        farb1:'#1093b5', // Blue Green
        farb2:'#c3924c', // Gold Brown
        farb3:'#96ddec', // Pale Cyan
        farb4:'#a74353', // Rosewood
        farbbutton:'#ead3c9', // Pale Peach
        farb6:'#ead3c9', // Pale Peach
      },
      colors: {
        farb1:'#f28e65', // Sandy Orange
        farb2:'#efd96f', // Pastel Yellow
        farb3:'#0b9b8a', // Deep Teal
        farb4:'#f18788', // Light Coral
        farbbutton:'#144351', // Dark Slate Blue
        farb6:'#144351', // Dark Slate Blue
      },
      colors: {
        farb1:'#e95d54', // Bittersweet Red
        farb2:'#66c0a4', // Green Sheen
        farb3:'#f9e9a0', // Light Gold
        farb4:'#f9cfc8', // Pale Pink
        farbbutton:'#1a7482', // Deep Cyan
        farb6:'#ead3c9', // Pale Peach
      },  */
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
