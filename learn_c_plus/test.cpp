#include<iostream>
#include<vector>

using namespace std;


// void printvec(vector<int> &rvi) {
//   #ifndef NDEBUG
//     cout << rvi.size() << endl;
//   #endif

//   if(!rvi.empty()) {
//     auto tmp = rvi.back();
//     rvi.pop_back();
//     printvec(rvi);
//     cout << tmp;
//   }
// }

// void test(const int p[5]) {}
void test(const int(*p)[5]) {
  auto t = *p;
  cout << *t << endl;
}

int main() {

  vector<int> vi{1, 2, 3, 4, 5, 6};

  // printvec(vi);
  // cout << endl;

  int ar[5] = {1, 2, 3, 4, 5};

  test(&ar);

  return 0;
}