/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        quicker: {
          yellow: '#F5C518',
          black: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
