/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        // Custom fonts already defined
        fontFamily: {
          default: ["Jost", "sans-serif"],
          heading: ["Aldrich", "sans-serif"],
          input: ["Mulish", "sans-serif"],
        },
        // Custom colors
        colors: {
          primary: "#FFFFFF",
          secondary: "#000000",
          "dark-gray": "#1D1F2A",
          "dark2-gray": "#ABAFB1",
          "darker-gray": "#787880",
          "light-gray": "#D9D9DB",
          "medium-gray": "#797C7B",
        
          "dark-brown": "#736A68",
          "medium-blue": "#303972",
        
          "light-red": "#EC221F",
          "bt-red":"#670200"
        },
        // You can add custom breakpoints if needed, but the defaults are generally enough:
        screens: {
          'sm': '640px',   // Small screens
          'md': '768px',   // Medium screens
          'lg': '1024px',  // Large screens
          'xl': '1280px',  // Extra-large screens
          '2xl': '1536px', // Extra-extra-large screens
        },
      },
    },
    plugins: [],
  };
  