namespace Animal{
    // 接口
    export interface Felid{
        say: () => {}
    }
    interface Felid2{}

    export interface Felid4{
        c: 4
    }

    // 别名
    export type t = string
    type t2 = number

    // 类
    export class C{}
    class C2{}

    // 枚举
    export enum e{}
    enum e2{}

    // 函数
    export function f(){}
    function f2(){}

    // 变量
    export const v:string = '3'
    const v2:number = 3
}