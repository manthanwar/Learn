// import { Rectangle } from "./ClassRectangle";
// const Rectangle = require("./ClassRectangle.js");
// const square = new Rectangle(10, 10);

// console.log(square.area); // 100
// console.log([...square.getSides()]); // [10, 10, 10, 10]

// import foo from "ClassRectangle";
// const foo = require("./ClassRectangle");

// import { hello, Rectangle } from "./ClassRectangle.js";
// hello(); // hello!
// let aa = new Rectangle(10, 10);
// document.getElementById("h1").innerHTML = hello() + aa.area();

import * as imp from "./ClassRectangle.js";

imp.hello(); // hello!
let aa = new imp.Rectangle(10, 10);
document.getElementById("h1").innerHTML = imp.hello() + aa.area();
