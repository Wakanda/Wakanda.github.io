const { src, dest, series, watch } = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");

const site_js_files = [
  "_assets/js/lib/jquery-3.1.1.min.js",
  "_assets/js/lib/jquery.cookie.js",
  "_assets/js/lib/tether.min.js",
  "_assets/js/lib/bootstrap.min.js",
  "_assets/js/layout.js",
  "_assets/js/remodal.min.js",
  "_assets/js/lib/jquery-validate/jquery.validate.js",
  "_assets/js/isotope.pkgd.js",
  "_assets/js/select2.min.js",
  "_assets/js/jquery.flip.min.js",
  "_assets/js/lib/cookieconsent.min.js",
  "_assets/js/lib/owl.carousel.min.js",
  "_assets/js/lib/mc-validate.js",
  "_assets/js/defer-external.js",
  "_assets/js/intlTelInput.min.js",
  "_assets/js/intlTelInput-utils.min.js",
  "_assets/js/jquery.cookie.js",
  "_assets/js/axios.min.js",
  "_assets/js/backoffice.js",
  "_assets/js/main.js",
];

const site_css_files = [
  "_assets/css/slick.css",
  "_assets/css/lib/cookieconsent.min.css",
  "_assets/css/lib/owl.carousel.min.css",
  "_assets/css/lib/remodal.css",
  "_assets/css/lib/remodal-default-theme.css",
  "_assets/css/lib/select2.min.css",
  "_assets/css/lib/flag-icon.min.css",
  "_assets/css/lib/classic-10_7.css",
  "_assets/css/lib/intlTelInput.css",
  "_assets/sass/main.scss",
];

const getstarted_js_files = [
  "_assets/js/lib/jquery-3.1.1.min.js",
  "_assets/js/lib/jquery.cookie.js",
  "_assets/js/remodal.min.js",
  "_assets/js/lib/tether.min.js",
  "_assets/js/lib/bootstrap.min.js",
  "_assets/js/lib/mc-validate.js",
  "_assets/js/defer-external.js",
  "_assets/js/lib/jquery-validate/jquery.validate.js",
  "_assets/js/intlTelInput.min.js",
  "_assets/js/intlTelInput-utils.min.js",
  "_assets/js/jquery.cookie.js",
  "_assets/js/axios.min.js",
  "_assets/js/backoffice.js",
  "_assets/js/get-started.js",
];

const getstarted_css_files = [
  "_assets/css/lib/remodal.css",
  "_assets/css/lib/flag-icon.min.css",
  "_assets/css/lib/classic-10_7.css",
  "_assets/css/lib/intlTelInput.css",
  "_assets/css/lib/remodal-default-theme.css",
  "_assets/sass/get-started.scss",
];

const site_css = (exports.site_css = function site_css() {
  return src(site_css_files)
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        },
      })
    )
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("main.css"))
    .pipe(dest("css/"))
    .pipe(cleanCSS({ compatibility: "ie7" }))
    .pipe(dest("css/"));
});

const getstarted_css = (exports.getstarted_css = function getstarted_css() {
  return src(getstarted_css_files)
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        },
      })
    )
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("get-started.css"))
    .pipe(dest("css/"))
    .pipe(cleanCSS({ compatibility: "ie7", rebase: false }))
    .pipe(dest("css/"));
});

const site_js = (exports.site_js = function site_js() {
  return src(site_js_files)
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        },
      })
    )
    .pipe(concat("main.js"))
    .pipe(dest("js/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify({ compress: true }))
    .pipe(dest("js/"));
});

const getstarted_js = (exports.getstarted_js = function getstarted_js() {
  return src(getstarted_js_files)
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        },
      })
    )
    .pipe(concat("get-started.js"))
    .pipe(dest("js/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify({ compress: true }))
    .pipe(dest("js/"));
});

exports.default = series(site_css, getstarted_css, site_js, getstarted_js);

exports.watch = function watch() {
  watch(site_css_files, site_css);
  watch("_assets/sass/**/*.scss", site_css);
  watch(getstarted_css_files, getstarted_css);
  watch(site_js_files, site_js);
  watch(getstarted_js_files, getstarted_js);
};
