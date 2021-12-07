const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.use('/', productController.index);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
router.use('/productDetail', productController.productDetail);

router.use('/createProduct',productController.createProduct);

router.use('/productCart', productController.productCart)
module.exports = router
