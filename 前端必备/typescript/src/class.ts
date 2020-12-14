// 类中成员都是可见的,默认为public

// privite 成员只能在类声明中使用
// 构造函数是私有类型的类无法被继承, 私有类型的属性不能在子类中使用
// protected 成员可以在类和子类的声明中使用
// private 和 protected成员 不能在声明外使用
class Animal2{
    // private name: string
    protected name: string

    age: number

    // private constructor(name: string) {this.name = name}
    constructor(thename: string) {this.name = thename}
}

class Dog extends Animal2{

    constructor(name: string){ super(name)}
    dog(){
        console.log(this.name)
    }
}

// 类型兼容 可以相互赋值
// 成员都是public => cat可以赋值ant,但是ant不能赋值cat, 因为 cat中成员是ant中成员的超集
// 成员包含private或protected => 必须来自同一声明,且只有父级赋值子级
class Ant{
    name: string = '32'
}

class Cat{
    name: string
    id: number
}

let ant = new Ant()
let cat = new Cat()

// cat = ant
// ant = cat


// 成员定义并初始化
// 声明一个private的string类型name成员
// 声明一个protected readonly的number类型id成员, 且设置默认值为0
class Output{
    constructor(private name: string, protected readonly id: number = 0){}
}

// 只读属性,无法直接赋值; 只能通过给整个对象初始化赋值
class World{
    readonly name: string
}
let w: World
w.name = '3'
w = {name: '345'}

// get set 存取器 配合 私有属性
// static 静态属性


// 抽象类 包含抽象方法的类就是抽象类, 抽象方法必须在子类中实现 abstract

// 类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类

export = Animal2
