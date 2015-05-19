module.exports = function() {
	return {
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
};
