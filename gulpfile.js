const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const sassPartialsImported = require('gulp-sass-partials-imported');
const autoprefixer = require('gulp-autoprefixer');

// let scss_dir = './scss';
// let includePaths = ['./scss'];

function style() {
    // 1. where is my scss file
    return gulp.src('./index/scss/**/*.scss')
    //.pipe(sassPartialsImported(scss_dir, includePaths))

    // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))

    // 3. where do I save the compiled CSS?
    .pipe(gulp.dest('./index/css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: '.',
            index: "index.html"
        }
    });
    gulp.watch('./index/scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./index/js/*.js').on('change', browserSync.reload);    
}



exports.style = style;
exports.watch = watch;