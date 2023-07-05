/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {},
    colors: {
      'penn-blue':'#121E50',
      'pure-indigo': '#48009A',
      'dark-violet': '#1D0041',
      'silver': '#B1AAAA',
      'danger-red': '#DC0707',
      'pure-green': '#026F00',
      'golden-yellow': '#F4BF00',
      'violet-blue': '#2642AF',
      'light-gray': '#EEEEEE',
      teal: colors.teal,
      cyan: colors.cyan,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      emerald: colors.emerald,
      lime: colors.lime,
      amber: colors.amber,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

