'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./assets/all.js'));

  return gulp.src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(js().on('error', js.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/js'));
});
gulp.task('js:watch', function () {
  gulp.watch('./src/js/*.js', ['js']);
});

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

gulp.task('default', ['sass', 'js', 'img']);
