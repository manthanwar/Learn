#include <iostream>
#include <memory>
using namespace std;
int main() {
    auto ptr = make_unique<int[]>(10);

    return 0;
}