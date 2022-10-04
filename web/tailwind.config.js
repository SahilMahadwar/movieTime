/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('https://i.ibb.co/N9657LW/bg-1c9b34b.png')",
      },
      colors: {
        'bg-brand': '#121829',
      },
    },
    fontFamily: {
      display: [
        'Playfair DisplayVariable, InterVariable,  -apple-system, system-ui, sans-serif',
      ],
      body: ['InterVariable, -apple-system, system-ui, sans-serif'],
    },
  },
  plugins: [],
};
