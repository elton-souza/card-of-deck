/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: {'max':'480px'},
      md: {'max':'768px'},
      lg: {'max':'976px'},
      xl: {'max':'1440px'}
    },
    extend: {
      colors: {
        primary: ' #00303F',
        secondary: '#5BB0CA',
        tertiary: '#E3C232',
      }
    },

  },
  plugins: [],
}
