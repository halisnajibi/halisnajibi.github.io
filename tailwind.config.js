/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        body: "#FBFCFF",
        primary: "#06b6d4",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slow-dua": "spin 4s linear infinite",
      },
      screens: {
        "2xl": "1280px",
      },
      fontFamily: {
        workSans: "Work Sans",
      },
    },
  },
  plugins: [],
};
