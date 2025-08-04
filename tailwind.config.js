/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/@nuxtjs/tailwindcss/dist/runtime.mjs",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('/images/Rectangle 49.png')",
        "starry-galaxy": "url('/images/Rectangle 3462.png')",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
      colors: {
        primary: "#4B70F5",
        white: "#FFFFFF",
        dark: "#000000",
        "custom-purple": "#4B0082",
        "custom-light-purple": "#6A0DAD",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 60s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
