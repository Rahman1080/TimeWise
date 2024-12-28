/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#ff6b35',
          blue: '#004e98',
        },
      },
    },
  },
  plugins: [],
};