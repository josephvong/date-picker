import should from 'should'
import EasyDate from '../app/EasyDate'  // 要测试的模块

describe('EasyDate',()=>{             // EasyDate 的测试用例描述
	let date = new EasyDate('+1m');   // 创建一个 EasyDate 实例
	describe("#new",()=>{
		it('should create instance',()=>{
			let some = date.toDate();    // some为 EasyDate 的 toDate() 结果
			let today = new Date();      // today 为一个新 js 的 Date() 对象
	 		should(some.getFullYear()).aboveOrEqual(today.getFullYear()); // some输出的年份应等于today输出的年份
			should(some.getFullYear()-today.getFullYear()).belowOrEqual(1);//
			if(today.getMonth()===11){   // today 输出月份 为11（真正的12月）
				should(some.getMonth()).equal(0); // some的年份为0 （真正的1月）
			}else{
				should(some.getMonth()-today.getMonth()).equal(1)
			}
		}) 
	})
}) 