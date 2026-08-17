/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kurye: {
          navy: "#111418",
          midnight: "#07080A",
          charcoal: "#111418",
          ink: "#2A0D15",
          petrol: "#7A1E2D",
          deepblue: "#111418",
          burgundy: "#7A1E2D",
          wine: "#A3263A",
          steel: "#D8C7B0",
          smoke: "#FBFAF7",
          mist: "#FFF7EC",
          cream: "#FFF3E4",
          paper: "#FFFFFF",
          line: "#E5D6C1",
          gold: "#D8C7B0",
          gold2: "#B99F7C",
          grayglass: "rgba(17,20,24,0.06)",
          accent: "#7A1E2D",
          accent2: "#D8C7B0"
        }
      },
      boxShadow: {
        soft: "0 20px 55px rgba(42,13,21,0.12)",
        gold: "0 18px 36px rgba(216,199,176,0.28)"
      },
      borderRadius: { "2xl": "1.25rem", "3xl": "1.75rem" }
    },
  },
  plugins: [],
}
