var webpack = require('webpack')
var config = require('./webpack.config.js')
delete config.devtool
config.entry = {
    Vue: ['vue'],
    'VueComponent': ['./src/index'],
    'VueWidget': ['./src/widget/index']
}
config.output = {
    path: './dist',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
}
config.plugins = (config.plugins || []).concat([
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vue',
        chunks: 'Vue',
        filename:'vue.js'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vue-component',
    //     chunks: 'VueComponent',
    //     filename:'vue-component.js'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vue-widget',
    //     chunks: 'VueWidget',
    //     filename: 'vue-widget.js'
    // }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: 'production'
        }
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            'ascii_only': true
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
])
module.exports = config
