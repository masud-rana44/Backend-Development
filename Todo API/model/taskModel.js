const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'A task must need some text.'],
    },
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: [true, 'Task must belong to a user!'],
    // },
  },
  {
    useCreateIndex: true,
    useFindAndModify: true,
  }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
