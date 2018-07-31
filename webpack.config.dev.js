const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

	plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin(),
			new HtmlWebPackPlugin({
		      template: "./src/index.html",
		      filename: "./index.html"
		    })
	],
	entry: 
		//'webpack-hot-middleware/src',
		//'webpack-dev-server/client?http://localhost:8000',
		//'webpack/hot/dev-server',
		path.join(__dirname, '/src/index.js')
	,
	//entry: [
	//	'webpack-hot-middleware/src?reload=true',
	//	path.join(__dirname, '/src/index.js')
	//],
	devServer: {
		contentBase: './dist',
		hot: true
	},
	devtool: 'inline-source-map',
	
	target: 'web',
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, '/dist'),
		publicPath: "/"
	},
	module: {
		rules: [
					{
						test: /\.(js|jsx)$/,
						include: path.join(__dirname, '/src'),
						exclude: /(node_modules)/,
						loader: ['babel-loader']
					},
					{
						test: /\.css$/,
						loader: ['style-loader', 'css-loader']
					},
					{
						test: /\.less$/,
						loader: ['style-loader', 'css-loader', 'less-loader']
					},
					{
						test: /\.scss$/,
						loader: ['style-loader', 'css-loader', 'sass-loader']
					},
					{
						test: /\.(png|svg|jpg|gif|jpeg)$/,
						use: 'file-loader'
					},
					{
						test: /\.(woff|woff2|eot|tff|otf|ttf)$/,
						loader: ['file-loader']
					}					
				]
	},

	resolve:{
		extensions: ['.js']
	}
}