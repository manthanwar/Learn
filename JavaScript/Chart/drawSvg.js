import * as imp from "./drawSvgClass.js";

window.addEventListener("load", onLoad);

function onLoad() {
  // drawSvgManual("svgContainerId");

  drawSvgAuto("svgContainerAutoId");

  // let aa = new imp.Rectangle(10, 10);
  // document.getElementsByTagName("h1")[0].innerHTML += " " + aa.area();

  // createEle();
}

function createEle() {
  let sectionObj = {
    type: "section",
    id: "sectionId",
    className: "sectionClass",
    innerHTML: "<p>This is a section</p>",
    attrs: {
      dataFoo: "bar",
      dataBaz: "garply",
      onclick: "changeColor(this);",
      onmouseover: "showDetails(this)",
    },
  };

  let ele = document.getElementById("sectionContainer");
  let dom = new imp.Chart("ami", "ddd");

  let section = dom.createElement(sectionObj);

  ele.appendChild(section);

  dom.setName("AA");
}

function drawSvgManual(svgContainerId) {
  let svgContainer = document.getElementById(svgContainerId);
  svgContainer.style.width = "400px";
  svgContainer.style.height = "400px";
  svgContainer.style.padding = "10px";
  svgContainer.style.backgroundColor = "green";

  let svg = document.getElementById("svg");

  //   svg.setAttribute(
  //     "style",
  //     "width:300; height:300;fill:red;viewport-fill:red;viewBox:0 0 300 100;background-color:red;"
  //   );

  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.style.backgroundColor = "pink";

  svg.innerHTML =
    '<rect x="10" y="10" width="80" height="80" fill="none" stroke="black" stroke-width="1"/>';
}

function createCircle() {
  let circle = dom_utils.createSVG({
    type: "circle",
    class: "great-circle",
    attrs: {
      id: "myCircle",
      cx: "25",
      cy: "25",
      r: "20",
      stroke: "#004369",
      fill: "#DB1F48",
      strokeWidth: 3,
      dataFoo: "bar",
    },
  });
  svg.appendChild(circle);
}

function drawSvgAuto(svgContainerId) {
  let svgContainer = document.getElementById(svgContainerId);
  svgContainer.style.width = "450px";
  svgContainer.style.height = "300px";
  svgContainer.style.padding = "0px";
  svgContainer.style.backgroundColor = "white";

  let svgObj = {
    type: "svg",
    className: "svg-class",
    attrs: {
      id: "myCircle",
      width: "100%",
      height: "100%",
      viewBox: "0 0 150 100",
      stroke: "#004369",
      strokeWidth: 3,
      dataFoo: "bar",
    },
    style: {
      backgroundColor: "pink",
    },
  };

  // let circleObj = {
  //   type: "circle",
  //   class: "great-circle",
  //   attrs: {
  //     id: "myCircle",
  //     cx: "25",
  //     cy: "25",
  //     r: "20",
  //     stroke: "#004369",
  //     fill: "#DB1F48",
  //     strokeWidth: 3,
  //     dataFoo: "bar",
  //   },
  // };

  // define colors
  let color = {
    Red: "#FF671F ",
    Green: "#046A38",
    Blue: "#06038D",
    White: "#ffffff",
  };

  let dom = new imp.Chart("ami", "ddd");
  let svg = dom.createSvg(svgObj);

  let rectObjRed = {
    type: "rect",
    attrs: {
      x: "0",
      y: "0",
      width: "900",
      height: "33.3333",
      fill: color.Red,
      stroke: "none",
      strokeWidth: 0,
    },
  };

  let rectRed = dom.createSvg(rectObjRed);
  svg.appendChild(rectRed);

  let rectObjWhite = {
    type: "rect",
    attrs: {
      x: 0,
      y: 33.3333,
      width: 900,
      height: 33.3333,
      fill: color.White,
      stroke: "none",
      strokeWidth: 0,
    },
  };

  let rectWhite = dom.createSvg(rectObjWhite);
  svg.appendChild(rectWhite);

  let rectObjGreen = {
    type: "rect",
    attrs: {
      x: 0,
      y: 66.6666,
      width: "900",
      height: "33.3333",
      fill: color.Green,
      stroke: "none",
      strokeWidth: 0,
    },
  };

  let rectGreen = dom.createSvg(rectObjGreen);
  svg.appendChild(rectGreen);

  let gObj = {
    type: "g",
    attrs: {
      // transform: `translate(58.3333 33.3333) scale(0.3333)`,
      transform: `translate(60 35) scale(0.3)`,
    },
  };

  // let gObj = { type: "g" };
  // gObj.attrs = { transform: `translate(0 0) scale(1)` };

  // drawGrid(svg, dom);

  let g = dom.createSvg(gObj);

  drawAshokChakra(g, dom, color);

  svg.appendChild(g);

  // let cir = dom.createSvg(circleObj);

  // svg.style.backgroundColor = "pink";
  svgContainer.appendChild(svg);
}

