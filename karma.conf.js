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
        reporters: ['progress', 'coverage-allsources', 'coverage', 'bamboo'],
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,

        browserify: {
            debug: true,
            transform: ['stringify', istanbul({
                ignore: ['**/*.spec.js', '**/*.html']
            })]
        },

        coverageReporter: {
          dir: 'docs/coverage',
          include: 'src/**/!(*.spec).js',
          exclude: 'src/main.js',
          reporters: [
            { type: 'html', subdir: 'report-html' },
            { type: 'clover', subdir: '.', file: 'clover.xml' }
          ]
        }
    });
};
