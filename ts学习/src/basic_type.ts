// 类型推断 未定义类型的变量,会进行类型推断

// 内置对象 args类型推断为 IArguments
function test(){
    let args = arguments
    args
}

let age // 类型推断为any
let name = "12" // 类型推断为string,赋值number就编译错误
name = 4


// boolean
let isdone: boolean = true

// number
let num: number = 12

// string
let str: string = 'asda'

// array
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]
let arr3: Array<any> = [1,2,'a', {}]

// tuple
let tup: [number, string] = [1, 'w']
// tup[3] = '344'  err

// enum  在真正运行时是一个对象
// Blue=2定义 后续枚举顺序从2开始,也重新赋值
enum Color {Red, Blue=2, Yellow}
let color: Color = Color.Red
let color2: string = Color[3]
// 使用字符串赋值
const enum Name {
    Up='jack is good!',
    Left='tom'
}
let jack = Name.Up


// null undefined (null,undefined 是所有类型的子集)
let a: undefined = undefined
let b: null = null
let c: number = undefined

// any (设置为any类型, 可以进行任何操作, 不会进行类型检查)
let d: any
d.sya()

// function
let func1: ()=>void = ()=>{}
// func2 是函数名字;   <T>(arg: T)=>T 是函数定义;   <T>(name: T)=> name 是具体的函数实现方法
let func2: <T>(arg: T)=>T = <T>(name: T)=> name
// 接口定义函数类型, func3 是函数名
interface Func{
    (arg1: string, arg2: number): void
}
let func3: Func = (name: string, id: number)=>{} 
function func4(args: any):void {}

// object  使用类型断言<>,指定对象类型,其实这里就是预设定对象属性;在编译时起作用
let obj: object = {}
// 字面量对象定义类型
let obj4:{name: string, say:()=>void}
obj4 = {name:'1', say:()=>{}}
// 扩充制定属性名
interface Obj{
    name: 'lyf',
    id: 1,
    say: ()=>{}
}
let obj2 = <Obj>{}
// 扩充任意属性
interface Obj2{
    [index: number] : number
    [propName: string]: {}
}
let obj3 = <Obj2>{}


// a类型兼容b类型 , 那么b 类型必须包含a 类型所有成员
// let xx: a  ;  a=b


// 交叉类型  &
// 类可以当作 类型或则数据结构, 这里是看成一个类型声明
class Person{
    name: string = 'a'
    say:()=>void
}
class Logger{
    name: string = 'b'
    log: ()=>void
}
let person=<Person&Logger>{}
person.name
person.log


// 联合类型 |   只能访问联合类型中共同拥有的成员
// 1 是函数声明         2 是变量 类型和赋值 
function getPadLeft(name: string, id: number | boolean){}
let getPadRight: (name: string, id: number | boolean)=>void = getPadLeft
let person2 = <Person | Logger>{}
person2.name


// 类型别名     1. 当接口无法描述类型时,就是使用别名 2. 别名无法被extends implements
type P = Person | Logger
type LinkLists<T> = Logger & {next: LinkLists<T>}
let pp: LinkLists<Person>
pp.next.name

// 完整性检查
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Triangle {
    kind: 'triangle';
    width: number
}
type Shape = Square | Rectangle | Circle | Triangle | {kind: 'a'}
function area(s: Shape){
    switch(s.kind){
        case 'square': return s.size * s.size
        case 'rectangle': return s.width * s.height
        case 'circle': return s.radius * s.radius
        default: return s
    }
}

// 索引类型
interface Person2{
    name: string;
    age: number; 
}
// 索引类型查询操作符 => keyof T的结果为 T上已知的公共属性名的联合; T上添加属性, keyof T的结果自动变化
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][]{
    return names.map(n => o[n])
}
let p3: string[] = pluck({name: 'lyf', age: 24}, ['name'])

// 索引访问操作符 => T[K]
function getProperty<T, K extends keyof T>(o: T, name: K): T[K]{
    return o[name]
}
let name2: string = getProperty({name: 'lyf', age: 24}, 'name')
let age2: number = getProperty({name: 'lyf', age: 24}, 'age')


export interface ZCode{
    say: ()=>number
}

