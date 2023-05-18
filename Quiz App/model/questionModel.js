const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A question must have a name"],
    unique: true,
  },
  options: {
    type: [String],
    require: [true, "A question must have four options"],
    validate: {
      validator: function (array) {
        return array.length === 4;
      },
      message: "A question must have four options",
    },
  },
  answer: {
    type: String,
    require: [true, "A question must have an answer"],
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
