/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
        ranga: 'Ranga, cursive'
      },
      colors: {
        'dmds-1': '#fff',
        'dmds-2': '#222',
        'dmds-3': '#444',
        'dmds-4': '#999',
        'dmds-5': '#bebebe'
      },
    },
  },
  plugins: [],
}