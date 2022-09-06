var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, conn) {
  if (err) throw err;
  var db = conn.db("ami-angeliq");
  var cl = "world-alp2";

  const qr = { name: /^b/i };

  db.collection(cl).deleteMany(qr, function (err, res) {
    if (err) throw err;

    console.log(res.deletedCount + " document(s) deleted");
    console.log(res);

    conn.close();
  });
});
