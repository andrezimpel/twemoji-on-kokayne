var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    path = require('path');


// ------------------------------------------


// paths
var paths = {
  scripts: ['src/scss/**/*.scss']
};

gulp.task('sass', function() {
  sass('./src/scss/fastlane.scss')
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(gulp.dest('./dist/css'))
  .pipe(gulp.dest('./public/dist/css'));
});

// assets
gulp.task('assets', function () {
  gulp.src('./bower_components/twemoji/svg/**/*.svg')
    .pipe(gulp.dest('./dist/assets/svg'));
  gulp.src('./bower_components/twemoji/16x16/**/*.png')
    .pipe(gulp.dest('./dist/assets/16x16'));
  gulp.src('./bower_components/twemoji/36x36/**/*.png')
    .pipe(gulp.dest('./dist/assets/36x36'));
  gulp.src('./bower_components/twemoji/72x72/**/*.png')
    .pipe(gulp.dest('./dist/assets/72x72'));
});

gulp.task('public_dist', function () {
  gulp.src('./content/**/*.html')
    .pipe(gulp.dest('./public/'));

  setTimeout(function(){
    gulp.src('./dist/**/*.*')
      .pipe(gulp.dest('./public/dist/'));
  }, 3000);
});

// ------------------------------------------


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'assets', 'public_dist']);
