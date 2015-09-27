var gulp = require('gulp');
var coffeelint = require('gulp-coffeelint');
var files = "./scripts/*.coffee";

gulp.task('lint', function() {
  gulp.src(files)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('default'));
  }
);

gulp.task('default', function() {
  gulp.start('lint');
  gulp.watch(files, function(evt) {
    gulp.start('lint');
  });
});
