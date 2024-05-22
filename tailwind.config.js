/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: "#6B7280",
          dark: "#4B5563",
        },
      },
    },
  },
  plugins: [],
};
