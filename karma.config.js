// Karma configuration

// Application configuration
const pkg = require('./package.json');

// Use the "export" command to define the KARMA_PORT port; otherwise,
// use the default port number specified in the package.json
const KARMA_PORT = process.env.KARMA_PORT || pkg.karmaPort;

module.exports = (config) => {
    config.set({
        // Base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // Frameworks to include: https://npmjs.org/browse/keyword/karma-adapter
        // jasmine: Development/Testing framework https://jasmine.github.io/
        // source-map-support: Create sourcemaps so that errors in the transpiled code matches the untranspiled code https://www.npmjs.com/package/source-map-support
        frameworks: ['jasmine', 'source-map-support'],

        // List of files/patterns to load into the browsers
        files: [
            'src/emitter.js',
            'test/*Spec.js',
        ],

        // List of files/patterns to exclude from loading into the browsers
        exclude: [
        ],

        // Preprocess the files/patterns before loading into the browsers https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/emitter.js': ['typescript'],
            'test/*Spec.js': ['typescript', 'sourcemap'],
        },

        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: true, // (optional) Generates corresponding .map file.
                target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
                noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
                noResolve: true, // (optional) Skip resolution and preprocessing.
                removeComments: true, // (optional) Do not emit comments to output.
                concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
            },
            // transforming the filenames
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        },

        // Use "mocha" as the testing reporter https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // Web server port
        port: KARMA_PORT,

        // Enable/disable colors in the standard output stream (stdout) (reporters and logs)
        colors: true,

        // Supported values:
        // config.LOG_DISABLE, config.LOG_ERROR, config.LOG_WARN, config.LOG_INFO, config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable/disable watching files and executing tests whenever there are file changes
        autoWatch: true,

        // Start the following browsers https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // If true, Karma captures browsers, runs the tests and immdiately exits
        singleRun: false,

        // Concurrency level (number of browsers to start simultaneously)
        concurrency: Infinity,
    });
};
