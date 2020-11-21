// 对类的方法进行抽象,也可以看成一个类

// 数组
let a: Array<any> = [1,2,3, 'a', {}]
let b: any[] = [1,2,3, 'a']

let c:ReadonlyArray<any> = [1,2,3, 'a']

// 类型断言
b = c as any[]

// 直接赋值,必须类型和键保持一直; 使用类型断言,可以用任何对象赋值
interface Person{
    name: string,
    title: string
}
let lyf: Person = { name: 'lyf', title: '小胡子'}

let lyf2 = <Person>{ name: 'lyf', title: '小胡子', age: '21'}
let lyf3 = <Person>{ name: 'lyf'}
let lyf4 = <Person>(new Object())


// 函数类型
interface someFun {
  (source: string, substring: string): boolean
}
let func = <someFun>function(a: string, b: string){}


// 索引签名
// 数字签名的值必须是字符串签名的值的子集,因为数字会转化为字符串取值,那么数字值必须是字符串值的子集
// 签名外的其他值必须是签名的子集
interface point{
  [index: number]: number
}

// 接口 可多继承接口
// 接口可强制设置对象属性 extends
interface Square{
  x: number,
  y: object,
  z: string
}
let data = <Square>{}

// 接口的混合对象,函数也是一个对象
interface Counter{
  (start: number): void
  interval: number
  reset(): void
}
let couter = <Counter>function(start: number) {}
couter.interval = 2
couter.reset = function(){}