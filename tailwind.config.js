// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "1400px",
      },
      colors: {
        primary: "#f35f5c", //orange
        secondary: "#043449", //blue
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        spaceMono: ['"Space Mono"', "monospace"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      backgroundImage: {
        "grid-image": "url('/grid/Grid1x.png')",
      },
    },
  },
  plugins: [],
};
