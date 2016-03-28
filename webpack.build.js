var webpack = require('webpack')
var config = require('./webpack.config.js')

config.entry = {
	'vue-component': './src/index.js',
	vue: ['vue']
}

config.output = {
	path: './dist',
	filename: '[name].js',
	// library: 'VueComponent',
	// libraryTarget: 'umd'
}

config.plugins = (config.plugins || []).concat([
	new webpack.ProvidePlugin({
        Vue: 'vue',
        VueComponent: 'vue-component'

    }),
    new webpack.optimize.CommonsChunkPlugin({
		name: "vue",
		filename: "vue.js",
    }),
    new webpack.optimize.CommonsChunkPlugin({
		name: "vue-component",
		filename: "vue-component.js",
    }),
])

module.exports = config
