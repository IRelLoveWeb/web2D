#include<iostream>
#include<vector>

using namespace std;


void printvec(vector<int> &rvi) {
  #ifndef NDEBUG
    cout << rvi.size() << endl;
  #endif

  if(!rvi.empty()) {
    auto tmp = rvi.back();
    rvi.pop_back();
    printvec(rvi);
    cout << tmp;
  }
}

int main() {

  vector<int> vi{1, 2, 3, 4, 5, 6};

  printvec(vi);
  cout << endl;
  return 0;
}