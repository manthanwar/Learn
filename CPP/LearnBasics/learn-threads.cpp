#include <iostream>
#include <thread>
#include <vector>
using namespace std;

// -lpthread

void printThreadId(int id) {
    cout << "thred is here, id = " << id << endl;
}

int main() {
    cout << "hello \n";

    thread t1(printThreadId, 1);
    t1.join();

    return 0;
}