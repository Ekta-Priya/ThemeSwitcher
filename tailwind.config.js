/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ✅ REQUIRED for your theme toggle to work
  theme: {
    extend: {},
  },
  plugins: [],
}
