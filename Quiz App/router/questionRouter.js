const express = require("express");
const questionController = require("../controller/questionController");

const Router = express.Router();

Router.route("/")
  .get(questionController.getAllQuestions)
  .post(questionController.createQuestion);

Router.route("/:id")
  .patch(questionController.updateQuestion)
  .delete(questionController.deleteQuestion);

module.exports = Router;
