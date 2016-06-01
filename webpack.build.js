var webpack = require('webpack')
var config = require('./webpack.config.js')


config.entry = {
    VueComponent: ['./src/index.js'],
    VueWidget: ['./src/widgets/index.js'],
    VueFilter: ['./src/filters/index.js'],
    style: ['./src/style.js']
}
config.output = {
    path: './dist',
    filename: '[name].dev.js',
    library: '[name]',
    libraryTarget: 'umd'
}


if (process.env.NODE_ENV === 'production') {
  config.output.filename = '[name].js'
  // // remove vue依赖的环境判断
  // config.plugins = config.plugins.concat([
  //   new webpack.DefinePlugin({
  //       'process.env': {
  //           NODE_ENV: '"production"'
  //       }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //       sourceMap:false,
  //       compress: {
  //           warnings: true
  //       },
  //       output: {
  //           "ascii_only": true
  //       }
  //   }),
  //   new webpack.BannerPlugin(banner, {raw:true,entryOnly:true}),
  //   new webpack.optimize.OccurenceOrderPlugin()
  // ])
}

module.exports = config
