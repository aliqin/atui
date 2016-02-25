var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractAlidayu = new ExtractTextPlugin('alidayu.css')
var extractTmallwt = new ExtractTextPlugin('tmallwt.css')
var extractAlitx = new ExtractTextPlugin('alitx.css')
var extractCSS = new ExtractTextPlugin('docs.css')
var path = require('path')
module.exports = {
    entry: './docs/index.js',
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'build-docs.js'
    },
    plugins: [
        extractCSS,
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
            loader: extractCSS.extract(['css'])
        },
        {   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
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
                    )
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    devtool: 'source-map'
};
if (process.env.NODE_ENV === 'production') {
    delete module.exports.devtool;
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        extractCSS,
        extractAlidayu,
        extractTmallwt,
        extractAlitx,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ];
}


