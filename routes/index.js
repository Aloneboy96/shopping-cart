var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');
var cartController = require('../controllers/cart');

/* GET home page. */
router.get('/', productController.displayProductList);
router.get('/add-to-cart', cartController.addProductToCart);

module.exports = router;
