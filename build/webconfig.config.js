var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractAlidayu = new ExtractTextPlugin('greater-blue.css')
var extractTmallwt = new ExtractTextPlugin('tmall-red.css')
var extractAlitx = new ExtractTextPlugin('tao-orange.css')
var path = require('path')
var precss       = require('precss')
var autoprefixer = require('autoprefixer')
// var styleLintPlugin = require('stylelint-webpack-plugin')
// var version = process.env.VERSION || require('./package.json').version
var projectRoot = path.resolve(__dirname, 'src/')
const version = process.env.VERSION || require('../package.json').version

var banner =
  '\n/*!\n' +
  ' * atui v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' alibaba\n' +
  ' * Released under the MIT License.\n' +
  ' */'
module.exports = {
  entry: {
    atui: ['./src/index.js'],
    atuiWidget: ['./src/widgets/index.js'],
    atuiFilter: ['./src/filters/index.js'],
    style: ['./src/style.js']
  },
  output: {
    path: './build',
    publicPath: '/build/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins: [
    extractAlidayu,
    extractTmallwt,
    extractAlitx,
    // new styleLintPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: path.resolve('./'),
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }],
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
    },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
    },{
        test: /\.css$/,
        loader: "style-loader!css-loader"
    },{
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
    },{
        test: /greater-blue\.less$/,
        loader: extractAlidayu.extract(['css','postcss','less'])
    },{
        test: /tmall-red\.less$/,
        loader: extractTmallwt.extract(['css','postcss','less'])
    },{
        test: /tao-orange\.less$/,
        loader: extractAlitx.extract(['css','postcss','less'])
    }],
    noParse:[/addr.js/,/^vue$/]
  },
  vue: {
    loaders: {
      less: ExtractTextPlugin.extract(
              // activate source maps via loader query
              'css?sourceMap!' +
              'less?sourceMap'
              ),
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  postcss: function () {
    return {
      defaults: [precss, autoprefixer],
      cleaner:  [autoprefixer({ browsers: ['ie >= 9'] })]
    }
  },
  devtool: 'source-map'
}

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool
  module.exports.entry = {
      atui: ['./src/index.js'],
      atuiWidget: ['./src/widgets/index.js'],
      atuiFilter: ['./src/filters/index.js'],
      style: ['./src/style.js']
  }
  module.exports.output = {
      path: './dist',
      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd'
  }
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        // sourceMap:false,
        compress: {
            warnings: true
        },
        output: {
            "ascii_only": true
        }
    }),
    new webpack.BannerPlugin(banner, {raw:true, entryOnly:true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
