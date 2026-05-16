/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#fbfdfc",
          panel: "#ffffff",
          card: "#ffffff",
          soft: "#f2f7f5",
          border: "#d7e4e0",
          text: "#15211f",
          muted: "#60716d",
          accent: "#5f7771",
          gold: "#7A958F",
        },
      },
      boxShadow: {
        glass: "0 24px 70px rgba(55, 84, 78, 0.12)",
      },
    },
  },
  plugins: [],
};
