const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ami-learn");

const schema = new mongoose.Schema({ name: String });
// Mongoose will call this middleware function, because this script adds
// the middleware to the schema before compiling the model.
schema.pre("save", () => console.log("Hello from pre save"));

schema.post("save", function (doc) {
  console.log("%s has been saved", doc._id);
});

// Compile a model from the schema
const User = mongoose.model("User", schema);

const user = new User({ name: "test" });
user.save();
