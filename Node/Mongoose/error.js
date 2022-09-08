const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ami-learn");

const schema = new mongoose.Schema({
  name: {
    type: String,
    // Will trigger a MongoServerError with code 11000 when
    // you save a duplicate
    unique: true,
  },
});

// Handler **must** take 3 parameters: the error that occurred, the document
// in question, and the `next()` function
schema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("There was a duplicate key error"));
  } else {
    next();
  }
});

// Compile a model from the schema
const Person = mongoose.model("Person", schema);

// Will trigger the `post('save')` error handler
Person.create([{ name: "Axl sss" }, { name: "Axl sssawq" }]);
