/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container : {
      center : true,
      screens:{
        lg: '1280px',
        xl: '1280px',
        '2xl': '1280px',
      }
    },
    extend: {
      colors : {
        "neu-yellow" : "#FFFF00",
        "neu-pink" : "#FF00F6",
        "neu-purple" : "#6A08CB",
        "neu-white" : "#FFF9E4",
        "neu-orange" : "#FFDC58",
        "neu-blue" : "#3300FF",
        "neu-red3" : "#FEA079",
        "neu-pink3" : "#FFC0CA",
        "neu-purple3" : "#C5A1FF",
        "neu-blue3" : "#A7DCD8",
        "neu-green3" : "#BAFDA2",
        "neu-blue4" : "#DBF5F0",
        "neu-green4" : "#C7F3BB",
        "neu-pink4" : "#FBDFFF",
        "neu-purple2" : "#A488EF", 


      },
      width: {
        '1080' : '1080',
        '30' : '120',
        '520' : '32.5rem',
        '88' : '23rem',
      },
      fontSize :{
        "40" : "2.5rem",
        "32" : "2rem"
      },
      borderRadius: {
        '50': '50px',
        '40' : '40px',
        '20' : '20px',
        '80' : '80px',
      },
      height :{
        "quiz-h" : "768px"
      },
      spacing : {
        '26' : '26px'
      }
    },
  },
  plugins: [],
}
