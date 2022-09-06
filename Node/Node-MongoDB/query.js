var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, conn) {
  if (err) throw err;
  var db = conn.db("ami-angeliq");
  var cl = "world-alp2";

  //   var qr = { name: /stan$/i };
  const qr = { name: /^i/i };
  const pr = { projection: { _id: 0, name: 1, code: 1 } };
  const sr = { name: 1, code: -1 };

  db.collection(cl)
    .find(qr, pr)
    .sort(sr)
    .limit(1000)
    .toArray(function (err, res) {
      if (err) throw err;

      console.log(res);
      console.log(res.length);

      conn.close();
    });
});
