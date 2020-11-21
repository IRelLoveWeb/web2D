#include <iostream>

int main () {

  /**
   * 命名空间std指向 标准库。
   * 必须使用endl, 确保缓冲区中的内容都刷到设备中。
  */
  std::cout << "输入两个数字" << std::endl;
  int a = 0, b = 0;
  std::cin >> a >> b;
  std::cout << "a: " << a << ", b: " << b << std::endl;

  return 0;
}