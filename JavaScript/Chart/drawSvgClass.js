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

/**
 * Create a Chart class
 * @param {String} name - name given to chart
 * @param {String} type - type of chart
 * @param {element} parent - DOM element of html to attach to
 * @tutorial https://javascript.plainenglish.io/how-to-build-complex-dom-elements-quickly-b3ead8e09647
 * @tutorial https://javascript.plainenglish.io/how-to-create-an-svg-element-with-vanilla-javascript-a6b140745196
 */
export class Chart {
  // #NL;
  // #NS;
  constructor(name, type) {
    this.name = name;
    this.type = type;
    // this.parent = parent;

    this.NS = "http://www.w3.org/2000/svg";
    this.NL = "http://www.w3.org/1999/xlink";
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "Error: Kindly enter an name";
    }
    this.name = newName;
  }

  setAttrs(obj, ele) {
    // assign attributes e.g. el.setAttributeNS(null,'fill','red');
    if (obj.attrs) {
      // assign attributes
      for (let key of Object.keys(obj.attrs)) {
        // grab the value of this attribute
        let value = obj.attrs[key];

        // convert attribute key from camel case to dash syntax
        if (key != key.toLowerCase() && key != "viewBox") {
          key = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        }
        // set the attribute on the element
        ele.setAttributeNS(null, key, value);
      }
    }
  }

  setStyle(obj, ele) {
    if (obj.style) {
      // assign attributes
      for (let key of Object.keys(obj.style)) {
        ele.style[key] = obj.style[key];
      }
    }
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

  /**
   * @param {Object} obj - object literal with element properties
   */
  createSvg(obj) {
    let type = obj.type || "svg";
    let ele = document.createElementNS(this.NS, type);

    if (obj.class) {
      ele.className.baseVal = obj.class;
    }

    this.setAttrs(obj, ele);
    this.setStyle(obj, ele);

    return ele;
  }
}
