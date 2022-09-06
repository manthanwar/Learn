var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, conn) {
  if (err) throw err;

  const db = conn.db("ami-angeliq");
  const cl = "world-alp2";

  //   db.dropCollection(cl, function (err, res) {

  db.collection(cl).drop(function (err, res) {
    if (err) throw err;

    if (res) console.log("Collection deleted");
    console.log(res);

    conn.close();
  });
});
