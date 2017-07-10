var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var csrf = require('csurf');
var csrfProtection = csrf();

router.use(csrfProtection);
router.get('/signup', userController.displaySignUp);
router.post('/signup', userController.signUp);

module.exports = router;