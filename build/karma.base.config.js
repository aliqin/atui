var path = require('path')
var webpack = require('webpack')


var webpackConfig = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
      test: path.resolve(__dirname, '../test'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },{
        test: /\.vue$/,
        loader: 'vue'
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue: {
    loaders: {

    }
  },
  devtool: '#inline-source-map'
}

// shared config for all unit tests
module.exports = {
  frameworks: ['mocha', 'chai'],
  files: [
    '../test/unit/index.js'
  ],
  preprocessors: {
    '../test/unit/index.js': ['webpack', 'sourcemap']
  },
  webpack: webpackConfig,
  webpackMiddleware: {
    noInfo: true
  }
}
