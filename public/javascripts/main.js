function addProductToCart(id) {
    var params = { id: id }
    
    $.get('/add-to-cart', params, function (data) {

        console.log('return: ' + data);

    });

    return false;
}