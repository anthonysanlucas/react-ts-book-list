/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2e2e2e',
        'black-dark': '#2e2e2e',
        'black-medium': '#4e4e4e',
        'black-light': '#6e6e6e'
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
}
