#include <iostream>
using namespace std;

// constexpr int factorial(int n) {
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    // constexpr int result = factorial(5);
    int result = factorial(5);
    cout << "factorial n = 2 = " << result << endl;
    return 0;
}