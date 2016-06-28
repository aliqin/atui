var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractDocs = new ExtractTextPlugin('docs.css')
var extractAlidayu = new ExtractTextPlugin('greater-blue.css')
var extractTmallwt = new ExtractTextPlugin('tmall-red.css')
var extractAlitx = new ExtractTextPlugin('tao-orange.css')
var path = require('path')
var precss       = require('precss')
var autoprefixer = require('autoprefixer')
var projectRoot = path.resolve(__dirname, './')
var git = require('git-rev-sync')
var version = git.branch().replace('daily/','')

var banner =
  '/*!\n' +
  ' * atui v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' alibaba\n' +
  ' * Released under the MIT License.\n' +
  ' */'
module.exports = {
    entry: {
      'app': ['./docs-new/main.js'],
      'atui': ['./src/index.js']
    },
    output: {
        path: '/build',
        publicPath: '/build/',
        filename: '[name].js'
    },
    plugins: [
      extractAlidayu,
      extractTmallwt,
      extractAlitx,
      // new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      root: path.resolve('./'),
      extensions: ['', '.js', '.vue'],
      alias: {
        'atui': path.resolve(__dirname, '../src')
      }
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
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
        },{   test: /\.(png)$/,
            loader: 'url-loader?limit=100000'
        },{
            test: /docs-new\/style\/\.less$/,
            loader: extractDocs.extract(['css','postcss','less'])
        },{
            test: /alidayu\.less$/,
            loader: extractAlidayu.extract(['css','postcss','less'])
        },{
            test: /tmallwt\.less$/,
            loader: extractTmallwt.extract(['css','postcss','less'])
        },{
            test: /alitx\.less$/,
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
