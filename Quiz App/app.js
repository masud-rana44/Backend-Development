const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE
// allowing json data read & write
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const questionRouter = require("./router/questionRouter");
const userRouter = require("./router/userRouter");
const viewsRouter = require("./router/viewsRouter");

app.use("/", viewsRouter);
app.use("/api/v1/question", questionRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
