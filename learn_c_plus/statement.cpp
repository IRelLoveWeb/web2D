#include<iostream>
#include<string>

using namespace std;

int main() {

  // 范围for语句 for(decl : expression) statement
  // expression序列中的值 都能转换成 decl类型, 一般decl 声明成auto
  // 将decl声明成 引用符合类型, 可以通过decl修改expression的值
  int a[] = { 1, 2 };
  for(int ai: a) {
    cout << ai << endl;
  }

  // label:
  // goto label
  // 和js中 循环别名 类似, 不过js使用 continue跳转的

  bool a2 = static_cast<bool>(100);
  cout << a2 << endl;

  // throw 抛出异常
  // tyr...catch.. 根据抛出异常的类型, 执行对应的catch处理函数
  try {
    int b, c;
    cin >> b >> c; 
    if(c == 0) {
      throw runtime_error("abcd ");
    }
    cout << b / c << endl;
  } catch (runtime_error err) {
    cout << "use try...catch.." << err.what() << endl;
  }
  return 0;
}
