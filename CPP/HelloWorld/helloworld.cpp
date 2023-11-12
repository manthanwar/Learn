#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main()
{
    string greeting = "Hello World!!!";
    cout << greeting << endl;
    double f = 12345678.234567892345678923456789;
    cout << "number is " << setprecision(17) << f << endl;

    int a = 11;
    a &= 3;
    cout << a << endl;

    return 0;
}
