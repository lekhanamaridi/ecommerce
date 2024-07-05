/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'green': '#3bb77e',
      'teal': '#20c997',
      'yellow': '#fdc040',
      'pink': '#f74b81',
      'butterscotch' : '#fef4d5',
      'light-pink' : '#feefea',
      'light-yellow' : '#fffceb',
      'light-blue' : '#e7eaf3',
     })
  },
  plugins: [],
}

