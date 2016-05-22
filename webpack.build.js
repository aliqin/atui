var webpack = require('webpack')
var config = require('./webpack.config.js')


config.entry = {
    // Vue: ['vue'],
    VueComponent: ['./src/index.js'],
    VueWidget: ['./src/widgets/index.js'],
    VueFilter: ['./src/filters/index.js']
}
config.output = {
    path: './dist',
    filename: '[name].dev.js',
    library: '[name]',
    libraryTarget: 'umd'
}


if (process.env.NODE_ENV === 'production') {
  // vueChunk.filenameTemplate = 'vue.js'
  config.output.filename = '[name].js'
  // remove vue依赖的环境判断
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        },
        output: {
            "ascii_only": true
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}

module.exports = config
