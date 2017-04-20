var path = require("path");
var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',

	entry: {
		'app': './js/app'
	},

	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'js/[name].js'
	},

 	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},

	plugins: [
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
		}),
	]
};
