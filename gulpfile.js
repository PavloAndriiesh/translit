var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('copy', function() {
    return gulp.src('src/translit.js')
        .pipe(gulp.dest('dist/'));
});
gulp.task('compress', function() {
    return gulp.src('src/translit.js')
        .pipe(uglify())
        .pipe(gulp.dest('tmp/'));
});

gulp.task('rename', ['copy', 'compress'], function() {
    return gulp.src("tmp/translit.js")
        .pipe(rename("translit.min.js"))
        .pipe(gulp.dest("./dist"));
});

gulp.task('clean', ['rename'], function () {
    return gulp.src('tmp', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {

});