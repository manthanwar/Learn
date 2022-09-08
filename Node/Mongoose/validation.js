const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Must be at least 6, got {VALUE}"],
    max: 12,
  },
  drink: {
    type: String,
    enum: {
      values: ["Coffee", "Tea"],
      message: "{VALUE} is not supported",
    },
  },
});
const Breakfast = db.model("Breakfast", breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  drink: "Milk",
});
const error = badBreakfast.validateSync();
assert.equal(error.errors["eggs"].message, "Must be at least 6, got 2");
assert.equal(error.errors["drink"].message, "Milk is not supported");
