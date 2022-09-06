var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, connect) {
  if (err) throw err;
  var db = connect.db("ami-angeliq");
  var ob = { name: "India", apl2: "in" };
  db.collection("world-in").insertOne(ob, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    connect.close();
  });
}); 