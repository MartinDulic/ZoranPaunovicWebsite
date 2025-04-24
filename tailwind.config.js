/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        frutiger: ['Frutiger', 'sans-serif'],
        frutigerBold: ['FrutigerBold', 'sans-serif'],
      },
      colors: {
        primary: "#e60000",
        secondary: "#003049", //0B0033 003049 18206F
        textPrimary: "black",
        textSecondary: "#6F7D8C", // 2F2F2F E1E6E1 6F7D8C
      },
      // Custom text shadows
      textShadow: {
        none: `0 0 0 rgba(0, 0, 0, 0)`,
        sm: '1.41px 1.41px 2px rgba(0, 0, 0, 1)',
        md: '2px 2px 4px rgba(0, 0, 0, 1)',
        gray: '1.41px 1.41px 2px rgba(100, 100, 100, 1)'
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow'); // Get the custom shadows
      const textShadowUtilities = Object.keys(textShadow).map((key) => {
        return {
          [`.text-shadow-${key}`]: {
            textShadow: textShadow[key],
          },
        };
      });

      addUtilities(textShadowUtilities, ['responsive']); // Add utility classes
    },
  ],
}