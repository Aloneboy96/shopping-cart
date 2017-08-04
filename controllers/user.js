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

exports.displaySignIn = function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', {
        csrfToken: req.csrfToken(),
        messages: messages
    });
}

exports.signIn = passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
})

exports.displayProfile = function (req, res, next) {
    res.render('user/profile', {
        title: 'Profile'
    })
}

exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

exports.notLoggedIn = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

exports.directLogIn = function (req, res, next) {
    next();
}

exports.logOut = function (req, res, next) {
    req.logout();
    res.redirect('/');
}