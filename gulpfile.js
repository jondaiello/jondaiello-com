'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var svgSprite = require('gulp-svg-sprite');
//var cleanCSS = require('gulp-clean-css');

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./assets/js'));
});
gulp.task('js:watch', function () {
  gulp.watch('./src/js/*.js', ['js']);
});

/*gulp.task('minify-css', function() {
  return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css'));
});*/
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('img', function () {
	return gulp.src('./src/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./assets/img'));
});
gulp.task('img:watch', function () {
  gulp.watch('./src/img/*', ['img']);
});

// Basic configuration example
var svgConfig = {
	mode : {
    symbol : true
	}
};

gulp.task('svgs', function() {
  return gulp.src('./src/svg/*.svg')
	.pipe(svgSprite(svgConfig))
	.pipe(gulp.dest('./assets/img/sprite.svg'));
});
gulp.task('svgs:watch', function () {
  gulp.watch('./src/svg/*.svg', ['svgs']);
});

gulp.task('default', ['sass', 'js', 'img', 'svgs']);
