let gulp = require("gulp"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify");

gulp.task("watch", function() {
  gulp.watch("app/*html", gulp.parallel("html"));
  gulp.watch("app/js/*.js", gulp.parallel("script"));
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
});

gulp.task("html", function() {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function() {
  return gulp.src("app/js/*.js").pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", function() {
  return gulp
    .src([
      "app/js/slick.min.js",
      "app/js/jquery.fancybox.min.js",
      "app/js/jquery.smoothscroll.min.js",
      "app/js/main.js"
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js/libs"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("default", gulp.parallel("js", "browser-sync", "watch"));
