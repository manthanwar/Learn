#include <iostream>

using namespace std;

struct Point {
    int x;
    int y;

    Point(int newx, int newy) : x(newx), y(newy) {}

    Point operator+(const Point& rhs) {
        return Point(x + rhs.x, y + rhs.y);
    }

    Point& operator+=(const Point& rhs) {
        x += rhs.x;
        y += rhs.y;
        return *this;
    }

    void print() {
        cout << "hello, point! = "
             << typeid(this).name() << "  << " << endl;
        cout << "x = " << x << endl;
        cout << "y = " << y << endl;
    }
};

int main() {
    cout << "hello, world!" << endl;

    Point p1(10, 20);
    Point p2(30, 40);

    p1.print();
    p2.print();
    Point p3 = p1 + p2;

    p3.print();

    p1 += p2;
    p1.print();

    return 0;
}