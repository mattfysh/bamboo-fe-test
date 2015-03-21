var istanbul = require('browserify-istanbul');
// Karma configuration
// Generated on Fri Mar 20 2015 19:16:14 GMT-0700 (PDT)

module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'mocha'],
        files: [
            'node_modules/chai/chai.js',
            'src/init.spec.js',
            'node_modules/chai-jquery/chai-jquery.js', {
                pattern: 'src/**/*.spec.js',
                watched: false,
                included: true,
                served: true
            },

        ],
        preprocessors: {
            'src/**/*.spec.js': ['browserify']
        },
        reporters: ['progress', 'coverage', 'bamboo'],
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,

        browserify: {
            debug: true,
            transform: ['stringify', istanbul({
                ignore: ['**/*.spec.js', '**/*.html'],
                instrumenter: false,
                instrumenterConfig: {
                    test: true
                }
            })]
        },

        coverageReporter: {
          dir: 'coverage',
          reporters: [
            { type: 'html', subdir: 'report-html' },
            { type: 'lcov', subdir: 'report-lcov' },
            // reporters supporting the `file` property, use `subdir` to directly
            // output them in the `dir` directory
            { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
            { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
            { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
            { type: 'text', subdir: '.', file: 'text.txt' },
            { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
          ]
        }
    });
};
