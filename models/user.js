var mongoose = require('mongoose');

var userScheme = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

var User = mongoose.model('User', userScheme);
exports.User = User;