const shoeModel = require('../models/shoeModel');
const path = require('path');
const fs = require('fs')
const { mongooseArray_toObjects, mongooseObject_toObject} = require('../utils/mongoose')


class siteController {
    // GET /api/v1/products
    getAllProduct(req, res, next) {
      shoeModel
        .find()
        .then(shoesData => {
          let shoes = mongooseArray_toObjects(shoesData)
          res.json(shoes)
        })
        .catch((err) => {
          next(err)
          res.status(400).json({error: 'EROOOR'})
        })
    }

    // GET /api/v1/products/:id
    getProductById(req, res, next) {
      shoeModel
        .findOne({id: req.params.id})
        .then(shoeData => {
          let shoe = mongooseObject_toObject(shoeData)
          res.json(shoe)
        })
        .catch((err) => {
          next(err)
          res.status(400).json({error: 'EROOOR'})
        })
    }

    // POST /api/v1/products
    createNewProduct(req, res, next) {
      
    }

    // PUT /api/v1/products/:id
    changeInId(req, res, next) {
      
    }

    // DELETE /api/v1/products/:id
    deleteId(req, res, next) {
      shoeModel
        .deleteOne({id: req.params.id})
        .then(shoeData =>{
          let shoes = mongooseArray_toObjects(shoesData)
          res.json(shoes)
        })
        .catch((err) => {
          next(err)
          res.status(400).json({error: 'EROOOR'})
        })
    }
}

module.exports = new siteController();
