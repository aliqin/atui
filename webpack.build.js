var webpack = require('webpack')
var config = require('./webpack.config.js')

config.entry = {
	Vue: ['vue'],
	VueComponent: ['./src/index.js']
}

config.output = {
	path: './dist',
	filename: '[name].js',
	library: '[name]',
	libraryTarget: 'umd'
}

config.plugins = (config.plugins || []).concat([
	// new webpack.ProvidePlugin({
 //        Vue: 'vue',
 //        VueComponent: 'vue-component'

 //    }),
    new webpack.optimize.CommonsChunkPlugin({
		name: "Vue",
		filename: "vue.js",
    }),
    new webpack.optimize.CommonsChunkPlugin({
		name: "VueComponent",
		filename: "vue-component.js",
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.OccurenceOrderPlugin()

])

module.exports = config
