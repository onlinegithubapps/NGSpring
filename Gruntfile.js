'use strict';
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Show grunt task time
    require('time-grunt')(grunt);

    // Configurable paths for the app
    var appConfig = {
        app: 'src/main/app',
        dist: 'dist'
    };

    // Grunt configuration
    grunt.initConfig({

        // Project settings
        dashboard: appConfig,

        // The grunt server settings
        connect: {
            options: {
                port: 9001,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            //connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('<%= dashboard.app %>/bower_components')
                            ),
                            connect().use(
                                '/dashboard-ui',
                                connect.static(appConfig.app)
                            )
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect().use(
                                '/dashboard-ui',
                                connect.static(appConfig.dist)
                            )
                        ];
                    }
                }
            }
        },
        // Compile less to css
        less: {
            development: {
                options: {
                    compress: true,
                    optimization: 2,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                files: {
                    "<%= dashboard.app %>/css/custom-bootstrap.css": "<%= dashboard.app %>/less/custom-bootstrap.less",
                    "<%= dashboard.app %>/css/style.css": "<%= dashboard.app %>/less/style.less",
                    "<%= dashboard.app %>/css/style-contrast.css": "<%= dashboard.app %>/less/style-contrast.less",
                    "<%= dashboard.app %>/css/style-guide.css": "<%= dashboard.app %>/less/style-guide.less",
                    "<%= dashboard.app %>/css/style-loading.css": "<%= dashboard.app %>/less/style-loading.less"
                }
            },
            dist: {
                options: {
                    compress: true,
                    optimization: 2,
                    sourceMap: false,
                    outputSourceFiles: false
                },
                files: {
                    "<%= dashboard.app %>/css/custom-bootstrap.css": "<%= dashboard.app %>/less/custom-bootstrap.less",
                    "<%= dashboard.app %>/css/style.css": "<%= dashboard.app %>/less/style.less",
                    "<%= dashboard.app %>/css/style-contrast.css": "<%= dashboard.app %>/less/style-contrast.less",
                    "<%= dashboard.app %>/css/style-guide.css": "<%= dashboard.app %>/less/style-guide.less",
                    "<%= dashboard.app %>/css/style-loading.css": "<%= dashboard.app %>/less/style-loading.less"
                }
            }
        },
        // Watch for changes in live edit
        watch: {
            styles: {
                files: ['<%= dashboard.app %>/less/**/*.less'],
                tasks: ['less:development', 'copy:styles']

            },
            js: {
                files: ['<%= dashboard.app %>/scripts/{,*/}*.js']

            },
            livereload: {

                files: [
                    '<%= dashboard.app %>/**/*.html',
                    '.tmp/css/{,*/}*.css',
                    '<%= dashboard.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        uglify: {
            options: {
                mangle: true,
                compress: {}
            },
            live: {
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: '<%= dashboard.app %>/',      // Src matches are relative to this path.
                        src: ['**/*.js', '!bower_components/**/*.js'], // Actual pattern(s) to match.
                        dest: '<%= dashboard.dist %>/'   // Destination path prefix.
//                    ext: '.min.js',   // Dest filepaths will have this extension.
//                    extDot: 'first'   // Extensions in filenames begin after the first dot
                    }
                ]
            }
        },
        // Clean dist folder
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= dashboard.dist %>/{,*/}*',
                            '!<%= dashboard.dist %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= dashboard.app %>',
                        dest: '<%= dashboard.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            '*.html',
                            'images/**/*.*',
                            'authorisation/**/*.*',
                            'landing/**/*.*',
                            'common/**/*.*',
                            'core/**/*.*',
                            'holiday/**/*.*',
                            'widgets/**/*.*',
                            'employee/**/*.*',
                            'support/**/*.*',
                            'version/**/*.*',
                            'branding/**/*.*',
                            'pdr/**/*.*',
                            'holiday/**/*.*',
                            'icons/**/*.*',
                            'irregular-claims/**/*.*',
                            'team-selector/**/*.*',
                            'sickness/**/*.*',
                            'bvp/**/*.*',
                            'loginalerts/**/*.*',
                            'manage-leave/**/*.*',
                            'attainments/**/*.*',
                            'vehicle/**/*.*',
                            'peer-review/**/*.*',
                            'peer-review-nomination/**/*.*',
                            'training/**/*.*',
                            'transfers/**/*.*',
                            'paydocs/**/*.*',
                            'competency-training/**/*.*',
                            'cvprinting/**/*.*',
                            'admin-units/**/*.*',
                            'appraisal/**/*.*',
                            'disciplinary/**/*.*',
                            'document-view/**/*.*',
                            'planner/**/*.*',
                            'timesheet/**/*.*',
                            'responsible/**/*.*',
                            'succession-plan/**/*.*',
                            'personal/**/*.*',
                            'case-management/**/*.*',
                            'absence/**/*.*',
                            'questionnaire/**/*.*',
                            'delegation/**/*.*',
                            'healthsafety/**/*.*',
                            'internal-recruitment/**/*.*',
                            'interests/**/*.*',
                            'manager-recruitment/**/*.*',
                            'manager-reports/**/*.*',
                            'pensions/**/*.*',
                            'photo-upload/**/*.*',
                            'leavers/**/*.*',
                            'expenses/**/*.*',
                            'expenses-legacy/**/*.*',
                            'managetime/**/*.*',
                            'attainments-matching/**/*.*',
                            'succession/**/*.*',
                            'organisation/**/*.*',
                            'manager-absence/**/*.*',
                            'query-tool/**/*.*',
                            'process/**/*.*',
                            'bulk-timesheets/**/*.*',
                            'formhistory/**/*.*',
                            'learninganddevelopment/**/*.*',
                            'employee-directory/**/*.*',
                            'optimumsso/**/*.*',
                            'hrwebauth/**/*.*'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= dashboard.app %>/bower_components/fontawesome',
                        src: ['fonts/*.*'],
                        dest: '<%= dashboard.dist %>'
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= dashboard.app %>/bower_components/bootstrap',
                        src: ['fonts/*.*'],
                        dest: '<%= dashboard.dist %>'
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= dashboard.app %>',
                        src: ['fonts/*.*'],
                        dest: '<%= dashboard.dist %>'
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= dashboard.app %>/bower_components',
                        src: ['iframe-resizer/js/*.js'],
                        dest: '<%= dashboard.dist %>/bower_components'
                    },
                    // font files for ui-grid dropdowns
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= dashboard.app %>/bower_components/angular-ui-grid',
                        src: [
                            'ui-grid.eot',
                            'ui-grid.svg',
                            'ui-grid.tff',
                            'ui-grid.woff'
                        ],
                        dest: '<%= dashboard.dist %>/styles'
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= dashboard.app %>/styles',
                dest: '.tmp/css/',
                src: '{,*/}*.css'
            },
            lessFonts: {
                expand: true,
                dot: true,
                cwd: '<%= dashboard.app %>/less',
                src: ['fonts/'],
                dest: '<%= dashboard.app %>'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: '<%= dashboard.app %>',
                src: ['css/*.css'],
                dest: '<%= dashboard.dist %>'
            }
        },
        // Renames files for browser caching purposes
        filerev: {
            options: {
                // this function renames the file if it ends in a different hash to the current one.
                process: function (basename, filehash, extension) {
                    var name;
                    if (basename.lastIndexOf(".") > 0 && grunt.revisionLoop) {
                        name = [basename.substr(0, basename.lastIndexOf(".")), filehash, extension].join('.');
                    } else {
                        name = [basename, filehash, extension].join('.');
                    }
                    return name;
                }
            },
            dist: {
                src: [
                    '<%= dashboard.dist %>/scripts/{,*/}*.js',
                    '<%= dashboard.dist %>/css/{,*/}*.css',
                    '!<%= dashboard.dist %>/fonts/*',
                    '<%= dashboard.dist %>/**/*.html',
                    '<%= dashboard.dist %>/**/*.js',
                    '!<%= dashboard.dist %>/index.html',
                    '!<%= dashboard.dist %>/support.html',
                    '!<%= dashboard.dist %>/branding.html',
                    '!<%= dashboard.dist %>/hrwebauth.html',
                    '!<%= dashboard.dist %>/widgets/**/*.html',
                    '!<%= dashboard.dist %>/common/thirdparty/locale/*.js',
                    '!<%= dashboard.dist %>/expenses/views/expenses-summary/expense-claim-summary.html'
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= dashboard.dist %>',
                        src: ['*.html', '**/{,*/}*.html'],
                        dest: '<%= dashboard.dist %>'
                    }
                ]
            }
        },
        useminPrepare: {
            html: '<%= dashboard.app %>/index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['<%= dashboard.dist %>/index.html', '<%= dashboard.dist %>/**/*.html'],
            css: ['<%= dashboard.dist %>/**/*.css'],
            js: ['<%= dashboard.dist %>/**/*.js'],
            options: {
                assetsDirs: ['<%= dashboard.dist %>'],
                patterns: {
                    js: [
                        [/templateUrl:\s?["']([^"']+)["']/gm, 'Update the JS templateUrls to reference the new revved html files'],
                        [/employeeTemplate:\s?["']([^"']+)["']/gm, 'Update the JS templateUrls to reference the new revved html files'],
                        [/managerTemplate:\s?["']([^"']+)["']/gm, 'Update the JS templateUrls to reference the new revved html files'],
                        [/delegateTemplate:\s?["']([^"']+)["']/gm, 'Update the JS templateUrls to reference the new revved html files'],
                        [/["']([^"']+\.js)["']/gm, 'Update the JS references to other js files to reference their new revved counterparts'],
                        [/[^\+]\s?["']([^"']+\.css)["']/gm, 'Update the JS references to other js files to reference their new revved counterparts']
                    ],
                    html: [
                        [/<ng-include[^\>]+src="'([^"']+)'"/gm, 'Update any ng-include elements to have the revved name'],
                        [/.*?ng-include="'([^"']+)'"/gm, 'Update any element with the ng-include attribute to have the revved name'],
                        [/.*?template-url="([^"]+)"/gm, 'Update any element with a templateUrl to have the revved name'],
                        [/.*?src="([^"]+\.html)"/gm, 'Update any element with a templateUrl to have the revved name'],
                        [/["']\.\.\/\.\.\/([^"']+\.css)["']/gm, 'Update the JS references to other js files to reference their new revved counterparts'],
                        [/["']\.\.\/\.\.\/([^"']+\.js)["']/gm, 'Update the JS references to other js files to reference their new revved counterparts']
                    ]
                }
            }

        },

        karma: {
            unit: {
                configFile: 'src/test/config/karma.conf.js',
                singleRun: true
            },
            autorun: {
                configFile: 'src/test/config/karma.conf.js',
                singleRun: false
            }
        }
    });

    grunt.registerTask('check-filerev', function () {
        var summary = grunt.filerev.summary;
        var revCount = 0;
        var fullMatch = true;
        for (var key in summary) {
            if (summary.hasOwnProperty(key)) {
                fullMatch = fullMatch && (key === summary[key]);
                if (key !== summary[key]) {
                    revCount++;
                    grunt.log.writeln(key, summary[key]);
                }
            }
        }
        if (!fullMatch) {
            if (revCount === grunt.revCount) {
                grunt.fail.fatal('Potential Infinite loop in versioning recursion. Please check files.');
            } else {
                grunt.log.writeln('re-revisioning');
                grunt.filerev = undefined;
                grunt.revCount = revCount;
                grunt.task.run('nested-filerev');
            }
        } else {
            grunt.log.writeln('everything finally matches');
        }
    });

    grunt.registerTask('nested-filerev', ['filerev', 'usemin', 'check-filerev']);
    grunt.registerTask('beginRevisionLoop', function () {
        grunt.revisionLoop = true;
        grunt.task.run('nested-filerev');
    });


    // Run live version of app
    grunt.registerTask('live', [
        'clean:server',
        'less:development',
        'copy:styles',
        'copy:lessFonts',
        'connect:livereload',
        'watch'
    ]);

    // Run build version of app
    grunt.registerTask('server', [
        'build',
        'connect:dist:keepalive'
    ]);

    // Build version for production
    grunt.registerTask('build', [
        'clean:dist',
        'less:dist',
        'useminPrepare',
        'concat',
        'copy:dist',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'beginRevisionLoop',
        'htmlmin'
    ]);

    grunt.registerTask('test', ['karma:unit'])

};
