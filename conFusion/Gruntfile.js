'use strict';

module.exports = function(grunt) {
    const sass = require('node-sass');

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        // CONFIGURATION
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
};