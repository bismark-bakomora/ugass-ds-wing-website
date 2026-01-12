/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        /* camelCase */
        ugassGreen: "#0F3D2E",
        ugassGold: "#C9A227",

        /* kebab-case SAFE BACKUP */
        "ugass-green": "#0F3D2E",
        "ugass-gold": "#C9A227"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
