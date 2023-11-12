#include <iostream>

using namespace std;

int main() {
    int count = 10;
    for (size_t i = 0; i < count; i++) {
        /* code */
        int* a;  // Right

        cout << "hello a = " << a << endl;
    }

    int aa = 3, bb = 4;
    if (aa == bb) {
        cout << "hi";
    }

    return 0;
}
