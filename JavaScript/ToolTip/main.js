class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

/**
 * Create a Chart class
 * @param {String} name - name given to chart
 * @param {String} type - type of chart
 * @param {element} parent - DOM element of html to attach to
 * @tutorial https://javascript.plainenglish.io/how-to-build-complex-dom-elements-quickly-b3ead8e09647
 */
class Chart {
  #NL;
  #NS;
  constructor(name, type) {
    this.name = name;
    this.type = type;
    // this.parent = parent;

    this.#NS = "http://www.w3.org/2000/svg";
    this.#NL = "http://www.w3.org/1999/xlink";
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "Error: Kindly enter an name";
    }
    this.name = newName;
  }

  /**
   * @param {Object} obj - object literal with element properties
   */
  createElement(obj) {
    let type = obj.type || "div";
    let el = document.createElement(type);

    // iterate through properties e.g.  el.className = 'myClass';

    for (const key of Object.keys(obj)) {
      if (key != "attrs" && key != "type") {
        el[key] = obj[key];
      }
    }

    // assign attributes e.g. el.setAttribute('data-user','Amit');
    if (obj.attrs) {
      // assign attributes
      for (let key of Object.keys(obj.attrs)) {
        // grab the value of this attribute
        let value = obj.attrs[key];

        // convert attribute key from camel case to dash syntax
        if (key != key.toLowerCase()) {
          key = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        }
        // set the attribute on the element
        el.setAttribute(key, value);
      }
    }

    // this.parent.appendChild(el);
    return el;
  }
}

function changeColor(el) {
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  // It is enough to use the following limits for random numbers,
  // so that the hexa result will always be 6 characters long: …
  // const max = Math.pow(2, 24) – 1;
  // const color = Math.floor(Math.random() * ( max – 1 )) ;
  //   simplified it a bit using 8⁸, which is easier for me to remember than the set of digits:
  // Math.floor(Math.random()*8**8).toString(16);
  // 16777215 is the decimal number of the highest hexadecimal in colors:
  // rgb(255, 255, 255) in hexadecimal is “FFFFFF” which is 16777215 when converted to decimal number.
  // Basically they’re choosing a random number between 000000-FFFFFF

  //   let color = Math.floor(Math.random() * 16777215).toString(16);
  let color = Math.floor(Math.random() * 8 ** 8).toString(16);

  el.style.color = "#" + color;
}

function showDetails(animal) {
  let animalType = animal.getAttribute("data-foo");
  let animalName = animal.getAttribute("data-baz");
  //   alert(
  //     "The " +
  //       animal.innerHTML +
  //       " is a " +
  //       animalType +
  //       " type and " +
  //       animalName +
  //       "."
  //   );
}

let sectionObj = {
  type: "section",
  id: "sectionId",
  className: "sectionClass",
  innerHTML: "<p>Hello World</p>",
  attrs: {
    dataFoo: "bar",
    dataBaz: "garply",
    onclick: "changeColor(this);",
    onmouseover: "showDetails(this)",
  },
};

window.addEventListener("load", function () {
  let ele = document.getElementById("root");

  let dom = new Chart("ami", "ddd");

  let section = dom.createElement(sectionObj);

  ele.appendChild(section);

  dom.setName("AA");
  //   alert(dom.NS);
});
