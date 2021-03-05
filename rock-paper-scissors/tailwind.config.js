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
        'radial-gradient': 'linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
