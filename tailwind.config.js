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
        Background: ['#2F3D46']
      }
    },
  },
  variants: {
    extend: { animation: ['motion-safe']},
  },
  plugins: [require('@tailwindcss/forms')],
}
