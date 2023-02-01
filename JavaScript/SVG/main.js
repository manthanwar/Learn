/**
 * @author Amit M. Manthanwar <manthanwar@hotmail.com>
 * @file <main.js> Draws SVG  art using JavaScript
 * @version 1.0.0
 * @license Restricted
 * @copyright (c) 2023 Amit M. Manthanwar
 * @requires ./main.js
 * @tutorial tutorial-1
 *
 * ===============================================================================
 * File Name    : main.js
 * Description  : Draw SVG  art using JavaScript
 * ------------------------------------------------------------------------------
 * Author       : Amit Manohar Manthanwar
 * Locale       : Warje, Pune, Maharashtra, India
 * Mailer       : manthanwar@hotmail.com
 * Mobile       : +91.853.081.3398
 * WebURL       : https://manthanwar.github.io
 * -------------------------------------------------------------------------------
 * Copyright    : ©2023 Amit Manohar Manthanwar
 * License      : Restricted
 * ===============================================================================
 * -------------+---------+-------------------------------------------------------
 * Revision Log | Author  | Description
 * -------------+---------+-------------------------------------------------------
 * 01-FEb-2023  | AMM     | Initial Version
 * -------------+---------+-------------------------------------------------------
 * -------------+---------+-------------------------------------------------------
 * -------------+---------+-------------------------------------------------------
 * -------------+---------+-------------------------------------------------------
 * ===============================================================================
 */

//@ts-check

"use strict";

const NS = "http://www.w3.org/2000/svg";
const NL = "http://www.w3.org/1999/xlink";

// window.addEventListener("load", function () {
//   welcome();
//   // drawSVG();
//   ashokChakra();
// });

function onloadWelcome() {
  welcome();
  ashokChakra();
}

function welcome() {
  const divSvg = document.getElementById("divSvg");
  // .toLocaleDateString()
  // .toDateString()
  // .toUTCString()
  // .toISOString()
  divSvg.innerHTML = "Hi There World" + " " + new Date().toUTCString();
  divSvg.setAttribute("style", "color:blue;font-weight:bold;");
}

/**
 * @description Draws a svg line
 * @author Amit M. Manthanwar <manthanwar@hotmail.com>
 * @function drawLine
 * @param {number} x1 - x1 coordinate
 * @param {number} y1 - y1 coordinate
 * @param {number} x1 - x2 coordinate
 * @param {number} y1 - y2 coordinate
 * @returns {undefined}
 */
function drawLine(x1, y1, x2, y2) {
  let line = document.createElementNS(NS, "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  // line.setAttribute("style", "stroke:red;stroke-width:1");
  // line.classList.add("gridMinor");
  // line.setAttribute("id", "gridMinor");
  return line;
}

function drawGrid(svg) {
  // minor x
  for (let i = 0; i < 5 * 10; i++) {
    let line = drawLine(0, i * 2, 100, i * 2);
    line.classList.add("gridMinor");
    svg.appendChild(line);
  }

  // major x
  for (let i = 0; i < 11; i++) {
    let line = drawLine(0, i * 10, 100, i * 10);
    line.classList.add("gridMajor");
    svg.appendChild(line);
  }

  // minor y
  for (let i = 0; i < 5 * 10; i++) {
    let line = drawLine(i * 2, 0, i * 2, 100);
    line.classList.add("gridMinor");
    svg.appendChild(line);
  }

  // major y
  for (let i = 0; i < 11; i++) {
    let line = drawLine(i * 10, 0, i * 10, 100);
    line.classList.add("gridMajor");
    svg.appendChild(line);
  }
}

/**
 * @param
 */
function drawGridBox(svg, x, y, width, height) {
  let rect = document.createElementNS(NS, "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", "none");
  rect.setAttribute("stroke", "#AAA");
  rect.setAttribute("stroke-width", "1");
  svg.appendChild(rect);
}

function ashokChakra() {
  const svgMain = document.getElementById("svgMain");
  svgMain.setAttribute("style", "background-color:white;");

  let svg = document.createElementNS(NS, "svg");

  svg.setAttribute("width", "100");
  svg.setAttribute("height", "100");

  // let defs = document.createElementNS(NS, "defs");
  // defs.appendChild(line);
  // svg.appendChild(defs);
  // let use = document.createElementNS(NS, "use");
  // use.setAttributeNS(NL, "href", "#gridMinor");
  // svg.appendChild(use);

  // let line = drawLine(0, 0, 0, 100);
  // svg.appendChild(line);

  drawGridBox(svg, 0, 0, 100, 100);
  drawGrid(svg);

  let scaleValWidth = svgMain.clientWidth / 100;
  let scaleValHeight = svgMain.clientHeight / 100;
  let scaleVal = "scale(" + scaleValWidth + "," + scaleValHeight + ")";
  // alert(svgMain.clientWidth);
  // scaleVal = 3;
  // alert(scaleVal);

  svg.setAttribute("transform", scaleVal);

  svgMain.appendChild(svg);

  // let polygon = document.createElementNS(NS, "polygon");
  // polygon.setAttribute("cx", "100");
  // polygon.setAttribute("cy", "100");
  // polygon.setAttribute("r", "100");
  // polygon.setAttribute("fill", "blue");
}

function drawSVG() {
  const svgMain = document.getElementById("svgMain");
  svgMain.setAttribute("style", "background-color:green;");

  let svg = document.createElementNS(NS, "svg");

  svg.setAttribute("width", "100%");
  // svg.setAttribute('height', '200');
  // svg.setAttribute('viewBox', '0 0 200 200');
  // svg.setAttribute('viewBox', '0 0 300 200');

  // svg.setAttribute('fill', 'green');
  // svg.setAttribute('stroke', 'black');

  //   iconSvg.classList.add('post-icon');

  let element = document.createElementNS(NS, "circle");

  element.setAttribute("cx", "100");
  element.setAttribute("cy", "100");
  element.setAttribute("r", "100");
  element.setAttribute("fill", "blue");

  var elementT = document.createElementNS(NS, "text");
  elementT.setAttributeNS(null, "x", 5);
  elementT.setAttributeNS(null, "y", 35);
  elementT.setAttributeNS(
    null,
    "style",
    " font: bold 30px sans-serif; fill:yellow;"
  );

  var txt = document.createTextNode("Hello World");
  elementT.appendChild(txt);

  svg.appendChild(element);
  svg.appendChild(elementT);

  var svgMainWidth = document.getElementById("svgMain").clientWidth;
  // alert(svgMainWidth);

  console.log(svgMainWidth);

  var scaleVal = svgMainWidth / 200;

  svg.setAttribute("transform", "scale(" + scaleVal + ")");

  svgMain.appendChild(svg);
}

// // Create an element within the svg - namespace (NS)

// const NS = 'http://www.w3.org/2000/svg';
// const iconSvg = document.createElementNS(NS, 'svg');
// iconSvg.setAttribute('fill', 'none');
// iconSvg.setAttribute('viewBox', '0 0 24 24');
// iconSvg.setAttribute('stroke', 'black');
// iconSvg.classList.add('post-icon');

// iconPath.setAttribute(
//   'd',
//   'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
// );
// iconPath.setAttribute('stroke-linecap', 'round');
// iconPath.setAttribute('stroke-linejoin', 'round');
// iconPath.setAttribute('stroke-width', '2');

// iconSvg.appendChild(iconPath);

// const divSvg = document.getElementById('divSvg');

// divSvg.appendChild(iconSvg);
