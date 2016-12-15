var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
const image = require('gulp-image');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var path = {
    css:  'src/styles/*.css',
    html: 'src/templates/*.html',
    js: 'src/scripts/*.js',
    partials: 'src/templates/partials/*.html',
    mock: 'src/mockapi/*.json',
    vendor: {
      css: 'src/vendor/css/*.css',
      js: 'src/vendor/css/*.js'
    },
      dist: {
      css:  'dist/styles/',
      html: 'dist/',
      js: 'dist/scripts/',
      partials: 'dist/partials/',
      vendor: 'dist/vendor/',
      mock: 'dist/mockapi/'
    }
};

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('css-min', function () {
  return gulp.src(path.css)
    .pipe(autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(concat('style.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('js', function () {
   return gulp.src(path.js)
     .pipe(concat('scripts.js'))
     .pipe(gulp.dest(path.dist.js));
});

gulp.task('js-min', function () {
   return gulp.src(path.js)
     .pipe(concat(path.js))
     .pipe(uglify())
     .pipe(gulp.dest(path.dist.js));
});

gulp.task('html', function () {
  return gulp.src(path.html)
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(path.dist.html));
});

gulp.task('partials', function () {
  return gulp.src(path.partials)
    .pipe(gulp.dest(path.dist.partials));
});

gulp.task('image', function () {
  gulp.src('src/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/image/'));
});

gulp.task('mock', function () {
  return gulp.src(path.mock)
    .pipe(gulp.dest(path.dist.mock));
});

gulp.task('vendor-css', function () {
  return gulp.src(path.vendor.css)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(path.dist.vendor));
});

gulp.task('vendor-css-min', function () {
  return gulp.src(path.vendor.css)
    .pipe(concat('vendor.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(path.dist.vendor));
});

gulp.task('vendor-js', function () {
  return gulp.src(path.vendor.js)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(path.dist.vendor));
});

gulp.task('vendor-js-min', function () {
  return gulp.src(path.vendor.js)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist.vendor));
});

gulp.task('icon', function () {
   gulp.src('src/font-awesome-4.7.0/**/*')
    .pipe(gulp.dest('./dist/font-awesome/'))
});

gulp.task('font', function() {
	gulp.src('src/fonts/*.ttf')
	.pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('build', ['html', 'partials', 'css', 'js', 'vendor-css','vendor-js', 'image', 'icon', 'font', 'mock']);
gulp.task('prod', ['html', 'partials', 'css-min', 'js-min', 'vendor-css-min', 'vendor-js-min', 'image', 'icon', 'font', 'mock']);


gulp.task('watch', function () {
  gulp.watch(path.css, ['css']);
  gulp.watch(path.html, ['html']);
  gulp.watch(path.js, ['js']);
  gulp.watch(path.partials, ['partials']);
  gulp.watch(path.vendor.css, ['vendor-css']);
  gulp.watch(path.mock, ['mock']);

});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: path.dist.html
    }
  });
  gulp.watch('dist/**').on('change', browserSync.reload);
});
