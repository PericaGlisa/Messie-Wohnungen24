/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#4e97c0',
          700: '#3d7a9a',
        },
      },
    },
  },
  plugins: [],
};
