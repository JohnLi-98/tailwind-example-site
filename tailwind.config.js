module.exports = {
  purge: {
    content: ["**/*.html", "**/*.php", "assets/js/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      height: {
        0.75: "0.1875rem",
      },
      fontFamily: {
        sans: [
          "Gordita",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
