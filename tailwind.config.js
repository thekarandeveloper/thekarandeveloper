/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base": "#ffffff",
        "primary": " #0051ed",
        "highlight": " #d0e0ff",
        "light-bg": "#eef1f5",
        "dark-bg": "#041c4e",
        "dark-gray": "#485d7a",
      },
    
    },
  },
  plugins: [],
};
