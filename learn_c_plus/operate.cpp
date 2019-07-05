#include<iostream>
#include<string>
#include<vector>

using namespace std;

// 重载运算符
  // 运算对象类型和返回值类型, 由运算符决定
  // 运算对象个数 运算符优先级和结合律, 运算符无法决定

// 左值和右值: 
  // 左值, 使用对象的身份(内存位置)
  // 右值, 使用对象的值(内容)
  // 观察运算对象 和运算结果 是左右值？？

int main() {

  // 除法: 整数相除的结果依旧是整数
  cout << 4/3 << endl; 
  cout << -4/3 << endl;

  // 取模(余): m%n的值 其符号于m一致
  cout << 4%-3 << endl; 
  cout << -4%3 << endl;

  // 逻辑运算符
    // 与(&&)、或(||)、非(!)

  // 关系运算符
    // 大于、小于、等于、不等于

  // 前置++/--
    // ++a a加1,返回加一后的值
  // 后置++/--
    // a++ a加1, 返回加一前初始值的副本
    // *pt++ ==> *(pt++) pt加1, 但是返回的值是pt, 所以解引用的是pt
  
  // 运算对象的执行顺序不确定～～

  // 箭头运算符, 对可解引用的对象使用
  string str("abcd"), *pstr = &str;
  pstr->size();
  (*pstr).size();
  cout << *++str.begin() << endl;

  // 位运算: 整数类型使用(推荐无符号整数, 负整数的处理方式因环境而异)
    // ～ 位求反, << 位左移, >> 位右移, & 位与, | 位或, ^ 位异或
    // ^ 位异或 => 对应位置有且只有一个1, 则结果为1, 否则为0
  unsigned ia = 3; // unsigned 为4字节类型
  cout << (ia << 3); // ia左移3位, 右侧补0
  cout << (ia >> 1); // ia右移1位, 左侧补0
  cout << (~ia); // 位反
  cout << (~ia >> 1);
  cout << endl;

  // sizeof运算符: 返回一个表达式或一个类型名字 返回的**字节数**
  cout << sizeof(int) << endl;
  cout << sizeof(char) << endl;

  int ar[] = {2, 3, 4, 5};
  int *ptr = ar + 2;
  constexpr size_t sz = sizeof(ar)/sizeof(*ar); // sizeof(arr) 获取数组的整体大小, sizeof(*ar) 获取数组单个元素的大小
  cout << sz << endl;
  cout << sizeof(ptr) << sizeof(*ptr) << endl; // sizeof(ptr) 获取指针对象的大小, sizeof(*ptr) 获取指针指向对象的大小

  // 类型转换(类型可以转换)
    // 隐式类型转换
  cout << 3.14 + 'a'; // 字符'a'转换为ascii码
  cout << *ar; // 数组自动转换为首元素的指针; decltype、sizeof、& 不会自动转换
  cout << endl;
    // 显式类型转换
  int i = 10;
  void *pi = &i;
  // 类型强制转换
  cout << static_cast<double>(i); // 将int型强制转换成double型
  cout << static_cast<int*>(pi); // 将void*强制转换成int*型
  // 去除底层const性质, 但无法转换类型
  char c = 'c';
  char &cp = c;
  const char *pchar = &c;
  char *pc2 = const_cast<char*>(pchar);
  *pc2 = 'b'; // 指针pc2 和 pchar 指向同一个地址, 但是可以通过指针pc2修改地址中的值
  cout << "*pchar:" << *pchar << "---" << "&cp:" << cp; 
  // 任何类型 可以转换成 空类型; 空类型 不可以转换成非空类型

  cout <<endl;
  return 0;
}

// 优先级
// ->符号 优先 一元操作 优先 sizeof 优先 算术运算 优先 位运算 优先 关系、逻辑