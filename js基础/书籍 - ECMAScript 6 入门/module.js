//1.导出 say.js
export var a =1;
export function say(){}
export default function run(){}
export {a,say as sayMe}

//2.导入 Me.js
import {a,sayMe} from 'say'//加载非default属性方法
import meRun from 'say' //加载default属性和方法,可以改成任意名字
import * as meSay from 'say' 

//3.将say导入的导出
export {a,say} from 'say' ;//将say.js中导入的a,say导出

//4.import命令会被 JavaScript 引擎静态分析，先于模块内的其他模块执行（叫做”连接“更合适）
//  import和export命令只能在模块的顶层，不能在代码块之中

/*
5. script 文件加载
   1.>defer 等到整个页面渲染完，再执行模块脚本
   2.>async 只要加载完成，渲染引擎就会中断渲染立即执行
   3.>type='module' 等到整个页面渲染完，再执行模块脚本

6.
*/