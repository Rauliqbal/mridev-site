/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
   'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "1rem",
            screens: {
               sm: "512px",
               md: "720px",
               lg: "1024px",
               xl: "1060px",
               "1440px": "1340px",
            },
         },
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            BaiJamjuree: ['Bai Jamjuree', "sans-serif"]
         },
         colors: {
            primary: "#5F65F4",
            secondary: "#D1ACFF",
         },
         animation: {
            floating: "floating 6s infinite alternate",
            blink: "blink 4s infinite alternate",
            floatUp: " floatUp 4s infinite alternate",
            floatDown: " floatDown 4s infinite alternate",
         },
         keyframes: {
            floating: {
               "0%": { transform: "translateY(0px) scale(1)" },
               "66%": { transform: "translate(20px) scale(1.1)" },
               "100%": { transform: "translate(10px, 20px) scale(1)" },
            },
            blink: {
               "97%": { transform: "none" },
               "100%": { transform: "scaleY(0)" },
            },
            floatUp: {
               "0%": { transform: "translateY(0)" },
               "100%": { transform: "translateY(-8px)" },
            },
            floatDown: {
               "0%": { transform: "translateY(-8px)" },
               "100%": { transform: "translateY(0)" },
            },
         },
         backgroundImage: {
            "background-hero": "url('/src/assets/bg-image.webp')",
            pattern: "url('/src/assets/images/bg-image.webp')",
         },
      },
   },
   plugins: [
      require('flowbite/plugin')
  ],
};
