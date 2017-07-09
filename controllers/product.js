var productModel = require('../models/product');

exports.displayProductList = function (req, res, next) {
    productModel.getProducts(function (products) {
        var productsChunk = [];
        var chunkSize = 3;

        for (i = 0; i < products.length; i += chunkSize)
            productsChunk.push(products.slice(i, i + chunkSize));

        res.render('shop/index', {
            title: 'Products List',
            products: productsChunk
        });
    });
}