const { Router } = require('express');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')





router.get("/home", userController.login)

module.exports = router