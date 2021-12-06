const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const mainControllers = require('../controllers/mainController')
const productCartController = require('../controllers/productCartController')
const registerController = require('../controllers/registerController')
const productDetailController = require('../controllers/productDetailController')
const createProductController = require('../controllers/createProductController')

router.get('/',mainControllers.index) 

router.get('/login',loginController.login)

router.get('/productCart', productCartController.productCart)

router.get('/register', registerController.register)

router.get('/productDetail',productDetailController.productDetail)

router.get('/createProduct',createProductController.createProduct)



module.exports = router;