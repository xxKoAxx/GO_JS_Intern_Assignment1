const express = require('express');
var router = express.Router();

const apiController = require('../controller/apiController');

router.get('/v1/products/:id', apiController.getProductById);
router.get('/v1/products', apiController.getAllProduct);

router.post('/v1/products', apiController.createNewProduct);

router.put('/v1/products/:id', apiController.changeInId);

router.delete('/v1/products/:id', apiController.deleteId);

module.exports = router;
