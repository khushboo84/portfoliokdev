/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      customlarge: "2000px",
    },
    extend: {
      // container: {
      //   "2xl": "2000px", // You can adjust the width as needed
      // },

      colors: {
        primary: "#F9E795",
        secondary: "#F96167",
      },

      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0)" },
          "50%": { transform: "translate(0, 60px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      // animation: {
      //   "waving-hand": "wave 2s linear infinite",
      // },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "waving-hand": "wave 2s linear infinite",
        "float-ghost": "float 1s linear infinite",
      },
    },
  },
  plugins: [],
};
