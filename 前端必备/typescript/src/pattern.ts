/// <reference path="global.d.ts" />

// 泛型 分为 函数,接口,类

// 泛型函数
// <T>将函数say设置为泛型函数,参数arg是泛型T, 且返回值必须是泛型T
function say<T>(arg: T): T{
    return arg
}
// 声明变量say2为泛型函数, 无参数传入,且无返回值 ;在使用es6进行函数声明时, ()=>{} 必须时=>,而不是:
let say2: <T>()=>void


// 泛型接口  在使用时,必须指定泛型
interface Print<T>{
    say: (name: T, id: number)=>T,
    id: T
}
let p: Print<string>
p.id = 'a'
p.say = (name: string, id: number)=>name
// let p2: Print  err


// 泛型类 在使用时,必须指定泛型
class Gnumber<T>{
    say: (name: T)=>T
}
let gnum = new Gnumber<number>()
gnum.say = (name: number)=>name


// 泛型约束 指定范型类中必须包含的成员
interface Exwise{
    length: number
}
function getname<T extends Exwise>(arg: T): T{
    return arg
}
getname({name: 'a', 'length': 1})

import Test from './module'

let ab: Test.c2

let abc: Test3

let abcd = Test.f1

let a: Person.per2
let a2 = new Person.c2()