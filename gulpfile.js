const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const BROWSERS_LIST = ['last 2 versions', '> 2%'];
gulp.task('styles', function() {
  return gulp
    .src('./public/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: BROWSERS_LIST }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/css'));
});
