const express = require('express');
const loginController = require('../controllers/loginController.js');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js')
const productCartController = require('../controllers/productCartController.js')
const registerController = require('../controllers/registerController.js')
const productDetailController = require('../controllers/productDetailController')

router.get('/',mainControllers.index) 


router.get('/login',loginController.login)


router.get('/productCart', productCartController.productCart)

router.get('/register', registerController.register)



router.get('/productDetail',productDetailController.productDetail )

router.get('/createProduct', (req, res) => {
    res.sendFile(__dirname + '/views/createProduct.html');
})



module.exports = router;