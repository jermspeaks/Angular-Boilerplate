/*	===============================
		Build & Watch
	=============================== */

'use strict';

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	webpack = require("webpack"),
	WebpackDevServer = require("webpack-dev-server"),
	filePath = require('./../paths')(),
  	watchify = require('watchify'),
	// File Compilation
	browserify = require('browserify'),
	mainBowerFiles = require('main-bower-files'),
	debowerify = require('debowerify'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat'), // Concat an existing file
	filter = require('gulp-filter'), // Filter by filename

	// Javascript
	jshint = require('gulp-jshint'), // Run jshint on files
	stylish = require('jshint-stylish'),

	// Templates
	templateCache = require('gulp-angular-templatecache'),

	// SASS/CSS
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	bourbon = require('node-bourbon');

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
		gulp.watch(['./build/stylesheets/*.scss', './build/stylesheets/**/*.scss'], ['styles']);
		gulp.watch('./build/src/**/*.js', ['lint']);
		gulp.watch(['./tests/karma/*.js', './dist/js/*.js'], ['test']);
		gulp.watch(['./tests/protractor/**/*.js'], ['protractor-test']);
	} else {
		bundler = browserify('./build/index.js');
		bundler.transform(debowerify);
	}

	bundler.transform('brfs');
	return processJavascript(bundler);
}

function processTemplates() {
	console.log('processTemplates');
	return gulp.src(filePath.html.src)
		.pipe(templateCache(filePath.html.dest, {
			module: 'topicGraphEditor'
		}))
		.pipe(gulp.dest(filePath.html.dest_dir));
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
	// console.log('processLibraries :: Vendor JS Libraries');
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

function processStyleSheets() {
	var stylesheets = './build/stylesheets/main.scss';
	return gulp.src(stylesheets)
		.pipe(sass({
			style: 'expanded',
			includePaths: bourbon.includePaths
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist/css'));
}

function jsHint() {
	return gulp.src(['./build/src/**/*.js', './build/index.js', './build/routes.js'])
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
}

function processWebpack() {
	return; //TODO http://webpack.github.io/docs/usage-with-gulp.html
}

// Build entire project
gulp.task('dist', ['templates', 'styles', 'library', 'lint', 'build']);

// Watch build
gulp.task('watch', function() {
	return process(true);
});

// One time build javascript
gulp.task('build', function() {
	return process(false);
});

// JSHint task
gulp.task('lint', function() {
	return jsHint();
});

// Build templates
gulp.task('templates', function() {
	return processTemplates();
});

// Consolidate vendor libraries
gulp.task('library', function() {
	return processLibraries();
});

// Build styles
gulp.task('styles', function() {
	return processStyleSheets();
});

gulp.task('webpack', function() {
	return processWebpack();
});