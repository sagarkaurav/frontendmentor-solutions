// const colors = require('tailwindcss/colors')
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
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)'
      }
    }
  },
  variants: {
    extend: {},
  },
}
