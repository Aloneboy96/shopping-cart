var passport = require('passport');

exports.displaySignUp = function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', {
        csrfToken: req.csrfToken(),
        messages: messages
    });
}

exports.signUp = passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
})

exports.displayProfile = function (req, res, next) {
    res.render('user/profile', {
        title: 'Profile'
    })
}