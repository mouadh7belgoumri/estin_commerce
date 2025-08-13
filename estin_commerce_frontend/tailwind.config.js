/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem',
        '48': '12rem',
      },
      gap: {
        '7': '1.75rem',
        '10': '2.5rem',
        '15': '3.75rem',
        '30': '7.5rem',
        '48': '12rem',
      },
      width: {
        'sm': '20rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
      },
      lineHeight: {
        '16': '4rem',
      }
    },
  },
  plugins: [],
}
