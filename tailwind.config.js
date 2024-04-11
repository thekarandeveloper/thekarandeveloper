/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "body": "#ffffff",
        "primary": " #0051ed",
        "highlight": " #d0e0ff",
        "light-bg": "#ebebeb",
        "dark-bg": "#041c4e",
        "dark-gray": "#485d7a",
        "dark-bg-200": "rgba(4, 27, 78, 0.76)",
      },
    
    },
  },
  plugins: [],
};
