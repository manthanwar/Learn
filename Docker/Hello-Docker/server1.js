let express = require("express");
let path = require("path");
let fs = require("fs");
let MongoClient = require("mongodb").MongoClient;
let MongoServer = require("mongodb").Server;


let bodyParser = require("body-parser");
let app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.get("/profile-picture", function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, { "Content-Type": "image/jpg" });
  res.end(img, "binary");
});

// use when starting application locally
let mongoUrlLocal = "mongodb://mongoadmin:mongopassword@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://mongoadmin:mongopassword@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "user-account";

app.post("/update-profile", function (req, res) {
  let userObj = req.body;

console.log('uuppppdate me -- ' + userObj);

console.log("uuppppdate me -- " + JSON.stringify(userObj));

//   MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
 
  MongoClient.connect("mongodb://mongoadmin:mongopassword@localhost:27017", function (err, client) {
 
    if (err) throw err;

    console.log("connected for updated successfyyyly");
      
    let db = client.db(databaseName);

    userObj["userid"] = 1;

    let myquery = { userid: 1 };
    let newvalues = { $set: userObj };

    db.collection("users").updateOne(myquery, newvalues, { upsert: true }, function (err, res) {
      if (err) throw err;

      console.log('updated successfyyyly');

      client.close();
    });
  });
  // Send response
  res.send(userObj);
});

app.get("/get-profile", function (req, res) {
  console.log("in the get");

  let response = {};
  // Connect to the db
  //   MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
  MongoClient.connect("mongodb://mongoadmin:mongopassword@localhost:27017", function (err, client) {
    if (err) throw err;

    console.log("connected to client ---");

    let db = client.db(databaseName);

    let myquery = { userid: 1 };

    db.collection("users").findOne(myquery, function (err, result) {
      if (err) throw err;
      response = result;
      client.close();

      // Send response
      res.send(response ? response : {});
    });
  });
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
  console.log("http://localhost:3000");
});
