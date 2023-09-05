/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "style":"url(https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/63c81b0c3ad92915a9062de2_bgd__video-decor-2%20(1).svg)",
        "girls":"url(https://global-uploads.webflow.com/63c81b0c3ad929013f062d70/646f20ea78f4f824bd525754_Full-photo-section.webp)"
      }
    },
  },
  plugins: [],
}


