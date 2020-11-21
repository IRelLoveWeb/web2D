class Point {
  double x; // Declare instance variable x, initially null.
  double y; // Declare y, initially null.
  double z = 0; // Declare z, initially 0.

  say() {
    print('say $x');
  }

  write() {
    print('write');
  }
}

void main () {
  // 1. 变量
  var a; // 第一次赋值时推断类型(编译时将类型设置 为 第一次赋值类型), 可以赋相同类型的值
  dynamic a1; // 赋任意值; 声明的对象编译器会提供所有可能的组合
  Object a2; // 赋Object子类; 声明的对象只能使用Object的属性与方法
  final a3 = 'a'; // 类型修饰器; 第一次使用时被初始化
  const a4 = 'b'; // 类型修饰器; 编译时常量


  var s = <String>{}; // 创建set
  Set<double> s1 = {}; // 创建set


  // 2. 运算
  print(5 / 2); // 2.5
  print(5 ~/ 2); // 2

  a as Object; // as 类型重定义
  print(a is! int); // 类型判断

  a ??= 1; // 如果 a 的值是null, 赋值 1; 否则, 保持原值。

  var b = a ?? 'name'; // 如果a存在, 返回a; 否则, 返回 'name'。

  var c = <int>{}
    ..add(2) // 此处返回的不是原对象, 还需要处理原对象, 使用..
    ..remove(2); // 对同一对象做级联操作
  c.where((element) => element > 2).map((e) => e * 2); // 每个方法返回对象, 对对象进行处理。
  // 可枚举对象 set/list

  var pp = new Point();
  pp
  ..x = 2
  ..say()
  ..write();
}

