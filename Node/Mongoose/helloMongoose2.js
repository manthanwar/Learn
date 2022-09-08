const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ami-learn");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled

  const catSchema = new mongoose.Schema({ name: String });

  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  catSchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Cat = mongoose.model("Cat", catSchema);

  const kitty = new Cat({ name: "Zildjian" });
  await kitty.save();

  const bitty = new Cat({ name: "Bildjian" });
  await bitty.save();

  kitty.speak();
  console.log("meow");

  const kittens = await Cat.find({ name: /^z/i }).count();
  console.log(kittens);
}
