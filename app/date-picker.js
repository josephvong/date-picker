// 此文件 为 定义并输出 date-picker 类 的 js 文件

export default class Picker{
	constructor(target,options){
		this.target = target;
		this.options = options;
		this.createElement(options);
		this.delegateEvent(options);
		this.setValue(options);
	}

}