const moongose = require("moongose");

const questionSchema = new moongose.Schema({
  name: {
    type: String,
    required: [true, "A question must have a name"],
  },
  options: {
    type: [String],
    require: [true, "A question mush have some options"],
  },
  answer: {
    type: String,
    require: [true, "A question must have an answer"],
  },
});
