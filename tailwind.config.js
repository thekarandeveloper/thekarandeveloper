/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./src/app/**/*.{js,jsx,ts,tsx}",
  
],
  theme: {
    extend: {
      colors: {
        background: "#000000", // pure black
        foreground: "#FFFFFF", // white
        gray: {
          100: "#F5F5F7", // Apple light gray
          300: "#D2D2D7",
          500: "#86868B",
          700: "#515154",
          900: "#1D1D1F", // Apple dark gray
        },
        accent: "#0071E3", // Apple blue
      },

      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },

      fontSize: {
        // Headings
        h1: ["3rem", { lineHeight: "1.1", fontWeight: "600" }], // 48px
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }], // 36px
        h3: ["1.75rem", { lineHeight: "1.3", fontWeight: "500" }], // 28px
        h4: ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }], // 20px

        // Body
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // 14px
      },

      spacing: {
        section: "6rem", // 96px spacing for sections
      },

      borderRadius: {
        xl: "1rem", // 16px for smooth Apple-like cards
        "2xl": "1.5rem", // 24px
      },

      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.08)", // soft shadow
      },
    },
  },
  plugins: [],
}