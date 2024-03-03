/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
  daisyui:{
    themes:[
      {
        mytheme:{
          "primary":"#64E3FB",
          "accent" : "#00ffff",
          "success": "#00ff00",
        }
      }
    ]
  }
};
