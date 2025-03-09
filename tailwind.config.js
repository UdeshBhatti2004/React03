/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-range': {'min': '1024px', 'max': '1147px'}, // Custom breakpoint for the range between 1024px and 1147px
      },
    },
  },
  plugins: [],
}

