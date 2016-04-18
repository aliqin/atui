var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractAlidayu = new ExtractTextPlugin('alidayu.css')
var extractTmallwt = new ExtractTextPlugin('tmallwt.css')
var extractAlitx = new ExtractTextPlugin('alitx.css')
// var extractDoc = new ExtractTextPlugin('docs.css')
var path = require('path')
module.exports = {
    entry: {
        Vue: ['vue'],
        VueComponent: ['./src/index.js'],
        VueWidget: ['./src/widgets/index.js'],
        VueFilter: ['./src/filters/index.js']
    },
    output: {
        path: './build',
        publicPath: '/build/',
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    plugins: [
        // extractDoc,
        extractAlidayu,
        extractTmallwt,
        extractAlitx
    ],
    resolve: {
      root: path.resolve('./'),
      extensions: ['', '.js', '.vue'],
      alias: {
        'src': path.resolve(__dirname, './src')
      }
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.js$/,
            exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            // loader: "style-loader!css-loader?root=./docs/"
            // loader: extractDoc.extract(['css'])
        },
        {   test: /\.(png)$/,
            loader: 'url-loader?limit=100000'
        },
        {
            test: /alidayu\.less$/,
            loader: extractAlidayu.extract(['css','less'])
        },
        {
            test: /tmallwt\.less$/,
            loader: extractTmallwt.extract(['css','less'])
        },
        {
            test: /alitx\.less$/,
            loader: extractAlitx.extract(['css','less'])
        }]
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
    devtool: 'source-map'
};



