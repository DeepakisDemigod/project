/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vuejs: '#7829CD',
        dark: '#111111'
      }
    },
  },
  plugins: [],
}