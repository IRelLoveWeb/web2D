
// 命名空间合并, 且命名空间时当作模块直接导出,所以无法直接使用
// 命名空间中有类型的声明,在外部可以let a: Test.T1这样使用, 只用内容的函数和变量声明无法给外部成员定义类型
// 命名空间中有内容的声明,在外部可以let a = Test.v这样使用, 只有类型的interface和type声明无法给外部成员赋值
declare namespace Test{
    interface T1{}
    interface T2{
        a: string
    }

    type t1 = string
    class c2{}
    enum c3{}

    const v = 2
    function f1():void
    export const v2: string
}

declare namespace Test {
    interface T2{
        b: string
    }

    class c5 implements T1{}
}

// 在模块中, 顶层声明的成员无法在其他模块访问
interface Test2{}
// 在模块中添加全局扩展
declare global{
    interface Test3{}
}

// 将命名空间当成默认导出;相当于 export default Test
// 外部模块引用 import Test from 'xx'
// 一个模块只能使用一种导出模式
export = Test
// export interface Test4{}