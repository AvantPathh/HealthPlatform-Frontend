/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4ADEDE",
        secondary: "#7BD5F5"
      }
    },
  },
  plugins: [],
}

