/// <reference path="Shape.d.ts" />
/// <reference path="Animal.ts" />

// ts文件中的命名空间
// let ani: Animal // error  
let ani_1: Animal.C
let ani_2: Animal.Felid
let ani_3: Animal.e
let ani_4: Animal.t

let ani_5: Animal.Felid4
ani_2

let ani__1 = Animal // 命名空间可以当作值
let ani__2 = Animal.C
let ani__3 = Animal.e
let ani__4 = Animal.f
let ani__5 = Animal.v



// .d.ts中的命名空间
// let sha: Shape // error
let sha_1: Shape.Bs | Shape.Bs2
let sha_2: Shape.t | Shape.t2
let sha_3: Shape.C | Shape.C2
let sha_4: Shape.e | Shape.e2

let sha__1 = Shape
let sha__2 =  Shape.C || Shape.C2
let sha__3 =  Shape.e || Shape.e2
let sha__4 =  Shape.f || Shape.f2
let sha__5 =  Shape.v || Shape.v2

// 命名空间
// 1. 有类型的声明可以定义外部成员类型; 有内容的声明可以给外部成员赋值
// 2. 命名空间没有类型,无法直接给成员定义类型,但是可以赋值

// .ts 和 .d.ts
// 1. 依赖 全局库 /// <reference types="..." /> (ts自动加载来默认全局库,所以不用再次引入; 但是其他的全局第三方库,还是需要引入的)
//    依赖 模块 使用import语句
// 2. 在 .ts文件中, 命名空间只有export的成员才能使用.(点操作)取值; 而在.d.ts文件中, 命名空间所有成员都可以.(点操作)取值
// 3. .d.ts文件中的顶层声明必须使用declare
// 4. 命名空间声明合并, .ts文件只有都是export的同名成员才能合并(如果只有一个export,那么就未合并,访问的是export的成员)
//                   .d.ts文件中所有成员默认都是export的,所以只要同名就可以合并
// 5. 在.ts文件中 声明函数和变量必须赋值,因为这两个只有内容
//    在.d.ts文件中 声明函数和变量只需要定义类型就可以

// 类型检查和编译
// 1. 如本文件, 不导入全局依赖, 类型检查不会报错; 但是编译时,就会报错
// 2. 编译时会忽视那些只成员当作类型的模块,即不会编译这些模块

// 
