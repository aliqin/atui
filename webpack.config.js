var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path')
module.exports = {
    entry: './docs/index.js',
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'build-docs.js'
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    resolve: {
        root: path.resolve('./')
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader?root=./docs/"
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ];
}
