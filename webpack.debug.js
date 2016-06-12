var webpack = require('webpack')
var config = require('./webpack.config.js')
// delete config.devtool
config.entry = {
    atui: ['./src/index.js'],
    atuiWidget: ['./src/widgets/index.js'],
    atuiFilter: ['./src/filters/index.js'],
    style: ['./src/style.js']
}
config.output = {
    path: './build',
    publicPath: '/build/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
}
console.log('把线上目录的vue和atui的引用map到http://localhost:9999/build/目录就可以了\r\n')

module.exports = config
