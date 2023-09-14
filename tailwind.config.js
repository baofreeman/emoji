/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      inter: ['inter, "sans-serif'],
      wonderland: ["wonderland", "sans-serif"],
    },
    screens: {
      sm: { min: "0", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      blue: "#0049FA",
      white: "#FFF",
      red: "#FA394B",
      yellow: "#FFE193",
      green: "#13ce66",
      "gray-dark": "#273444",
      black: "#000",
      "gray-light": "#d3dce6",
    },
    fontSize: {
      sm: "1.2rem",
      md: "1.4rem",
      lg: "1.6rem",
      xl: "2rem",
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "2.8rem",
      "5xl": "3.6rem",
    },
    dropShadow: {
      "2xl": "2px 2px rgb(0, 0, 0)",
      "3xl": "4px 4px rgb(0, 0, 0)",
    },
    backgroundImage: {
      hero: "url('https://www.emojibsc.com/_next/static/media/BackgroundSection.36affae2.png')",
      "hero-1":
        "url('https://www.emojibsc.com/_next/static/media/StepBg.98ed9d85.png')",
      "hero-2":
        "url('https://www.emojibsc.com/_next/static/media/StepBg2.cdea2086.png')",
      "hero-3":
        "url('https://www.emojibsc.com/_next/static/media/GetEmojiBg.72f8d72b.png')",
      "hero-4":
        "url('https://www.emojibsc.com/_next/static/media/ContractBg.15a92271.png')",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
      16: "4rem",
    },
    boxShadow: {
      sm: "4px 4px 0px rgba(34, 34, 34, 0)",
    },
    extend: {
      animation: {
        "scroll-up-navbar": "scrollUpNavbar .6s ease-out",
        "scroll-down-navbar": "scrollDownNavbar 0.3s ease",
        scale: "scale 0.8s alternate infinite ease-in",
      },
      keyframes: {
        scrollUpNavbar: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "80%": { transform: "translateY(10%)", opacity: 0.8 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scrollDownNavbar: {
          "0%": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
        scale: {
          "0%": {
            transform: "scale(0.8)",
            opacity: 0,
          },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
