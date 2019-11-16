const { series, src, dest } = require('gulp');
let cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var useref = require('gulp-useref');


function minifyСss() {
  return src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        // .pipe(rename({suffix:'.min'}))
        .pipe(dest('dist/css/'));
}

function minifyJS() {
  return src(['./src/js/*.js'])
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('dist/js/'));
}


function minifyHtml() {
  return src('./src/*.html')
        .pipe(useref())
        .pipe(htmlmin({collapseWhitespace: true }))
        .pipe(dest('dist/'));
}


function moveFonts() {
  return src('./src/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

function moveImages(){
  return src('./src/img/**/*.+(png|jpg|jpeg|svg)')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

exports.build = series(minifyСss, moveFonts, moveImages, minifyJS, minifyHtml);
exports.minifyJS = minifyJS;
exports.minifyHtml = minifyHtml;
exports.minifyСss = minifyСss;
exports.moveFonts = moveFonts;
exports.moveImages = moveImages;