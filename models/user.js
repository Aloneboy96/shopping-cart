var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userScheme = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

userScheme.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userScheme.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', userScheme);
exports.User = User;