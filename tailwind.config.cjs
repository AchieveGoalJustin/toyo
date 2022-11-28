/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/hero.jpg)",
      },
      width: {
        md: "768px",
        lg: "1080px",
        xl: "1600px",
        cardsmall: "275px",
        cardmed: "350px",
      },
    },
  },
  plugins: [],
};
