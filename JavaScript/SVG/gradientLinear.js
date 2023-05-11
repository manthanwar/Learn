/**
 * Linear gradients with SVG in JavaScript
 * Published on 28 May 2015
 * Last updated on 6 November 2022
 */

// Store the SVG namespace for easy reuse.
const svgns = "http://www.w3.org/2000/svg";

/**
 * Create `<svg>,` `<defs>,` `<linearGradient>` and `<rect>` elements, using
 * `createElementNS` to apply the SVG namespace:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
 */
const svg = document.createElementNS(svgns, "svg");
const defs = document.createElementNS(svgns, "defs");
const gradient = document.createElementNS(svgns, "linearGradient");
const rect = document.createElementNS(svgns, "rect");

// Store an array of stop information for the `<linearGradient>`.
const stops = [
  {
    color: "#0C0C7A",
    offset: "0%",
  },
  {
    color: "#5A93FC",
    offset: "100%",
  },
];

/**
 * Parse the array of stop information and append a `<stop>` element for each
 * stop to `<linearGradient>`.
 */
stops.forEach((stop) => {
  const el = document.createElementNS(svgns, "stop");
  el.setAttribute("offset", stop.offset);
  el.setAttribute("stop-color", stop.color);

  // Add the `<stop>` element to `<linearGradient>`.
  gradient.appendChild(el);
});

/**
 * Apply the `<linearGradient>` to `<defs>`. The `x1`, `x2`, `y1` and `y2`
 * attributes define the staring and ending points, respectively, of the
 * gradient, e.g.:
 *
 * Will create a gradient moving from left to right
 * { x1: 0, x2: 1, y1: 0, y2: 0}
 *
 * Will create a gradient moving from top to bottom
 * { x1: 0, x2: 0, y1: 1, y2: 0}
 *
 * Will create a gradient moving from top left to bottom right.
 * { x1: 0, x2: 1, y1: 0, y2: 1}
 */
gradient.id = "Gradient";
gradient.setAttribute("x1", "0");
gradient.setAttribute("x2", "1");
gradient.setAttribute("y1", "0");
gradient.setAttribute("y2", "1");
defs.appendChild(gradient);

// Set up the `<rect>` element.
rect.setAttribute("fill", "url(#Gradient)");
rect.setAttribute("width", "100%");
rect.setAttribute("height", "100%");

// Assign a width and height to the `<svg>` element so that it is visible.
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");

// Add the `<defs>` and `<rect>` elements to `<svg>` for the gradient to render.
svg.appendChild(defs);
svg.appendChild(rect);

// Add the `<svg>` element to `<body>`.
document.body.appendChild(svg);
