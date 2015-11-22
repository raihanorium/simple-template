module.exports = function(grunt) {
	// include required plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// task configuration
	var tasks = {
		// load package data in pkg variable
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			output: ['dist']
		},

		copy: {
			source: {
				cwd: 'src/',
				src: '**/*',
				dest: 'dist/',
				expand: true
			},
			vendor: {
				cwd: 'vendor/',
				src: '**/*',
				dest: 'dist/vendor/',
				expand: true
			}
		},

		watching: {
			files:['src/**/*', 'Gruntfile.js'],
			tasks: ['build'],
	        options: {
	          	livereload: true
	        }
		},

		// describe connect, the start of the app in a http server
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'dist'
				}
			}
		}
	};

	// init configuration
	grunt.initConfig(tasks);

	// rename grunt watch task. because we want to run 'grunt watch' in order to build also
	grunt.renameTask( 'watch', 'watching' );

	// register watch task
	grunt.registerTask('watch', ['build', 'connect', 'watching']);

	// register build task
	grunt.registerTask('build', ['clean', 'copy']);

	// register the default task
	grunt.registerTask('default', ['build']);
}