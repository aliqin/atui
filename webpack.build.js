var config = require('./webpack.config.js')

config.entry = {
  'vue-component': './src/index.js',
}

config.output = {
  path: './dist',
  filename: '[name].js',
  library: 'VueComponents',
  libraryTarget: 'umd'
}


module.exports = config
