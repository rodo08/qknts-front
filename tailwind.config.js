/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-pink": "#FFB4C2",
        "logo-pink-dark": "#f06b83",
      },
    },
  },
  plugins: [],
};
