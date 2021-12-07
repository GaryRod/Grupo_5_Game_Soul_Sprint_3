const express = require('express');
const userController = require('../controllers/userCointroller');
const router = express.Router();

const productController = require('../controllers/userCointroller');

router.use('/login',userController.login)

router.use('/register', userController.register)

module.exports = router