var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');
var cartController = require('../controllers/cart');

/* GET home page. */
router.get('/', productController.displayProductList);
router.post('/add-to-cart', cartController.addProductToCart);
router.post('/reduce-by-one', cartController.reduceByOne);
router.post('/remove-all', cartController.removeAll);
router.get('/shopping-cart', cartController.displayCart);

module.exports = router;
