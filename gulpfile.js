'use strict';

var gulp = require('gulp'),
  filePath = require('./paths');

gulp.paths = {
  build: 'build',
  dist: 'dist'
};

require('require-dir')('./gulp');

gulp.task('default', function () {
    gulp.start('dist');
});
