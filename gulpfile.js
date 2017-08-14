var gulp 	= require('gulp'),
plugins = require('gulp-load-plugins')(),
production = !!plugins.util.env.production;

gulp.task('sass', function() {
	return gulp.src('assets/sass/main.scss')
		.pipe(production ? plugins.util.noop() : plugins.plumber({
			errorHandler: function(error) {
				plugins.notify.onError({
					title: "Error in " + error.plugin,
				})(error);
			}
		}))
		.pipe(production ? plugins.util.noop() : plugins.sourcemaps.init())
		.pipe(plugins.sass())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.cssnano())
		.pipe(production ? plugins.util.noop() : plugins.sourcemaps.write())
		.pipe(gulp.dest('assets/css/'))
		.pipe(production ? plugins.util.noop() : plugins.livereload());
});

gulp.task('js', function() {
	gulp.src('assets/js/main.js')
	.pipe(plugins.minify({
		ext:{
			min:'.min.js'
		}
	}))
	.pipe(gulp.dest('assets/js/'))
	.pipe(production ? plugins.util.noop() : plugins.livereload());
});

gulp.task('watch', function() {
	plugins.livereload.listen();
	gulp.watch('assets/sass/**/*.scss', ['sass']);
	gulp.watch('assets/js/main.js', ['js']);
});
