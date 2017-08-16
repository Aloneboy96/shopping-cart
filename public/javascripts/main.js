function addProductToCart(id) {
    var params = { id: id }

    $.get('/add-to-cart', params, function (data) {
        $('#cart-info').html(data);
    });

    return false;
}