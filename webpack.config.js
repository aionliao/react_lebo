var path = require('path');
// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/main.js'
	},
	output: {
		filename: '[name]-[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		loaders: [
			{test: /\.(js|jsx)$/, loader: 'babel-loader', include: [path.resolve(__dirname, 'src')]},
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
			{test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,loader: 'url-loader?limit=8192&name=img/[name].[hash:8].[ext]'},
			{test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader', query: {
	        	limit: 10000,
	        	name: 'dist/fonts/[name].[hash:7].[ext]'
	        }}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
};
