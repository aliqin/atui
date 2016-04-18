var webpack = require('webpack')
var config = require('./webpack.config.js')
// delete config.devtool
config.entry = {
    Vue: ['vue'],
    VueComponent: ['./src/index.js'],
    VueWidget: ['./src/widgets/index.js'],
    VueFilter: ['./src/filters/index.js']
}
config.output = {
    path: './dist',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
}
config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
        Vue: 'vue',
    }),
    new webpack.ProvidePlugin({
        VueComponent: 'vue-component'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "Vue",
        filename: "vue.js",
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            "ascii_only": true
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
])
module.exports = config
