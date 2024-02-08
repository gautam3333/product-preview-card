/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'dark-cyan': '#3c8067',
      cream: '#f2ebe3',
      'very-dark-blue': '#1c232b',
      'dark-grayish-blue': '#6c7289',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
