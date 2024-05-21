const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // greenBase: '#17c964'
        customGreen: "#11693d",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        // Other theme configurations...
        colors: {
          // Other colors...
          success: '#11693d',
          // New success color
        },
      },
      dark: {
        // Other theme configurations...
        colors: {}, // You can configure dark theme colors similarly if needed
      },
      // Additional custom themes...
    },
  })],
};