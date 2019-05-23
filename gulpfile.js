"use strict";

// Load plugins
const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const watch = require("gulp-watch");

function css() {
  return gulp
    .src("./handdrawn.scss")
  	.pipe(plumber())
  	// .pipe(watch('./handdrawn.scss', { ignoreInitial: false }))
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./assets/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/css/"));
}

function js() {
  return gulp
    .src("./node_modules/bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest("./assets/js/"));
}

const build = gulp.series(css, js);

exports.build = build;
