/*	===============================
		e2e Tests
	=============================== */
'use strict';

var gulp = require('gulp'),
	protractor = require("gulp-protractor").protractor;

gulp.task('protractor-test', function() {
	return gulp.src(["./tests/protractor/*.js"])
	    .pipe(protractor({
	        configFile: "protractor.config.js",
	        args: ['--suite', 'full']
	    }))
	    .on('error', function(e) { throw e });
});
