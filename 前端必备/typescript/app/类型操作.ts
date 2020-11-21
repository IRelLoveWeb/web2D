// 条件类型 约束类型(extends)

type G1<T> = T extends any[] ? T[number][] : T 
type g1 = G1<string[]>
type g2 = G1<number>

type Diff<T, U> = T extends U ? never : T // 在T中找不出不符合U的类型
type Filter<T, U> = T extends U ? T : never // 找出符合U的类型T
type NonNullable2<T> = Diff<T, null | undefined> // 剔除类型T的空类型

type g3 = Diff<'a' | 'b', keyof { a: number }> // 'b' 
type g4 = Filter<'a' | 'b', keyof { a: number }> // 'a'


interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

// 获取接口类型中特定的字面[联合]类型
type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never: K }[keyof T]
// 筛选接口中的类型
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>

type g5 = FunctionPropertyNames<Part>
type g6 = NonFunctionPropertyNames<Part>
type g7 = NonFunctionProperties<Part>

type g8 = typeof Object // 此处Object是变量, 获取类型
type g9 = keyof Object  // 此处Object是类型, 获取联合字面类型


// infer
type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : T;
function g10 <T>(cb: T): ReturnType2<T> {
  if (typeof cb === "function") {
    return cb()
  }
  return cb as any
}

const tt1 = g10((a: number, b: number) => a + b)
const tt2 = g10(3)

type G11<T> = T extends { a: infer U } ? U : T 
type g13 = G11<{ a: number, b: string }>

// 获取数组类型的 字面量联合类型
const arr2 = ['a', 'b2']
type ArrayToLiteral<T> = T extends Array<infer U> ? U : never
type xx = ArrayToLiteral<typeof arr2>

function strArr2Obj<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((obj, item) => {
    obj[item] = item
  }, Object.create(null))
} 
let result = strArr2Obj(['a', 'b'])
type xx1 = keyof typeof result

let arr = [1, '2', 3]
type arr1 = typeof arr


function Test <T>(args: T): T extends string ? string : number {
  if (typeof args === 'string') {
    return '1' as any
  }
  return 2 as any
}
Test('1')
Test(2)

// 接口定义类
class MyClass {}
interface MyFunc2 {
  new (): MyClass
}
const aa: MyFunc2 = class MyFuncxx {
  constructor () {
    return new MyClass()
  }
}

// 类型保护 和 区分类型
interface Fish {
  swim(): void
}
interface Bird {
  fly(): void
}

function getAnimal (animal: Fish | Bird) {
  if ('swim' in animal) { // 区分联合类型
    animal.swim()
  } else {
    animal.fly()
  }
  return animal
}

function isFish (animal: Fish | Bird): animal is Fish { // 类型谓语
  return 'swim' in animal
}

// 类型检查中移除null和undefined类型
function grad (key?: string | null) {
  return key ?? 'grad' // 返回值默认值
}

interface Run {
  name: string
  age?: string
}
function Rnull (): Run | undefined {
  return { name: '' }
}
const Rt = Rnull()
const Rd1 = Rt?.name
const Rd2 = Rt!.age!.length // 类型断言操作符(删除标识符类型中的null和undefined)

// 类型别名
type LinkedList<Type> = Type & { next: LinkedList<Type> };
interface Person {
  name: string;
}
// let people: LinkedList<Person>
// people.name;
// people.next.name;
// people.next.next.name;
// people.next.next.next.name;

type Pick2<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Obj2 = Record<'a'| 'b', {x: number}>

interface Obj {
  x: number
  y: string
  z: Function
}

type o1 = Pick<Obj, 'x' | 'y'> // { x: number, y: string }
type o2 = Omit<Obj, 'x' | 'y'> // { z: Function }