/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        18: "18px",
        24: "24px",
        28: "28px",
      },
      backgroundColor:{
        "main-dark-bg": "#1e1e1e",
        
      }
    },
  },
  plugins: [],
}
