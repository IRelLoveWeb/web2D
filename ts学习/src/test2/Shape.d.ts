declare namespace Shape{
    // 接口
    interface Bs{}
    export interface Bs2{}

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
    export function f(): void
    function f2(): void

    // 变量
    export const v:string 
    const v2:number
}