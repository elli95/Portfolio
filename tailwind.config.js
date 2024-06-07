/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        500: "500px",
        1580: "1580px",
      },
      colors: {
        "nav-color": "#e4d1ff",
        "linear-gradient-left": "#c8b2ef",
        "linear-gradient-right": "#a7e3fa",
      },
      objectPosition: {
        "me-center": "0px -40px",
      },
      boxShadow: {
        card: "0px 5px 10px black",
        header: "2px 2px 5px black",
      },
    },
  },
  plugins: [],
};
