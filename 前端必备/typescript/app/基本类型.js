var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 基本类型
// 1. null | undefined 可以赋值给任意类型(strictNullChecks: false)
// 2. 任何值 可以赋值给 unknown ｜ any
var a1;
var a2;
var a3;
var a4;
var a5 = Symbol('2');
var a6;
var a7;
var a8;
// 引用类型
var b1;
var b2; // 元组
var b3;
// 函数
var func = function (a) { return a; }; /* 上下文类型推断 */
// 泛型
// 1. 泛型就是编写模板代码来适应任意类型
// 2. 泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数
var c1 = [1, 2];
var c2 = c1.reverse();
function identity(arg) {
    return arg;
}
var myIdentity = identity;
var myIdentity2 = identity;
var myIdentity3 = identity;
var myIdentity4 = identity;
// 通过构造函数, 推断泛型T的类型
var C3 = /** @class */ (function () {
    function C3(args) {
    }
    C3.prototype.add = function (a) { };
    return C3;
}());
var c3 = new C3('2');
c3.b = '3';
c3.add('3');
// 约束泛型T必须包含属性length
function myIdentity5(args) { }
// let c5 = myIdentity5(1)
var c6 = myIdentity5({ length: 2, value: 3 });
// 泛型间的约束
function myIdentity6(obj, key) {
    return obj[key];
}
// myIdentity6({x : 1}, 'y')
myIdentity6({ x: 1 }, 'x');
var c7 = { x: 1, y: '2' }; // 联合类型
var c8 = { x: 1, y: '2', z: true }; // 交叉类型
var rr = [1, 2];
rr[0] = 3;
// 类实现接口(接口约束类)
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.say = function () { };
    return Dog;
}());
var d1 = new Dog();
var d2 = Dog;
function useAnimal(animal) { }
var d3 = useAnimal({ say: function () { }, age: 1, location: 'a' }); // 额外属性location
var d6 = useAnimal({ say: function () { }, age: 1, location: 'a' }); // 1. 类型断言
function useAnimal2(animal) { }
var d7 = useAnimal2({ say: function () { }, age: 1, location: 'a' }); // 2. 指数签名
var obj = { say: function () { }, age: 1, location: 'a' }; // 3. 建立新变量, 变量不会进行额外类型检查
var d4 = useAnimal(obj);
// 只读属性, 首次赋值后, 不能再修改
var d5 = [1];
// 类型推断
var e1 = 1; // 赋值 根据值推断类型
var e2 = [0, 1, null, '3']; // 公用类型
var e3 = function (a, b) { return (a + b) > 2; }; // 已知变量e3的类型, 推断e3值类型(a,b,返回值)
var e4 = function (a, b) { return (a + b) > 2; }; // 已知e3值类型, 推断变量e3的类型 
var e5 = function (a) { return a > 2; };
// 文本类型
var f1 = "Hello World";
var f2 = "Hello World";
function createElement(tagName) {
    return document.createElement('div');
}
var E2;
(function (E2) {
    E2[E2["Cat"] = 0] = "Cat";
    E2[E2["Dog"] = 1] = "Dog";
    E2[E2["Pig"] = 2] = "Pig";
    E2[E2["Gost"] = 4] = "Gost";
})(E2 || (E2 = {}));
function Fun3(obj) { }
var fun3 = Fun3(E2);
function Fun4(key) { }
var fun4 = Fun4(1);
function Fun5(key) { console.log(key); }
var fun5 = Fun5(E2);
// 绕过类型检查
var x;
x = { age: 1, name: '' };
var y = { age: 1, name: '' };
x = y;
// 类型缩小
function checkx(x1) {
    if (typeof x1 === 'string') {
        x1.endsWith('a');
    }
    else {
        x1 + 1;
    }
}
function handleAnimal(animal) {
    switch (animal.type) {
        case 'cat':
            return animal.size;
        case 'dog':
            return animal.flat;
        default:
            var _never = animal;
            return _never;
    }
}
// 类型兼容
var Animalx = /** @class */ (function () {
    function Animalx() {
    }
    Animalx.prototype.say = function () { };
    return Animalx;
}());
var Dogx = /** @class */ (function (_super) {
    __extends(Dogx, _super);
    function Dogx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dogx.prototype.step = function () { };
    return Dogx;
}(Animalx));
var xxh = new Dog();
var xxh2 = new Animalx();
// 修饰器
// 1. 运行时执行
// 2. 元数据(不改变结构的情况下, 添加属性)
// 1. 类修饰器, 对类进行操作
function Animal3Decorator(cls) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newAge = 11;
            return _this;
        }
        return class_1;
    }(cls));
}
// 2. 方法修饰器; 返回值为特性, 修改原属性(方法、属性、set/get、参数等都适用)
function doSay(title) {
    console.log('doSay');
    return function (target, propertyKey, descriptor) {
        console.log('doSay inner');
        // 修改方法的特性 方式一
        // descriptor.enumerable = false
        return {
            // 修改方法的特性 方式二
            enumerable: false,
            // 修改方法, 将类Animal3中实例方法say替换了
            value: function () {
                console.log('doSay value');
            }
        };
    };
}
function doSay2() {
    console.log('doSay2');
    return function (target, propertyKey, descriptor) {
        console.log('doSay2 inner');
        return {
            value: function () {
                console.log('doSay2 value');
            }
        };
    };
}
var Animal3 = /** @class */ (function () {
    function Animal3(done) {
        this.done = done;
        this.age = 1;
        this.size = '2';
        this.done = done;
    }
    Animal3.prototype.say = function () {
        console.log('say');
    };
    __decorate([
        doSay2(),
        doSay('abc')
    ], Animal3.prototype, "say");
    Animal3 = __decorate([
        Animal3Decorator
    ], Animal3);
    return Animal3;
}());
var ani3 = new Animal3(55);
// doSay2
// doSay
// doSay inner
// doSay2 inner
ani3.say();
// doSay2 value
var mylib2;
(function (mylib2) {
    var b = 2;
    mylib2.a = 11;
    function say(poing) {
        return mylib2.a;
    }
    mylib2.say = say;
})(mylib2 || (mylib2 = {}));
(function (mylib2) {
    function doSay(a) {
        return a;
    }
    mylib2.doSay = doSay;
})(mylib2 || (mylib2 = {}));
mylib2.say;
mylib2.doSay;
