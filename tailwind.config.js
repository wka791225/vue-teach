/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '520px',
      'tablet': '920px',
    },
    fontFamily: {
      'big':['Rubik+Doodle+Shadow'],
    },
  },
  plugins: [],
}

