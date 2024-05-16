/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Poppins"],
      },
      colors: {
        color1: "#491266",
        color2: "#8750D1",
        color3: "#BA86Ff",
        color4: "#DCC1FF",
      },
    },
  },
  plugins: [],
};
