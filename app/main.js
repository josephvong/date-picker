import Picker from './date-picker.js'

// 点击 body 中 定义为‘date-picker-input’ 的 input 标签 生成 / 打开 日历控件
$("body").on('click','.date-picker-input',(event)=>{
	let target = $(event.currentTarget);  // 点击目标节点
	
	let options = target.data()  //点击 节点上 的 自定义属性（作为日历控件的配置项数据）
	
	let picker = options.DatePicker; // 判断 点击节点中 的‘date-picker’键 真假
		//注：此属性键 定义了 日历控件，若为false，表示 picker 为定义 

	if(picker){ // 如果 为真
		picker.show() // 直接打开 日历控件
	}

	// 若为false 的情况 下，定义 picker
	picker = new Picker(target,opitons); // 通过 Picker 类来创建 日历控件 实例

})