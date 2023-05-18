const express = require("express");

const app = express();

// MIDDLEWARE
// allowing json data read & write
app.use(express.json());

const questionRouter = require("./router/questionRouter");
const userRouter = require("./router/userRouter");

app.get("/", (req, res) => {
  res.send("Hello from the quiz app.");
});

app.use("/api/v1/question", questionRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
