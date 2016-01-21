module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        watch: {
            js:{
                files: 'resource/*.js',
                tasks:  ['uglify:common']
            },
            css:{
                files: 'css/*.css',
                tasks:  ['cssmin:minify']
            }
        },
        connect: {
                options: {
                port: 3001,
                hostname: 'localhost',
                livereload: 35727
            }
        },
        cssmin: {
            minify:{
                options: {
                    banner: '/* <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
                },
                files: {
                    'build/common-concat-min.css':[
                        'css/base.css',
                        'css/layout.css',
                        'css/modules.css',
                        'css/bootstrap.css',

                        'css/ui-button.css',
                        'css/button-theme-default.css',

                        'css/ui-checkbox.css',
                        'css/checkbox-theme-default.css',

                        'css/ui-datepicker.css',
                        'css/datepicker-theme-default.css',

                        'css/ui-dialogs.css',
                        'css/dialogs-theme-default.css',



                        'css/ui-dropdown.css',
                        'css/dropdown-theme-default.css',

                        'css/ui-grid.css',
                        'css/grid-theme-default.css',

                        'css/ui-input.css',
                        'css/input-theme-default.css',

                        'css/ui-select.css',
                        'css/select-theme-default.css',

                        'css/ui-input-select.css',
                        'css/input-theme-default.css',

                        'css/common.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                banner:'/*<%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n'
            },
            common: {
                files:{'build/common-concat-min.js':[
                    "resource/vendor/jquery-1.10.2.min.js",
                    "resource/vendor/angular.js",
                    "resource/vendor/angular-ie8.js",
                    "resource/vendor/angular-sanitize.js",
                    "resource/vendor/angular-translate.js",
                    "resource/vendor/angular-ui-router.js",
                    "resource/vendor/lodash.min.js",

                    "resource/lab/ui.js",
                    "resource/lab/ui.transition.js",
                    "resource/lab/ui.modal.js",
                    "resource/lab/ui.buttons.js",
                    "resource/lab/ui.inputSelect.js",
                    "resource/lab/ui.checkbox.js",



                    "resource/lab/ui.dateparser.js",
                    "resource/lab/ui.datepicker.js",
                    "resource/lab/ui.timepicker.js",

                    "resource/lab/ui.dropdown.js",
                    "resource/lab/ui.grid.js",
                    "resource/lab/ui.position.js",
                    "resource/lab/ui.select.js",
                    "resource/lab/ui.dialogs.js",

                    "resource/lab/main.js"
                ]
                }
            }
            // business:{
            //      files:{'':[
            //          ]
            //      }
            // }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('server', function(target) {
        grunt.task.run([
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'cssmin',
        'uglify',
        'server'
    ]);
};