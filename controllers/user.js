exports.displaySignUp = function (req, res, next) {
    res.render('user/signup', {
        csrfToken: req.csrfToken()
    });
}

exports.signUp = function (req, res, next) {
    res.redirect('/');
}