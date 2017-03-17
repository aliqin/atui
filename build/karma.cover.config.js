var base = require('./karma.base.config.js')

var env = process.env.NODE_ENV

module.exports = function (config) {
  var options = Object.assign(base, {
    browsers: env === 'local' ? ['Chrome'] : ['PhantomJS'],
    //plugins: ['karma-webpack', 'karma-mocha', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '../coverage', subdir: '.' },
        { type: 'text-summary', dir: '../coverage', subdir: '.' }
      ]
    },
    singleRun: true
  })

  // add babel-plugin-istanbul for code intrumentation
  options.webpack.babel = {
    plugins: [['istanbul', {
      exclude: [
        'test/'
      ]
    }],'transform-runtime', 'transform-object-assign']
  }

  config.set(options)
}
