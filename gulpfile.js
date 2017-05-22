var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
    cache = require('gulp-cache');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var site_js = ['_assets/js/lib/jquery-3.1.1.min.js', '_assets/js/lib/jquery.cookie.js', '_assets/js/lib/tether.min.js','_assets/js/lib/bootstrap.min.js', '_assets/js/layout.js', '_assets/js/lib/typed/typed.min.js'
, '_assets/js/remodal.min.js', '_assets/js/lib/jquery-validate/jquery.validate.js', '_assets/js/lib/recaptcha.js', '_assets/js/isotope.pkgd.js', '_assets/js/select2.min.js'
, '_assets/js/jquery.flip.min.js', '_assets/js/lib/cookieconsent.min.js', '_assets/js/lib/mc-validate.js', '_assets/js/defer-external.js', '_assets/js/main.js'];

var site_css = ['_assets/css/slick.css',  '_assets/css/lib/cookieconsent.min.css', '_assets/css/lib/remodal.css', '_assets/css/lib/remodal-default-theme.css', '_assets/css/lib/select2.min.css',
'_assets/css/lib/flag-icon.min.css', '_assets/css/lib/classic-10_7.css',  '_assets/sass/main.scss'];

var getstarted_js = ['_assets/js/lib/jquery-3.1.1.min.js', '_assets/js/lib/jquery.cookie.js',  '_assets/js/remodal.min.js', '_assets/js/lib/tether.min.js', '_assets/js/lib/bootstrap.min.js', 
'_assets/js/lib/mc-validate.js', '_assets/js/defer-external.js', '_assets/js/get-started.js' ];

var getstarted_css = ['_assets/css/lib/remodal.css', '_assets/css/lib/remodal-default-theme.css', '_assets/sass/get-started.scss'];

gulp.task('site_css', function(){
  gulp.src(site_css)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css/'))
    .pipe(cleanCSS({compatibility: 'ie7'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('getstarted_css', function(){
  gulp.src(getstarted_css)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('get-started.css'))
    .pipe(gulp.dest('css/'))
    .pipe(cleanCSS({compatibility: 'ie7', rebase: false}))
    .pipe(gulp.dest('css/'));
});

gulp.task('site_js', function(){
  return gulp.src(site_js)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({compress:true}))
    .pipe(gulp.dest('js/'))
});

gulp.task('getstarted_js', function(){
  return gulp.src(getstarted_js)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('get-started.js'))
    .pipe(gulp.dest('js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({compress:true}))
    .pipe(gulp.dest('js/'))
});

gulp.task('default', ['site_css', 'getstarted_css', 'site_js', 'getstarted_js']);

gulp.task('watch', [], function(){
  gulp.watch(site_css, ['site_css']);
  gulp.watch(getstarted_css, ['getstarted_css']);
  gulp.watch(site_js, ['site_js']);
  gulp.watch(getstarted_js, ['getstarted_js']);
});