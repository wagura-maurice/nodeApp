var gulp = require('gulp');
var spawn = require('child_process').spawn;
var node;

gulp.task('default', ['serve'], function() {
	// console.log("this is the default task");
});

gulp.task('serve', function() {
	gulp.run('server');
	gulp.watch(['./server/server.js'], function() {
		gulp.run('server');
	});
});

gulp.task('server', function() {
	
	if (node) node.kill();
		node = spawn('node', ['./server/server.js'], {stdio: 'inherit'});

	/*if (node) {
		node.kill();
	} else {
		node = spawn('node', ['./server/server.js'], {stdio: 'inherit'});
	}*/
});