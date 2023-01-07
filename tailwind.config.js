const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: ['Inter', ...fontFamily.sans],
      colors: {
        primary: {
          // Customize it on globals.css :root

          200: 'rgb(var(--tw-yrf-primary-200))',
          300: 'rgb(var(--tw-yrf-primary-300))',
          400: 'rgb(var(--tw-yrf-primary-400))',
          500: 'rgb(var(--tw-yrf-primary-500))',
        },
        dark: '#222222',
      },
    },
  },
  plugins: [],
};
