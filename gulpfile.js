var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('compress', function() {
    return gulp.src('translit.js')
        .pipe(uglify())
        .pipe(gulp.dest('src/'));
});

gulp.task('rename', ['compress'], function() {
    return gulp.src("dist/translit.js")
        .pipe(rename("translit.min.js"))
        .pipe(gulp.dest("./src"));
});

gulp.task('default', ['rename'], function() {

});