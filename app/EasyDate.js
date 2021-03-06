const METHODS = {
	m:'Month',
	d:'Date'
}

export default class EasyDate{ // 创建一个 EasyDate 的类
	constructor(offset){     // 类构造函数
		this.base = new Date();
		// 设置 时分秒微秒 为 0
		this.base.setHours(0);
		this.base.setMinutes(0);
		this.base.setSeconds(0);
		this.base.setMilliseconds(0);
		this.add(offset);
	}

	add(offset){
		offset = EasyDate.parse(offset);
		//console.log(offset)
		if(!offset){
			return
		}
		for (let key in offset) {
			if(offset.hasOwnProperty(key)){
				let method = METHODS[key];
				this.base[`set${method}`](this.base[`get${method}`]()+offset[key]);
			}
		}  
	}

	toDate(){
		return this.base;
	}

	static parse(offset){
		if(!offset){
			return 
		}
		offset = offset.toLowerCase();
		let result = {};
		offset.replace(/([+-]?\d+)([ymd])/g,(match,number,unit)=>{
			result[unit] = Number(number);
		});
		return result
	}	
}