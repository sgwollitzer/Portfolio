/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.js', 
  ],
  theme: {
    
    extend: {
      colors:{
      "navy": "#1B1833", 
      "neon-red": "#608BC1",
      "neon-yellow": "#FAEF5D",
      "darker-red": "#133E87",

    },
    fontFamily: {
        'custom': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
'gradient-radial': 'radial-gradient(circle, #1B1833, #1c1a38 )'
      }
    },
  },
  plugins: [],
}

