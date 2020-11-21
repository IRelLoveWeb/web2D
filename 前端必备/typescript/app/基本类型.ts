// 基本类型
// 1. null | undefined 可以赋值给任意类型(strictNullChecks: false)
// 2. 任何值 可以赋值给 unknown ｜ any
let a1: number
let a2: string
let a3: boolean
let a4: null | undefined
let a5: symbol = Symbol('2')
let a6: unknown
let a7: any
let a8: void

// 引用类型
let b1: Array<string> | string[]
let b2: [string, string] // 元组
type b4 = (typeof b2)[number]
type b5 = (typeof b1)[number]

interface B3 { }
let b3: B3

// 函数
const func: (a: number) => number = (a) => a /* 上下文类型推断 */

// 泛型
// 1. 泛型就是编写模板代码来适应任意类型
// 2. 泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数
const c1 = [1, 2]
const c2 = c1.reverse()

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: { <T>(arg: T): T } = identity
let myIdentity2: <T>(arg: T) => T = identity

interface MyIdentity3 {
  <T>(arg: T): T
}
let myIdentity3: MyIdentity3 = identity

interface MyIdentity4<T> {
  (arg: T): T
}
let myIdentity4: MyIdentity4<number> = identity

// 通过构造函数, 推断泛型T的类型
class C3<T> {
  constructor(args: T) { }

  add(a: T) { }

  b: T
}
const c3 = new C3('2')
c3.b = '3'
c3.add('3')

// 约束泛型T必须包含属性length
function myIdentity5<T extends { length: number }>(args: T) { }
// let c5 = myIdentity5(1)
let c6 = myIdentity5({ length: 2, value: 3 })

// 泛型间的约束
function myIdentity6<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
// myIdentity6({x : 1}, 'y')
myIdentity6({ x: 1 }, 'x')

// 联合 交叉 类型
interface C7 {
  x: number
  y: string
}

interface C8 {
  x: number
  z: boolean
}

let c7: C7 | C8 = { x: 1, y: '2' } // 联合类型
let c8: C7 & C8 = { x: 1, y: '2', z: true } // 交叉类型
type c9 = C7 // 类型别名


// 接口(声明类型)

interface ReadonlyArray2 {
  readonly [number: number]: number
}

let rr: ReadonlyArray2 = [1, 2]
rr[0] = 3

interface Animal {
  say(): void
  age: number
}

interface Animal2 {
  say(): void
  age: number
  [key: string]: any // 指数签名
}

type animal2 = keyof Animal2

// 类实现接口(接口约束类)
class Dog implements Animal {
  say() { }
  age: number
}

let d1: Animal = new Dog()
let d2 = Dog

function useAnimal(animal: Animal) { }
let d3 = useAnimal({ say() { }, age: 1, location: 'a' }) // 额外属性location
let d6 = useAnimal({ say() { }, age: 1, location: 'a' } as Animal) // 1. 类型断言
function useAnimal2(animal: Animal2) { }
let d7 = useAnimal2({ say() { }, age: 1, location: 'a' }) // 2. 指数签名

const obj = { say() { }, age: 1, location: 'a' } // 3. 建立新变量, 变量不会进行额外类型检查
let d4 = useAnimal(obj)

// 只读属性, 首次赋值后, 不能再修改
let d5: ReadonlyArray<number> = [1]

// 接口描述函数
interface MyFunc {
  (a: number, b: number): boolean
}

// 签名
interface MyIndex {
  [index: number]: MyFunc // 数字签名, 数字签名的类型是字符串签名子集; 即 此处 MyFunc 是 Function的 子类型。
  [key: string]: Function // 字符串签名
}

interface MyIndex2 {
  age: string
  [key: string]: string | number // 签名接口中, 其他属性的类型必须 满足 签名类型。
}

// 类型推断
let e1 = 1 // 赋值 根据值推断类型
let e2 = [0, 1, null, '3']; // 公用类型
let e3: MyFunc = (a, b) => (a + b) > 2 // 已知变量e3的类型, 推断e3值类型(a,b,返回值)
let e4 = (a: number, b: number) => (a + b) > 2 // 已知e3值类型, 推断变量e3的类型 
let e5: MyFunc = (a) => a > 2

// 文本类型
let f1 = "Hello World"
const f2 = "Hello World"

function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;

function createElement(tagName: string): Element {
  return document.createElement('div')
}

// 枚举
const enum E1 { // 每个使用过的成员,在编译后会编译为const变量
  Cat = 0,
  Dog = 1 << 0,
  Pig = 1 << 1,
  Gost = 1 << 2,

  Some = Cat | Dog | Pig | Gost
}

enum E2 { // 生成E2变量, 自执行函数 生成一个对象
  Cat = 0,
  Dog = 1 << 0,
  Pig = 1 << 1,
  Gost = 1 << 2
}

type e2 = keyof typeof E1  // typeof E1 获取E1的类型, 类似接口
type e3 = keyof E1

function Fun3(obj: { Cat: number }) { }
const fun3 = Fun3(E2)

function Fun4(key: E2) { }
const fun4 = Fun4(1)

function Fun5(key: typeof E2) { console.log(key) }
const fun5 = Fun5(E2)

// lib.d.ts
type date1 = keyof typeof Date
type date2 = keyof Date

type cc3 = keyof C3<number>
type cc4 = keyof typeof C3

// 绕过类型检查
let x: { age: number }
x = { age: 1, name: '' }
let y = { age: 1, name: '' }
x = y

// 类型缩小
function checkx(x1: number | string) {
  if (typeof x1 === 'string') {
    x1.endsWith('a')
  } else {
    x1 + 1
  }
}

interface ICat {
  type: 'cat'
  size: number
}

interface IDog {
  type: 'dog'
  flat: string
}

type IAnimal = ICat | IDog

function handleAnimal(animal: IAnimal) {
  switch (animal.type) {
    case 'cat':
      return animal.size
    case 'dog':
      return animal.flat
    default:
      const _never: never = animal
      return _never
  }
}

// 类型兼容
class Animalx {
  say() { }
}
class Dogx extends Animalx {
  step() { }
}
let xxh: Animalx = new Dog()
let xxh2: Dogx = new Animalx()


// 修饰器
// 1. 运行时执行
// 2. 元数据(不改变结构的情况下, 添加属性)

// 1. 类修饰器, 对类进行操作
function Animal3Decorator<T extends { new(...args: any[]): {} }>(cls: T) {
  return class extends cls { // 返回一个新类
    newAge: number = 11
  }
}

// 2. 方法修饰器; 返回值为特性, 修改原属性(方法、属性、set/get、参数等都适用)
function doSay(title: string) {
  console.log('doSay')
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log('doSay inner')
    // 修改方法的特性 方式一
    // descriptor.enumerable = false
    return { // 返回值就是下一个修饰器中descriptor的值, 此处为doSay2
      // 修改方法的特性 方式二
      enumerable: false,
      // 修改方法, 将类Animal3中实例方法say替换了
      value: () => {
        console.log('doSay value')
      }
    }
  }
}

function doSay2() {
  console.log('doSay2')
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log('doSay2 inner')
    return {
      value: () => {
        console.log('doSay2 value')
      }
    }
  }
}

@Animal3Decorator
class Animal3 {
  age: number = 1
  size: string = '2'
  constructor(public done: number) {
    this.done = done
  }

  @doSay2()
  @doSay('abc')
  say() {
    console.log('say')
  }
}
const ani3 = new Animal3(55)
// doSay2
// doSay
// doSay inner
// doSay2 inner
ani3.say()
// doSay2 value
