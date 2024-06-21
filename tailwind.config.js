/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}","./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailgrids/plugin'),

  ],
}
