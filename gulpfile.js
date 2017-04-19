var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

var config = {
	style: {
		watch: __dirname + '/src/scss/**/*.scss',
		entry: __dirname + '/src/scss/style.scss',
		dest : __dirname + '/dist/css/'
	},

	sass: {
		outputStyle: 'compressed',
	},

	icons: {
		source  : __dirname + '/node_modules/font-awesome/fonts/**/*',
		dest    : __dirname + '/dist/fonts/'
	},

	livereload: {
		host: 'localhost',
		port: 35729
	}
}

console.log(config.icons);

gulp.task('sass', function () {
  return gulp.src(config.style.entry)
		.pipe(sass(config.sass).on('error', sass.logError))
		.pipe(gulp.dest(config.style.dest))
		.pipe(livereload());
});

gulp.task('icons', function() {
	return gulp.src(config.icons.source)
		.pipe(gulp.dest(config.icons.dest));
})

gulp.task('watch', ['default'], function () {
	livereload.listen(config.livereload);
	gulp.watch(config.style.watch, ['sass']);
});

gulp.task('default', ['icons', 'sass']);
