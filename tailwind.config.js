module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat'],
        secondary: ['Racing sans one']
      },
      colors: {
        primary: ['#FF4E3C'],
        Secondary: ['#FF9C06'],
        third: ['#2F3D46'],
        forth: ['#1C252C'],
        Background: ['#F0F0F5']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
