
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ["Poppins-Regular"],
      },
      colors: {
        "alpha": "#191627",
        "teta" : "#5c45fd",
        "beta": "#a89bff",
        "delta": "#f5f5f5",
      },
    },
  },
  plugins: [],
}
