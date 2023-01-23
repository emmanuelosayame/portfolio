/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/App.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-gotesk": ["Space Grotesk"],
      },
      data: {
        checked: 'state~="checked"',
        unchecked: 'state~="unchecked"',
        active: 'state~="active"',
        inactive: 'state~="inactive"',
      },
    },
  },
  plugins: [],
};
