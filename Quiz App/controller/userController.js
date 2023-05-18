const User = require("../model/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      data: {
        users,
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

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user,
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

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!user) throw new Error("User not found with this ID.");

    res.status(200).json({
      status: "success",
      data: {
        user,
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

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) throw new Error("User not found with this ID.");

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
