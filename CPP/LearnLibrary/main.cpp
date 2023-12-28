#include <stdio.h>

#include <array>
#include <iostream>
using namespace std;

int main() {
    printf("Hello, World!\n");
    array<int, 4> myarray = {1, 4, 2, 3};
    for (int val : myarray) {
        cout << val << endl;
    }

    return 0;
}
