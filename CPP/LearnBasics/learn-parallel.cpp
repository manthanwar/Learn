#include <execution>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    vector<int> myvec(1 << 28);
    int sum = 0;

    for (auto val : myvec) {
        sum += val;
    }

    cout << __cplusplus << endl;

    return sum;
}
