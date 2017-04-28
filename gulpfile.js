// Needed packages
const gulp  = require('gulp');
const del   = require('del');
const path  = require('path');
const gwp   = require('webpack-stream');
const wp    = require('webpack');         // Local webpack lib

// Config
const distFolder    = 'dist';
const srcFolder     = 'src';
const assetsRoot    = '/assets';
const assetsFolder  = srcFolder + assetsRoot;

// External config
const wpConfig = require(path.resolve(__dirname, './webpack.config.js'));

/**
 * Tasks
 */
gulp.task('client:build:webpack', () => {
  return gulp
    .src(srcFolder + '/main.js')
    .pipe(gwp(wpConfig, wp))
    .pipe(gulp.dest(distFolder));
});

gulp.task('client:build:index', () => {
  return gulp
    .src(srcFolder + '/index.html')
    .pipe(gulp.dest(distFolder));
});

gulp.task('client:build:assets', () => {
  return gulp
    .src([assetsFolder + '/**/*', '!' + assetsFolder + '/**/*.scss'])
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

gulp.task('clean', () => {
  return del(distFolder);
});

gulp.task('build', ['client:build']);