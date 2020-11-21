const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV == "production",
    content: [
      './public/index.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan
      }
    }
  },
  variants: {
    extend: {},
  },
}
