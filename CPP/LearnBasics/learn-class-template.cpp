#include <iostream>
#include <memory>
using namespace std;

template <typename T>
struct DynamicArray {
    int size;
    unique_ptr<T[]> ptr;

    DynamicArray(int newSize) : size(newSize), ptr(new T[newSize]) {}

    void fill(T value) {
        for (int i = 0; i < size; i++) {
            ptr[i] = value;
        }
    }

    void print() {
        for (int i = 0; i < size; i++) {
            cout << ptr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    DynamicArray<int> intArray(10);
    DynamicArray<double> doubleArray(10);

    intArray.fill(4);
    intArray.print();

    doubleArray.fill(2.2);
    doubleArray.print();

    return 0;
}