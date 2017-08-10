const path = require('path') //调用 node 的 path 自带库 

module.exports = {
	entry:{  // 定义入口js ，可以定义 多个 入口js，下面的 output中 用 [name].js 来弹性输出不同名称的 入口文件
		
		'date-picker':'./app/main.js'  // 定义 “/app/main.js”文件 为 以‘date-picker.js’命名的入口文件
	
	},

	output:{ // 定义（入口文件的）输出（实际挂在到index.html入口文件的js文件名）
		
		filename:'[name].bundle.js', // '[name]'表示这个输出文件以前面定义的entry入口js名称来命名输出
		
		path:path.resolve(__dirname,'dist'),//输出路径 '__dirname'是表示主目录的常量，这段代码是表示在主目录‘解析（读/建）’dist文件夹，来存放输出的（入口）js文件	

	},

	module:{ // 注册各种模块
		// 注册 各种 loader 加载器
		loaders:[ 
			{
				test:/\.js$/,  // 正则验证 .js 结尾的 文件
				exclude: /node_modules/,  // 排除 项目里 node_module 里面的 js文件（不进行处理）
				loader: 'babel-loader'  // 使用 loader babel-loader
			},
			{
				test:/\.hbs$/,
				loader:'handlebars-loader'
			}
		]
	},

	devtool:'source-map',

	watch:true, // 开启监听模式

	watchOptions:{  // 监听模式 的 参数配置
		ignored:/node_modules|dist|build|docs|css/, // 对以下类型 的文件 排除监听
		poll:1000,   // 监听频率 1s  
	}
}