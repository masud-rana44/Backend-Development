const express = require('express');
const taskController = require('../controller/taskController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/').get(taskController.getTasks).post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
