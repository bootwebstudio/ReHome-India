/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#6D4C41",
        neutral: "#F5F0E1",
        dark: "#333333",
      },
    },
  },
  plugins: [],
};
