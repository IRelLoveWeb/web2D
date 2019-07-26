#include<string>

using namespace std;

// 返回数组指针的 函数声明
  // 1. 定义别名
  typedef int arrT[10];
  using arrT = int[10];
  arrT* func(int a);

  // 2. 不使用 别名
  int (*func(double b))[5]; // 返回类型是指向int[5]的指针

  // 3. 尾置返回类型
  auto func(int a, double b) -> int(*)[5]; // 返回类型是指向int[5]的指针

// 返回值类型: s指向string[10]的指针
string (*funcs())[10];
using arrS = string[10];
arrS *funcs();
auto funcs() -> string(*)[10];


// 默认实参数, b赋默认实参后, 后续所有参数必须默认实参
int func(int a, double b = 3.14, char c = 'c');
// func(2); // 未设置默认实参必须赋值

// 内联函数
  // 编译器忽略
  // 函数声明前加inline
  // 用于规模小、频繁调用的函数 
inline int func2(string s);

// constexpr 函数
  // 编译时执行
  // 返回值类型和形参的类型 必须是字面量类型
constexpr int sz(int num) { return 42 * num; }
constexpr int ai = sz(1);

// 如果i非常量, sz(i)报错
const int i = 2;
// constexpr定义的变量 会在编译阶段计算初始值。
constexpr int bi = sz(i);

// 内联函数 和 constexpr函数 一般放在 头文件中

// debug
  // assert(flag); flag 为true, 正常执行; flag 为false, 报错终止程序。
  // 预定义变量 NDEBUG 
    // 1. g++ -D NDEBUG main.cpp  命令行 预定义变量NDEBUG
    // 2. 如果已定义 NDEBUG, 则所有的assert都不会执行。
    // 3. 可以使用 NDEBUG, 自行编写输出
  // 对错误输出有益的 预定义变量
    // 见function.cpp