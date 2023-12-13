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
        'dmds-1': 'var(--dmds-1)',
        'dmds-2': 'var(--dmds-2)',
        'dmds-3': 'var(--dmds-3)',
        'dmds-4': 'var(--dmds-4)',
        'dmds-5': 'var(--dmds-5)'
      },
    },
  },
  plugins: [],
}