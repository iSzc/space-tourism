/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      w1800: { max: "1800px" },
      w1440: { max: "1440px" },
      w1024: { max: "1024px" },
      w768: { max: "768px" },
      w640: { max: "640px" },
      w600: { max: "600px" },
      w480: { max: "480px" },
      w425: { max: "425px" },
      w375: { max: "375px" },
    },
    fontFamily: {
      Barlow: ['"Barlow Condensed"', "sans-serif"],
      Bellefair: ['"Bellefair"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        btnHeader: "0px 0px 10px rgba(0, 0, 0, 0.5);",
      },
      backgroundColor: {
        greyBG: "#2f3f50",
      },
      backgroundImage: {
        bgHome: "url('/images/home/background-home-desktop.jpg')",
        bgHometablet: "url('/images/home/background-home-tablet.jpg')",
        bgHomemobi: "url('/images/home/background-home-mobile.jpg')",
        bgDest: "url('/images/destination/background-destination-desktop.jpg')",

        bgDesttab:
          "url('/images/destination/background-destination-tablet.jpg')",

        bgDestmob:
          "url('/images/destination/background-destination-mobile.jpg')",
        bgCrew: "url('/images/crew/background-crew-desktop.jpg')",
        bgCrewtab: "url('/images/crew/background-crew-tablet.jpg')",
        bgCrewmob: "url('/images/crew/background-crew-mobile.jpg')",
        bgTech: "url('/images/technology/background-technology-desktop.jpg')",
        bgTechtab: "url('/images/technology/background-technology-tablet.jpg')",
        bgTechmob: "url('/images/technology/background-technology-mobile.jpg')",
      },
      backdropBlur: {
        xs: "1.5px",
      },
    },
  },
  plugins: [],
};
