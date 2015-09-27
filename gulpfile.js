var gulp = require('gulp');
var coffeelint = require('gulp-coffeelint');
var Mocha = require('mocha');
var files = "./scripts/*.coffee";

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffeelint.reporter('fail'));
  }
);

gulp.task('test', ['lint'], function (done) {
  var m = new Mocha({
    ui: 'bdd',
    reporter: 'spec'
  });
  m.run(done);
});

gulp.task('default', function() {
  gulp.start('test');
});
