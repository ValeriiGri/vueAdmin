const path = require('path');

module.exports = {
	entry: 'C:/Users/66826/repo/vueAdmin/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules:[
				{
					test: /\.js$/, 
					exclude: /node_modules/, 
					loader: "babel-loader" 
				},
				{
			        test: /\.vue$/,
			        loader: 'vue-loader',
			        exclude: /node_modules/
			     }
		]

	}
};