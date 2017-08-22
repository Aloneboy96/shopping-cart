var Cart = require('../models/cart').Cart;
var Product = require('../models/product').Product;

exports.addProductToCart = function (req, res, next) {
    var productId = req.body.id;
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

exports.reduceByOne = function (req, res, next) {
    var productId = req.body.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var check = cart.reduce(productId);

    req.session.cart = cart;

    console.log(req.session.cart);

    if (check == 0) {
        res.send({
            totalQuantity: 0
        });
    }
    else if (check == 1) {
        res.send({
            quantity: 0,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice
        });
    }
    else {
        res.send({
            quantity: cart.items[productId].quantity,
            price: cart.items[productId].price,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice
        });
    }
}

exports.removeAll = function (req, res, next) {
    var productId = req.body.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    var check = cart.remove(productId);

    req.session.cart = cart;
    if (check) {
        res.send({
            quantity: 0,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice
        });
    }
    else {
        res.send({
            totalQuantity: 0
        });
    }
}