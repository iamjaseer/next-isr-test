/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'dark',

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          // Define light theme colors here
          background: '#ffffff',
          text: '#333',
          // other light theme colors
        },
        dark: {
          // Define dark theme colors here
          background: '#001a2a',
          text: '#dcf4ff',
          // other dark theme colors
        },
      },
    },
  },
  plugins: [],
};
