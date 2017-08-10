var gulp 	= require('gulp'),
plugins = require('gulp-load-plugins')();

gulp.task('sass', function () {
	return gulp.src('assets/sass/main.scss')
		.pipe(plugins.plumber({
			errorHandler: function(error) {
				plugins.notify.onError({
					title: "Error in " + error.plugin,
				})(error);
			}
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.cssnano())
		.pipe(plugins.sourcemaps.write())
		.pipe(gulp.dest('assets/css/'))
		.pipe(plugins.livereload());
});

gulp.task('sass:watch', function() {
	plugins.livereload.listen();
	gulp.watch('assets/sass/**/*.scss', ['sass']);
});