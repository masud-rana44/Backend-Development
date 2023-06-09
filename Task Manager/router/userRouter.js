const express = require('express');
const authController = require('../controller/authController');
// const userController = require('../controller/userController')

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

module.exports = router;
