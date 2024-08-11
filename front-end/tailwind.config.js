/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'custom-pink': '#FF23DC',
        'custom-green': '#1BF28B',
        "custom-pink-sec": "#FF00E5",
        "custom-blue": "#608EE2",
        "custom-orange": "#F0A20A",
        "custom-pink22": "#F60269",
        "custom-green-lucky": "#23EC11",
      },
    },
  },
  plugins: [],
}