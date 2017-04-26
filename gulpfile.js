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
const assetsRoot    = clientRoot + '/assets';
const serverFolder  = srcFolder + serverRoot;
const clientFolder  = srcFolder + clientRoot;
const assetsFolder  = srcFolder + assetsRoot;

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

gulp.task('client:build:assets', () => {
  return gulp
    .src(assetsFolder + '/**/*')
    .pipe(gulp.dest(distFolder + assetsRoot));
});

gulp.task('client:build:lib:svg', () => {
  return gulp
    .src('node_modules/inline-svg/dist/inlineSVG.min.js')
    .pipe(gulp.dest(distFolder + assetsRoot + '/js'));
});

gulp.task('client:build:lib:jquery', () => {
  return gulp
    .src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(distFolder + assetsRoot + '/js'));
});

gulp.task('client:build:lib:bootstrap', () => {
  return gulp
    .src(['node_modules/bootstrap/dist/**/*.min.js', 'node_modules/bootstrap/dist/**/*.min.css'], {base: 'node_modules/bootstrap/dist'})
    .pipe(gulp.dest(distFolder + assetsRoot));
});

gulp.task('client:build:libs', ['client:build:lib:svg', 'client:build:lib:jquery', 'client:build:lib:bootstrap']);

gulp.task('client:build', ['client:build:webpack', 'client:build:index', 'client:build:assets', 'client:build:libs']);

gulp.task('server:clean', () => {
  return del(distFolder + serverRoot);
});

gulp.task('client:clean', () => {
  return del(distFolder + clientRoot);
});

gulp.task('hot', ['server:build', 'client:build:libs']);

gulp.task('clean', () => {
  return del(distFolder);
});

gulp.task('build', ['server:build', 'client:build']);