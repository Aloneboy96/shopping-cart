var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});

exports.model = mongoose.model('Product', productSchema);