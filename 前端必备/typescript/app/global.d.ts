// 声明文件
// 1. 试图表述一个其他地方已经存在的代码; 如: 浏览器 和 Node.js 运行环境里的代码
// 2. 每个.d.ts文件的根级别声明必须带 declare 前缀, 这些声明不会编译成代码, 但是编译过程必须存在

// 可以使用dot方式获取内部值(js运行环境中存在mylib局部命名空间)
declare namespace mylib {
  // 可以点出(有变量声明)
  function makeGreeting(s: Test3): string;
  let numberOfGreetings: number;
  class Test {}
  namespace Test2 { // Test2 和 Test4的区别在于 Test2中有变量, Test4中没有
    let a: number
  }

  // 无法点出(只有类型声明)
  namespace Test4 {}
  interface Test3 {} // namespace构成局部空间,Test3当作内部类型变量
}

interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

// 函数重载
declare function greeting(n: number): string
declare function greeting(n: string): string[]
declare function greeting(n: GreetingSettings): number[]

// 如此返回值类型一致了
type GreetSettings = number | string | GreetingSettings
declare function greeting2(n: GreetSettings): number[]

// 类
declare class Greeter {
  constructor(greeting: string);

  greeting: string;
  showGreeting(): void;
}

// 全局(js运行环境中存在这些变量, 此处给这些变量定义类类型)
declare let f: number
declare function fn(): void

// 声明已存在的枚举变量
declare enum Enum2 {}