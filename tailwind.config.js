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
        "medium-gray": "#736A68",
        "sidebar-gray": '#303039',
        "button-red": " #670200",
        "light-blue": "#E8F1FF",
        "error-yellow": "#f6e89a",
        "#202244": "#202244",
        "#545454": "#545454",
        "#1D1F2A": "#1D1F2A",
        "#1E1E1E": "#1E1E1E",
        "#FF6B00": "#FF6B00",
        "#B4BDC4": "#B4BDC4",
        "#1D1B20": "#1D1B20",
        "#167F71": "#167F71"
      },
      screens: {
        'sm': '640px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',
        'lgx': '1440px',
        'lgm': '1360px',  // Large screens
        'xl': '1280px',  // Extra-large screens
        '2xl': '1536px', // Extra-extra-large screens
      },
      selection: {
        backgroundColor: '#1D1F2A',  // Dark gray background on selection
        color: '#1D1F2A',            // White text color on selection
      },
    },
  },
  plugins: [],
};
