module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        slack: "#361736",
        iconcolor: "#d5cdd5",
        sidebartextcolor: "#b8a7b9",
        activeTabBg: "#1164A3",
        placeholder: "#c4b8c4",
        border: "#684a68",
        activeTab: "#1164A3",
        menucolor: "#606060",
        timecolor: "#909090",
        menuitemborder: "#dbdbdb",
        textcolor: "#a28aa3",
        addchannelhover: "#522753",
        tabhover: "#280f29",
        bordercolor: "rgb(82,38,83)",
        chatheaderbordercolor: "#dddddd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
