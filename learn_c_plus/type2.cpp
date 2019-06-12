#include<iostream>
#include<string>
#include<vector>

using std::cout;
using std::cin;
using std::endl;
using std::string;
using std::vector;

// c++中需要习惯使用 !=,==和迭代器; 因为不是所有库都定义了<等方法
// 在 for循环 和 迭代器 中不能改变容器的容量

int main() {
   /* string类型对象初始化 */
  string str = "hello"; // 拷贝初始化
  string str1("hello world"); // 直接初始化
  string str2(10, 'c'); // 直接初始化

  // auto sn = str2.size();
  // cout << (str1>str) << endl;

  // 在运算符的左右侧必须有一个string对象, 字符字面量 不是string类型
  // char c = 'c';
  // str = str1 + c;

  string s("hello world!");
  decltype(s.size()) n = 0; 

  for (auto c: s) {
    if (ispunct(c)) {
      ++n;
    }
  }
  // cout << n <<endl;

  // 引用字符串中的每一个字符, 将其变成大写
  // 左操作数不能使用指针
  for (auto &c: s) {
    c = toupper(c);
  }
  // cout << s << endl;

  for(decltype(s.size()) i = 0; i < s.size(); ++i) {
    // cout << s[i] << endl;
  }


  /* vector类型初始化 */
  vector<string> vs; // 常用做法, 不设置大小和初始值。
  vector<string> vs2(vs);
  vector<string> vs3{"a", "b", "c"}; 
  vector<string> vs4(10, "hi");

  vector<int> vs5(10); // 设置vs5对象的大小为10个元素, 构造函数
  vector<int> vs6{10}; // 设置vs6中元素值为10, 列表初始化
  vector<string> vs7{10, "a"}; // vector是string类型, 而int值10无法初始化, 那么会执行构造函数; 值为 10个 "a"

  cout << vs3[0] << endl;
  vs3[0] = "abc";
  cout << vs3[0] << endl;

  cout << 9.200/4 <<endl;

  // 不能通过下标添加元素, 可以通过下标修改元素
  // 不能通过下标访问不存在的元素, 即下标大于正确索引的情况
  // vs[0] = "a";

  vector<vector<int>> vs8{vs5, vs6};

  /* 迭代器 */
  string si("abcdef");
  auto sc = si.begin();
  auto scc = si.cbegin();
  // iterator 可以读写指向的元素[容器非const类型]
  // v.begin()  指向容器中某一元素的迭代器
  // v.end()    指向容器中尾元素的下一位, 称尾迭代器

  // const_iterator 不能写元素, 只能读元素
  // si.cbegin() | si.cend() | 容器是const类型
  // 如果容器为空, v.begin()和v.end() 都指向尾迭代器

  // *sc;       sc是一个迭代器, *sc获取迭代器所指元素的引用。 
  // sc->mem;   类似(*sc).mem, *sc所指元素的mem属性, 结合解引用和成员访问
  // ++sc;      迭代器下移一位, 获取元素必须*(++sc)

  // cout << *sc << *(++sc) << *sc << sp->size() << endl;
  for(auto csi=si.cbegin(); csi!=si.cend(); ++csi) {
    // cout << *csi << endl;
  }

  vector<int> vi2(10,1);
  for(auto cvi=vi2.begin(); cvi!=vi2.end(); ++cvi) {
    // *cvi = 2 * (*cvi);
  }
  cout << (sc == scc) << endl;

  return 0;
}