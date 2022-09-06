var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, conn) {
  if (err) throw err;
  var db = conn.db("ami-angeliq");
  var cl = "world-alp2";

  const qr = { name: /^a/i };
  const nv = { $set: { name: "India-Bharat" } };

  db.collection(cl).updateMany(qr, nv, function (err, res) {
    if (err) throw err;

    console.log(res.modifiedCount + " number of document(s) updated");
    console.log(res);

    conn.close();
  });
});
