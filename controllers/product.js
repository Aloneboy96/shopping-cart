var Product = require('../models/product').Product;

exports.displayProductList = function (req, res, next) {
    Product.find(function (err, products) {
        if (err)
            products = [];

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