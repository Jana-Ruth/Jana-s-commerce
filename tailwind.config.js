/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        100: '30rem',
      },
      colors: {
        main: '#181a53',
        subMain: '#0f68db',
        dryMain: '#2f85f5',
        text: '#f2f6fa',
        border: '#e8edee',
        textGray: '#A0A0A0',
        dry: '#f8f8fa',
        greyed: '#f3f3f7',
        "primary-200" : "#ffbf00",
        "primary-100" : "#ffc929",
        "secondary-200" : "#00b050",
        "secondary-100" : "#0b1a78"
    
      },
    },
  },
  plugins: [],
};
