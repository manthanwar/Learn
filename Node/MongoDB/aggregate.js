var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("ami-angeliq");

  dbo
    .collection("orders")
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "orderdetails",
        },
      },
      { $match: { _id: 2 } },
    ])
    .toArray(function (err, res) {
      if (err) throw err;
      //   console.log(JSON.stringify(res, 0, 2));

      console.log(JSON.stringify(res, ["_id", "orderdetails", "name"], 1));

      //   console.log(res);

      db.close();
    });
});
