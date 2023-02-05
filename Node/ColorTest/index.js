const colors = require("colors");
// npm install --save ../colors
// npm update --save

const chosenColor = colors.getRandomColor();

const allColors = colors.allColors;

console.log(
  `You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`
);

// console.log("allcolors = " + allColors[1]);

console.log(colors.printHello());

const favoriteColor = colors.getBlue();
console.log(
  `My favorite color is ${favoriteColor.name}/${favoriteColor.code}, btw`
);
