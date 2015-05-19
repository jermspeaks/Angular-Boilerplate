/*	===============================
		Server
	=============================== */

var gulp = require('gulp'),
  embedlr = require('gulp-embedlr'),
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
	res.sendFile('index.html', {
		root: 'dist'
	});
});

// Dev task
gulp.task('serve', function() {
	// Start webserver
	server.listen(serverport);
	// Start live reload
	lrserver.listen(livereloadport);

	console.log('Serving on port 5000');
	// Run the watch task, to keep taps on changes
	// gulp.watch('watch');
});
