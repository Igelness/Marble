let gulp = require('gulp'),
browserSync = require('browser-sync');


gulp.task('watch', function(){
  gulp.watch('app/*html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "app/"
      }
  });
});

gulp.task("html", function() {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function(){
  return gulp.src('app/js/*.js').pipe(browserSync.reload({stream:true}))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));