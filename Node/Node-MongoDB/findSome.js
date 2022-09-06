var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, conn) {
  if (err) throw err;

  var db = conn.db("ami-angeliq");

  // var qr = {name:/stan$/i};
  var qr = { name: /^a/i };

  db.collection("world-alp2")
    .find(qr, { projection: { _id: 0, name: 1 } })
    .limit(65)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      conn.close();
    });
});
