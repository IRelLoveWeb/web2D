#include<iostream>
#include<string>
#include<vector>
#include "function.h"

using namespace std;

int partFunc() {
  // 局部对象(自动对象), 函数执行结束后删除
  int a = 0;
  // 局部静态对象, 函数执行结束依旧存在, 直到整个程序结束后才删除 
  static int pa = 0;
  return pa++;
}

// 引用调用, 是实参的引用
void refFunc(int &p) {
  p+=2;
}
// 传值调用, 将实参的拷贝值传给形参
void valFunc(int p) {}
// 指针调用, 指针对象是值传递
void pointerFunc(int* p, double* dp){
  *p = 66;
  dp = 0;
  cout << "inner" << dp << "=" << p[0] << endl;
}

// 底层const, 无法通过修改p修改实参的值
void tfunc(const int* p) {}

// 数组形参, 下面两种声明中 形参是一致的
void aFunc(const int* ap) {
  cout << "ap" << ap[0] << endl;
}
void a2Func(const int ap[]) {}

// 形参 :数组指针 和 数组引用
void aFunc2(const int (*ap)[5]) {}
void aFunc2(const int (&ap)[5]) {}

// 可变形参
void varyFunc(double db, initializer_list<string> lr) { // 类似于vector, 所有的实参类型必须一致(此处为string)
  // lr.begin();
  // lr.end();
  // *lr.begin();
  for(const auto &lri : lr) {
    cout << lri <<endl;
  }
} 

const int &rFunc(int& rp) {
  // 内部变量无法 在引用函数中返回(函数执行结束, 内部变量清除, 引用的地址错误)
  // int irp = 3;
  // return irp;
  return rp;
}

// 函数返回类型, 列表返回值 和 函数定义类型一致
vector<string> vFunc() {
  return { "a", "b" };
}

// 预处理变量
int preFunc() {
  if(true) {
    return EXIT_SUCCESS;
  }

  return EXIT_FAILURE;
}

// 返回数组指针, 不能直接返回数组对象 
  // 见 function.h

  // 4. 已知 返回数组, 使用decltype
const int odd[5] = { 1, 3, 5, 7, 9 };
vector<const decltype(odd)*>funcp(const int (*p)[5]) {
  // 底层const赋值, 赋值对象的类型必须和const声明的对象类型一致
  return {&odd, p}; 
}

// 函数重载
  // 函数名一样, 但是形参列表(形参个数或类型)不同
  // 作用域中重载函数, 忽略外部作用域中的同名函数
// 调用重载函数
  // 函数匹配
    // 1.实参数和形参数数量一致(如果有形参有默认值, 则实参数 可少)
    // 2.实参与对应的形参类型一致(或实参可转化为形参, 至少一个转化优先其他可行函数), 
      // 


int main(int argc, char* args[]) {

  cout << string(args[0]) << endl;

  int ri = 3;
  double di = 3.14;
  for(int i = 0; i < 5; i++) {
    cout << partFunc() << endl;
  }

  refFunc(ri);
  cout << ri << endl;

  pointerFunc(&ri, &di);
  cout << ri << endl;
  cout << &di << endl;

  const int ar[5] = {1, 2};
  const int (*par)[5] = &ar; 
  aFunc(ar);
  aFunc2(&ar);
  aFunc2(ar);

  varyFunc(2.3, { "a", "b", "c" }); // initializer_list可变参数调用, 必须用{}将实参包裹

  auto rp = rFunc(ri);

  auto pr = funcp(&ar);

  cout << "文件名:" << __FILE__ << endl;
  cout << "当前行号:" << __LINE__ << endl;
  cout << "文件编译时间:" << __TIME__ << endl;
  cout << "文件编译日期:" << __DATE__ << endl;

  return 0;
}

// 函数调用步骤
// 1. (隐式的)定义和初始化形参;实参是形参的初始值; 函数有几个形参就必须传几个实参
// 2. 函数的返回值 不能是数组和函数, 但可以返回函数或数组的指针
// 每次调用函数, 都会重新创建形参, 并用实参初始化 [和对象定义一样]
// 返回值类型 和 返回值, 像变量定义一样。