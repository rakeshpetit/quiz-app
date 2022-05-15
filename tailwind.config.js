module.exports = {
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    minHeight: {
      0: "0",
      almost: "75%",
      full: "100%",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
