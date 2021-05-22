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
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "very-light-gray": "hsl(0, 0%, 95%)"
      },
      fontFamily: {
        'bsd-700': 'Big Shoulders Display',
        'ld-400': 'Lexend Deca'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
