const path = require("path");
const cookieParser = require("cookie-parser");
const express = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");

const app = express();
const port = process.env.PORT || 5000;

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

console.log(`APP PATH ==> ${__dirname}`);

app.use("/", express.static(path.join(__dirname, "public")));

// Register `hbs` as our view engine using its bound `engine()` function.

const hbs = exphbs.create({
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  defaultLayout: "main",
  extname: ".hbs",

  // Create Custom Healpers
  helpers: {
    calculation: function (value) {
      return value * 10;
    },
    list: function (value, options) {
      let out = "<ul>";
      for (let i = 0; i < value.length; i++) {
        out = out + "<li>" + options.fn(value[i]) + "</li>";
      }
      return out + "</ul>";
    },
  },
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// app.get("/", (req, res) => {
//   res.send("Successful response. Yay.");
// });

app.get("/", function (req, res) {
  res.render("home", {
    title: "Home Page",
    area: "Health",
    areaLink: "/health",
  });
});

app.listen(5000, () =>
  console.log(
    "Example app is listening on port 5000\n go to http://localhost:5000."
  )
);
