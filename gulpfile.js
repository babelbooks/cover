// Needed packages
const gulp  = require('gulp');
const gts   = require('gulp-typescript');
const gsm   = require('gulp-sourcemaps');
const del   = require('del');
const path  = require('path');

// Config
const distFolder    = 'dist';
const serverFolder  = 'server';
const frontFolder   = 'web';

// External config
const tsConfig = require(path.resolve(__dirname + '/' + serverFolder + '/tsconfig.json'));

/**
 * Tasks
 */
gulp.task('server:build', () => {
  return gulp
    .src([serverFolder + '/**/*.ts', 'node_modules/@types/**/*.ts', serverFolder + '/custom-typings/**/*.ts'])
    .pipe(gsm.init())
    .pipe(gts(tsConfig.compilerOptions))
    .pipe(gulp.dest(distFolder + '/' + serverFolder));
});

gulp.task('client:build', () => {
  // TODO: client build if needed
});

gulp.task('server:clean', () => {
  return del(distFolder + '/' + serverFolder);
});

gulp.task('client:clean', () => {
  return del(distFolder + '/' + frontFolder);
});

gulp.task('clean', () => {
  return del(distFolder);
});