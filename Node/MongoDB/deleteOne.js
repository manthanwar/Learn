var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, conn) {
  if (err) throw err;
  var db = conn.db("ami-angeliq");
  var cl = "world-alp2";

  const qr = { name: /^in/i };

  db.collection(cl).deleteOne(qr, function (err, res) {
    if (err) throw err;

    console.log("1 document deleted");
    console.log(res);

    conn.close();
  });
});
