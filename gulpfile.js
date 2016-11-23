var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var concat = require('gulp-concat');
const image = require('gulp-image');
var browserSync = require('browser-sync').create();

var path = {
    css:  'src/styles/*.css',
    html: 'src/templates/*.html',
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

gulp.task('image', function () {
  gulp.src('src/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/image/'));
});
gulp.task('font-css', function () {
   gulp.src('src/font-awesome-4.7.0/**/*')
    .pipe(gulp.dest('./dist/font-awesome/'))
});
gulp.task('build', ['html', 'css', 'image', 'font-css']);


gulp.task('watch', function () {
  gulp.watch(path.css, ['css']);
  gulp.watch(path.html, ['html']);
    
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: path.dist.html
    }
  });
  gulp.watch('dist/**').on('change', browserSync.reload);
});
