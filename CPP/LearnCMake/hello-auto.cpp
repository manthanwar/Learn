#include <iostream>

auto sum(int a, int b) {
    return a + b;
}

int main() {
    std::cout << "Hello CMake!" << std::endl;
    std::cout << "Sum of 3 + 4 :" << sum(3, 4) << std::endl;
    return 0;
}
