var base = require('./karma.base.config.js')

module.exports = function (config) {
  var cfg = {
    browsers: ['Chrome', 'Firefox', 'Safari'],
    reporters: ['progress'],
    singleRun: true
  }
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'travis') {
    cfg.browsers = ['PhantomJS']
  }
  config.set(Object.assign(base, cfg))
}
