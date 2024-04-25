/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",//"selector",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

