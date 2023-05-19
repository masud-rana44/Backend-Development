const express = require("express");

const viewsController = require("../controller/viewsController");

const Router = express.Router();

Router.route("/").get(viewsController.getHomePage);

module.exports = Router;
