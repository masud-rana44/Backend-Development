const Question = require("../model/questionModel");

exports.getAllQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();

    res.status(200).json({
      status: "success",
      data: {
        questions,
      },
    });
  } catch (err) {
    console.log(`💥 ${err}`);
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createQuestion = async (req, res, next) => {
  try {
    const question = await Question.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        question,
      },
    });
  } catch (err) {
    console.log(`💥 ${err}`);
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateQuestion = async (req, res, next) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!question) throw new Error("Question not found with this ID.");

    res.status(200).json({
      status: "success",
      data: {
        question,
      },
    });
  } catch (err) {
    console.log(`💥 ${err}`);
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteQuestion = async (req, res, next) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) throw new Error("Question not found with this ID.");

    res.status(204).json({
      status: "deleted",
      message: null,
    });
  } catch (err) {
    console.log(`💥 ${err}`);
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
