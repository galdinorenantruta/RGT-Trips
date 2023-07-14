/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "search-background": "url(/world-map.png)",
      },
      colors: {
        primary_color: "#590BD8",
        darker_color: "#312A4F",
        lighter_color: "#DDD5EA",
        grey_primary: "#717171",
        grey_lighter: "#BBBFBF",
      },
      textColor: {
        text_primary: "#717171",
      },
    },
  },
  plugins: [],
};
