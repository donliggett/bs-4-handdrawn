"use strict";

// Load plugins
const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");

// Compile CSS
function css() {
  return gulp
    .src("./handdrawn.scss")
  	.pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./assets/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS({debug: true, compatibility: 'ie8'}, (details) => {
      console.log(`Compressed: ${details.name} ${(details.stats.originalSize * 0.001).toFixed(2)}KB => ${(details.stats.minifiedSize * 0.001).toFixed(2)}KB`);
    }))
    .pipe(gulp.dest("./assets/css/"));
}

// Pipe Boostrap JS
function js() {
  return gulp
    .src("./node_modules/bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest("./assets/js/"));
}

const build = gulp.series(css, js);

exports.build = build;
