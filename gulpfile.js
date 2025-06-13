const gulp = require('gulp');
const server = require('gulp-server-livereload');

const serverOption = {
  livereload: true,
  open: true,
};

gulp.task('startServer', function (){
  return gulp.src('./').pipe(server(serverOption))
});