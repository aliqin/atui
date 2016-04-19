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
    path: './build',
    publicPath: '/build/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
}
console.log('把线上目录的vue和vuecomponent的引用map到http://localhost:9999/build/目录就可以了\r\n')

module.exports = config
