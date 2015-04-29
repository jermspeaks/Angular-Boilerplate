/*	===============================
		Gulp Tasks
	=============================== */

/* // TODO: Add description of what each task does
	Welcome to Gulp
	List of Gulp tasks:
		- dist
		- watch
		- build
		- templates
		- library
		- styles
		- test
		- autotest
		- serve
*/

'use strict';

var gulp = require('gulp'),
	gutil = require('gulp-util');

var filePath = { // TODO Flesh this filepath out further
	lint: {
		src: ['./build/src/**/*.js', './build/index.js', './build/routes.js']
	},
	js: {

	},
	vendor: {
		src: ['./bower_components/**/*.js}'],
		dest: './dist/js/lib.js',
		dest_dir: './dist'
	},
	sass: {
		src: ['./build/stylesheets/*.scss'],
		dest: './dist/css/*.css',
		dest_dir: './dist/css'
	},
	html: {
		src: './build/templates/**/*.html',
		dest: './build/.templates.js',
		dest_dir: '.'
	},
	unit: {
		src: [
			'./bower_components/angular/angular.js',
			'./bower_components/angular-*/angular-*.js',
			'./build/js/lib.js',
			'./build/js/app.js',
			'./tests/karma/*.js'
		]
	},
	e2e: {
		src: 'tests/protractor/**/*.feature'
	}
};

/*	===============================
		Build & Watch
	=============================== */

var watchify = require('watchify'),
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
		gulp.watch('./build/stylesheets/main.scss', ['styles']);
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
	var stylesheets = './build/stylesheets/*.scss';
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

/*	===============================
		Tests
	=============================== */

var karma = require('gulp-karma');
var protractor = require("gulp-protractor").protractor;

gulp.task('test', function() {
	// Be sure to return the stream
	// NOTE: Using the fake './foobar' so as to run the files
	// listed in karma.conf.js INSTEAD of what was passed to
	// gulp.src !
	return gulp.src('./foobar')
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err) {
			// Make sure failed tests cause gulp to exit non-zero
			console.log(err);
			this.emit('end'); //instead of erroring the stream, end it
		});
});

gulp.task('autotest', function() {
	return gulp.watch(['./dist/js/app.js', './tests/karma/*.js', './tests/protractor/**/*.js'], ['test', 'protractor-test']);
});

gulp.task('protractor-test', function() {
	return gulp.src(["./tests/protractor/*.js"])
	    .pipe(protractor({
	        configFile: "protractor.config.js",
	        args: ['--suite', 'full']
	    }))
	    .on('error', function(e) { throw e });
});

/*	===============================
		Server
	=============================== */

var embedlr = require('gulp-embedlr'),
	refresh = require('gulp-livereload'),
	lrserver = require('tiny-lr')(),
	express = require('express'),
	livereload = require('connect-livereload'),
	livereloadport = 35729,
	serverport = 5000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({
	port: livereloadport
}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
	res.sendfile('index.html', {
		root: 'dist'
	});
});

// Dev task
gulp.task('serve', function() {
	// Start webserver
	server.listen(serverport);
	// Start live reload
	lrserver.listen(livereloadport);
	// Run the watch task, to keep taps on changes
	// gulp.watch('watch');
});
