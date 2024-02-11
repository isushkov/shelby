import gulp from 'gulp';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS     from 'gulp-clean-css';
import uglify       from 'gulp-uglify';
import concat       from 'gulp-concat';
import browserSync  from 'browser-sync';
import fileinclude  from 'gulp-file-include';
import yargs        from 'yargs';
const argv = yargs(process.argv.slice(2)).argv;

// css
gulp.task('sass', function () {
  // Путь по умолчанию, если аргумент не передан
  let srcPath = 'src/scss/**/*.scss';
  // Если аргумент name передан, измените srcPath
  if (argv.name) {
    srcPath = `src/scss/${argv.name}.scss`;
  }
  return gulp.src(srcPath)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});
// bootstrap css
gulp.task('bootstrap-sass', function () {
  return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});
// js
gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});
// bootstrap js
gulp.task('bootstrap-js', function () {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

// include
gulp.task('include', function(done) {
  gulp.src(['src/*.html'])
    .pipe(fileinclude({
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'))
    .on('end', done);
});

// task: build
gulp.task('build', gulp.series(
  'include',
  'sass',
  'js',
  'bootstrap-sass',
  'bootstrap-js'
));
// Watch
gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/**/*.html', gulp.series('include'));
  // gulp.watch('src/**/*.scss', gulp.series('sass'));
  gulp.watch('src/**/*.js', gulp.series('js'));
  gulp.watch('node_modules/bootstrap/scss/**/*.scss', gulp.series('bootstrap-sass'));
  gulp.watch('node_modules/bootstrap/dist/js/bootstrap.bundle.js', gulp.series('bootstrap-js'));
  gulp.watch('*.html').on('change', browserSync.reload);
});

// task: build and watch
gulp.task('default', gulp.series('build', 'watch'));
