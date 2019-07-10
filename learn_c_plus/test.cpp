#include<iostream>
#include<string>

// using std::cout;
// using std::cin;
// using std::endl;
// using std::string;

using namespace std;

int main() {

  const string s = "abcdefg";

  // for(int i = 0; i < s.size(); i++) {
  //   char &c = s[i];
  //   c = 'x';
  // }

  // string s1;

  // cout << s1 << endl;

  // for(auto &c: s) {
  //   // c = 'a';
  //   cout << c << endl;
  // }
  
  int arr[]={1,2,3,4,5};
  int p = *(arr + 3);

  cout << p << endl;

  cout << *begin(arr) << endl;

  int ai[3][4] = {2, 3};

  int i = 2;
  double j = 1.4;

  int * pi = &i;
  double *pj = &j;

  // pi = static_cast<void*>(pj);
  void * pvi = static_cast<void*>(pj);

  i *= static_cast<int>(j);
  // i = j = 3.5;
  // j = i = 3.5;
  cout << i << j << endl;

  const int ci = 3;

  string str2{'a', 'b'};

  string::iterator iter = str2.begin();
  while(iter != str2.end()) {
    iter++;
  }
  cout << str2 << endl;
  
  return 0;
}