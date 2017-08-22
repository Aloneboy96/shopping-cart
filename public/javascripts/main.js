function addProductToCart(id) {
    var params = { id: id }

    $.post('/add-to-cart', params, function (data) {
        $('#cart-info').html(data);
    });

    return false;
}

function reduceCartProductByOne(id) {
    var params = { id: id };

    $.post('/reduce-by-one', params, function (data) {
        //change: item price, item quantity, total price, total quantity
        //if item quantity = 0 --> remove

        if (data.totalQuantity == 0) {
            var txt1 = '<div class="row no-products"><div class="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3"><h2>No Item In Carts</h2></div></div>';

            $('.products').remove();
            $('body').append(txt1);
            $('#cart-info').html('');

            return;
        }
        if (data.quantity == 0)
            $('#' + id).remove();
        else {
            $('#q' + id).html(data.quantity);
            $('#p' + id).html(data.price);
        }
        $('#cart-info').html(data.totalQuantity);
        $('#total-price').html('Total: ' + data.totalPrice);
    });

    return false;
}

function removeItem(id) {
    var params = { id: id };

    $.post('/remove-all', params, function (data) {
        if (data.totalQuantity == 0) {
            var txt1 = '<div class="row no-products"><div class="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3"><h2>No Item In Carts</h2></div></div>';

            $('.products').remove();
            $('body').append(txt1);
            $('#cart-info').html('');

            return;
        }
        $('#' + id).remove();
        $('#cart-info').html(data.totalQuantity);
        $('#total-price').html('Total: ' + data.totalPrice);
    });

    return false;
}