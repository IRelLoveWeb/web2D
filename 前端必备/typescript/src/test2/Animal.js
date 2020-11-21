var Animal;
(function (Animal) {
    // 类
    var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    Animal.C = C;
    var C2 = /** @class */ (function () {
        function C2() {
        }
        return C2;
    }());
    // 枚举
    var e;
    (function (e) {
    })(e = Animal.e || (Animal.e = {}));
    var e2;
    (function (e2) {
    })(e2 || (e2 = {}));
    // 函数
    function f() { }
    Animal.f = f;
    function f2() { }
    // 变量
    Animal.v = '3';
    var v2 = 3;
})(Animal || (Animal = {}));
