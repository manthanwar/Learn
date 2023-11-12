// https://www.geeksforgeeks.org/program-binary-decimal-conversion/
#include <iostream>
using namespace std;

int binaryToDecimal(int n);
void decToBinary(int n);

void myFunction(string fname, int age = 12)
{
    cout << fname << " Refsnes. " << age << " years old. \n";
}

// Driver program to test above function
int main()
{
    int n = 17;
    decToBinary(n);

    int num = 10101001;
    cout << "\nbinary2decimal = " << binaryToDecimal(num) << endl;

    cout << "\nsize of int    = " << sizeof(int);
    cout << "\nsize of floate = " << sizeof(float);
    cout << "\nsize of double = " << sizeof(double);
    cout << "\nsize of char   = " << sizeof(char);
    cout << "\nsize of string = " << sizeof(string);
    cout << "\n";

    myFunction("Jenny", 14);
    myFunction("amit");
    return 0;
}

// function to convert decimal to binary
void decToBinary(int n)
{
    // array to store binary number
    int binaryNum[32];

    // counter for binary array
    int i = 0;
    while (n > 0)
    {

        // storing remainder in binary array
        binaryNum[i] = n % 2;
        n = n / 2;
        i++;
    }

    // printing binary array in reverse order
    for (int j = i - 1; j >= 0; j--)
        cout << binaryNum[j];
}

// Function to convert binary to decimal
int binaryToDecimal(int n)
{
    int num = n;
    int dec_value = 0;

    // Initializing base value to 1, i.e 2^0
    int base = 1;

    int temp = num;
    while (temp)
    {
        int last_digit = temp % 10;
        temp = temp / 10;

        dec_value += last_digit * base;

        base = base * 2;
    }

    return dec_value;
}
