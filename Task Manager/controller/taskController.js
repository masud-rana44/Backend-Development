const Task = require('../model/taskModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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

  if (!task) return next(new AppError('No task found with this id', 404));

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
  const task = await Task.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) return next(new AppError('No task found with this id', 404));

  res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const taskId = req.params.id;

  const task = await Task.findOneAndDelete(taskId);
  if (!task) return next(new AppError('No task found with this id', 404));

  res.status(204).json({
    status: 'deleted',
    message: null,
  });
});
