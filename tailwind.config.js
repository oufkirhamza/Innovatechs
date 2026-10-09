/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Palatino Linotype', 'Palatino', 'Iowan Old Style', 'Georgia', 'serif'],
      },
      colors: {
        alpha: "#191627",
        teta: "#5c45fd",
        beta: "#a89bff",
        delta: "#f5f5f5",
        ink: "#F7F5FC",
        muted: "#B8B2C4",
        raised: "#2D2A39",
      },
    },
  },
  plugins: [],
}
