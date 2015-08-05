var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');


//자바스크립트 파일을 하나로 합치고 압축한다.
gulp.task('optimize-js', function () {
	return gulp.src(['src/js/!(main).js', 'src/js/main.js'])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/images'));
});

//CSS 파일을 하나로 합치고 압축한다.
gulp.task('optimize-css', function () {
	return gulp.src(['src/css/!(style).css', 'src/css/style.css'])
		.pipe(concat('style.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/'));
});

//HTML 파일을 압축한다.
gulp.task('optimize-html', function () {
	return gulp.src('src/skin.html')
		.pipe(minifyhtml({comments:false}))
		.pipe(gulp.dest('dist/'));
});

//index.xml 파일을 복사한다.
gulp.task('serve-xml', function () {
	return gulp.src('src/index.xml')
		.pipe(gulp.dest('dist/'));
});

// 파일 변경 감지
gulp.task('watch', function () {
	gulp.watch('src/js/*.js', ['optimize-js']);
	gulp.watch('src/css/*.css', ['optimize-css']);
	gulp.watch('src/skin.html', ['optimize-html']);
	gulp.watch('src/index.xml', ['serve-xml']);
});

//기본 task 설정
gulp.task('default', ['optimize-js', 'optimize-css','optimize-html', 'optimize-html', 'serve-xml', 'watch' ]);
