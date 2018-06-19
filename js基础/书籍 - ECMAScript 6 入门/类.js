
//原型链的实质就是两个对象通过__proto__进行链接
    //objA.__proto__ = objB objA可以调用objB中所有属性和方法
    //objB.__proto__ = objC objA可以调用objB和objC中所有属性和方法
//原型链的实现方式【无论何种实现方式都是为了实现两个对象链接起来】
    //1.构造函数方式
        //function A(){} let a = new A() 
        // 则 a.__proto__ =  A.prootype 实现A的实例和A的属性prootype【对象】链接
        // new A() 生成一个对象,且主要目的是达成 a.__proto__ =  A.prootype 这两个对象链接起来
    //2.Object.create() 方式实现
        // let b={} let a = Object.create(b)
        // a.__proto__ =  b
    //3.Object.setPrototypeOf() 方式实现
        // let a={} let b={} Object.setPrototypeOf(a,b)
        // a.__proto__ =  b
    //原型链实际就是多个对象通过内置属性__proto__链接起来


class B{
    constructor(){}
    say(){}
    static sayB(){}
}
class A extends B{
    constructor(){super()}
    eat(){}
    static sayA(){}
}

//注意:类定义时大括号内所有非static的属性和方法都是 这个类【类自身是一个对象】的属性prototype的值

//类A,B自身是对象
    //A.__proto__ == B  true
    //则类A这个对象可以调用类B这个对象的属性和方法
    //static定义的函数是定义在这个类对象自身的属性,所以子类A可以调用父类B的静态方法
//类A和类B的实例a,b
    //类的实例其实就是 a实例调用的 A.prototype.constructor函数生成
    // a.__proto__ = A.prototype  b.__proto__ = B.prototype
    // B.prototype.isPrototypeOf(A.prototype) true 
    // 即可以 看成 a.__proto__,A.prototype这个对象是 类B的实例 
    // 主要达成 a.__proto__.__proto__ = B.prototype | A.prototype.__proto__ = B.prototype 这个目的
        // 即 实例a可以调用类A大括号中定义的所有非static属性和方法,即A.prototype的值,
        // 且 A.prototype.__proto__ = B.prototype 根据原型链,可以用该方式创建 A.prototype = Object.create(B.prototype);
        // 则 实例a还可以调用类B大括号中定义的所有非static属性和方法,即B.prototype中的值

//类中的属性__proto__和prototype属性实现了两套原型链
    //__proto__定义类自身这个对象的原型链,实现静态方法的原型链调用
    //prototype定义类实例对象的原型链,实现实例方法的原型链调用

