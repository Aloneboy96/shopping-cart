var Cart = require('../models/cart').Cart;
var Product = require('../models/product').Product;

exports.addProductToCart = function (req, res, next) {
    var productId = req.query.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if (err) return;

        cart.add(product, productId);
        req.session.cart = cart;

        console.log(req.session.cart);

        res.send(cart.totalQuantity.toString());
    });
}

exports.displayCart = function (req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/shopping-cart', { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
}