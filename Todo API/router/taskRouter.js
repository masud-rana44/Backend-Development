const express = require('express');
const taskController = require('../controller/taskController');

const router = express.Router();

router.route('/').get(taskController.getTasks).post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
