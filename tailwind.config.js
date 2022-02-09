const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        100: '28rem',
        110: '32rem',
        116: '40rem',
        120: '44rem',
        124: '50rem',
        128: '54rem',
        400: '25rem',
        500: '31.25rem',
        'bg-height': '40rem',
      },
      colors: {
        'cool-gray': colors.gray,
        blue: Object.assign(colors.blue, {
          4: '#010124',
          5: '#01011F',
        }),
        violet: Object.assign(colors.violet, {
          1: '#DFD8ED',
          8: '#5F3EA3',
          9: '#4C3282',
        }),
        blue: Object.assign(colors.blue, {
          4: '#010124',
          5: '#01011F',
        }),
        gray: Object.assign(colors.neutral, {
          0.25: '#F8F8F8',
          0.5: '#E6E6E9',
          1: '#CCCCD3',
          2: '#B3B3BE',
          3: '#9999A8',
          4: '#808092',
          5: '#67677C',
          6: '#4D4D66',
          7: '#343451',
          8: '#1A1A3B',
          9: '#010125',
        }),
        pink: Object.assign(colors.pink, {
          1: '#FACDE2',
          2: '#F7CFDB',
          3: '#F05B88',
          8: '#E50570',
          9: '#B7045A',
          'custom-2': 'rgb(247, 207, 219, 0.1)',
        }),
      },
      backgroundImage: {
        'gray-gradient':
          'linear-gradient(235.98deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70.2%), linear-gradient(151.99deg, rgba(1, 1, 44, 0.01) 0.44%, rgba(2, 2, 35, 0.01) 97.95%)',
        'gray-gradient-2': 'linear-gradient(112.97deg, rgba(255, 255, 255, 0.51) 3.51%, rgba(255, 255, 255, 0) 98.54%)',
      },
      fontFamily: {
        sans: ['"Gilroy"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'nft-hero': "url('/images/hero-bg.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
