var { series, src, dest } = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var useref = require('gulp-useref');


function minifyСss() {
  return src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
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

// function minifyRentHtml() {
//   return src('./src/rent/*.html')
//         .pipe(useref())
//         .pipe(htmlmin({collapseWhitespace: true }))
//         .pipe(dest('dist/rent/'));
// }

function moveImages(){
  return src('./src/img/**/*.+(png|jpg|jpeg|svg)')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

function movePHP() {
  return src('./src/*.php', './src/phpmailer/*.php')
        .pipe(dest('dist/', 'dist/phpmailer'));
}

exports.build = series(minifyСss, moveImages, movePHP, minifyJS, minifyHtml);
exports.minifyJS = minifyJS;
exports.minifyHtml = minifyHtml;
// exports.minifyRentHtml = minifyRentHtml;
exports.minifyСss = minifyСss;
exports.moveImages = moveImages;
exports.movePHP = movePHP;