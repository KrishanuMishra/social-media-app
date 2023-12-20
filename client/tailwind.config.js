/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#333333',
        light: '#ffffff',
      },
      textColor: {
        dark: '#ffffff',
        light: '#333333',
      },
    },
  },
  plugins: [],
}