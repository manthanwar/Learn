const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ami-learn");

const { Schema } = mongoose;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Person" },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

const Story = mongoose.model("Story", storySchema);
const Person = mongoose.model("Person", personSchema);

const author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: "Ian Fleming11221",
  age: 50,
});

author.save(function (err) {
  if (err) return handleError(err);

  console.log("author saved");
});

const story1 = new Story({
  title: "Casino Royale",
  author: author._id, // assign the _id from the person
});

story1.save(function (err) {
  if (err) return handleError(err);
  // that's it!
  console.log("story saved");
});

function handleError(err) {
  console.log("error occured" + err.message);
}

Story.findOne({ title: "Casino Royale" })
  .populate("author")
  .exec(function (err, story) {
    if (err) return handleError(err);
    console.log("The author is %s", story1.author.name);
    // prints "The author is Ian Fleming"
  });
