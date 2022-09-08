//import mongoose from "mongoose";

const mongoose = require("mongoose");

mongoose.connection.on("error", (err) => {
  logError(err);
});

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

blogSchema.add({
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 65 },
  address: {
    street: "string",
    country: "string",
  },
  nested: {
    stuff: { type: String, lowercase: true, trim: true },
  },
});

//bigSchema.add({author:{ name: String, address: String, age: Number }});

blogSchema.method("notify", function () {
  console.log("send notification from " + this.author);
});

const Blog = mongoose.model("Blog", blogSchema);

const art = new Blog({ title: "art blog", author: "amit", body: "long blog" });
art.notify();

art.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

Blog.insertMany([{ size: "small" }], function (err) {});

Blog.find({ size: "small" }).where("createdDate").gt(oneYearAgo).exec(callback);

Blog.deleteOne({ size: "large" }, function (err) {
  if (err) return handleError(err);
  // deleted at most one tank document
});

Blog.updateOne({ size: "large" }, { name: "T-90" }, function (err, res) {
  // Updated at most one doc, `res.nModified` contains the number
  // of docs that MongoDB updated
});

const doc = await MyModel.findOne();

// Sets `name` and unsets all other properties
await Person.replaceOne({ _id }, { name: "Jean-Luc Picard" });

// Using query builder
Person.find({ occupation: /host/ })
  .where("name.last")
  .equals("Ghost")
  .where("age")
  .gt(17)
  .lt(66)
  .where("likes")
  .in(["vaporizing", "talking"])
  .limit(10)
  .sort("-occupation")
  .select("name occupation")
  .exec(callback);

const callback = function (err, person) {
  if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host."
  console.log(
    "%s %s is a %s.",
    person.name.first,
    person.name.last,
    person.occupation
  );
};

//

const userSchema = new Schema({
  name: "string",
  email: { type: String, required: true, unique: true },
  address: "string",
  age: "number",

  registeredAt: { type: Date, index: true },
});
