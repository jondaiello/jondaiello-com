'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./html/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./html/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./html/assets/**/*.scss', gulp.series('sass'));
});
