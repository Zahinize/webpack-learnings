const express = require('express');
const router = express.Router();
const indexController = require('./indexController');

// API Controllers
// router.use('/user', userController);
// router.use('/proxy', proxyController);
router.use('/', indexController);

module.exports = router;
