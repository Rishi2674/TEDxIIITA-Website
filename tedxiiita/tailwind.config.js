/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
    },
      colors: {
        'footer-gray': '#2E2E2E',
        'footer-content': '#fff',
      },
    },
  },
  plugins: [],
}