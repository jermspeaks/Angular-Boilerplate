'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var watchify = require('watchify');
var browserify = require('browserify');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

function process(watch) {
	console.log('process');
	processTemplates();

	// create a watcher wrapped bundler or a direct one
	var bundler;

	if (!!watch) {
		bundler = watchify(browserify('./src/client-index.js', watchify.args));
		bundler.transform(debowerify);
		bundler.on('update', function() {
			processJavascript(bundler);
		});

		gulp.watch('./templates/**/*.html', ['templates']);
	} else {
		bundler = browserify('./src/index.js');
		bundler.transform(debowerify);
	}

	bundler.transform('brfs');
	return processJavascript(bundler);
}

function processTemplates() {
	console.log('processTemplates');
	return gulp.src('templates/**/*.html')
		.pipe(templateCache('.templates.js', {
			module: 'topicGraphEditor'
		}))
		.pipe(gulp.dest('.'));
}

function processJavascript(bundler) {
	return bundler.bundle()
		// log errors if they happen
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(gulp.dest(serverPublicFolder + 'js'));
}
