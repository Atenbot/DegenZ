// tailwind.config.js
/** @type {import('tailwindcss').Config} */



export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#f35f5c', //orange
        secondary: '#043449', //blue
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        spaceMono: ['Space Mono', 'monospace']
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': {transform: 'translateX(-50%)'},
        },
      },
    },
  },
  plugins: [],
};