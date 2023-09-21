/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#903AFF',
        violet: '#D434FE', 
        darkBlue: '#150E28',
        primaryColor: 'linear-gradient(90deg, #D434FE, #903AFF)', 
      }
    },
  },
  plugins: [],
}
