// gulpfile.js
const { watch, series, src, dest } = require("gulp");
const browserSync = require("browser-sync").create();
const webpack = require("gulp-webpack");
const postcss = require("gulp-postcss");
const imagemin = require("gulp-imagemin");

const cssImport = require("postcss-import");
const cssNested = require("postcss-nested");
const cssVars = require("postcss-simple-vars");
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// Task for compiling our development CSS files using PostCSS
function cssDev(cb) {
  return src("assets/css/app.css") // reads all CSS files
    .pipe(postcss([cssImport, cssVars, tailwind, cssNested, autoprefixer])) // runs them through postCSS
    .pipe(dest("build")) // paste them in /build folder
    .pipe(browserSync.stream());
  cb();
}

// Task for compiling our build CSS files using PostCSS - adds cssnano to minify
function cssBuild(cb) {
  return src("assets/css/app.css") // reads all CSS files
    .pipe(postcss([cssImport, tailwind, autoprefixer, cssnano])) // runs them through postCSS
    .pipe(dest("build")); // paste them in /build folder
  cb();
}

// Task for compiling our JS using webpack
function jsDev(cb) {
  return src("assets/js/app.js") // reads all JS files
    .pipe(
      webpack({
        output: {
          filename: "app.js",
        },
        devtool: "source-map",
      })
    )
    .pipe(dest("build"));
  cb();
}

// Task for minifying images
function imageminTask(cb) {
  return src("./assets/images/*")
    .pipe(imagemin())
    .pipe(dest("./assets/images"));
  cb();
}

// Serve from browserSync server
function browsersyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    notify: false,
  });
  cb();
}

function browsersyncReload(cb) {
  browserSync.reload();
  cb();
}

// Watch Files & Reload browser after tasks
function watchFiles() {
  watch("./**/*.html", browsersyncReload);
  watch("./**/*.php", browsersyncReload);
  watch(["assets/css/**/*.css"], series(cssDev, browsersyncReload));
  watch(["assets/js/**/*.js"], series(jsDev, browsersyncReload));
  watch("tailwind.config.js", browsersyncReload);
}

// Default Gulp Task
exports.default = series(cssDev, jsDev, browsersyncServe, watchFiles);
exports.css = cssBuild;
exports.images = imageminTask;
