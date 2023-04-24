const Task = require('../model/taskModel');
const catchAsync = require('../utils/catchAsync');

exports.getTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.find();

  res.status(200).json({
    status: 'success',
    length: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findById(taskId);

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.createTask = catchAsync(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const taskId = req.params.id;
  await Task.findOneAndDelete(taskId);

  res.status(204).json({
    status: 'deleted',
    message: null,
  });
});
