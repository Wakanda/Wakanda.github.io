var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var sass = require('gulp-sass');

var site_js = ['_assets/js/lib/jquery-3.1.1.min.js', '_assets/js/lib/tether.min.js','_assets/js/lib/bootstrap.min.js', '_assets/js/layout.js', '_assets/js/lib/typed/typed.min.js'
, '_assets/js/remodal.min.js', '_assets/js/lib/jquery-validate/jquery.validate.js', '_assets/js/lib/recaptcha.js', '_assets/js/isotope.pkgd.js', '_assets/js/select2.min.js'
, '_assets/js/jquery.flip.min.js', '_assets/js/lib/cookieconsent.min.js', '_assets/js/main.js'];

var site_css = ['_assets/css/slick.css',  '_assets/css/lib/cookieconsent.min.js', '_assets/css/lib/remodal.css', '_assets/css/lib/remodal-default-theme.css', '_assets/css/lib/select2.min.css',
'_assets/css/lib/flag-icon.min.css',  '_assets/sass/main.scss'];

gulp.task('images', function(){
  gulp.src('_assets/img/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('img/'));
});

gulp.task('styles', function(){
  gulp.src(site_css)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css/'))
});

gulp.task('scripts', function(){
  return gulp.src(site_js)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

gulp.task('default', [], function(){
  gulp.watch("_assets/scss/*.scss", ['styles']);
  gulp.watch("_assets/js/*.js", ['scripts']);
  gulp.watch("*.html", ['bs-reload']);
});