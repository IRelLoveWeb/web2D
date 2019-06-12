#include<iostream>
#include<string>

using std::cout;
using std::cin;
using std::endl;
using std::string;

int main() {

  const string s = "abcdefg";

  // for(int i = 0; i < s.size(); i++) {
  //   char &c = s[i];
  //   c = 'x';
  // }

  // string s1;

  // cout << s1 << endl;

  for(auto &c: s) {
    // c = 'a';
    cout << c << endl;
  }
  
  return 0;
}