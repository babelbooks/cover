// Needed packages
const gulp  = require('gulp');
const gts   = require('gulp-typescript');
const gsm   = require('gulp-sourcemaps');
const del   = require('del');
const path  = require('path');
const gwp   = require('webpack-stream');
const wp    = require('webpack');         // Local webpack lib

// Config
const distFolder    = 'dist';
const srcFolder     = 'src';
const serverRoot    = '/server';
const clientRoot    = '/client';
const serverFolder  = srcFolder + serverRoot;
const clientFolder  = srcFolder + clientRoot;

// External config
const tsConfig = require(path.resolve(__dirname + '/' + serverFolder + '/tsconfig.json'));
const wpConfig = require(path.resolve(__dirname, './webpack.config.js'));

/**
 * Tasks
 */
gulp.task('server:build', () => {
  return gulp
    .src([serverFolder + '/**/*.ts', 'node_modules/@types/**/*.ts', serverFolder + '/custom-typings/**/*.ts'])
    .pipe(gsm.init())
    .pipe(gts(tsConfig.compilerOptions))
    .pipe(gulp.dest(distFolder + serverRoot));
});

gulp.task('client:build:webpack', () => {
  return gulp
    .src(clientFolder + '/main.js')
    .pipe(gwp(wpConfig, wp))
    .pipe(gulp.dest(distFolder + clientRoot));
});

gulp.task('client:build:index', () => {
  return gulp
    .src(clientFolder + '/index.html')
    .pipe(gulp.dest(distFolder + clientRoot));
});

gulp.task('client:build', ['client:build:webpack', 'client:build:index']);

gulp.task('server:clean', () => {
  return del(distFolder + serverRoot);
});

gulp.task('client:clean', () => {
  return del(distFolder + clientRoot);
});

gulp.task('clean', () => {
  return del(distFolder);
});

gulp.task('build', ['server:build', 'client:build']);