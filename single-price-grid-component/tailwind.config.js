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
        'cyan-custom': 'hsl(179, 62%, 43%)',
        'bright-yellow': 'hsl(71, 73%, 54%)',
        'light-gray': 'hsl(204, 43%, 93%)',
        'grayish-blue': 'hsl(218, 22%, 67%)'
      }
    }
  },
  variants: {
    extend: {},
  },
}
