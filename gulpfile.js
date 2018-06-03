var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

gulp.task('default', function () {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: '.'
        },
    })
})

gulp.task('watch', ['browserSync', 'default'], function (){
    gulp.watch('less/*.less', ['default']);
    gulp.watch('*.html', browserSync.reload);
});