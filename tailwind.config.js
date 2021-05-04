const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["**/*.html", "**/*.php", "assets/js/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
      },
    },
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
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
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xs": {
            maxWidth: "100%",
          },
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
