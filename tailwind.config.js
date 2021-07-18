module.exports = {
  purge: ["/src/index.css", './src/**.js', './src/**.js', './src/components/**.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
