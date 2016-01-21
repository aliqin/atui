var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractLESS = new ExtractTextPlugin('alidayu.css')
var ghpages = require('gh-pages')
var path = require('path')
module.exports = {
    entry: './docs/index.js',
    output: {
        path: './build',
        publicPath: '/build/',
        filename: 'build-docs.js'
    },
    plugins: [
        extractLESS
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
        }, {
            test: /\.less$/,
            loader: extractLESS.extract(['css','less'])
        }]
    },
    vue: {
        loaders: {
            less: ExtractTextPlugin.extract(
                // activate source maps via loader query
                'css?sourceMap!' + 'less?sourceMap')
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
        extractLESS,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ];
}

// if (process.env.NODE_ENV === 'deploy') {
//   ghpages.publish(path.join(__dirname, 'dist'), {
//     branch: 'demo',
//     src: '!src',
//     message: '同步demo',
//   },function() {

//   });
// }