function drawGrid(svg, dom) {
  let majorDx = 10;
  let majorDy = 10;
  let minorDx = 10;
  let minorDy = 10;
  let xMax = 150;
  let yMax = 100;

  for (let i = 0; i < yMax / minorDy; i++) {
    let minorX = {
      type: "line",
      class: "minorX",
      attrs: {
        x1: 0,
        y1: i * minorDy,
        x2: xMax,
        y2: i * minorDy,
        stroke: "gray",
        strokeWidth: 0.4,
      },
    };

    svg.appendChild(dom.createSvg(minorX));
  }

  for (let i = 0; i < xMax / minorDx; i++) {
    let minorY = {
      type: "line",
      class: "minorY",
      attrs: {
        x1: i * minorDx,
        y1: 0,
        x2: i * minorDx,
        y2: xMax,
        stroke: "gray",
        strokeWidth: 0.4,
      },
    };

    svg.appendChild(dom.createSvg(minorY));
  }

  for (let i = 0; i < 11 + 4; i++) {
    let majorY = {
      type: "line",
      class: "majorY",
      attrs: {
        x1: i * majorDx,
        y1: 0,
        x2: i * majorDx,
        y2: yMax,
        stroke: "gray",
        strokeWidth: 0.5,
      },
    };

    let majorX = {
      type: "line",
      class: "majorX",
      attrs: {
        x1: 0,
        y1: i * majorDy,
        x2: xMax,
        y2: i * majorDy,
        stroke: "gray",
        strokeWidth: 0.5,
      },
    };

    svg.appendChild(dom.createSvg(majorY));
    svg.appendChild(dom.createSvg(majorX));
  }
}

function drawAshokChakra(svg, dom, color) {
  // circles outer ring
  let circleObjRing = {
    type: "circle",
    class: "aaa",
    attrs: {
      cx: "0",
      cy: "0",
      r: "46",
      fill: "none",
      stroke: color.Blue,
      strokeWidth: 8,
      transform: `translate(50 50) scale(1)`,
    },
  };

  let circRing = dom.createSvg(circleObjRing);
  svg.appendChild(circRing);

  // circle inner
  let circleObjInner = {
    type: "circle",
    class: "aaa",
    attrs: {
      cx: "0",
      cy: "0",
      r: "9",
      fill: color.Blue,
      stroke: color.Blue,
      strokeWidth: 0,
      transform: `translate(50 50) scale(1)`,
    },
  };

  let circInner = dom.createSvg(circleObjInner);
  svg.appendChild(circInner);

  for (let i = 0; i < 24; i++) {
    // Spokes
    let polygonObj = {
      type: "polygon",
      attrs: {
        points: "0 0 20 -2 50 0 20 2",
        fill: color.Blue,
        stroke: color.Blue,
        strokeWidth: 0,
        transform: `translate(50 50) rotate(${i * 15}) scale(0.85)`,
      },
    };

    let pol = dom.createSvg(polygonObj);
    svg.appendChild(pol);

    // small circles
    let circleObj = {
      type: "circle",
      attrs: {
        cx: "50",
        cy: "0",
        r: "3",
        fill: color.Blue,
        stroke: "black",
        strokeWidth: 0,
        transform: `translate(50 50) rotate(${i * 15 + 7.5}) scale(0.85)`,
      },
    };

    let circ = dom.createSvg(circleObj);
    svg.appendChild(circ);
  }
}
