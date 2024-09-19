/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/page/**/*.{js,ts,jsx,tsx}', './src/layouts/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        xl: '1400px',
        lg: '1250px',
        md: '980px',
        sm: '769px',
        xs: '480px',
      },
      fontFamily: {
        'ping-fang': ['PingFang SC', 'sans-serif'],
      },
    },
    colors: {
      white: '#ffffff',
      primary: '#009efb',
      secondary: '#F3704D',
      dark: '#000000',
      third: '#604dcf',
      success: '#02B3A9',
      warning: '#ffbc34',
      danger: '#f62d51',
      black: '#000000',
      'black-1': '#000000B3',
      'yellow-1': '#C48F03',
      'green-1': '#19796A',
      'blue-1': '#5C6EFF',
      'gray-1': '#f8f9fa',
      'gray-2': '#F2F7F8',
      'gray-3': '#E6E6E6',
      'gray-4': '#A59E9E',
      'gray-5': '#0000001A',
      'gray-6': '#CCCCCC',
      'gray-7': '#EBEBEB',
      'gray-8': '#00000033',
      'gray-9': '#0000000D',
      'gray-10': '#0000000F',
      'gray-11': '#9B9B9B',
      'gray-12': '#00000005'
    },
    screens: {
      xl: { max: '1367px' },
      lg: { max: '1023px' },
      md: { max: '980px' },
      sm: { max: '769px' },
      xs: { max: '480px' },
    },
  },
  plugins: [],
};