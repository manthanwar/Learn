#include <algorithm>
#include <array>
#include <iostream>

using namespace std;

template <typename T>
void printarray(T array) {
    for (auto val : array) {
        cout << val << endl;
    }
}

int main() {
    array<int, 4> myarray = {1, 3, 4, 2};
    printarray(myarray);

    sort(myarray.begin(), myarray.end());
    // sort(myarray.begin(), myarray.end());

    printarray(myarray);

    return 0;
}