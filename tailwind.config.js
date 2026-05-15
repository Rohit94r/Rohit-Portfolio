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
          bg: "#0a0a0f",
          panel: "rgba(20, 20, 28, 0.72)",
          card: "rgba(28, 28, 34, 0.64)",
          border: "rgba(255, 255, 255, 0.12)",
          text: "#fafafa",
          muted: "rgba(214, 214, 214, 0.7)",
          accent: "#60a5fa",
          gold: "#ffd766",
        },
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};
