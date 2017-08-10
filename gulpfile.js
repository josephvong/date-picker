const del = require('del');
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify');
const sequence = require('run-sequence').use(gulp);

const DOC = 'docs/'; // 创建一个 docs 文件夹路径

gulp.task('clear',()=>{  // 清空 docs 文件夹
	return del(DOC);  
})

gulp.task('stylus',()=>{
	return gulp.src('./styl/date-picker.styl')
		.pipe(stylus())
		.pipe(cleanCSS({
			level:2
		}))
		.pipe(gulp.dest(DOC+'css')); // 处理完 的css 文件 放置入docs/ 文件夹下面
})

gulp.task('webpack',()=>{
	return gulp.src('./app.main.js') // 将 main.js 入口文件
		.pipe(webpackStream(require('./webpack.config'),webpack)) // 使用webpack  根据 webpack.config配置文件进行打包
		.pipe(rename('date-picker.js'))
		.pipe(gulp.dest(DOC+'js'))  // 放入 docs/js 目录下
		/*.pipe(uglify())				// js 文件的压缩
		.pipe(rename('date-picker.min.js'))
		.pipe(gulp.dest(DOC+'js'))  // 放入 docs/js 目录下*/
})




gulp.task('default',callback => {
	sequence(
		'clear',
		['stylus','webpack'],
		callback
	)
})