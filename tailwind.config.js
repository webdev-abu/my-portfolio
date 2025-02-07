/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   bannerBg: "url('./src/assets/images/banner-bg01.jpg')",
      // },
    },
  },
  plugins: [require("daisyui")],
};
