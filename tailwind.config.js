module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        primary:['Oswald'],
        secondary:['Racing sans one']
      },
      colors : {
        primary:['#FF4E3C'],
        Secondary : ['#FF9C06'],
        third:['#2F3D46'],
        forth :['#1C252C']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
