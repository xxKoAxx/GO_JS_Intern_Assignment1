const express = require('express');
var router = express.Router();

const siteController = require('../controller/siteController');

router.get('/', siteController.index);

module.exports = router;
