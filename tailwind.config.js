/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-cream': '#F5F0E8',
        'theme-sage': '#5C7A5A',
        'theme-dark': '#1A1A1A',
        'theme-light': '#FFFFFF',
        'theme-border': '#EAE4D8',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
