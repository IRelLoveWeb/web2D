#include<iostream>
#include<string>

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
// 指针调用
void pointerFunc(int* p){
  *p = 66;
}

// 底层const, 无法通过修改p修改实参的值
void tfunc(const int* p) {}

// 数组形参, 下面两种声明中 形参是一致的
void aFunc(const int* ap) {}
void a2Func(const int ap[]) {}

// 数组指针 和 数组引用
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

int main(int argc, char* args[]) {

  cout << string(args[0]) << endl;

  int ri = 3;

  for(int i = 0; i < 5; i++) {
    cout << partFunc() << endl;
  }

  refFunc(ri);
  cout << ri << endl;

  pointerFunc(&ri);
  cout << ri << endl;

  const int ar[5] = {1, 2};
  const int (*par)[5] = &ar; 
  aFunc(ar);
  aFunc2(&ar);
  aFunc2(ar);

  varyFunc(2.3, { "a", "b", "c" }); // initializer_list可变参数调用, 必须用{}将实参包裹

  return 0;
}

// 函数调用步骤
// 1. (隐式的)定义和初始化形参;实参是形参的初始值; 函数有几个形参就必须传几个实参
// 2. 函数的返回值 不能是数组和函数, 但可以返回函数或数组的指针
// 每次调用函数, 都会重新创建形参, 并用实参初始化 [和对象定义一样]