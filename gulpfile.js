var gulp = require('gulp');
var gulpless = require('gulp-less');
var gulpautoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

//Creating a Style task that convert LESS to CSS

gulp.task('styles', function() {
  var srcfile = './less/*.less';
  var temp = './styles';
  return gulp
    .src(srcfile)
    .pipe(gulpless())
    .pipe(gulpautoprefixer({browsers: ['last 2 versions','>5%']}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(temp));
});
