const gulp = require('gulp');
const px2rem = require('gulp-px-to-rem');

gulp.task('default', function(){
  gulp.src('./styles/*.css')
    .pipe(px2rem({accuracy:2}))
    .pipe(gulp.dest('./styles/'));
});