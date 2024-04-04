/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E20077',
        'secondary': '#FFD700',
      },
      fontFamily: {
        'body': ['Nunito']
      }
    },
  },
  plugins: [],
}
