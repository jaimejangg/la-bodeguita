module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueDark: "#0B88BA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
