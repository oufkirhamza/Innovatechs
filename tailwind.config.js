
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["Montserrat-VariableFont"],
      },
      colors: {
        "alpha": "#191627",
        "teta" : "#5c45fd",
        "beta": "#a89bff",
        "delta": "#161616",
      },
    },
  },
  plugins: [],
}
