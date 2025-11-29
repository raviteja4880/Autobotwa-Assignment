/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#f7f2ef",
          100: "#efe5df",
          200: "#dfcbbf",
          300: "#cfa19a",
          400: "#b87963",
          500: "#8b5e3c",
          600: "#6e4b30",
          700: "#533a26",
          800: "#3b2a1c",
          900: "#261b12"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
};
