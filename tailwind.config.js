const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
      },
      linearBorderGradients: ({theme }) => ({
        directions: { // defaults to these values
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors: {
          'light-blue': [colors.indigo[200], colors.lime[300]],
        },
      }),  
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
}
