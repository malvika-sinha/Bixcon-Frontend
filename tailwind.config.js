/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans these file types in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#db1f78',  // Custom primary color
      },
    },
  },
  plugins: [],
};
