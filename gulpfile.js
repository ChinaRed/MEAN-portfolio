var gulp = require('gulp');
var sass = require('gulp-sass');
var refresh = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var livereloadport = 35729;

gulp.task('server', function (){
  //restart server if app.js changes
  nodemon({ script: './server/server.js'})
    .on('resart', function(){
      console.log('going to restart server!')
      setTimeout(function(){
        console.log('restarted server')
        refresh.changed("./server/server.js");
      }, 500);
    });
});

gulp.task('sass', function (){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass( { errLogToConsole: true } ))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function (){
  //listen for livereload
  refresh.listen(livereloadport);

  gulp.watch('./sass/**/*.scss', ['sass']);

  //livereload when jade template or static assets change
  gulp.watch('./public/**/*', refresh.changed);

});

gulp.task('default', ['server', 'watch', 'sass']);