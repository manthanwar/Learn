var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, conn) {
  if (err) throw err;
  var db = conn.db("ami-angeliq");
  db.collection("world-alp2")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      conn.close();
    });
});
