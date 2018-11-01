const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');

const config = {
	mode: 'production',
	entry: {
		main: path.resolve(SRC_PATH, 'index.ts')
	},
	output: {
		path: BUILD_PATH,
		filename: "js/[name]-[hash].js"
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.jpg', '.jpeg', '.svg', '.gif'],
		alias: {
			images: path.join(SRC_PATH, 'assets/images'),
			styles: path.join(SRC_PATH, 'assets/css'),
			classes: path.join(SRC_PATH, 'app/classes'),
			types: path.join(SRC_PATH, 'app/types'),
			interfaces: path.join(SRC_PATH, 'app/interfaces'),
			functions: path.join(SRC_PATH, 'app/functions'),
			utils: path.join(SRC_PATH, 'app/utils'),
			constants: path.join(SRC_PATH, 'app/constants'),
		}
	},
    module: {
        rules: [
			{
				enforce: 'pre',
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					emitError: false,
					failOnWarning: false,
					fix: true
				},
			},
        	{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(SRC_PATH, 'assets/index.html')
		}),
		new ExtractTextPlugin("css/[name]-[hash].css"),
	],
	devServer: {
		contentBase: path.join(BUILD_PATH),
		historyApiFallback: true,
		host: '0.0.0.0',
		port: 8081,
		hot: true,
	}
};

module.exports = env => {

	if (env.NODE_ENV === 'development') {
		config.mode = 'development';
		config.plugins.push(new webpack.HotModuleReplacementPlugin());
	}
	
	return config;
};
