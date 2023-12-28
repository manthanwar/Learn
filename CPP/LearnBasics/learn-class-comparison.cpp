#include <iostream>
using namespace std;

struct S {
    int a;
    int b;

    auto operator<=>(const S &s) const = default;
};

int main() {
    S s1{1, 2};
    S s2{1, 3};

    cout << s1.a << endl;

    cout << (s1 == s2) << endl;
    return 0;
}