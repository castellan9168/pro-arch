var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssNano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss') // Converts Sass to CSS with gulp-sass
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('sub-pages', function() {
    return gulp.src('app/html/**/*.html')
        .pipe(gulp.dest('dist/html'));
});

gulp.task('projects', function() {
    return gulp.src('app/projects/**/*')
        .pipe(gulp.dest('dist/projects'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baserDir: 'app'
        },
    });
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssNano()))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback);
});

gulp.task('default', function (callback) {
    runSequence(['sass', 'browser-sync', 'watch'],
        callback
    );
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/**/*.json', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', function(callback) {
    runSequence('clean:dist',
        ['sass', 'images', 'projects', 'fonts', 'sub-pages'],
        'useref',
        callback
    );
});
