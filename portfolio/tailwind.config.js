/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-yellow':'#faf4d7',
        'custom-green':'#062300',
        'custom-green1':'#021207',
        'custom-white': '#f4edd8',
        'custom-white1': '#d4e08c',
        'custom-red': '#bc3e31',
      }
    },
  },
  plugins: [],
}

