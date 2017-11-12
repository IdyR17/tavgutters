const PORT = 35729;
const STYLES = 'assets/styles/'
const path = require('path')

console.log(path.join(__dirname, STYLES, 'scss', '*'))
module.exports = function(grunt) {

    'use strict';
    // Project configuration.

    grunt.initConfig({
        // pug : {
    		// 	compile  : {
    		// 		files : [{
    		// 			expand : true,
    		// 			cwd : 'views',
    		// 			src : ['*.pug'],
    		// 			dest : 'views/html',
    		// 			ext : '.html',
    		// 		}],
    		// 		options : {
    		// 			pretty : true,
    		// 		},
    		// 	},
    		// },
        sass : {
        	scss : {
        		files : [{
        			expand : true,
        			cwd : path.resolve(__dirname, STYLES,'scss'),
        			src : ['*.scss'],
        			dest : path.resolve(__dirname, STYLES, 'css'),
        			ext : '.css',
        		}],
        	},

        	options : {
        		outputStyle : 'expanded',
        		indendtType : 'tab',
        	},
        },
        autoprefixer : {
            // options : {
            //     browsers : ['ie 10','opera 39', 'firefox 49', 'safari 10'],
            // },
            css : {
                files : [{
                    expand : true,
                    cwd : path.resolve(__dirname, STYLES, 'css'),
                    src : ['*.css'],
                    dest : path.resolve(__dirname, STYLES, 'css'),
                    ext : '.css',
                }],
                options : {
                    browsers : ['ie > 9','opera > 2%', 'ff > 2%', 'safari > 2%'],
                    // cascade : false,
                },
            },
        },
        watch : {
        	scss : {
        		files : [path.join(__dirname, STYLES, 'scss', '*.scss')],
        		tasks : ['sass:scss', 'autoprefixer:css'],
        	},
            // autoprefixer : {
            //     files : [path.join(__dirname, STYLES, 'css', '*.css')],
            //     tasks : ['autoprefixer:css'],
            // }
            // pug : {
            // 	files : ['views/*.pug'],
            // 	tasks : ['pug:compile'],
            // },
            // connect : {
            //     files : [
            //         __dirname + '/views/*.pug',
            //         STYLES + 'css/*.css',
            //     ],
            // },
            // options : {
            //     livereload : true,
            // }
        },
        /*connect : {
            server : {
                options : {
                    hostname : 'localhost',
                    port : PORT,
                    base : '.',
                    livereload : true,
                    open : true,
                    // keepalive : true,
                },
            },
        },*/
    });

  // Load the plugin that provides the "uglify" task.

    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');

  // Default task(s)
    // grunt.registerTask('default', [/*'pug',*/'sass','autoprefixer',/*'connect',*/'watch']);
    grunt.registerTask('default', ['watch'])

    // grunt.event.on('watch', function(action, filepath){
    //     console.log(filepath)
    // })
};