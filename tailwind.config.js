/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinFadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        spinFadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "opacity-open": "spinFadeIn 0.8s ease-in-out forwards",
        "opacity-close": "spinFadeOut 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
