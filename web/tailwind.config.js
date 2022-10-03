/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      display: [
        'Playfair DisplayVariable, InterVariable,  -apple-system, system-ui, sans-serif',
      ],
      body: ['InterVariable, -apple-system, system-ui, sans-serif'],
    },
  },
  plugins: [],
};
