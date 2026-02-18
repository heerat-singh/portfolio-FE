/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        base: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#edf2f8',
        secondary: '#313bac',
        'black-base': '#030303',
        'light-gray': '#e4e4e4',
        'gray-base': '#6b7688',
        brown: '#46364a',
        'dark-surface': '#0f172a',
        'dark-card': '#1e293b',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(49, 59, 172, 0.5)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(49, 59, 172, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(49, 59, 172, 0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
