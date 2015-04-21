'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var watchify = require('watchify');
var browserify = require('browserify');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var debowerify = require('debowerify');
var source = require('vinyl-source-stream');
var filter = require('gulp-filter');

gulp.task('dist', ['templates', 'library', 'build']);

gulp.task('watch', function() {
	return process(true);
});

gulp.task('build', function() {
	return process(false);
});

gulp.task('templates', function() {
	return processTemplates();
});

gulp.task('library', function() {
	return processLibraries();
});

function process(watch) {
	console.log('process');
	processTemplates();

	// create a watcher wrapped bundler or a direct one
	var bundler;

	if (!!watch) {
		bundler = watchify(browserify('./build/index.js', watchify.args));
		bundler.transform(debowerify);
		bundler.on('update', function() {
			processJavascript(bundler);
		});

		gulp.watch('./build/templates/**/*.html', ['templates']);
	} else {
		bundler = browserify('./build/index.js');
		bundler.transform(debowerify);
	}

	bundler.transform('brfs');
	return processJavascript(bundler);
}

function processTemplates() {
	console.log('processTemplates');
	return gulp.src('./build/templates/**/*.html')
		.pipe(templateCache('./build/.templates.js', {
			module: 'topicGraphEditor'
		}))
		.pipe(gulp.dest('.'));
}

function processJavascript(bundler) {
	return bundler.bundle()
		// log errors if they happen
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist/js'));
}

function filterByExtension(extension) {
	return filter(function(file) {
		return file.path.match(new RegExp('.' + extension + '$'));
	});
}

function processLibraries() {
	console.log('processLibraries :: Vendor JS Libraries');
	var mainFiles = mainBowerFiles({
		checkExistence: true
	});
	var jsFilter = filterByExtension('js');

	if (!mainFiles.length) {
		// No files found
		return;
	}
	return gulp.src(mainFiles)
		.pipe(jsFilter)
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('./dist/js'));
}
