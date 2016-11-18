var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
//var image = require('gulp-image');

var path = {
    css:  'src/styles/*.css',
    html: 'src/templates/*.html',
    images: 'src/images/**/*',
    dist: {
      css:  'dist/styles/',
      html: 'dist/'
    }
};

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('html', function () {
  return gulp.src(path.html)
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(path.dist.html));
});
/*
gulp.task('image', function () {
  return gulp.src(path.images)
    .pipe(image())
    .pipe(gulp.dest('./dest'));
});
*/
gulp.task('build', ['html', 'css']);


gulp.task('watch', function () {
  gulp.watch(path.css, ['css']);
  gulp.watch(path.html, ['html']);
  //gulp.watch(path.image, ['images']);
    
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: path.dist.html
    }
  });
  gulp.watch('dist/**').on('change', browserSync.reload);
});
