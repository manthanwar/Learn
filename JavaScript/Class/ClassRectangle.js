export function hello() {
  console.log("he");
  return "Hello WorldAAA";
}

export class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  ami() {
    console.log("ami");
  }

  // Getter
  area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }

  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

// // Expression; the class is anonymous but assigned to a variable
// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// // Expression; the class has its own name
// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
