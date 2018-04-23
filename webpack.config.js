const webpack = require('webpack'); //访问内置的插件
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:{
		main:"./main.js",
		common:"./common.js"
	},
	output:{
		filename:'[name].[hash].js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader', 'css-loader']
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015','react']
					}
				}
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),	//清理文件
		new HtmlWebpackPlugin({
			title:'webpack react Test',
			template:'./index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
             name: 'common' // 指定公共的名称。
        }),
		new UglifyjsWebpackPlugin()		//压缩文件
	],
    devServer:{
        contentBase:"./dist",   //本地Server加载的目录
        open : true,    //是否直接打开浏览器
        inline:true,    //实时刷新
        historyApiFallback:true,   //不跳转
        port:8080   //端口
    }
}